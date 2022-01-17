import { ref, onMounted, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle } from 'vue';

const useHandler = (props, emit) => {
    const isActived = ref(props.modelValue);
    const background = ref('');
    const handleClick = (e) => {
        if (props.disabled)
            return;
        !props.async && emit('update:modelValue', !isActived.value);
        emit('on-click', e);
    };
    const setColor = () => {
        background.value = props.activeColor && isActived.value ? props.activeColor : props.inactiveColor && !isActived.value ? props.inactiveColor : '';
    };
    onMounted(setColor);
    watch(() => props.modelValue, value => {
        isActived.value = value;
        setColor();
    });
    return { isActived, background, handleClick };
};

var script = defineComponent({
    name: 'MeSwitch',
    emits: ['update:modelValue', 'on-click'],
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        async: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { isActived, background, handleClick } = useHandler(props, emit);
        return { isActived, background, handleClick };
    }
});

const _hoisted_1 = ["data-disabled"];
const _hoisted_2 = /*#__PURE__*/createElementVNode("span", { class: "u-round" }, null, -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 开关 "),
    createElementVNode("div", {
      class: normalizeClass(["me-switch", { 'me-switch-on': _ctx.isActived }]),
      "data-disabled": _ctx.disabled,
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      style: normalizeStyle(`font-size:${_ctx.size};background:${_ctx.background};`)
    }, _hoisted_3, 14 /* CLASS, STYLE, PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeSwitch/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSwitch = script;

export { InMeSwitch as default };
