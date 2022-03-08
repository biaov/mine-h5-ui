import { ref, provide, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, renderSlot } from 'vue';

const MeRadioGroupKey = 'MeRadioGroup';

const useInitSlots = (props, emit) => {
    const currentValue = ref(props.modelValue);
    const onChange = (name) => {
        emit('update:modelValue', name);
        emit('on-change', name);
    };
    provide(MeRadioGroupKey, { name: MeRadioGroupKey, currentValue, onChange });
    watch(() => props.modelValue, value => {
        currentValue.value = value;
    });
    return {};
};

var script = defineComponent({
    name: 'MeRadioGroup',
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        direction: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        useInitSlots(props, emit);
        return {};
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 单选框组 "),
    createElementVNode("div", {
      class: normalizeClass(["me-radio-group", { inline: _ctx.direction === 'horizontal' }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeRadioGroup/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeRadioGroup = script;

export { InMeRadioGroup as default };
