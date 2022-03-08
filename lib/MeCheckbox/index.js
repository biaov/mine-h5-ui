import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, inject, ref, watch, resolveComponent, createVNode, renderSlot } from 'vue';

const useClick = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script$1 = defineComponent({
    name: 'MeIcon',
    emits: ['on-click'],
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick } = useClick(emit);
        return {
            onClick
        };
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图标 "),
    createElementVNode("i", {
      class: normalizeClass(["iconfont me-icon", _ctx.name]),
      style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1.render = render$1;
script$1.__file = "packages/MeIcon/index.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const InMeIcon = script$1;

const MeCheckboxGroupKey = 'MeCheckboxGroup';

const useHandler = (props, emit) => {
    const { name, currentValue, onChange } = inject(MeCheckboxGroupKey, {});
    const isChecked = ref(props.modelValue);
    const iconName = ref('');
    const setIcon = () => {
        iconName.value = isChecked.value
            ? props.iconSelect || (props.shape === 'round' ? 'icon-radio' : 'icon-baseline-check_box-px')
            : props.icon || (props.shape === 'round' ? 'icon-radio3' : 'icon-baseline-check_box_outline_blank-px');
    };
    const handleClick = (e) => {
        if (!props.disabled) {
            if (name === MeCheckboxGroupKey) {
                onChange({ name: props.name, isChecked });
            }
            else {
                isChecked.value = !isChecked.value;
                emit('update:modelValue', !isChecked.value);
            }
            emit('on-click', e);
            setIcon();
        }
    };
    const setStatus = () => {
        isChecked.value = name === MeCheckboxGroupKey ? currentValue.value.includes(props.name) : props.modelValue;
        setIcon();
    };
    setStatus();
    watch(() => props.modelValue, value => {
        isChecked.value = value;
        setIcon();
    });
    name === MeCheckboxGroupKey && watch(currentValue, setStatus);
    return { isChecked, iconName, handleClick, setStatus };
};

var script = defineComponent({
    name: 'MeCheckbox',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:modelValue', 'on-click'],
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        name: {
            type: [String, Number]
        },
        shape: {
            type: String,
            default: 'round'
        },
        icon: {
            type: String,
            default: ''
        },
        iconSelect: {
            type: String,
            default: ''
        },
        iconSize: {
            type: String,
            default: '20px'
        },
        checkedColor: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { isChecked, iconName, handleClick, setStatus } = useHandler(props, emit);
        return { isChecked, iconName, handleClick, setStatus };
    }
});

const _hoisted_1 = ["data-checked", "data-disabled"];
const _hoisted_2 = { class: "u-value" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 复选框 "),
    createElementVNode("div", {
      class: "me-checkbox",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      "data-checked": _ctx.isChecked + '',
      "data-disabled": _ctx.disabled + ''
    }, [
      createVNode(_component_me_icon, {
        name: _ctx.iconName,
        color: _ctx.isChecked ? _ctx.checkedColor : '',
        size: _ctx.iconSize
      }, null, 8 /* PROPS */, ["name", "color", "size"]),
      createElementVNode("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 8 /* PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeCheckbox/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeCheckbox = script;

export { InMeCheckbox as default };
