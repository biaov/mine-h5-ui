import { ref, provide, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, renderSlot } from 'vue';

const MeCheckboxGroupKey = 'MeCheckboxGroup';

const useInitSlots = (props, emit) => {
    const currentValue = ref([...props.modelValue]);
    const onChange = ({ name, isChecked }) => {
        const arr = currentValue.value;
        if (isChecked.value) {
            arr.splice(arr.indexOf(name), 1);
        }
        else {
            arr.push(name);
        }
        emit('update:modelValue', currentValue.value);
        emit('on-change', currentValue.value);
    };
    provide(MeCheckboxGroupKey, { name: MeCheckboxGroupKey, currentValue, onChange });
    watch(() => props.modelValue, value => {
        currentValue.value = [...value];
    }, {
        deep: true
    });
    return {};
};

var script = defineComponent({
    name: 'MeCheckboxGroup',
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        direction: {
            type: String,
            default: 'vertical'
        }
    },
    setup(props, { emit }) {
        useInitSlots(props, emit);
        return {};
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 复选框组 "),
    createElementVNode("div", {
      class: normalizeClass(["me-checkbox-group", { inline: _ctx.direction === 'horizontal' }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeCheckboxGroup/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeCheckboxGroup = script;

export { InMeCheckboxGroup as default };
