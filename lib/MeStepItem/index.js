import { inject, ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, renderSlot } from 'vue';

const MeStepKey = 'MeStep';

const useHandler = (props) => {
    const { parentProps } = inject(MeStepKey, {});
    const isActive = ref(false);
    watch(parentProps, () => {
        isActive.value = parentProps.value.active.includes(props.name);
    }, { immediate: true, deep: true });
    return { isActive, parentProps };
};

var script = defineComponent({
    name: 'MeStepItem',
    props: {
        name: {
            type: [String, Number],
            required: true
        }
    },
    setup(prop) {
        const { isActive, parentProps } = useHandler(prop);
        return { isActive, parentProps };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签选项 "),
    createElementVNode("div", {
      class: normalizeClass(["me-step-item", [_ctx.parentProps.direction, _ctx.parentProps.type, _ctx.isActive ? 'active' : '']]),
      style: normalizeStyle(`color:${_ctx.isActive ? _ctx.parentProps.activeColor : _ctx.parentProps.color};`)
    }, [
      createCommentVNode(" 点 "),
      createElementVNode("div", {
        class: "u-dot",
        style: normalizeStyle(`color:${_ctx.isActive ? _ctx.parentProps.activeColor : _ctx.parentProps.color};`)
      }, [
        createElementVNode("i", {
          class: normalizeClass(["iconfont", `icon-${_ctx.parentProps[_ctx.isActive ? 'activeIcon' : 'icon']}`])
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */),
      createCommentVNode(" 线 "),
      createElementVNode("div", {
        class: "u-line",
        style: normalizeStyle(`background:${_ctx.isActive ? _ctx.parentProps.activeColor : _ctx.parentProps.color};`)
      }, null, 4 /* STYLE */),
      createCommentVNode(" 文本 "),
      createElementVNode("div", {
        class: "u-text",
        style: normalizeStyle(`color:${_ctx.isActive ? _ctx.parentProps.activeColor : _ctx.parentProps.color};`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4 /* STYLE */)
    ], 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeStepItem/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeStepItem = script;

export { InMeStepItem as default };
