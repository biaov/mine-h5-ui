import { inject, ref, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, normalizeClass, toDisplayString, renderSlot } from 'vue';

const MeGridKey = 'MeGrid';

const useHandler = (emit) => {
    const { name, params } = inject(MeGridKey, {});
    const cols = ref(4);
    const widthValue = ref(25);
    const borderColor = ref('');
    const setData = () => {
        cols.value = params.cols;
        widthValue.value = 100 / params.cols;
        borderColor.value = params.borderColor;
    };
    name === MeGridKey && setData();
    const handleClick = (e) => {
        emit('on-click', e);
    };
    return { cols, widthValue, borderColor, handleClick };
};

var script = defineComponent({
    name: 'MeGridItem',
    emits: ['on-click'],
    props: {
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { cols, widthValue, borderColor, handleClick } = useHandler(emit);
        return { cols, widthValue, borderColor, handleClick };
    }
});

const _hoisted_1 = {
  key: 2,
  class: "u-custom"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 宫格选项 "),
    createElementVNode("div", {
      class: "me-grid-item",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      style: normalizeStyle(`width:${_ctx.widthValue}%;border-color:${_ctx.borderColor};`)
    }, [
      (_ctx.icon)
        ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["iconfont u-icon", _ctx.icon]),
            style: normalizeStyle(`color:${_ctx.iconColor};`)
          }, null, 6 /* CLASS, STYLE */))
        : createCommentVNode("v-if", true),
      (_ctx.text)
        ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "u-desc",
            style: normalizeStyle(`color:${_ctx.textColor};`)
          }, toDisplayString(_ctx.text), 5 /* TEXT, STYLE */))
        : createCommentVNode("v-if", true),
      (!_ctx.icon && !_ctx.text)
        ? (openBlock(), createElementBlock("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeGridItem/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeGridItem = script;

export { InMeGridItem as default };
