import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, ref, onMounted, watch, resolveComponent, createBlock, createTextVNode, toDisplayString, withDirectives, vModelDynamic } from 'vue';

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

const useSms = (props, emit) => {
    const sms = ref();
    const handleSMS = (e) => {
        !props.smsIs && emit('on-click-sms', e);
    };
    return { sms, handleSMS };
};
const useIcon = (props, emit, inputType) => {
    const handleIcon = (e) => {
        if (props.password) {
            inputType.value = inputType.value === 'password' ? 'text' : 'password';
        }
        else {
            emit('on-click-icon', e);
        }
    };
    return { handleIcon };
};
const useInput = (props, emit, sms) => {
    const inputLabel = ref();
    const inputVal = ref('');
    const inputType = ref(props.digit ? 'text' : props.password ? 'password' : props.type);
    const paddingLeft = ref(0);
    const paddingRight = ref(0);
    const isFocus = ref(false);
    const setInputPadding = (type) => {
        if (type === 1) {
            paddingRight.value = !props.smsMsg ? 10 : sms.value?.offsetWidth;
        }
        else {
            paddingLeft.value = !props.label ? 10 : Math.max(parseFloat(props.labelWidth || '0'), inputLabel.value?.offsetWidth);
        }
    };
    const onFocus = (e) => {
        isFocus.value = !isFocus.value;
        emit('on-focus', e);
    };
    const onBlur = (e) => {
        isFocus.value = !isFocus.value;
        emit('on-blur', e);
    };
    const onChange = (e) => {
        isFocus.value = !isFocus.value;
        emit('on-change', e);
    };
    const onInput = (e) => {
        isFocus.value = !isFocus.value;
        emit('on-input', e);
    };
    onMounted(() => {
        setInputPadding(0);
        setInputPadding(1);
    });
    watch(() => props.modelValue, value => {
        inputVal.value = value;
    }, {
        immediate: true
    });
    watch(inputVal, (value, oldValue) => {
        props.digit && !/^\d*$/g.test(value) && (inputVal.value = +oldValue);
        emit('update:modelValue', value);
    });
    watch(() => props.smsIs, () => {
        setInputPadding(1);
    });
    return {
        inputLabel,
        inputVal,
        inputType,
        paddingLeft,
        paddingRight,
        isFocus,
        onFocus,
        onBlur,
        onChange,
        onInput
    };
};

var script = defineComponent({
    name: 'MeInput',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:modelValue', 'on-focus', 'on-blur', 'on-change', 'on-input', 'on-click-sms', 'on-click-icon'],
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入...'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        labelWidth: {
            type: String,
            default: ''
        },
        labelAlign: {
            type: String,
            default: 'left'
        },
        labelColor: {
            type: String,
            default: ''
        },
        labelIcon: {
            type: String,
            default: ''
        },
        focusType: {
            type: String,
            default: 'default'
        },
        focusColor: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        password: {
            type: Boolean,
            default: false
        },
        digit: {
            type: Boolean,
            default: false
        },
        smsMsg: {
            type: String,
            default: ''
        },
        smsColor: {
            type: String,
            default: ''
        },
        smsIs: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { sms, handleSMS } = useSms(props, emit);
        const { inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocus, onBlur, onChange, onInput } = useInput(props, emit, sms);
        const { handleIcon } = useIcon(props, emit, inputType);
        return { sms, handleSMS, inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocus, onBlur, onChange, onInput, handleIcon };
    }
});

const _hoisted_1 = ["type", "placeholder", "readonly", "disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 输入框 "),
    createElementVNode("div", {
      class: normalizeClass(["me-input", `me-input-${_ctx.focusType}`])
    }, [
      (_ctx.label)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "u-label",
            style: normalizeStyle(`width:${_ctx.labelWidth};text-align-last:${_ctx.labelAlign};color:${_ctx.labelColor};`),
            ref: "inputLabel"
          }, [
            (_ctx.labelIcon)
              ? (openBlock(), createBlock(_component_me_icon, {
                  key: 0,
                  name: _ctx.labelIcon,
                  color: _ctx.labelColor,
                  size: "inherit"
                }, null, 8 /* PROPS */, ["name", "color"]))
              : createCommentVNode("v-if", true),
            createTextVNode(" " + toDisplayString(_ctx.label), 1 /* TEXT */)
          ], 4 /* STYLE */))
        : createCommentVNode("v-if", true),
      withDirectives(createElementVNode("input", {
        type: _ctx.inputType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputVal) = $event)),
        class: "u-input",
        placeholder: _ctx.placeholder,
        style: normalizeStyle(`${_ctx.isFocus && `border-color:${_ctx.focusColor};`};padding-right:${_ctx.paddingRight}px;padding-left:${_ctx.paddingLeft}px;`),
        onFocus: _cache[1] || (_cache[1] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args))),
        onBlur: _cache[2] || (_cache[2] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
        onChange: _cache[3] || (_cache[3] = (...args) => (_ctx.onChange && _ctx.onChange(...args))),
        onInput: _cache[4] || (_cache[4] = (...args) => (_ctx.onInput && _ctx.onInput(...args))),
        readonly: _ctx.readonly,
        disabled: _ctx.disabled
      }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1), [
        [vModelDynamic, _ctx.inputVal]
      ]),
      (_ctx.password)
        ? (openBlock(), createBlock(_component_me_icon, {
            key: 1,
            name: _ctx.inputType == 'password' ? 'icon-in_biyan' : 'icon-in_zhengyan',
            onOnClick: _ctx.handleIcon
          }, null, 8 /* PROPS */, ["name", "onOnClick"]))
        : (openBlock(), createBlock(_component_me_icon, {
            key: 2,
            name: _ctx.icon,
            onOnClick: _ctx.handleIcon
          }, null, 8 /* PROPS */, ["name", "onOnClick"])),
      (!_ctx.password && _ctx.smsMsg)
        ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: normalizeClass(["u-sms", { countdown: _ctx.smsIs }]),
            onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.handleSMS && _ctx.handleSMS(...args))),
            ref: "sms",
            style: normalizeStyle(`color:${_ctx.smsColor};`)
          }, toDisplayString(_ctx.smsMsg), 7 /* TEXT, CLASS, STYLE */))
        : createCommentVNode("v-if", true)
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeInput/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeInput = script;

export { InMeInput as default };
