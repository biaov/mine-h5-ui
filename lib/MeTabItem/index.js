import { inject, ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, renderSlot, vShow } from 'vue';

const MeTabKey = 'MeTab';

const useHandler = (props) => {
    const { name, currentValue, getLabelName } = inject(MeTabKey, {});
    getLabelName({ label: props.label, name: props.name });
    const isShow = ref(false);
    const initShow = () => {
        isShow.value = name === MeTabKey && props.name === currentValue.value;
    };
    watch(currentValue, initShow, { immediate: true });
    return { isShow };
};

var script = defineComponent({
    name: 'MeTabItem',
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: [String, Number],
            required: true
        }
    },
    setup(prop) {
        const { isShow } = useHandler(prop);
        return { isShow };
    }
});

const _hoisted_1 = { class: "me-tab-item" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签选项 "),
    withDirectives(createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */), [
      [vShow, _ctx.isShow]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeTabItem/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeTabItem = script;

export { InMeTabItem as default };
