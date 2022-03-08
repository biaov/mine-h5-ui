import { ref, onMounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, render as render$1 } from 'vue';

const useShow = () => {
    const isDestroy = ref(false);
    const isShow = ref(false);
    const onClose = () => {
        isShow.value = false;
        setTimeout(() => {
            isDestroy.value = true;
        }, 400);
    };
    onMounted(() => {
        setTimeout(() => {
            isShow.value = true;
        }, 100);
    });
    return { isShow, isDestroy, onClose };
};

var script = defineComponent({
    name: 'MePreview',
    props: {
        url: {
            type: String,
            default: ''
        },
        zIndex: {
            type: Number,
            default: 99
        },
        background: {
            type: String,
            default: '#000'
        }
    },
    setup() {
        const { isShow, isDestroy, onClose } = useShow();
        return { isShow, isDestroy, onClose };
    }
});

const _hoisted_1 = ["src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图片预览 "),
    (!_ctx.isDestroy)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["me-preview", { show: _ctx.isShow }]),
          style: normalizeStyle(`z-index:${_ctx.zIndex};background:${_ctx.background};`),
          onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClose && _ctx.onClose(...args)))
        }, [
          createElementVNode("img", {
            class: "u-img",
            src: _ctx.url,
            alt: "preview-img"
          }, null, 8 /* PROPS */, _hoisted_1),
          renderSlot(_ctx.$slots, "default")
        ], 6 /* CLASS, STYLE */))
      : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MePreview/index.vue";

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;

const Preview = (arg) => {
    if (!IsType('Object', arg))
        throw new Error(`${arg} is not object`);
    const options = { ...arg };
    const vm = createVNode(script, options);
    const container = document.createElement('div');
    render$1(vm, container);
    document.body.appendChild(container.firstElementChild);
};

const InMePreview = Preview;
InMePreview.install = (app) => {
    app.config.globalProperties.$MePreview = Preview;
};

export { InMePreview as default };
