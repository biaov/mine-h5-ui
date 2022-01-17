import { ref, provide, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderSlot } from 'vue';

const MeAccordionKey = 'MeAccordion';

const useInitSlots = (props, emit) => {
    const currentValue = ref(props.modelValue);
    const onChange = (name) => {
        const value = name !== props.modelValue ? name : '';
        emit('update:modelValue', value);
        emit('on-change', value);
    };
    provide(MeAccordionKey, { name: MeAccordionKey, currentValue, onChange });
    watch(() => props.modelValue, value => {
        currentValue.value = value;
    });
    return {};
};

var script = defineComponent({
    name: 'MeAccordion',
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: [Number, String],
            required: true
        }
    },
    setup(props, { emit }) {
        useInitSlots(props, emit);
        return {};
    }
});

const _hoisted_1 = { class: "me-accordion" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 手风琴  "),
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeAccordion/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeAccordion = script;

export { InMeAccordion as default };
