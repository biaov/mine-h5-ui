import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, normalizeClass, renderSlot, withModifiers, vShow } from 'vue';

const useHandler = (props, emit) => {
    const isShowMask = ref(false);
    const isShow = ref(false);
    const showMask = () => {
        isShowMask.value = true;
        setTimeout(() => {
            isShow.value = true;
        }, 100);
    };
    const hideMask = () => {
        isShow.value = false;
        setTimeout(() => {
            isShowMask.value = false;
            emit('update:visible', false);
        }, 400);
    };
    const clickMask = () => {
        props.maskClose && hideMask();
    };
    watch(() => props.visible, value => {
        value ? showMask() : hideMask();
    }, {
        immediate: true
    });
    return { isShowMask, isShow, clickMask };
};

var script = defineComponent({
    name: 'MeMask',
    emits: ['update:visible'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        maskClose: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { isShowMask, isShow, clickMask } = useHandler(props, emit);
        return { isShowMask, isShow, clickMask };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 遮罩层 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-mask", { show: _ctx.isShow }]),
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.clickMask && _ctx.clickMask(...args)))
    }, [
      renderSlot(_ctx.$slots, "default", {
        class: normalizeClass({ on: _ctx.isShow }),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
      })
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeMask/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeMask = script;

export { InMeMask as default };
