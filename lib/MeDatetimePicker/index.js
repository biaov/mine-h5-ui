import { ref, computed, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createVNode, Transition, withCtx, createElementVNode, renderList, withModifiers, normalizeStyle, toDisplayString } from 'vue';

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const IsLeapyear = (num) => {
    if (!IsType('Number', num)) {
        throw new Error(`${num} is not number`);
    }
    return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};

const useHandMove = (props) => {
    const max = props.maxDate.getFullYear();
    const min = props.minDate.getFullYear();
    const listData = ref([
        {
            id: 1,
            list: Array.from({ length: max - min + 1 }, (k, v) => min + v)
        },
        {
            id: 2,
            list: 12
        },
        {
            id: 3,
            list: 31
        },
        {
            id: 4,
            list: 24
        },
        {
            id: 5,
            list: 60
        }
    ]);
    const typeIds = {
        'year-month': [1, 2],
        'month-day': [2, 3],
        time: [4, 5],
        datetime: [1, 2, 3, 4, 5]
    };
    const ids = typeIds[props.type] ?? [1, 2, 3];
    const show = ref(ids);
    const lenObj = { length: ids.length };
    const distance = ref(Array.from(lenObj, () => 88));
    const currentValue = Array.from(lenObj);
    ids.forEach((elem, i) => {
        const { list } = listData.value[elem - 1];
        currentValue[i] = typeof list === 'number' ? +!(i === 3 || i === 4) : list[0];
    });
    let startY = 0;
    let startDistence = 0;
    let startTime = 0;
    const duration = ref(0);
    const filterNumber = computed(() => (num) => num < 10 ? `0${num}` : num);
    const openTransition = (time) => {
        duration.value = time;
        setTimeout(() => {
            duration.value = 0;
        }, time);
    };
    const setDateDist = (i) => {
        const index = show.value.indexOf(i);
        let oldDist = distance.value[index];
        const len = listData.value[2].list - 1;
        if (oldDist > 88) {
            oldDist = 88;
        }
        else if (oldDist < 88 - len * 44) {
            oldDist = 88 - len * 44;
        }
        distance.value[index] = oldDist;
        openTransition(400);
        const count = Math.abs(oldDist / 44 - 2);
        currentValue[show.value.indexOf(3)] = count + 1;
    };
    const setValue = (tarDir, i) => {
        const count = Math.abs(tarDir / 44 - 2);
        const { list } = listData.value[i - 1];
        let current = 0;
        if (i === 4 || i === 5) {
            current = typeof list === 'number' ? count : list[count];
        }
        else {
            current = typeof list === 'number' ? count + 1 : list[count];
        }
        if (i === 2 && show.value.includes(3)) {
            if (current === 2) {
                const Year = show.value.includes(1) ? currentValue[0] : new Date().getFullYear();
                listData.value[2].list = IsLeapyear(Year) ? 29 : 28;
            }
            else {
                listData.value[2].list = (current > 7 && current % 2 !== 0) || (current <= 7 && current % 2 === 0) ? 30 : 31;
            }
            setDateDist(i + 1);
        }
        currentValue[show.value.indexOf(i)] = current;
    };
    const onTouchstart = (e, i) => {
        startY = e.changedTouches[0].clientY;
        startDistence = distance.value[show.value.indexOf(i)];
        startTime = +new Date();
    };
    const onTouchmove = (e, i) => {
        const currentY = e.changedTouches[0].clientY;
        const diffX = currentY - startY;
        const actualDist = startDistence + diffX;
        distance.value[show.value.indexOf(i)] = actualDist;
    };
    const onTouchend = (e, i) => {
        const index = show.value.indexOf(i);
        let oldDist = distance.value[index];
        const endTime = +new Date();
        const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2);
        if (speed > 0.12 || speed < -0.12) {
            const wantDist = Math.ceil(speed * 400);
            oldDist += wantDist;
        }
        const surplus = oldDist % 44;
        if (surplus !== 0) {
            let tarDir = 0;
            if (surplus > 0) {
                tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
            }
            else {
                tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
            }
            const { list } = listData.value[i - 1];
            const len = typeof list === 'number' ? list - 1 : list.length - 1;
            if (tarDir > 88) {
                tarDir = 88;
            }
            else if (tarDir < 88 - len * 44) {
                tarDir = 88 - len * 44;
            }
            distance.value[index] = tarDir;
            openTransition(400);
            setValue(tarDir, i);
        }
    };
    const onMousedown = (e, i) => {
        startY = e.clientY;
        startDistence = distance.value[show.value.indexOf(i)];
        startTime = +new Date();
        document.onmousemove = (ev) => {
            const currentY = ev.clientY;
            const diffX = currentY - startY;
            const actualDist = startDistence + diffX;
            distance.value[show.value.indexOf(i)] = actualDist;
        };
        document.onmouseup = (ev) => {
            const index = show.value.indexOf(i);
            let oldDist = distance.value[index];
            const endTime = +new Date();
            const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2);
            if (speed > 0.12 || speed < -0.12) {
                const wantDist = Math.ceil(speed * 400);
                oldDist += wantDist;
            }
            const surplus = oldDist % 44;
            if (surplus !== 0) {
                let tarDir = 0;
                if (surplus > 0) {
                    tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
                }
                else {
                    tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
                }
                const { list } = listData.value[i - 1];
                const len = typeof list === 'number' ? list - 1 : list.length - 1;
                if (tarDir > 88) {
                    tarDir = 88;
                }
                else if (tarDir < 88 - len * 44) {
                    tarDir = 88 - len * 44;
                }
                distance.value[index] = tarDir;
                openTransition(400);
                setValue(tarDir, i);
            }
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    return { show, currentValue, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown };
};
const useBtns = (props, emit, currentValue) => {
    const onCancel = () => {
        emit('on-cancel');
    };
    const onSure = () => {
        const str = currentValue.reduce((prev, elem, i) => {
            const val = elem < 10 ? `0${elem}` : elem;
            let separator = '';
            if (props.type === 'time') {
                separator = ':';
            }
            else if (props.type === 'datetime') {
                separator = i < 3 ? '-' : i === 3 ? ' ' : ':';
            }
            else {
                separator = '-';
            }
            return prev + separator + val;
        }, '');
        emit('update:modelValue', str.slice(1));
        emit('on-sure', currentValue);
    };
    return { onCancel, onSure };
};

var script = defineComponent({
    name: 'MeDatetimePicker',
    emits: ['update:modelValue', 'on-cancel', 'on-sure'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'datetime'
        },
        visible: {
            type: Boolean,
            default: false
        },
        minDate: {
            type: Date,
            default: () => {
                const now = new Date();
                now.setFullYear(now.getFullYear() - 10);
                return now;
            }
        },
        maxDate: {
            type: Date,
            default: () => {
                const now = new Date();
                now.setFullYear(now.getFullYear() + 10);
                return now;
            }
        }
    },
    setup(props, { emit }) {
        const { show, currentValue, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props);
        const { onCancel, onSure } = useBtns(props, emit, currentValue);
        return { show, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown, onCancel, onSure };
    }
});

const _hoisted_1 = {
  key: 0,
  class: "me-datetime-picker"
};
const _hoisted_2 = { class: "m-hd" };
const _hoisted_3 = /*#__PURE__*/createElementVNode("span", { class: "u-line" }, null, -1 /* HOISTED */);
const _hoisted_4 = { class: "m-bd" };
const _hoisted_5 = ["onTouchstart", "onTouchmove", "onTouchend", "onMousedown"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 时间选择器 "),
    createVNode(Transition, { name: "translate" }, {
      default: withCtx(() => [
        (_ctx.visible)
          ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createCommentVNode(" 头部按钮 "),
              createElementVNode("div", _hoisted_2, [
                createElementVNode("button", {
                  type: "button",
                  class: "u-cancel",
                  onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
                }, "取消"),
                _hoisted_3,
                createElementVNode("button", {
                  type: "button",
                  class: "u-sure",
                  onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onSure && _ctx.onSure(...args)))
                }, "确定")
              ]),
              createCommentVNode(" 主体内容 "),
              createElementVNode("ul", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
                  return (openBlock(), createElementBlock(Fragment, null, [
                    (_ctx.show.includes(item.id))
                      ? (openBlock(), createElementBlock("li", {
                          key: item.id,
                          onTouchstart: withModifiers($event => (_ctx.onTouchstart($event, item.id)), ["prevent"]),
                          onTouchmove: $event => (_ctx.onTouchmove($event, item.id)),
                          onTouchend: $event => (_ctx.onTouchend($event, item.id)),
                          onMousedown: withModifiers($event => (_ctx.onMousedown($event, item.id)), ["prevent"])
                        }, [
                          createCommentVNode(" 移动的区域 "),
                          createElementVNode("ol", {
                            style: normalizeStyle(`transform:translateY(${_ctx.distance[_ctx.show.indexOf(item.id)]}px);transition-property:${_ctx.duration > 0 ? 'all' : 'none'};transition-duration: ${_ctx.duration}ms;`)
                          }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.list, (num, i) => {
                              return (openBlock(), createElementBlock("li", { key: i }, toDisplayString(_ctx.filterNumber(item.id === 5 || item.id === 4 ? num - 1 : num)), 1 /* TEXT */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 4 /* STYLE */)
                        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5))
                      : createCommentVNode("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    })
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeDatetimePicker/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeDatetimePicker = script;

export { InMeDatetimePicker as default };
