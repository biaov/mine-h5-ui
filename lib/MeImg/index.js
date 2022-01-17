import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle } from 'vue';

const useImgEvent = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    const onLoad = (e) => {
        emit('on-load', e);
    };
    const onError = (e) => {
        emit('on-error', e);
    };
    return { onClick, onLoad, onError };
};

var script = defineComponent({
    name: 'MeImg',
    emits: ['on-click', 'on-load', 'on-error'],
    props: {
        src: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        fill: {
            type: String,
            default: ''
        },
        radius: {
            type: String,
            default: '0'
        },
        alt: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick, onLoad, onError } = useImgEvent(emit);
        return {
            onClick,
            onLoad,
            onError
        };
    }
});

const _hoisted_1 = ["src", "alt"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图片 "),
    createElementVNode("div", {
      class: "me-img",
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, [
      (!_ctx.fill)
        ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.src,
            width: "40px",
            height: "40px",
            alt: _ctx.alt,
            style: normalizeStyle(`width:${_ctx.width};height:${_ctx.height};border-radius:${_ctx.radius};`),
            onLoad: _cache[0] || (_cache[0] = (...args) => (_ctx.onLoad && _ctx.onLoad(...args))),
            onError: _cache[1] || (_cache[1] = (...args) => (_ctx.onError && _ctx.onError(...args)))
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1))
        : (openBlock(), createElementBlock("span", {
            key: 1,
            style: normalizeStyle(`width:${_ctx.width};height:${_ctx.height};border-radius:${_ctx.radius};background:url(${_ctx.src}) no-repeat center;background-size:${_ctx.fill};`)
          }, null, 4 /* STYLE */))
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeImg/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeImg = script;

export { InMeImg as default };
