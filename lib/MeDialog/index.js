import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, normalizeClass, withModifiers, toDisplayString, renderSlot, vShow } from 'vue';

const useShow = (props, emit) => {
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
    watch(() => props.visible, value => {
        value ? showMask() : hideMask();
    }, {
        immediate: true
    });
    return { isShowMask, isShow, hideMask };
};

var script = defineComponent({
    name: 'MeDialog',
    emits: ['update:visible'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        tips: {
            type: String,
            default: '提示'
        }
    },
    setup(props, { emit }) {
        const { isShowMask, isShow, hideMask } = useShow(props, emit);
        return { isShowMask, isShow, hideMask };
    }
});

const _hoisted_1 = { class: "u-tips" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 对话框 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-dialog", { show: _ctx.isShow }]),
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.hideMask && _ctx.hideMask(...args)))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["m-picker", { show: _ctx.isShow }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
      }, [
        createCommentVNode(" 提示语 "),
        createElementVNode("h3", _hoisted_1, toDisplayString(_ctx.tips), 1 /* TEXT */),
        createCommentVNode(" 内容 "),
        renderSlot(_ctx.$slots, "default")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeDialog/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeDialog = script;

export { InMeDialog as default };
