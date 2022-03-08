import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, toDisplayString } from 'vue';

const useHandler = (emit) => {
    const onClose = (e) => {
        emit('on-close', e);
    };
    return { onClose };
};

var script = defineComponent({
    name: 'MeTag',
    emits: ['on-close'],
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        plain: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: 4
        },
        width: {
            type: Number
        },
        height: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: '标签'
        },
        textColor: {
            type: String,
            default: ''
        },
        closeable: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { onClose } = useHandler(emit);
        return { onClose };
    }
});

const _hoisted_1 = { class: "u-txt" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签 "),
    createElementVNode("div", {
      class: normalizeClass(["me-tag", [_ctx.type, _ctx.plain && 'plain']]),
      style: normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px;border-color:${_ctx.color};border-radius:${_ctx.radius}px;background:${_ctx.color};color:${_ctx.textColor};`)
    }, [
      createElementVNode("div", _hoisted_1, [
        createElementVNode("span", null, toDisplayString(_ctx.text), 1 /* TEXT */),
        (_ctx.closeable)
          ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "iconfont icon-baseline-close-px",
              onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClose && _ctx.onClose(...args)))
            }))
          : createCommentVNode("v-if", true)
      ])
    ], 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeTag/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeTag = script;

export { InMeTag as default };
