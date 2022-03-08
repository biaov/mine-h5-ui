import { ref, watch, onMounted, onUnmounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, normalizeClass, withModifiers, renderList, toDisplayString, vShow } from 'vue';

const Bind = (dom, event, fn, flag = false) => {
    dom.addEventListener(event, fn, flag);
    return dom;
};
const Unbind = (dom, event, fn, flag = false) => {
    dom.removeEventListener(event, fn, flag);
    return dom;
};

const useHandler = (props, emit) => {
    const clampValue = props.modelValue.slice(0, props.num);
    emit('update:modelValue', clampValue);
    const valueArr = clampValue.split('');
    const listData = ref(Array.from({ length: props.num }, (v, k) => ({ id: k + 1, value: valueArr[k] || '', state: false })));
    const handleClick = (e) => {
        let flag = true;
        for (const elem of listData.value) {
            if (elem.state) {
                flag = false;
                elem.state = false;
                break;
            }
        }
        if (flag) {
            for (const elem of listData.value) {
                if (elem.value === '') {
                    elem.state = true;
                    break;
                }
            }
            emit('on-focus', e);
        }
        else {
            emit('on-blur', e);
        }
    };
    const updateList = () => {
        const curClampValue = props.modelValue.slice(0, props.num);
        emit('update:modelValue', curClampValue);
        const arr = curClampValue.split('');
        listData.value.forEach((elem, i) => {
            elem.value = arr[i] || '';
        });
        const len = arr.length;
        len !== props.num && (listData.value[len].state = true);
        len > 0 && (listData.value[len - 1].state = false);
        len < props.num - 1 && (listData.value[len + 1].state = false);
    };
    const closeFocus = () => {
        listData.value.forEach(elem => {
            elem.state = false;
        });
    };
    const clickDocument = () => {
        listData.value.forEach(elem => {
            elem.state = false;
        });
    };
    watch(() => props.modelValue, updateList);
    watch(() => props.isFocus, value => {
        !value && closeFocus();
    });
    onMounted(() => {
        Bind(document, 'click', clickDocument);
    });
    onUnmounted(() => {
        Unbind(document, 'click', clickDocument);
    });
    return { listData, handleClick };
};

var script = defineComponent({
    name: 'MePassword',
    emits: ['update:modelValue', 'on-focus', 'on-blur'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'password'
        },
        num: {
            type: Number,
            default: 6
        },
        skinType: {
            type: String,
            default: 'white'
        },
        isFocus: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { listData, handleClick } = useHandler(props, emit);
        return { listData, handleClick };
    }
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "iconfont icon-dian"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 密码/数字输入框 "),
    withDirectives(createElementVNode("ul", {
      class: normalizeClass(["me-password", `me-password-${_ctx.skinType}${_ctx.type === 'number' ? ' me-password-number' : ''}`]),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["stop"]))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
        return (openBlock(), createElementBlock("li", {
          key: item.id,
          class: normalizeClass({ active: item.state })
        }, [
          (_ctx.type === 'number')
            ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(item.value), 1 /* TEXT */))
            : (item.value !== '')
              ? (openBlock(), createElementBlock("i", _hoisted_2))
              : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */), [
      [vShow, _ctx.listData.length > 0]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MePassword/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMePassword = script;

export { InMePassword as default };
