import { ref, watch, onMounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, normalizeClass, renderList, toDisplayString, createVNode, Transition, withCtx } from 'vue';

const useAnimate = (props) => {
    const noticeList = ref();
    const left = ref(0);
    const listData = ref(Array.isArray(props.list) ? props.list : [props.list]);
    const listIndex = ref(0);
    let timer;
    let isSwitch = true;
    const startAnimate = () => {
        if (props.scroll === 'horizontal') {
            const { offsetWidth, parentNode } = noticeList.value;
            let startTime;
            const startCurAnimate = (timestamp) => {
                startTime === undefined && (startTime = timestamp);
                const elapsed = timestamp - startTime;
                const beforeLeft = left.value;
                if (beforeLeft < -offsetWidth) {
                    left.value = parentNode.offsetWidth;
                    startTime = undefined;
                }
                else {
                    left.value = ~(elapsed / 18);
                }
                isSwitch && window.requestAnimationFrame(startCurAnimate);
            };
            window.requestAnimationFrame(startCurAnimate);
        }
        else {
            const len = listData.value.length;
            if (len <= 1)
                return;
            timer = setInterval(() => {
                const index = listIndex.value;
                listIndex.value = index >= len - 1 ? 0 : index + 1;
            }, props.delay);
        }
    };
    const closeAnimate = () => {
        if (props.scroll === 'horizontal') {
            isSwitch = false;
        }
        else {
            clearInterval(timer);
        }
    };
    watch(() => props.loop, value => {
        value ? startAnimate() : closeAnimate();
    });
    onMounted(() => {
        props.loop && startAnimate();
    });
    return { noticeList, left, listData, listIndex };
};
const useBtns = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    const onClickPreappend = (e) => {
        emit('on-click:preappend', e);
    };
    const onClickAppend = (e) => {
        emit('on-click:append', e);
    };
    return { onClick, onClickPreappend, onClickAppend };
};

var script = defineComponent({
    name: 'MeNoticeBar',
    emits: ['on-click', 'on-click:preappend', 'on-click:append'],
    props: {
        list: {
            type: [String, Array],
            required: true
        },
        scroll: {
            type: String,
            default: 'horizontal'
        },
        loop: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 3000
        },
        preappendIcon: {
            type: String,
            default: 'notice'
        },
        preappendColor: {
            type: String,
            default: '#f56c6c'
        },
        appendIcon: {
            type: String,
            default: 'right1'
        },
        appendColor: {
            type: String,
            default: '#c8c7cc'
        },
        height: {
            type: Number,
            default: 40
        },
        radius: {
            type: [Number, String],
            default: 4
        },
        background: {
            type: String,
            default: '#f6f6f6'
        },
        color: {
            type: String,
            default: '#494949'
        }
    },
    setup(props, { emit }) {
        const { noticeList, left, listData, listIndex } = useAnimate(props);
        const { onClick, onClickPreappend, onClickAppend } = useBtns(emit);
        return { noticeList, left, listData, listIndex, onClick, onClickPreappend, onClickAppend };
    }
});

const _hoisted_1 = { class: "u-notice" };
const _hoisted_2 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 公告栏 "),
    createElementVNode("div", {
      class: "me-notice-bar",
      style: normalizeStyle(`height:${_ctx.height}px;border-radius:${_ctx.radius + (String(_ctx.radius).includes('px') ? '' : 'px')};background:${_ctx.background};`)
    }, [
      createCommentVNode(" 前面图标 "),
      createElementVNode("div", {
        class: "u-icon u-icon-preappend",
        style: normalizeStyle(`color:${_ctx.preappendColor};`),
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClickPreappend && _ctx.onClickPreappend(...args)))
      }, [
        createElementVNode("i", {
          class: normalizeClass(`iconfont icon-${_ctx.preappendIcon}`)
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */),
      createCommentVNode(" 滚动公告 "),
      createElementVNode("div", _hoisted_1, [
        createCommentVNode(" 水平动画 "),
        (_ctx.scroll === 'horizontal')
          ? (openBlock(), createElementBlock("ul", {
              key: 0,
              class: "u-notice-horizontal",
              style: normalizeStyle(`left:${_ctx.left}px;color:${_ctx.color};`),
              ref: "noticeList"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item, index) => {
                return (openBlock(), createElementBlock("li", {
                  key: index,
                  onClick: $event => (_ctx.onClick(index))
                }, [
                  createElementVNode("span", null, toDisplayString(item), 1 /* TEXT */)
                ], 8 /* PROPS */, _hoisted_2))
              }), 128 /* KEYED_FRAGMENT */))
            ], 4 /* STYLE */))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" 垂直动画 "),
              createVNode(Transition, {
                name: "slide",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("div", {
                    class: "u-notice-vertical",
                    key: _ctx.listIndex,
                    onClick: _cache[1] || (_cache[1] = $event => (_ctx.onClick(_ctx.listIndex))),
                    style: normalizeStyle(`color:${_ctx.color};`)
                  }, [
                    createElementVNode("span", null, toDisplayString(_ctx.listData[_ctx.listIndex]), 1 /* TEXT */)
                  ], 4 /* STYLE */))
                ]),
                _: 1 /* STABLE */
              })
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]),
      createCommentVNode(" 后面图标 "),
      createElementVNode("div", {
        class: "u-icon u-icon-append",
        style: normalizeStyle(`color:${_ctx.appendColor};`),
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onClickAppend && _ctx.onClickAppend(...args)))
      }, [
        createElementVNode("i", {
          class: normalizeClass(`iconfont icon-${_ctx.appendIcon}`)
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeNoticeBar/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeNoticeBar = script;

export { InMeNoticeBar as default };
