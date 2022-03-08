import { computed, provide, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, renderSlot } from 'vue';

const MeStepKey = 'MeStep';

const useInitSlots = (props) => {
    const parentProps = computed(() => props);
    provide(MeStepKey, { parentProps });
    return {};
};

var script = defineComponent({
    name: 'MeStep',
    props: {
        active: {
            type: Array,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'primary'
        },
        color: {
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'dot'
        },
        activeIcon: {
            type: String,
            default: 'radio'
        }
    },
    setup(props) {
        useInitSlots(props);
        return {};
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签页 "),
    createElementVNode("div", {
      class: normalizeClass(["me-step", _ctx.direction])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeStep/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeStep = script;

export { InMeStep as default };
