import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle } from 'vue';

const useClick = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script = defineComponent({
    name: 'MeIcon',
    emits: ['on-click'],
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick } = useClick(emit);
        return {
            onClick
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图标 "),
    createElementVNode("i", {
      class: normalizeClass(["iconfont me-icon", _ctx.name]),
      style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeIcon/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeIcon = script;

export { InMeIcon as default };
