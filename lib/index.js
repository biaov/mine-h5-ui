import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, resolveComponent, createBlock, renderSlot, ref, watch, computed, withDirectives, withModifiers, vShow, onMounted, createTextVNode, toDisplayString, vModelDynamic, inject, createVNode, provide, onUnmounted, renderList, vModelText, Transition, withCtx, mergeProps, toHandlers, TransitionGroup, render as render$P, nextTick, normalizeProps, guardReactiveProps } from 'vue';

const useClick = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script$O = defineComponent({
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

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图标 "),
    createElementVNode("i", {
      class: normalizeClass(["iconfont me-icon", _ctx.name]),
      style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$O.render = render$O;
script$O.__file = "packages/MeIcon/index.vue";

script$O.install = (app) => {
    app.component(script$O.name, script$O);
};
const InMeIcon = script$O;

const useHandler$l = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script$N = defineComponent({
    name: 'MeButton',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['on-click'],
    props: {
        nativeType: {
            type: String,
            default: 'button'
        },
        width: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            validator: (value) => value === 'default' || value === 'primary' || value === 'success' || value === 'info' || value === 'warning' || value === 'danger',
            default: 'default'
        },
        plain: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        icon: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick } = useHandler$l(emit);
        return { onClick };
    }
});

const _hoisted_1$D = ["type"];

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 按钮 "),
    createElementVNode("button", {
      type: _ctx.nativeType,
      class: normalizeClass(["me-btn", `me-btn-${_ctx.type} ${_ctx.plain ? 'me-btn-plain' : ''} ${_ctx.disabled ? 'disabled' : ''}`]),
      style: normalizeStyle(`width:${_ctx.width}; color:${_ctx.type === 'default' || _ctx.plain ? _ctx.color : '#fff'}; background:${!_ctx.plain ? _ctx.color : '#fff'}; border-color:${_ctx.color};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, [
      (_ctx.icon)
        ? (openBlock(), createBlock(_component_me_icon, {
            key: 0,
            name: _ctx.icon,
            color: `${_ctx.type === 'default' || _ctx.plain ? _ctx.color : '#fff'}`,
            size: "16px"
          }, null, 8 /* PROPS */, ["name", "color"]))
        : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 14 /* CLASS, STYLE, PROPS */, _hoisted_1$D)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$N.render = render$N;
script$N.__file = "packages/MeButton/index.vue";

script$N.install = (app) => {
    app.component(script$N.name, script$N);
};
const InMeButton = script$N;

const useImgEvent = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    const onLoad = (e) => {
        emit('on-load', e);
    };
    const onError = (e) => {
        emit('on-error', e);
    };
    return { onClick, onLoad, onError };
};

var script$M = defineComponent({
    name: 'MeImg',
    emits: ['on-click', 'on-load', 'on-error'],
    props: {
        src: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        fill: {
            type: String,
            default: ''
        },
        radius: {
            type: String,
            default: '0'
        },
        alt: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick, onLoad, onError } = useImgEvent(emit);
        return {
            onClick,
            onLoad,
            onError
        };
    }
});

const _hoisted_1$C = ["src", "alt"];

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图片 "),
    createElementVNode("div", {
      class: "me-img",
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, [
      (!_ctx.fill)
        ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.src,
            width: "40px",
            height: "40px",
            alt: _ctx.alt,
            style: normalizeStyle(`width:${_ctx.width};height:${_ctx.height};border-radius:${_ctx.radius};`),
            onLoad: _cache[0] || (_cache[0] = (...args) => (_ctx.onLoad && _ctx.onLoad(...args))),
            onError: _cache[1] || (_cache[1] = (...args) => (_ctx.onError && _ctx.onError(...args)))
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1$C))
        : (openBlock(), createElementBlock("span", {
            key: 1,
            style: normalizeStyle(`width:${_ctx.width};height:${_ctx.height};border-radius:${_ctx.radius};background:url(${_ctx.src}) no-repeat center;background-size:${_ctx.fill};`)
          }, null, 4 /* STYLE */))
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$M.render = render$M;
script$M.__file = "packages/MeImg/index.vue";

script$M.install = (app) => {
    app.component(script$M.name, script$M);
};
const InMeImg = script$M;

const useMask = (props, emit) => {
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
            emit('on-cancel');
        }, 400);
    };
    watch(() => props.visible, value => {
        value ? showMask() : hideMask();
    }, {
        immediate: true
    });
    return { isShowMask, isShow, showMask, hideMask };
};
const useRadius = ({ position, radius }) => {
    const setRadius = computed(() => {
        let radiusStyle = '';
        switch (position) {
            case 'top':
                radiusStyle = `0px 0px ${radius} ${radius}`;
                break;
            case 'right':
                radiusStyle = `${radius} 0px 0px ${radius}`;
                break;
            case 'bottom':
                radiusStyle = `${radius} ${radius} 0px 0px`;
                break;
            case 'left':
                radiusStyle = `0px ${radius} ${radius} 0px`;
                break;
        }
        return `border-radius:${radiusStyle};`;
    });
    return { setRadius };
};

var script$L = defineComponent({
    name: 'MePopup',
    components: { MeIcon: InMeIcon },
    emits: ['update:visible', 'on-cancel'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        modal: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: 'center'
        },
        closeable: {
            type: Boolean,
            default: false
        },
        radius: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { isShow, isShowMask, hideMask } = useMask(props, emit);
        const { setRadius } = useRadius(props);
        return {
            isShow,
            isShowMask,
            hideMask,
            setRadius
        };
    }
});

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 弹出层 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-popup", { show: _ctx.isShow }]),
      style: normalizeStyle(`background:rgba(0,0,0,${_ctx.modal ? 0.7 : 0});`),
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.hideMask && _ctx.hideMask(...args)))
    }, [
      createElementVNode("div", {
        class: normalizeClass(_ctx.position),
        style: normalizeStyle(_ctx.setRadius),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
      }, [
        (_ctx.closeable)
          ? (openBlock(), createBlock(_component_me_icon, {
              key: 0,
              name: "icon-baseline-close-px",
              size: "20px",
              onOnClick: _ctx.hideMask
            }, null, 8 /* PROPS */, ["onOnClick"]))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 6 /* CLASS, STYLE */)
    ], 6 /* CLASS, STYLE */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$L.render = render$L;
script$L.__file = "packages/MePopup/index.vue";

script$L.install = (app) => {
    app.component(script$L.name, script$L);
};
const InMePopup = script$L;

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

var script$K = defineComponent({
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

const _hoisted_1$B = ["type", "placeholder", "readonly", "disabled"];

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
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
      }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1$B), [
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

script$K.render = render$K;
script$K.__file = "packages/MeInput/index.vue";

script$K.install = (app) => {
    app.component(script$K.name, script$K);
};
const InMeInput = script$K;

const MeRadioGroupKey = 'MeRadioGroup';

const useHandler$k = (props, emit) => {
    const { name, currentValue, onChange } = inject(MeRadioGroupKey, {});
    const isChecked = ref(props.modelValue);
    const iconName = ref('');
    const setIcon = () => {
        iconName.value = isChecked.value
            ? props.iconSelect || (props.shape === 'round' ? 'icon-radio' : 'icon-baseline-check_box-px')
            : props.icon || (props.shape === 'round' ? 'icon-radio3' : 'icon-baseline-check_box_outline_blank-px');
    };
    const handleClick = () => {
        if (!props.disabled) {
            if (name === MeRadioGroupKey) {
                props.name !== currentValue.value && onChange(props.name);
            }
            else {
                isChecked.value = !isChecked.value;
                emit('update:modelValue', !isChecked.value);
            }
            emit('on-click');
            setIcon();
        }
    };
    const setStatus = () => {
        isChecked.value = name === MeRadioGroupKey ? props.name === currentValue.value : props.modelValue;
        setIcon();
    };
    setStatus();
    watch(() => props.modelValue, value => {
        isChecked.value = value;
        setIcon();
    });
    name === MeRadioGroupKey && watch(currentValue, setStatus);
    return { isChecked, iconName, handleClick, setStatus };
};

var script$J = defineComponent({
    name: 'MeRadio',
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
        const { isChecked, iconName, handleClick, setStatus } = useHandler$k(props, emit);
        return { isChecked, iconName, handleClick, setStatus };
    }
});

const _hoisted_1$A = ["data-checked", "data-disabled"];
const _hoisted_2$k = { class: "u-value" };

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 单选框 "),
    createElementVNode("div", {
      class: "me-radio",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      "data-checked": _ctx.isChecked + '',
      "data-disabled": _ctx.disabled + ''
    }, [
      createVNode(_component_me_icon, {
        name: _ctx.iconName,
        color: _ctx.isChecked ? _ctx.checkedColor : '',
        size: _ctx.iconSize
      }, null, 8 /* PROPS */, ["name", "color", "size"]),
      createElementVNode("div", _hoisted_2$k, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 8 /* PROPS */, _hoisted_1$A)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$J.render = render$J;
script$J.__file = "packages/MeRadio/index.vue";

script$J.install = (app) => {
    app.component(script$J.name, script$J);
};
const InMeRadio = script$J;

const useInitSlots$5 = (props, emit) => {
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

var script$I = defineComponent({
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
        useInitSlots$5(props, emit);
        return {};
    }
});

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 单选框组 "),
    createElementVNode("div", {
      class: normalizeClass(["me-radio-group", { inline: _ctx.direction === 'horizontal' }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$I.render = render$I;
script$I.__file = "packages/MeRadioGroup/index.vue";

script$I.install = (app) => {
    app.component(script$I.name, script$I);
};
const InMeRadioGroup = script$I;

const MeCheckboxGroupKey = 'MeCheckboxGroup';

const useHandler$j = (props, emit) => {
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

var script$H = defineComponent({
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
        const { isChecked, iconName, handleClick, setStatus } = useHandler$j(props, emit);
        return { isChecked, iconName, handleClick, setStatus };
    }
});

const _hoisted_1$z = ["data-checked", "data-disabled"];
const _hoisted_2$j = { class: "u-value" };

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
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
      createElementVNode("div", _hoisted_2$j, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 8 /* PROPS */, _hoisted_1$z)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$H.render = render$H;
script$H.__file = "packages/MeCheckbox/index.vue";

script$H.install = (app) => {
    app.component(script$H.name, script$H);
};
const InMeCheckbox = script$H;

const useInitSlots$4 = (props, emit) => {
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

var script$G = defineComponent({
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
        useInitSlots$4(props, emit);
        return {};
    }
});

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 复选框组 "),
    createElementVNode("div", {
      class: normalizeClass(["me-checkbox-group", { inline: _ctx.direction === 'horizontal' }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$G.render = render$G;
script$G.__file = "packages/MeCheckboxGroup/index.vue";

script$G.install = (app) => {
    app.component(script$G.name, script$G);
};
const InMeCheckboxGroup = script$G;

const useHandler$i = (props, emit) => {
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

var script$F = defineComponent({
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
        const { isActived, background, handleClick } = useHandler$i(props, emit);
        return { isActived, background, handleClick };
    }
});

const _hoisted_1$y = ["data-disabled"];
const _hoisted_2$i = /*#__PURE__*/createElementVNode("span", { class: "u-round" }, null, -1 /* HOISTED */);
const _hoisted_3$a = [
  _hoisted_2$i
];

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 开关 "),
    createElementVNode("div", {
      class: normalizeClass(["me-switch", { 'me-switch-on': _ctx.isActived }]),
      "data-disabled": _ctx.disabled,
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      style: normalizeStyle(`font-size:${_ctx.size};background:${_ctx.background};`)
    }, _hoisted_3$a, 14 /* CLASS, STYLE, PROPS */, _hoisted_1$y)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$F.render = render$F;
script$F.__file = "packages/MeSwitch/index.vue";

script$F.install = (app) => {
    app.component(script$F.name, script$F);
};
const InMeSwitch = script$F;

const Bind = (dom, event, fn, flag = false) => {
    dom.addEventListener(event, fn, flag);
    return dom;
};
const Unbind = (dom, event, fn, flag = false) => {
    dom.removeEventListener(event, fn, flag);
    return dom;
};
var BindEvent = {
    Bind,
    Unbind
};

const useHandler$h = (emit) => {
    const onClick = (num) => {
        emit('on-click', num);
    };
    const onDelete = (e) => {
        emit('on-delete', e);
    };
    const onComplate = (e) => {
        emit('update:visible', false);
        emit('on-complate', e);
    };
    return { onClick, onDelete, onComplate };
};
const usePadding = (props, emit) => {
    const isActive = ref(false);
    const setPadding = () => {
        if (props.isPadding) {
            if (props.visible) {
                document.body.className += ' me-keyboard-padding';
            }
            else {
                const { className } = document.body;
                let index = className.indexOf('me-keyboard-padding');
                index = index > 0 ? index : undefined;
                document.body.className = className.slice(0, index);
            }
        }
    };
    const clickDocument = () => {
        emit('update:visible', false);
    };
    onMounted(() => {
        setPadding();
        Bind(document, 'click', clickDocument);
    });
    onUnmounted(() => {
        Unbind(document, 'click', clickDocument);
    });
    watch(() => props.visible, setPadding);
    return { isActive };
};

var script$E = defineComponent({
    name: 'MeKeyboard',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:visible', 'on-click', 'on-delete', 'on-complate'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        skinType: {
            type: String,
            default: 'gray'
        },
        skinStyle: {
            type: Object,
            default: () => ({
                bgc: '',
                textBgc: '',
                color: ''
            })
        },
        isPadding: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { emit }) {
        const { isActive } = usePadding(props, emit);
        const { onClick, onDelete, onComplate } = useHandler$h(emit);
        return { isActive, onClick, onDelete, onComplate };
    }
});

const _hoisted_1$x = ["onClick"];

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 数字键盘 "),
    createElementVNode("ul", {
      class: normalizeClass(["me-keyboard", `me-keyboard-${_ctx.skinType} ${_ctx.visible ? 'show' : ''} ${_ctx.isActive ? 'me-keyboard-active' : ''}`]),
      onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
    }, [
      (openBlock(), createElementBlock(Fragment, null, renderList(9, (item) => {
        return createElementVNode("li", {
          key: item,
          onClick: $event => (_ctx.onClick(item))
        }, toDisplayString(item), 9 /* TEXT, PROPS */, _hoisted_1$x)
      }), 64 /* STABLE_FRAGMENT */)),
      createElementVNode("li", {
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onComplate && _ctx.onComplate(...args))),
        class: "u-complate"
      }, "完成"),
      createElementVNode("li", {
        onClick: _cache[1] || (_cache[1] = $event => (_ctx.onClick(0)))
      }, "0"),
      createElementVNode("li", {
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onDelete && _ctx.onDelete(...args)))
      }, [
        createVNode(_component_me_icon, { name: "icon-delete" })
      ])
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$E.render = render$E;
script$E.__file = "packages/MeKeyboard/index.vue";

script$E.install = (app) => {
    app.component(script$E.name, script$E);
};
const InMeKeyboard = script$E;

const useHandler$g = (props, emit) => {
    const clampValue = props.modelValue.slice(0, props.num);
    emit('update:modelValue', clampValue);
    const valueArr = clampValue.split('');
    const listData = ref(Array.from({ length: props.num }, (v, k) => ({ id: k + 1, value: valueArr[k] || '', state: false })));
    const handleClick = (e) => {
        let flag = true;
        for (const elem of listData.value) {
            if (elem.state) {
                flag = false;
                elem.state = false;
                break;
            }
        }
        if (flag) {
            for (const elem of listData.value) {
                if (elem.value === '') {
                    elem.state = true;
                    break;
                }
            }
            emit('on-focus', e);
        }
        else {
            emit('on-blur', e);
        }
    };
    const updateList = () => {
        const curClampValue = props.modelValue.slice(0, props.num);
        emit('update:modelValue', curClampValue);
        const arr = curClampValue.split('');
        listData.value.forEach((elem, i) => {
            elem.value = arr[i] || '';
        });
        const len = arr.length;
        len !== props.num && (listData.value[len].state = true);
        len > 0 && (listData.value[len - 1].state = false);
        len < props.num - 1 && (listData.value[len + 1].state = false);
    };
    const closeFocus = () => {
        listData.value.forEach(elem => {
            elem.state = false;
        });
    };
    const clickDocument = () => {
        listData.value.forEach(elem => {
            elem.state = false;
        });
    };
    watch(() => props.modelValue, updateList);
    watch(() => props.isFocus, value => {
        !value && closeFocus();
    });
    onMounted(() => {
        Bind(document, 'click', clickDocument);
    });
    onUnmounted(() => {
        Unbind(document, 'click', clickDocument);
    });
    return { listData, handleClick };
};

var script$D = defineComponent({
    name: 'MePassword',
    emits: ['update:modelValue', 'on-focus', 'on-blur'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'password'
        },
        num: {
            type: Number,
            default: 6
        },
        skinType: {
            type: String,
            default: 'white'
        },
        isFocus: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { listData, handleClick } = useHandler$g(props, emit);
        return { listData, handleClick };
    }
});

const _hoisted_1$w = { key: 0 };
const _hoisted_2$h = {
  key: 1,
  class: "iconfont icon-dian"
};

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 密码/数字输入框 "),
    withDirectives(createElementVNode("ul", {
      class: normalizeClass(["me-password", `me-password-${_ctx.skinType}${_ctx.type === 'number' ? ' me-password-number' : ''}`]),
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["stop"]))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
        return (openBlock(), createElementBlock("li", {
          key: item.id,
          class: normalizeClass({ active: item.state })
        }, [
          (_ctx.type === 'number')
            ? (openBlock(), createElementBlock("span", _hoisted_1$w, toDisplayString(item.value), 1 /* TEXT */))
            : (item.value !== '')
              ? (openBlock(), createElementBlock("i", _hoisted_2$h))
              : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */), [
      [vShow, _ctx.listData.length > 0]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$D.render = render$D;
script$D.__file = "packages/MePassword/index.vue";

script$D.install = (app) => {
    app.component(script$D.name, script$D);
};
const InMePassword = script$D;

const useSearch = (props, emit) => {
    const inputVal = ref(props.modelValue);
    const onKeypress = (e) => {
        e.key === 'Enter' && emit('on-search');
    };
    const onFocus = (e) => {
        emit('on-focus', e);
    };
    const onBlur = (e) => {
        emit('on-blur', e);
    };
    const onChange = (e) => {
        emit('on-change', e);
    };
    const onInput = (e) => {
        emit('on-input', e);
    };
    watch(() => props.modelValue, value => {
        inputVal.value = value;
    });
    watch(inputVal, value => {
        emit('update:modelValue', value);
    });
    return { inputVal, onKeypress, onFocus, onBlur, onInput, onChange };
};
const useBtns$6 = (emit) => {
    const onClean = () => {
        emit('update:modelValue', '');
    };
    const handleBtn = () => {
        emit('on-click');
    };
    return { onClean, handleBtn };
};

var script$C = defineComponent({
    name: 'MeSearch',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:modelValue', 'on-click', 'on-search', 'on-focus', 'on-blur', 'on-input', 'on-change'],
    props: {
        modelValue: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: '请搜索'
        },
        btnText: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            default: 'left'
        },
        radius: {
            type: String,
            default: '4px'
        },
        background: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { inputVal, onKeypress, onFocus, onBlur, onInput, onChange } = useSearch(props, emit);
        const { onClean, handleBtn } = useBtns$6(emit);
        return { inputVal, onKeypress, onFocus, onBlur, onInput, onChange, onClean, handleBtn };
    }
});

const _hoisted_1$v = ["placeholder", "disabled"];

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 搜索 "),
    createElementVNode("div", {
      class: "me-search",
      style: normalizeStyle(`border-radius:${_ctx.radius};background:${_ctx.background};color:${_ctx.color};`)
    }, [
      createVNode(_component_me_icon, {
        name: "icon-search1",
        size: "15px",
        color: "inherit"
      }),
      withDirectives(createElementVNode("input", {
        type: "search",
        class: "u-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputVal) = $event)),
        onFocus: _cache[1] || (_cache[1] = (...args) => (_ctx.onFocus && _ctx.onFocus(...args))),
        onBlur: _cache[2] || (_cache[2] = (...args) => (_ctx.onBlur && _ctx.onBlur(...args))),
        onKeypress: _cache[3] || (_cache[3] = (...args) => (_ctx.onKeypress && _ctx.onKeypress(...args))),
        onInput: _cache[4] || (_cache[4] = (...args) => (_ctx.onInput && _ctx.onInput(...args))),
        onChange: _cache[5] || (_cache[5] = (...args) => (_ctx.onChange && _ctx.onChange(...args))),
        placeholder: _ctx.placeholder,
        style: normalizeStyle(`text-align:${_ctx.align};`),
        disabled: _ctx.disabled
      }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1$v), [
        [vModelText, _ctx.inputVal]
      ]),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          (_ctx.modelValue)
            ? (openBlock(), createBlock(_component_me_icon, {
                key: 0,
                name: "icon-close",
                size: "16px",
                color: "inherit",
                onOnClick: _ctx.onClean
              }, null, 8 /* PROPS */, ["onOnClick"]))
            : createCommentVNode("v-if", true)
        ]),
        _: 1 /* STABLE */
      }),
      (_ctx.btnText)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "u-btn",
            onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.handleBtn && _ctx.handleBtn(...args)))
          }, toDisplayString(_ctx.btnText), 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$C.render = render$C;
script$C.__file = "packages/MeSearch/index.vue";

script$C.install = (app) => {
    app.component(script$C.name, script$C);
};
const InMeSearch = script$C;

const useHandler$f = (props, emit) => {
    const listData = ref(Array.from({ length: props.count }, (k, v) => ({ id: v + 1, state: false })));
    const onClick = ({ id, state }) => {
        if ((state && !listData.value[id].state) || props.disabled || props.readonly)
            return;
        emit('update:modelValue', id);
        emit('on-change');
        listData.value.forEach(elem => {
            elem.state = elem.id <= id;
        });
    };
    const setStatus = () => {
        listData.value.forEach(elem => {
            elem.state = elem.id <= props.modelValue;
        });
    };
    watch(() => props.modelValue, setStatus);
    setStatus();
    return { listData, onClick };
};

var script$B = defineComponent({
    name: 'MeRate',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: Number,
            validator: (value) => !String(value).includes('.'),
            default: 0
        },
        icon: {
            type: String,
            default: 'icon-star4'
        },
        iconSelect: {
            type: String,
            default: 'icon-star3'
        },
        color: {
            type: String,
            default: '#fed835'
        },
        count: {
            type: Number,
            default: 5
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tips: {
            type: Array,
            default: () => ['非常不满意', '不满意', '一般', '满意', '非常满意']
        },
        tipsColor: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { listData, onClick } = useHandler$f(props, emit);
        return { listData, onClick };
    }
});

const _hoisted_1$u = ["data-disabled"];

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 评分机制 "),
    createElementVNode("div", {
      class: "me-rate",
      style: normalizeStyle(`font-size:${_ctx.size};`),
      "data-disabled": _ctx.disabled
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
        return (openBlock(), createBlock(_component_me_icon, {
          key: item.id,
          name: item.state ? _ctx.iconSelect : _ctx.icon,
          size: "inherit",
          color: item.state ? _ctx.color : '#949494',
          onOnClick: $event => (_ctx.onClick(item))
        }, null, 8 /* PROPS */, ["name", "color", "onOnClick"]))
      }), 128 /* KEYED_FRAGMENT */)),
      (_ctx.tips.length > 0 && _ctx.modelValue > 0)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "u-tips",
            style: normalizeStyle(`color:${_ctx.tipsColor};`)
          }, toDisplayString(_ctx.tips[_ctx.modelValue - 1]), 5 /* TEXT, STYLE */))
        : createCommentVNode("v-if", true)
    ], 12 /* STYLE, PROPS */, _hoisted_1$u)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$B.render = render$B;
script$B.__file = "packages/MeRate/index.vue";

script$B.install = (app) => {
    app.component(script$B.name, script$B);
};
const InMeRate$1 = script$B;

const useHandler$e = (props, emit) => {
    const currentValue = ref(100);
    let startX = 0;
    let changeValue = 0;
    let screenW = 0;
    const handleCurrent = () => {
        currentValue.value = 100 + props.min - props.modelValue;
    };
    const onTouchstart = (e) => {
        startX = e.changedTouches[0].clientX;
        changeValue = props.modelValue;
        screenW = document.body.offsetWidth;
        emit('on-start', e);
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = Math.ceil(((currentX - startX) * 100) / screenW);
        let afterVal = changeValue + diffX;
        afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal;
        emit('update:modelValue', afterVal);
        emit('on-move', e);
    };
    const onTouchend = (e) => {
        emit('on-end', e);
    };
    const onMousemove = (e) => {
        const currentX = e.clientX;
        const diffX = Math.ceil(((currentX - startX) * 100) / screenW);
        let afterVal = changeValue + diffX;
        afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal;
        emit('update:modelValue', afterVal);
        emit('on-move', e);
    };
    const onMouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
        emit('on-end', e);
    };
    const onMousedown = (e) => {
        startX = e.clientX;
        changeValue = props.modelValue;
        screenW = document.body.offsetWidth;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
        emit('on-start', e);
    };
    watch(() => props.modelValue, () => {
        !props.disabled && handleCurrent();
    });
    handleCurrent();
    return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script$A = defineComponent({
    name: 'MeSlider',
    emits: ['update:modelValue', 'on-start', 'on-move', 'on-end'],
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 0
        },
        styles: {
            type: Object,
            default: () => ({
                height: '',
                radius: '',
                lineBgc: ''
            })
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isBtn: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandler$e(props, emit);
        return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1$t = ["data-disabled"];
const _hoisted_2$g = {
  key: 0,
  class: "u-round"
};

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 滑块 "),
    createElementVNode("div", {
      class: "me-slider",
      "data-disabled": _ctx.disabled
    }, [
      createCommentVNode(" 颜色线条 "),
      createElementVNode("p", {
        class: "u-line",
        style: normalizeStyle(`height:${_ctx.styles.height};border-radius:${_ctx.styles.radius};`)
      }, [
        createElementVNode("span", {
          style: normalizeStyle(`background:${_ctx.styles.lineBgc};transform:translateX(-${_ctx.currentValue}%);`)
        }, null, 4 /* STYLE */)
      ], 4 /* STYLE */),
      createCommentVNode(" 拖拽div "),
      createElementVNode("div", mergeProps({
        class: "m-drag",
        style: `left:${100 - _ctx.currentValue}%;`
      }, toHandlers({
        touchmove: _ctx.onTouchmove,
        touchend: _ctx.onTouchend
      }), {
        onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
        onTouchend: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
        onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
      }), [
        createCommentVNode(" 圆点 "),
        (!_ctx.isBtn)
          ? (openBlock(), createElementBlock("span", _hoisted_2$g))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" 自定义按钮 "),
              renderSlot(_ctx.$slots, "default")
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ], 16 /* FULL_PROPS */)
    ], 8 /* PROPS */, _hoisted_1$t)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$A.render = render$A;
script$A.__file = "packages/MeSlider/index.vue";

script$A.install = (app) => {
    app.component(script$A.name, script$A);
};
const InMeSlider = script$A;

var Validator = {
    validPhone: /^1[3456789]\d{9}$/,
    validPwd: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
    validEmail: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
    validIdcard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
    validImgs: /\.(svg|gif|png|jpe?g)$/i,
    validThousand: /(\d)(?=(\d{3})+$)/g,
    validThousandFloat: /(\d)(?=(\d{3})+\.)/g
};

const { validThousand, validThousandFloat } = Validator;
const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const DeepCopyRA = (arg) => {
    const newValue = IsType('Object', arg)
        ? {}
        : IsType('Array', arg)
            ? []
            : IsType('Date', arg)
                ? new arg.constructor(+arg)
                : IsType('RegExp', arg) || IsType('Error', arg)
                    ? new arg.constructor(arg)
                    : arg;
    IsType('Object', arg) ||
        (IsType('Array', arg) &&
            Object.keys(arg).forEach(key => {
                newValue[key] = DeepCopyRA(arg[key]);
            }));
    return newValue;
};
const IsLeapyear = (num) => {
    if (!IsType('Number', num)) {
        throw new Error(`${num} is not number`);
    }
    return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
};
const FormatTime = (arg = new Date()) => {
    if (arg.trim() === '')
        throw new Error(`${arg} is not null`);
    const str = IsType('Number', arg) && String(arg).length < 13 ? arg * 1000 : arg;
    IsType('string', arg) && str.replace(/-/g, '/');
    const O = new Date(str);
    const doubleDigit = (num) => (num < 10 ? `0${num}` : String(num));
    const weeks = ['日', '一', '二', '三', '四', '五', '六'];
    const [Y, M, D, w, h, m, s] = [
        String(O.getFullYear()),
        doubleDigit(O.getMonth() + 1),
        doubleDigit(O.getDate()),
        `星期${weeks[O.getDay()]}`,
        doubleDigit(O.getHours()),
        doubleDigit(O.getMinutes()),
        doubleDigit(O.getSeconds())
    ];
    const date = `${Y}-${M}-${D}`;
    const time = `${h}:${m}:${s}`;
    const datetime = `${date} ${time}`;
    return { Y, M, D, w, h, m, s, date, time, datetime };
};
const CountDown = (num, format = 'hh:mm:ss') => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    if (!'DD:hh:mm:ss:ms'.includes(format)) {
        throw new Error(`${format} form error`);
    }
    const DD = ~~(num / (1000 * 60 * 60 * 24));
    let hh = ~~((num / (1000 * 60 * 60)) % 24);
    let mm = ~~((num / (1000 * 60)) % 60);
    let ss = ~~((num / 1000) % 60);
    let ms = ~~(num % 1000);
    const formatData = {};
    const doubleDigit = (digit) => (digit < 10 ? `0${digit}` : String(digit));
    format.includes('DD') ? (formatData.DD = doubleDigit(DD)) : (hh += DD * 24);
    format.includes('hh') ? (formatData.hh = doubleDigit(hh)) : (mm += hh * 60);
    format.includes('mm') ? (formatData.mm = doubleDigit(mm)) : (ss += mm * 60);
    format.includes('ss') ? (formatData.ss = doubleDigit(ss)) : (ms += ss * 1000);
    if (format.includes('ms')) {
        const curMs = format.includes('mm') ? doubleDigit(ms) : num;
        formatData.ms = +String(curMs).slice(0, 2);
    }
    return formatData;
};
const Throttle = (fn, time = 1000) => {
    let timer = null;
    return (e) => {
        !timer &&
            (timer = setTimeout(() => {
                fn(e);
                timer = null;
            }, time));
    };
};
const Debounce = (fn, time = 300) => {
    let timer;
    return (e) => {
        if (timer !== undefined)
            clearTimeout(timer);
        timer = setTimeout(() => {
            fn(e);
        }, time);
    };
};
const FormatThousand = (num) => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    const numStr = String(num);
    return numStr.replace(numStr.includes('.') ? validThousandFloat : validThousand, '$1,');
};
const Locked = (fn, time = 5000) => {
    let timer = null;
    const isLocked = { value: false };
    const isLockedProxy = new Proxy(isLocked, {
        get(obj, prop) {
            return obj[prop];
        },
        set(obj, prop, value) {
            obj[prop] = value;
            if (value) {
                timer = setTimeout(() => {
                    obj[prop] = false;
                }, time);
            }
            else {
                clearInterval(timer);
            }
            return true;
        }
    });
    return (e) => {
        !isLockedProxy.value &&
            fn(e, (value) => {
                isLockedProxy.value = value;
            });
    };
};
const AddZero = (str, float1, float2) => str + new Array(Math.abs(float1 - float2) + 1).join('0');
const Calculation = (num1, num2) => {
    if (!IsType('Number', num1) || !IsType('Number', num2)) {
        throw new Error(`${num1} or ${num2} is not number`);
    }
    const list1 = String(num1).split('.');
    const list2 = String(num2).split('.');
    const float1 = list1[1]?.length ?? 0;
    const float2 = list2[1]?.length ?? 0;
    float1 < float2 && (list1[1] = AddZero(list1[1], float1, float2));
    float1 > float2 && (list2[1] = AddZero(list2[1], float1, float2));
    const newNum1 = +list1.join('');
    const newNum2 = +list2.join('');
    const maxFloat = Math.max(float1, float2);
    const add = () => (newNum1 + newNum2) / 10 ** maxFloat;
    const subtract = () => (newNum1 - newNum2) / 10 ** maxFloat;
    const multiply = () => (newNum1 * newNum2) / 10 ** (maxFloat * 2);
    const divide = () => newNum1 / newNum2;
    return { add, subtract, multiply, divide };
};
const GenerateRandom = () => +new Date() + String.prototype.slice.call(Math.random(), 2, 7);
const Retarder = (time = 500) => new Promise(resolve => {
    setTimeout(() => {
        resolve(true);
    }, time);
});
var API$1 = {
    IsType,
    DeepCopyRA,
    IsLeapyear,
    FormatTime,
    CountDown,
    Throttle,
    Debounce,
    FormatThousand,
    Locked,
    AddZero,
    Calculation,
    GenerateRandom,
    Retarder
};

const useHandMove$4 = (props) => {
    const max = props.maxDate.getFullYear();
    const min = props.minDate.getFullYear();
    const listData = ref([
        {
            id: 1,
            list: Array.from({ length: max - min + 1 }, (k, v) => min + v)
        },
        {
            id: 2,
            list: 12
        },
        {
            id: 3,
            list: 31
        },
        {
            id: 4,
            list: 24
        },
        {
            id: 5,
            list: 60
        }
    ]);
    const typeIds = {
        'year-month': [1, 2],
        'month-day': [2, 3],
        time: [4, 5],
        datetime: [1, 2, 3, 4, 5]
    };
    const ids = typeIds[props.type] ?? [1, 2, 3];
    const show = ref(ids);
    const lenObj = { length: ids.length };
    const distance = ref(Array.from(lenObj, () => 88));
    const currentValue = Array.from(lenObj);
    ids.forEach((elem, i) => {
        const { list } = listData.value[elem - 1];
        currentValue[i] = typeof list === 'number' ? +!(i === 3 || i === 4) : list[0];
    });
    let startY = 0;
    let startDistence = 0;
    let startTime = 0;
    const duration = ref(0);
    const filterNumber = computed(() => (num) => num < 10 ? `0${num}` : num);
    const openTransition = (time) => {
        duration.value = time;
        setTimeout(() => {
            duration.value = 0;
        }, time);
    };
    const setDateDist = (i) => {
        const index = show.value.indexOf(i);
        let oldDist = distance.value[index];
        const len = listData.value[2].list - 1;
        if (oldDist > 88) {
            oldDist = 88;
        }
        else if (oldDist < 88 - len * 44) {
            oldDist = 88 - len * 44;
        }
        distance.value[index] = oldDist;
        openTransition(400);
        const count = Math.abs(oldDist / 44 - 2);
        currentValue[show.value.indexOf(3)] = count + 1;
    };
    const setValue = (tarDir, i) => {
        const count = Math.abs(tarDir / 44 - 2);
        const { list } = listData.value[i - 1];
        let current = 0;
        if (i === 4 || i === 5) {
            current = typeof list === 'number' ? count : list[count];
        }
        else {
            current = typeof list === 'number' ? count + 1 : list[count];
        }
        if (i === 2 && show.value.includes(3)) {
            if (current === 2) {
                const Year = show.value.includes(1) ? currentValue[0] : new Date().getFullYear();
                listData.value[2].list = IsLeapyear(Year) ? 29 : 28;
            }
            else {
                listData.value[2].list = (current > 7 && current % 2 !== 0) || (current <= 7 && current % 2 === 0) ? 30 : 31;
            }
            setDateDist(i + 1);
        }
        currentValue[show.value.indexOf(i)] = current;
    };
    const onTouchstart = (e, i) => {
        startY = e.changedTouches[0].clientY;
        startDistence = distance.value[show.value.indexOf(i)];
        startTime = +new Date();
    };
    const onTouchmove = (e, i) => {
        const currentY = e.changedTouches[0].clientY;
        const diffX = currentY - startY;
        const actualDist = startDistence + diffX;
        distance.value[show.value.indexOf(i)] = actualDist;
    };
    const onTouchend = (e, i) => {
        const index = show.value.indexOf(i);
        let oldDist = distance.value[index];
        const endTime = +new Date();
        const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2);
        if (speed > 0.12 || speed < -0.12) {
            const wantDist = Math.ceil(speed * 400);
            oldDist += wantDist;
        }
        const surplus = oldDist % 44;
        if (surplus !== 0) {
            let tarDir = 0;
            if (surplus > 0) {
                tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
            }
            else {
                tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
            }
            const { list } = listData.value[i - 1];
            const len = typeof list === 'number' ? list - 1 : list.length - 1;
            if (tarDir > 88) {
                tarDir = 88;
            }
            else if (tarDir < 88 - len * 44) {
                tarDir = 88 - len * 44;
            }
            distance.value[index] = tarDir;
            openTransition(400);
            setValue(tarDir, i);
        }
    };
    const onMousedown = (e, i) => {
        startY = e.clientY;
        startDistence = distance.value[show.value.indexOf(i)];
        startTime = +new Date();
        document.onmousemove = (ev) => {
            const currentY = ev.clientY;
            const diffX = currentY - startY;
            const actualDist = startDistence + diffX;
            distance.value[show.value.indexOf(i)] = actualDist;
        };
        document.onmouseup = (ev) => {
            const index = show.value.indexOf(i);
            let oldDist = distance.value[index];
            const endTime = +new Date();
            const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2);
            if (speed > 0.12 || speed < -0.12) {
                const wantDist = Math.ceil(speed * 400);
                oldDist += wantDist;
            }
            const surplus = oldDist % 44;
            if (surplus !== 0) {
                let tarDir = 0;
                if (surplus > 0) {
                    tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
                }
                else {
                    tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
                }
                const { list } = listData.value[i - 1];
                const len = typeof list === 'number' ? list - 1 : list.length - 1;
                if (tarDir > 88) {
                    tarDir = 88;
                }
                else if (tarDir < 88 - len * 44) {
                    tarDir = 88 - len * 44;
                }
                distance.value[index] = tarDir;
                openTransition(400);
                setValue(tarDir, i);
            }
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    return { show, currentValue, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown };
};
const useBtns$5 = (props, emit, currentValue) => {
    const onCancel = () => {
        emit('on-cancel');
    };
    const onSure = () => {
        const str = currentValue.reduce((prev, elem, i) => {
            const val = elem < 10 ? `0${elem}` : elem;
            let separator = '';
            if (props.type === 'time') {
                separator = ':';
            }
            else if (props.type === 'datetime') {
                separator = i < 3 ? '-' : i === 3 ? ' ' : ':';
            }
            else {
                separator = '-';
            }
            return prev + separator + val;
        }, '');
        emit('update:modelValue', str.slice(1));
        emit('on-sure', currentValue);
    };
    return { onCancel, onSure };
};

var script$z = defineComponent({
    name: 'MeDatetimePicker',
    emits: ['update:modelValue', 'on-cancel', 'on-sure'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'datetime'
        },
        visible: {
            type: Boolean,
            default: false
        },
        minDate: {
            type: Date,
            default: () => {
                const now = new Date();
                now.setFullYear(now.getFullYear() - 10);
                return now;
            }
        },
        maxDate: {
            type: Date,
            default: () => {
                const now = new Date();
                now.setFullYear(now.getFullYear() + 10);
                return now;
            }
        }
    },
    setup(props, { emit }) {
        const { show, currentValue, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove$4(props);
        const { onCancel, onSure } = useBtns$5(props, emit, currentValue);
        return { show, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown, onCancel, onSure };
    }
});

const _hoisted_1$s = {
  key: 0,
  class: "me-datetime-picker"
};
const _hoisted_2$f = { class: "m-hd" };
const _hoisted_3$9 = /*#__PURE__*/createElementVNode("span", { class: "u-line" }, null, -1 /* HOISTED */);
const _hoisted_4$6 = { class: "m-bd" };
const _hoisted_5$4 = ["onTouchstart", "onTouchmove", "onTouchend", "onMousedown"];

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 时间选择器 "),
    createVNode(Transition, { name: "translate" }, {
      default: withCtx(() => [
        (_ctx.visible)
          ? (openBlock(), createElementBlock("div", _hoisted_1$s, [
              createCommentVNode(" 头部按钮 "),
              createElementVNode("div", _hoisted_2$f, [
                createElementVNode("button", {
                  type: "button",
                  class: "u-cancel",
                  onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
                }, "取消"),
                _hoisted_3$9,
                createElementVNode("button", {
                  type: "button",
                  class: "u-sure",
                  onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onSure && _ctx.onSure(...args)))
                }, "确定")
              ]),
              createCommentVNode(" 主体内容 "),
              createElementVNode("ul", _hoisted_4$6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
                  return (openBlock(), createElementBlock(Fragment, null, [
                    (_ctx.show.includes(item.id))
                      ? (openBlock(), createElementBlock("li", {
                          key: item.id,
                          onTouchstart: withModifiers($event => (_ctx.onTouchstart($event, item.id)), ["prevent"]),
                          onTouchmove: $event => (_ctx.onTouchmove($event, item.id)),
                          onTouchend: $event => (_ctx.onTouchend($event, item.id)),
                          onMousedown: withModifiers($event => (_ctx.onMousedown($event, item.id)), ["prevent"])
                        }, [
                          createCommentVNode(" 移动的区域 "),
                          createElementVNode("ol", {
                            style: normalizeStyle(`transform:translateY(${_ctx.distance[_ctx.show.indexOf(item.id)]}px);transition-property:${_ctx.duration > 0 ? 'all' : 'none'};transition-duration: ${_ctx.duration}ms;`)
                          }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.list, (num, i) => {
                              return (openBlock(), createElementBlock("li", { key: i }, toDisplayString(_ctx.filterNumber(item.id === 5 || item.id === 4 ? num - 1 : num)), 1 /* TEXT */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 4 /* STYLE */)
                        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$4))
                      : createCommentVNode("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */))
                }), 256 /* UNKEYED_FRAGMENT */))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    })
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$z.render = render$z;
script$z.__file = "packages/MeDatetimePicker/index.vue";

script$z.install = (app) => {
    app.component(script$z.name, script$z);
};
const InMeDatetimePicker = script$z;

var areaData = {
    86: {
        110000: '北京市',
        120000: '天津市',
        130000: '河北省',
        140000: '山西省',
        150000: '内蒙古自治区',
        210000: '辽宁省',
        220000: '吉林省',
        230000: '黑龙江省',
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
        350000: '福建省',
        360000: '江西省',
        370000: '山东省',
        410000: '河南省',
        420000: '湖北省',
        430000: '湖南省',
        440000: '广东省',
        450000: '广西壮族自治区',
        460000: '海南省',
        500000: '重庆市',
        510000: '四川省',
        520000: '贵州省',
        530000: '云南省',
        540000: '西藏自治区',
        610000: '陕西省',
        620000: '甘肃省',
        630000: '青海省',
        640000: '宁夏回族自治区',
        650000: '新疆维吾尔自治区',
        710000: '台湾省',
        8100000: '香港特别行政区',
        8200000: '澳门特别行政区'
    },
    710000: {
        7100000: '台湾省'
    },
    7100000: {
        7100000: '台湾省'
    },
    8100000: {
        810000: '香港特别行政区'
    },
    8200000: {
        820000: '澳门特别行政区'
    },
    110000: {
        110100: '北京市市辖区'
    },
    110100: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        110107: '石景山区',
        110108: '海淀区',
        110109: '门头沟区',
        110111: '房山区',
        110112: '通州区',
        110113: '顺义区',
        110114: '昌平区',
        110115: '大兴区',
        110116: '怀柔区',
        110117: '平谷区',
        110118: '密云区',
        110119: '延庆区'
    },
    120000: {
        120100: '天津市市辖区',
        120200: '天津市郊县'
    },
    120200: {
        1202000: '天津市郊县'
    },
    120100: {
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区',
        120106: '红桥区',
        120110: '东丽区',
        120111: '西青区',
        120112: '津南区',
        120113: '北辰区',
        120114: '武清区',
        120115: '宝坻区',
        120116: '滨海新区',
        120117: '宁河区',
        120118: '静海区',
        120225: '蓟县'
    },
    130000: {
        130100: '石家庄市',
        130200: '唐山市',
        130300: '秦皇岛市',
        130400: '邯郸市',
        130500: '邢台市',
        130600: '保定市',
        130700: '张家口市',
        130800: '承德市',
        130900: '沧州市',
        131000: '廊坊市',
        131100: '衡水市'
    },
    130100: {
        130102: '长安区',
        130104: '桥西区',
        130105: '新华区',
        130107: '井陉矿区',
        130108: '裕华区',
        130109: '藁城区',
        130110: '鹿泉区',
        130111: '栾城区',
        130121: '井陉县',
        130123: '正定县',
        130125: '行唐县',
        130126: '灵寿县',
        130127: '高邑县',
        130128: '深泽县',
        130129: '赞皇县',
        130130: '无极县',
        130131: '平山县',
        130132: '元氏县',
        130133: '赵县',
        130181: '辛集市',
        130183: '晋州市',
        130184: '新乐市'
    },
    130200: {
        130202: '路南区',
        130203: '路北区',
        130204: '古冶区',
        130205: '开平区',
        130207: '丰南区',
        130208: '丰润区',
        130209: '曹妃甸区',
        130223: '滦县',
        130224: '滦南县',
        130225: '乐亭县',
        130227: '迁西县',
        130229: '玉田县',
        130281: '遵化市',
        130283: '迁安市'
    },
    130300: {
        130302: '海港区',
        130303: '山海关区',
        130304: '北戴河区',
        130306: '抚宁区',
        130321: '青龙满族自治县',
        130322: '昌黎县',
        130324: '卢龙县'
    },
    130400: {
        130402: '邯山区',
        130403: '丛台区',
        130404: '复兴区',
        130406: '峰峰矿区',
        130421: '邯郸县',
        130423: '临漳县',
        130424: '成安县',
        130425: '大名县',
        130426: '涉县',
        130427: '磁县',
        130428: '肥乡县',
        130429: '永年县',
        130430: '邱县',
        130431: '鸡泽县',
        130432: '广平县',
        130433: '馆陶县',
        130434: '魏县',
        130435: '曲周县',
        130481: '武安市'
    },
    130500: {
        130502: '桥东区',
        130503: '桥西区',
        130521: '邢台县',
        130522: '临城县',
        130523: '内丘县',
        130524: '柏乡县',
        130525: '隆尧县',
        130526: '任县',
        130527: '南和县',
        130528: '宁晋县',
        130529: '巨鹿县',
        130530: '新河县',
        130531: '广宗县',
        130532: '平乡县',
        130533: '威县',
        130534: '清河县',
        130535: '临西县',
        130581: '南宫市',
        130582: '沙河市'
    },
    130600: {
        130602: '竞秀区',
        130606: '莲池区',
        130607: '满城区',
        130608: '清苑区',
        130609: '徐水区',
        130623: '涞水县',
        130624: '阜平县',
        130626: '定兴县',
        130627: '唐县',
        130628: '高阳县',
        130629: '容城县',
        130630: '涞源县',
        130631: '望都县',
        130632: '安新县',
        130633: '易县',
        130634: '曲阳县',
        130635: '蠡县',
        130636: '顺平县',
        130637: '博野县',
        130638: '雄县',
        130681: '涿州市',
        130682: '定州市',
        130683: '安国市',
        130684: '高碑店市'
    },
    130700: {
        130702: '桥东区',
        130703: '桥西区',
        130705: '宣化区',
        130706: '下花园区',
        130721: '宣化县',
        130722: '张北县',
        130723: '康保县',
        130724: '沽源县',
        130725: '尚义县',
        130726: '蔚县',
        130727: '阳原县',
        130728: '怀安县',
        130729: '万全县',
        130730: '怀来县',
        130731: '涿鹿县',
        130732: '赤城县',
        130733: '崇礼县'
    },
    130800: {
        130802: '双桥区',
        130803: '双滦区',
        130804: '鹰手营子矿区',
        130821: '承德县',
        130822: '兴隆县',
        130823: '平泉县',
        130824: '滦平县',
        130825: '隆化县',
        130826: '丰宁满族自治县',
        130827: '宽城满族自治县',
        130828: '围场满族蒙古族自治县'
    },
    130900: {
        130902: '新华区',
        130903: '运河区',
        130921: '沧县',
        130922: '青县',
        130923: '东光县',
        130924: '海兴县',
        130925: '盐山县',
        130926: '肃宁县',
        130927: '南皮县',
        130928: '吴桥县',
        130929: '献县',
        130930: '孟村回族自治县',
        130981: '泊头市',
        130982: '任丘市',
        130983: '黄骅市',
        130984: '河间市'
    },
    131000: {
        131002: '安次区',
        131003: '广阳区',
        131022: '固安县',
        131023: '永清县',
        131024: '香河县',
        131025: '大城县',
        131026: '文安县',
        131028: '大厂回族自治县',
        131081: '霸州市',
        131082: '三河市'
    },
    131100: {
        131102: '桃城区',
        131121: '枣强县',
        131122: '武邑县',
        131123: '武强县',
        131124: '饶阳县',
        131125: '安平县',
        131126: '故城县',
        131127: '景县',
        131128: '阜城县',
        131181: '冀州市',
        131182: '深州市'
    },
    140000: {
        140100: '太原市',
        140200: '大同市',
        140300: '阳泉市',
        140400: '长治市',
        140500: '晋城市',
        140600: '朔州市',
        140700: '晋中市',
        140800: '运城市',
        140900: '忻州市',
        141000: '临汾市',
        141100: '吕梁市'
    },
    140100: {
        140105: '小店区',
        140106: '迎泽区',
        140107: '杏花岭区',
        140108: '尖草坪区',
        140109: '万柏林区',
        140110: '晋源区',
        140121: '清徐县',
        140122: '阳曲县',
        140123: '娄烦县',
        140181: '古交市'
    },
    140200: {
        140202: '城区',
        140203: '矿区',
        140211: '南郊区',
        140212: '新荣区',
        140221: '阳高县',
        140222: '天镇县',
        140223: '广灵县',
        140224: '灵丘县',
        140225: '浑源县',
        140226: '左云县',
        140227: '大同县'
    },
    140300: {
        140302: '城区',
        140303: '矿区',
        140311: '郊区',
        140321: '平定县',
        140322: '盂县'
    },
    140400: {
        140402: '城区',
        140411: '郊区',
        140421: '长治县',
        140423: '襄垣县',
        140424: '屯留县',
        140425: '平顺县',
        140426: '黎城县',
        140427: '壶关县',
        140428: '长子县',
        140429: '武乡县',
        140430: '沁县',
        140431: '沁源县',
        140481: '潞城市'
    },
    140500: {
        140502: '城区',
        140521: '沁水县',
        140522: '阳城县',
        140524: '陵川县',
        140525: '泽州县',
        140581: '高平市'
    },
    140600: {
        140602: '朔城区',
        140603: '平鲁区',
        140621: '山阴县',
        140622: '应县',
        140623: '右玉县',
        140624: '怀仁县'
    },
    140700: {
        140702: '榆次区',
        140721: '榆社县',
        140722: '左权县',
        140723: '和顺县',
        140724: '昔阳县',
        140725: '寿阳县',
        140726: '太谷县',
        140727: '祁县',
        140728: '平遥县',
        140729: '灵石县',
        140781: '介休市'
    },
    140800: {
        140802: '盐湖区',
        140821: '临猗县',
        140822: '万荣县',
        140823: '闻喜县',
        140824: '稷山县',
        140825: '新绛县',
        140826: '绛县',
        140827: '垣曲县',
        140828: '夏县',
        140829: '平陆县',
        140830: '芮城县',
        140881: '永济市',
        140882: '河津市'
    },
    140900: {
        140902: '忻府区',
        140921: '定襄县',
        140922: '五台县',
        140923: '代县',
        140924: '繁峙县',
        140925: '宁武县',
        140926: '静乐县',
        140927: '神池县',
        140928: '五寨县',
        140929: '岢岚县',
        140930: '河曲县',
        140931: '保德县',
        140932: '偏关县',
        140981: '原平市'
    },
    141000: {
        141002: '尧都区',
        141021: '曲沃县',
        141022: '翼城县',
        141023: '襄汾县',
        141024: '洪洞县',
        141025: '古县',
        141026: '安泽县',
        141027: '浮山县',
        141028: '吉县',
        141029: '乡宁县',
        141030: '大宁县',
        141031: '隰县',
        141032: '永和县',
        141033: '蒲县',
        141034: '汾西县',
        141081: '侯马市',
        141082: '霍州市'
    },
    141100: {
        141102: '离石区',
        141121: '文水县',
        141122: '交城县',
        141123: '兴县',
        141124: '临县',
        141125: '柳林县',
        141126: '石楼县',
        141127: '岚县',
        141128: '方山县',
        141129: '中阳县',
        141130: '交口县',
        141181: '孝义市',
        141182: '汾阳市'
    },
    150000: {
        150100: '呼和浩特市',
        150200: '包头市',
        150300: '乌海市',
        150400: '赤峰市',
        150500: '通辽市',
        150600: '鄂尔多斯市',
        150700: '呼伦贝尔市',
        150800: '巴彦淖尔市',
        150900: '乌兰察布市',
        152200: '兴安盟',
        152500: '锡林郭勒盟',
        152900: '阿拉善盟'
    },
    150100: {
        150102: '新城区',
        150103: '回民区',
        150104: '玉泉区',
        150105: '赛罕区',
        150121: '土默特左旗',
        150122: '托克托县',
        150123: '和林格尔县',
        150124: '清水河县',
        150125: '武川县'
    },
    150200: {
        150202: '东河区',
        150203: '昆都仑区',
        150204: '青山区',
        150205: '石拐区',
        150206: '白云鄂博矿区',
        150207: '九原区',
        150221: '土默特右旗',
        150222: '固阳县',
        150223: '达尔罕茂明安联合旗'
    },
    150300: {
        150302: '海勃湾区',
        150303: '海南区',
        150304: '乌达区'
    },
    150400: {
        150402: '红山区',
        150403: '元宝山区',
        150404: '松山区',
        150421: '阿鲁科尔沁旗',
        150422: '巴林左旗',
        150423: '巴林右旗',
        150424: '林西县',
        150425: '克什克腾旗',
        150426: '翁牛特旗',
        150428: '喀喇沁旗',
        150429: '宁城县',
        150430: '敖汉旗'
    },
    150500: {
        150502: '科尔沁区',
        150521: '科尔沁左翼中旗',
        150522: '科尔沁左翼后旗',
        150523: '开鲁县',
        150524: '库伦旗',
        150525: '奈曼旗',
        150526: '扎鲁特旗',
        150581: '霍林郭勒市'
    },
    150600: {
        150602: '东胜区',
        150621: '达拉特旗',
        150622: '准格尔旗',
        150623: '鄂托克前旗',
        150624: '鄂托克旗',
        150625: '杭锦旗',
        150626: '乌审旗',
        150627: '伊金霍洛旗'
    },
    150700: {
        150702: '海拉尔区',
        150703: '扎赉诺尔区',
        150721: '阿荣旗',
        150722: '莫力达瓦达斡尔族自治旗',
        150723: '鄂伦春自治旗',
        150724: '鄂温克族自治旗',
        150725: '陈巴尔虎旗',
        150726: '新巴尔虎左旗',
        150727: '新巴尔虎右旗',
        150781: '满洲里市',
        150782: '牙克石市',
        150783: '扎兰屯市',
        150784: '额尔古纳市',
        150785: '根河市'
    },
    150800: {
        150802: '临河区',
        150821: '五原县',
        150822: '磴口县',
        150823: '乌拉特前旗',
        150824: '乌拉特中旗',
        150825: '乌拉特后旗',
        150826: '杭锦后旗'
    },
    150900: {
        150902: '集宁区',
        150921: '卓资县',
        150922: '化德县',
        150923: '商都县',
        150924: '兴和县',
        150925: '凉城县',
        150926: '察哈尔右翼前旗',
        150927: '察哈尔右翼中旗',
        150928: '察哈尔右翼后旗',
        150929: '四子王旗',
        150981: '丰镇市'
    },
    152200: {
        152201: '乌兰浩特市',
        152202: '阿尔山市',
        152221: '科尔沁右翼前旗',
        152222: '科尔沁右翼中旗',
        152223: '扎赉特旗',
        152224: '突泉县'
    },
    152500: {
        152501: '二连浩特市',
        152502: '锡林浩特市',
        152522: '阿巴嘎旗',
        152523: '苏尼特左旗',
        152524: '苏尼特右旗',
        152525: '东乌珠穆沁旗',
        152526: '西乌珠穆沁旗',
        152527: '太仆寺旗',
        152528: '镶黄旗',
        152529: '正镶白旗',
        152530: '正蓝旗',
        152531: '多伦县'
    },
    152900: {
        152921: '阿拉善左旗',
        152922: '阿拉善右旗',
        152923: '额济纳旗'
    },
    210000: {
        210100: '沈阳市',
        210200: '大连市',
        210300: '鞍山市',
        210400: '抚顺市',
        210500: '本溪市',
        210600: '丹东市',
        210700: '锦州市',
        210800: '营口市',
        210900: '阜新市',
        211000: '辽阳市',
        211100: '盘锦市',
        211200: '铁岭市',
        211300: '朝阳市',
        211400: '葫芦岛市'
    },
    210100: {
        210102: '和平区',
        210103: '沈河区',
        210104: '大东区',
        210105: '皇姑区',
        210106: '铁西区',
        210111: '苏家屯区',
        210112: '浑南区',
        210113: '沈北新区',
        210114: '于洪区',
        210122: '辽中县',
        210123: '康平县',
        210124: '法库县',
        210181: '新民市'
    },
    210200: {
        210202: '中山区',
        210203: '西岗区',
        210204: '沙河口区',
        210211: '甘井子区',
        210212: '旅顺口区',
        210213: '金州区',
        210214: '普兰店区',
        210224: '长海县',
        210281: '瓦房店市',
        210283: '庄河市'
    },
    210300: {
        210302: '铁东区',
        210303: '铁西区',
        210304: '立山区',
        210311: '千山区',
        210321: '台安县',
        210323: '岫岩满族自治县',
        210381: '海城市'
    },
    210400: {
        210402: '新抚区',
        210403: '东洲区',
        210404: '望花区',
        210411: '顺城区',
        210421: '抚顺县',
        210422: '新宾满族自治县',
        210423: '清原满族自治县'
    },
    210500: {
        210502: '平山区',
        210503: '溪湖区',
        210504: '明山区',
        210505: '南芬区',
        210521: '本溪满族自治县',
        210522: '桓仁满族自治县'
    },
    210600: {
        210602: '元宝区',
        210603: '振兴区',
        210604: '振安区',
        210624: '宽甸满族自治县',
        210681: '东港市',
        210682: '凤城市'
    },
    210700: {
        210702: '古塔区',
        210703: '凌河区',
        210711: '太和区',
        210726: '黑山县',
        210727: '义县',
        210781: '凌海市',
        210782: '北镇市'
    },
    210800: {
        210802: '站前区',
        210803: '西市区',
        210804: '鲅鱼圈区',
        210811: '老边区',
        210881: '盖州市',
        210882: '大石桥市'
    },
    210900: {
        210902: '海州区',
        210903: '新邱区',
        210904: '太平区',
        210905: '清河门区',
        210911: '细河区',
        210921: '阜新蒙古族自治县',
        210922: '彰武县'
    },
    211000: {
        211002: '白塔区',
        211003: '文圣区',
        211004: '宏伟区',
        211005: '弓长岭区',
        211011: '太子河区',
        211021: '辽阳县',
        211081: '灯塔市'
    },
    211100: {
        211102: '双台子区',
        211103: '兴隆台区',
        211121: '大洼县',
        211122: '盘山县'
    },
    211200: {
        211202: '银州区',
        211204: '清河区',
        211221: '铁岭县',
        211223: '西丰县',
        211224: '昌图县',
        211281: '调兵山市',
        211282: '开原市'
    },
    211300: {
        211302: '双塔区',
        211303: '龙城区',
        211321: '朝阳县',
        211322: '建平县',
        211324: '喀喇沁左翼蒙古族自治县',
        211381: '北票市',
        211382: '凌源市'
    },
    211400: {
        211402: '连山区',
        211403: '龙港区',
        211404: '南票区',
        211421: '绥中县',
        211422: '建昌县',
        211481: '兴城市'
    },
    220000: {
        220100: '长春市',
        220200: '吉林市',
        220300: '四平市',
        220400: '辽源市',
        220500: '通化市',
        220600: '白山市',
        220700: '松原市',
        220800: '白城市',
        222400: '延边朝鲜族自治州'
    },
    220100: {
        220102: '南关区',
        220103: '宽城区',
        220104: '朝阳区',
        220105: '二道区',
        220106: '绿园区',
        220112: '双阳区',
        220113: '九台区',
        220122: '农安县',
        220182: '榆树市',
        220183: '德惠市'
    },
    220200: {
        220202: '昌邑区',
        220203: '龙潭区',
        220204: '船营区',
        220211: '丰满区',
        220221: '永吉县',
        220281: '蛟河市',
        220282: '桦甸市',
        220283: '舒兰市',
        220284: '磐石市'
    },
    220300: {
        220302: '铁西区',
        220303: '铁东区',
        220322: '梨树县',
        220323: '伊通满族自治县',
        220381: '公主岭市',
        220382: '双辽市'
    },
    220400: {
        220402: '龙山区',
        220403: '西安区',
        220421: '东丰县',
        220422: '东辽县'
    },
    220500: {
        220502: '东昌区',
        220503: '二道江区',
        220521: '通化县',
        220523: '辉南县',
        220524: '柳河县',
        220581: '梅河口市',
        220582: '集安市'
    },
    220600: {
        220602: '浑江区',
        220605: '江源区',
        220621: '抚松县',
        220622: '靖宇县',
        220623: '长白朝鲜族自治县',
        220681: '临江市'
    },
    220700: {
        220702: '宁江区',
        220721: '前郭尔罗斯蒙古族自治县',
        220722: '长岭县',
        220723: '乾安县',
        220781: '扶余市'
    },
    220800: {
        220802: '洮北区',
        220821: '镇赉县',
        220822: '通榆县',
        220881: '洮南市',
        220882: '大安市'
    },
    222400: {
        222401: '延吉市',
        222402: '图们市',
        222403: '敦化市',
        222404: '珲春市',
        222405: '龙井市',
        222406: '和龙市',
        222424: '汪清县',
        222426: '安图县'
    },
    230000: {
        230100: '哈尔滨市',
        230200: '齐齐哈尔市',
        230300: '鸡西市',
        230400: '鹤岗市',
        230500: '双鸭山市',
        230600: '大庆市',
        230700: '伊春市',
        230800: '佳木斯市',
        230900: '七台河市',
        231000: '牡丹江市',
        231100: '黑河市',
        231200: '绥化市',
        232700: '大兴安岭地区'
    },
    230100: {
        230102: '道里区',
        230103: '南岗区',
        230104: '道外区',
        230108: '平房区',
        230109: '松北区',
        230110: '香坊区',
        230111: '呼兰区',
        230112: '阿城区',
        230113: '双城区',
        230123: '依兰县',
        230124: '方正县',
        230125: '宾县',
        230126: '巴彦县',
        230127: '木兰县',
        230128: '通河县',
        230129: '延寿县',
        230183: '尚志市',
        230184: '五常市'
    },
    230200: {
        230202: '龙沙区',
        230203: '建华区',
        230204: '铁锋区',
        230205: '昂昂溪区',
        230206: '富拉尔基区',
        230207: '碾子山区',
        230208: '梅里斯达斡尔族区',
        230221: '龙江县',
        230223: '依安县',
        230224: '泰来县',
        230225: '甘南县',
        230227: '富裕县',
        230229: '克山县',
        230230: '克东县',
        230231: '拜泉县',
        230281: '讷河市'
    },
    230300: {
        230302: '鸡冠区',
        230303: '恒山区',
        230304: '滴道区',
        230305: '梨树区',
        230306: '城子河区',
        230307: '麻山区',
        230321: '鸡东县',
        230381: '虎林市',
        230382: '密山市'
    },
    230400: {
        230402: '向阳区',
        230403: '工农区',
        230404: '南山区',
        230405: '兴安区',
        230406: '东山区',
        230407: '兴山区',
        230421: '萝北县',
        230422: '绥滨县'
    },
    230500: {
        230502: '尖山区',
        230503: '岭东区',
        230505: '四方台区',
        230506: '宝山区',
        230521: '集贤县',
        230522: '友谊县',
        230523: '宝清县',
        230524: '饶河县'
    },
    230600: {
        230602: '萨尔图区',
        230603: '龙凤区',
        230604: '让胡路区',
        230605: '红岗区',
        230606: '大同区',
        230621: '肇州县',
        230622: '肇源县',
        230623: '林甸县',
        230624: '杜尔伯特蒙古族自治县'
    },
    230700: {
        230702: '伊春区',
        230703: '南岔区',
        230704: '友好区',
        230705: '西林区',
        230706: '翠峦区',
        230707: '新青区',
        230708: '美溪区',
        230709: '金山屯区',
        230710: '五营区',
        230711: '乌马河区',
        230712: '汤旺河区',
        230713: '带岭区',
        230714: '乌伊岭区',
        230715: '红星区',
        230716: '上甘岭区',
        230722: '嘉荫县',
        230781: '铁力市'
    },
    230800: {
        230803: '向阳区',
        230804: '前进区',
        230805: '东风区',
        230811: '郊区',
        230822: '桦南县',
        230826: '桦川县',
        230828: '汤原县',
        230833: '抚远市',
        230881: '同江市',
        230882: '富锦市'
    },
    230900: {
        230902: '新兴区',
        230903: '桃山区',
        230904: '茄子河区',
        230921: '勃利县'
    },
    231000: {
        231002: '东安区',
        231003: '阳明区',
        231004: '爱民区',
        231005: '西安区',
        231025: '林口县',
        231081: '绥芬河市',
        231083: '海林市',
        231084: '宁安市',
        231085: '穆棱市',
        231086: '东宁市'
    },
    231100: {
        231102: '爱辉区',
        231121: '嫩江县',
        231123: '逊克县',
        231124: '孙吴县',
        231181: '北安市',
        231182: '五大连池市'
    },
    231200: {
        231202: '北林区',
        231221: '望奎县',
        231222: '兰西县',
        231223: '青冈县',
        231224: '庆安县',
        231225: '明水县',
        231226: '绥棱县',
        231281: '安达市',
        231282: '肇东市',
        231283: '海伦市'
    },
    232700: {
        232701: '加格达奇区',
        232721: '呼玛县',
        232722: '塔河县',
        232723: '漠河县'
    },
    310000: {
        310100: '上海市市辖区',
        310200: '上海市郊县'
    },
    310200: {
        3102000: '上海市郊县'
    },
    310100: {
        310101: '黄浦区',
        310104: '徐汇区',
        310105: '长宁区',
        310106: '静安区',
        310107: '普陀区',
        310109: '虹口区',
        310110: '杨浦区',
        310112: '闵行区',
        310113: '宝山区',
        310114: '嘉定区',
        310115: '浦东新区',
        310116: '金山区',
        310117: '松江区',
        310118: '青浦区',
        310120: '奉贤区',
        310230: '崇明县'
    },
    320000: {
        320100: '南京市',
        320200: '无锡市',
        320300: '徐州市',
        320400: '常州市',
        320500: '苏州市',
        320600: '南通市',
        320700: '连云港市',
        320800: '淮安市',
        320900: '盐城市',
        321000: '扬州市',
        321100: '镇江市',
        321200: '泰州市',
        321300: '宿迁市'
    },
    320100: {
        320102: '玄武区',
        320104: '秦淮区',
        320105: '建邺区',
        320106: '鼓楼区',
        320111: '浦口区',
        320113: '栖霞区',
        320114: '雨花台区',
        320115: '江宁区',
        320116: '六合区',
        320117: '溧水区',
        320118: '高淳区'
    },
    320200: {
        320205: '锡山区',
        320206: '惠山区',
        320211: '滨湖区',
        320213: '梁溪区',
        320214: '新吴区',
        320281: '江阴市',
        320282: '宜兴市'
    },
    320300: {
        320302: '鼓楼区',
        320303: '云龙区',
        320305: '贾汪区',
        320311: '泉山区',
        320312: '铜山区',
        320321: '丰县',
        320322: '沛县',
        320324: '睢宁县',
        320381: '新沂市',
        320382: '邳州市'
    },
    320400: {
        320402: '天宁区',
        320404: '钟楼区',
        320411: '新北区',
        320412: '武进区',
        320413: '金坛区',
        320481: '溧阳市'
    },
    320500: {
        320505: '虎丘区',
        320506: '吴中区',
        320507: '相城区',
        320508: '姑苏区',
        320509: '吴江区',
        320581: '常熟市',
        320582: '张家港市',
        320583: '昆山市',
        320585: '太仓市'
    },
    320600: {
        320602: '崇川区',
        320611: '港闸区',
        320612: '通州区',
        320621: '海安县',
        320623: '如东县',
        320681: '启东市',
        320682: '如皋市',
        320684: '海门市'
    },
    320700: {
        320703: '连云区',
        320706: '海州区',
        320707: '赣榆区',
        320722: '东海县',
        320723: '灌云县',
        320724: '灌南县'
    },
    320800: {
        320802: '清河区',
        320803: '淮安区',
        320804: '淮阴区',
        320811: '清浦区',
        320826: '涟水县',
        320829: '洪泽县',
        320830: '盱眙县',
        320831: '金湖县'
    },
    320900: {
        320902: '亭湖区',
        320903: '盐都区',
        320904: '大丰区',
        320921: '响水县',
        320922: '滨海县',
        320923: '阜宁县',
        320924: '射阳县',
        320925: '建湖县',
        320981: '东台市'
    },
    321000: {
        321002: '广陵区',
        321003: '邗江区',
        321012: '江都区',
        321023: '宝应县',
        321081: '仪征市',
        321084: '高邮市'
    },
    321100: {
        321102: '京口区',
        321111: '润州区',
        321112: '丹徒区',
        321181: '丹阳市',
        321182: '扬中市',
        321183: '句容市'
    },
    321200: {
        321202: '海陵区',
        321203: '高港区',
        321204: '姜堰区',
        321281: '兴化市',
        321282: '靖江市',
        321283: '泰兴市'
    },
    321300: {
        321302: '宿城区',
        321311: '宿豫区',
        321322: '沭阳县',
        321323: '泗阳县',
        321324: '泗洪县'
    },
    330000: {
        330100: '杭州市',
        330200: '宁波市',
        330300: '温州市',
        330400: '嘉兴市',
        330500: '湖州市',
        330600: '绍兴市',
        330700: '金华市',
        330800: '衢州市',
        330900: '舟山市',
        331000: '台州市',
        331100: '丽水市'
    },
    330100: {
        330102: '上城区',
        330103: '下城区',
        330104: '江干区',
        330105: '拱墅区',
        330106: '西湖区',
        330108: '滨江区',
        330109: '萧山区',
        330110: '余杭区',
        330111: '富阳区',
        330122: '桐庐县',
        330127: '淳安县',
        330182: '建德市',
        330185: '临安市'
    },
    330200: {
        330203: '海曙区',
        330204: '江东区',
        330205: '江北区',
        330206: '北仑区',
        330211: '镇海区',
        330212: '鄞州区',
        330225: '象山县',
        330226: '宁海县',
        330281: '余姚市',
        330282: '慈溪市',
        330283: '奉化市'
    },
    330300: {
        330302: '鹿城区',
        330303: '龙湾区',
        330304: '瓯海区',
        330305: '洞头区',
        330324: '永嘉县',
        330326: '平阳县',
        330327: '苍南县',
        330328: '文成县',
        330329: '泰顺县',
        330381: '瑞安市',
        330382: '乐清市'
    },
    330400: {
        330402: '南湖区',
        330411: '秀洲区',
        330421: '嘉善县',
        330424: '海盐县',
        330481: '海宁市',
        330482: '平湖市',
        330483: '桐乡市'
    },
    330500: {
        330502: '吴兴区',
        330503: '南浔区',
        330521: '德清县',
        330522: '长兴县',
        330523: '安吉县'
    },
    330600: {
        330602: '越城区',
        330603: '柯桥区',
        330604: '上虞区',
        330624: '新昌县',
        330681: '诸暨市',
        330683: '嵊州市'
    },
    330700: {
        330702: '婺城区',
        330703: '金东区',
        330723: '武义县',
        330726: '浦江县',
        330727: '磐安县',
        330781: '兰溪市',
        330782: '义乌市',
        330783: '东阳市',
        330784: '永康市'
    },
    330800: {
        330802: '柯城区',
        330803: '衢江区',
        330822: '常山县',
        330824: '开化县',
        330825: '龙游县',
        330881: '江山市'
    },
    330900: {
        330902: '定海区',
        330903: '普陀区',
        330921: '岱山县',
        330922: '嵊泗县'
    },
    331000: {
        331002: '椒江区',
        331003: '黄岩区',
        331004: '路桥区',
        331021: '玉环县',
        331022: '三门县',
        331023: '天台县',
        331024: '仙居县',
        331081: '温岭市',
        331082: '临海市'
    },
    331100: {
        331102: '莲都区',
        331121: '青田县',
        331122: '缙云县',
        331123: '遂昌县',
        331124: '松阳县',
        331125: '云和县',
        331126: '庆元县',
        331127: '景宁畲族自治县',
        331181: '龙泉市'
    },
    340000: {
        340100: '合肥市',
        340200: '芜湖市',
        340300: '蚌埠市',
        340400: '淮南市',
        340500: '马鞍山市',
        340600: '淮北市',
        340700: '铜陵市',
        340800: '安庆市',
        341000: '黄山市',
        341100: '滁州市',
        341200: '阜阳市',
        341300: '宿州市',
        341500: '六安市',
        341600: '亳州市',
        341700: '池州市',
        341800: '宣城市'
    },
    340100: {
        340102: '瑶海区',
        340103: '庐阳区',
        340104: '蜀山区',
        340111: '包河区',
        340121: '长丰县',
        340122: '肥东县',
        340123: '肥西县',
        340124: '庐江县',
        340181: '巢湖市'
    },
    340200: {
        340202: '镜湖区',
        340203: '弋江区',
        340207: '鸠江区',
        340208: '三山区',
        340221: '芜湖县',
        340222: '繁昌县',
        340223: '南陵县',
        340225: '无为县'
    },
    340300: {
        340302: '龙子湖区',
        340303: '蚌山区',
        340304: '禹会区',
        340311: '淮上区',
        340321: '怀远县',
        340322: '五河县',
        340323: '固镇县'
    },
    340400: {
        340402: '大通区',
        340403: '田家庵区',
        340404: '谢家集区',
        340405: '八公山区',
        340406: '潘集区',
        340421: '凤台县',
        340422: '寿县'
    },
    340500: {
        340503: '花山区',
        340504: '雨山区',
        340506: '博望区',
        340521: '当涂县',
        340522: '含山县',
        340523: '和县'
    },
    340600: {
        340602: '杜集区',
        340603: '相山区',
        340604: '烈山区',
        340621: '濉溪县'
    },
    340700: {
        340705: '铜官区',
        340706: '义安区',
        340711: '郊区',
        340722: '枞阳县'
    },
    340800: {
        340802: '迎江区',
        340803: '大观区',
        340811: '宜秀区',
        340822: '怀宁县',
        340824: '潜山县',
        340825: '太湖县',
        340826: '宿松县',
        340827: '望江县',
        340828: '岳西县',
        340881: '桐城市'
    },
    341000: {
        341002: '屯溪区',
        341003: '黄山区',
        341004: '徽州区',
        341021: '歙县',
        341022: '休宁县',
        341023: '黟县',
        341024: '祁门县'
    },
    341100: {
        341102: '琅琊区',
        341103: '南谯区',
        341122: '来安县',
        341124: '全椒县',
        341125: '定远县',
        341126: '凤阳县',
        341181: '天长市',
        341182: '明光市'
    },
    341200: {
        341202: '颍州区',
        341203: '颍东区',
        341204: '颍泉区',
        341221: '临泉县',
        341222: '太和县',
        341225: '阜南县',
        341226: '颍上县',
        341282: '界首市'
    },
    341300: {
        341302: '埇桥区',
        341321: '砀山县',
        341322: '萧县',
        341323: '灵璧县',
        341324: '泗县'
    },
    341500: {
        341502: '金安区',
        341503: '裕安区',
        341504: '叶集区',
        341522: '霍邱县',
        341523: '舒城县',
        341524: '金寨县',
        341525: '霍山县'
    },
    341600: {
        341602: '谯城区',
        341621: '涡阳县',
        341622: '蒙城县',
        341623: '利辛县'
    },
    341700: {
        341702: '贵池区',
        341721: '东至县',
        341722: '石台县',
        341723: '青阳县'
    },
    341800: {
        341802: '宣州区',
        341821: '郎溪县',
        341822: '广德县',
        341823: '泾县',
        341824: '绩溪县',
        341825: '旌德县',
        341881: '宁国市'
    },
    350000: {
        350100: '福州市',
        350200: '厦门市',
        350300: '莆田市',
        350400: '三明市',
        350500: '泉州市',
        350600: '漳州市',
        350700: '南平市',
        350800: '龙岩市',
        350900: '宁德市'
    },
    350100: {
        350102: '鼓楼区',
        350103: '台江区',
        350104: '仓山区',
        350105: '马尾区',
        350111: '晋安区',
        350121: '闽侯县',
        350122: '连江县',
        350123: '罗源县',
        350124: '闽清县',
        350125: '永泰县',
        350128: '平潭县',
        350181: '福清市',
        350182: '长乐市'
    },
    350200: {
        350203: '思明区',
        350205: '海沧区',
        350206: '湖里区',
        350211: '集美区',
        350212: '同安区',
        350213: '翔安区'
    },
    350300: {
        350302: '城厢区',
        350303: '涵江区',
        350304: '荔城区',
        350305: '秀屿区',
        350322: '仙游县'
    },
    350400: {
        350402: '梅列区',
        350403: '三元区',
        350421: '明溪县',
        350423: '清流县',
        350424: '宁化县',
        350425: '大田县',
        350426: '尤溪县',
        350427: '沙县',
        350428: '将乐县',
        350429: '泰宁县',
        350430: '建宁县',
        350481: '永安市'
    },
    350500: {
        350502: '鲤城区',
        350503: '丰泽区',
        350504: '洛江区',
        350505: '泉港区',
        350521: '惠安县',
        350524: '安溪县',
        350525: '永春县',
        350526: '德化县',
        350527: '金门县',
        350581: '石狮市',
        350582: '晋江市',
        350583: '南安市'
    },
    350600: {
        350602: '芗城区',
        350603: '龙文区',
        350622: '云霄县',
        350623: '漳浦县',
        350624: '诏安县',
        350625: '长泰县',
        350626: '东山县',
        350627: '南靖县',
        350628: '平和县',
        350629: '华安县',
        350681: '龙海市'
    },
    350700: {
        350702: '延平区',
        350703: '建阳区',
        350721: '顺昌县',
        350722: '浦城县',
        350723: '光泽县',
        350724: '松溪县',
        350725: '政和县',
        350781: '邵武市',
        350782: '武夷山市',
        350783: '建瓯市'
    },
    350800: {
        350802: '新罗区',
        350803: '永定区',
        350821: '长汀县',
        350823: '上杭县',
        350824: '武平县',
        350825: '连城县',
        350881: '漳平市'
    },
    350900: {
        350902: '蕉城区',
        350921: '霞浦县',
        350922: '古田县',
        350923: '屏南县',
        350924: '寿宁县',
        350925: '周宁县',
        350926: '柘荣县',
        350981: '福安市',
        350982: '福鼎市'
    },
    360000: {
        360100: '南昌市',
        360200: '景德镇市',
        360300: '萍乡市',
        360400: '九江市',
        360500: '新余市',
        360600: '鹰潭市',
        360700: '赣州市',
        360800: '吉安市',
        360900: '宜春市',
        361000: '抚州市',
        361100: '上饶市'
    },
    360100: {
        360102: '东湖区',
        360103: '西湖区',
        360104: '青云谱区',
        360105: '湾里区',
        360111: '青山湖区',
        360112: '新建区',
        360121: '南昌县',
        360123: '安义县',
        360124: '进贤县'
    },
    360200: {
        360202: '昌江区',
        360203: '珠山区',
        360222: '浮梁县',
        360281: '乐平市'
    },
    360300: {
        360302: '安源区',
        360313: '湘东区',
        360321: '莲花县',
        360322: '上栗县',
        360323: '芦溪县'
    },
    360400: {
        360402: '庐山区',
        360403: '浔阳区',
        360421: '九江县',
        360423: '武宁县',
        360424: '修水县',
        360425: '永修县',
        360426: '德安县',
        360427: '星子县',
        360428: '都昌县',
        360429: '湖口县',
        360430: '彭泽县',
        360481: '瑞昌市',
        360482: '共青城市'
    },
    360500: {
        360502: '渝水区',
        360521: '分宜县'
    },
    360600: {
        360602: '月湖区',
        360622: '余江县',
        360681: '贵溪市'
    },
    360700: {
        360702: '章贡区',
        360703: '南康区',
        360721: '赣县',
        360722: '信丰县',
        360723: '大余县',
        360724: '上犹县',
        360725: '崇义县',
        360726: '安远县',
        360727: '龙南县',
        360728: '定南县',
        360729: '全南县',
        360730: '宁都县',
        360731: '于都县',
        360732: '兴国县',
        360733: '会昌县',
        360734: '寻乌县',
        360735: '石城县',
        360781: '瑞金市'
    },
    360800: {
        360802: '吉州区',
        360803: '青原区',
        360821: '吉安县',
        360822: '吉水县',
        360823: '峡江县',
        360824: '新干县',
        360825: '永丰县',
        360826: '泰和县',
        360827: '遂川县',
        360828: '万安县',
        360829: '安福县',
        360830: '永新县',
        360881: '井冈山市'
    },
    360900: {
        360902: '袁州区',
        360921: '奉新县',
        360922: '万载县',
        360923: '上高县',
        360924: '宜丰县',
        360925: '靖安县',
        360926: '铜鼓县',
        360981: '丰城市',
        360982: '樟树市',
        360983: '高安市'
    },
    361000: {
        361002: '临川区',
        361021: '南城县',
        361022: '黎川县',
        361023: '南丰县',
        361024: '崇仁县',
        361025: '乐安县',
        361026: '宜黄县',
        361027: '金溪县',
        361028: '资溪县',
        361029: '东乡县',
        361030: '广昌县'
    },
    361100: {
        361102: '信州区',
        361103: '广丰区',
        361121: '上饶县',
        361123: '玉山县',
        361124: '铅山县',
        361125: '横峰县',
        361126: '弋阳县',
        361127: '余干县',
        361128: '鄱阳县',
        361129: '万年县',
        361130: '婺源县',
        361181: '德兴市'
    },
    370000: {
        370100: '济南市',
        370200: '青岛市',
        370300: '淄博市',
        370400: '枣庄市',
        370500: '东营市',
        370600: '烟台市',
        370700: '潍坊市',
        370800: '济宁市',
        370900: '泰安市',
        371000: '威海市',
        371100: '日照市',
        371200: '莱芜市',
        371300: '临沂市',
        371400: '德州市',
        371500: '聊城市',
        371600: '滨州市',
        371700: '菏泽市'
    },
    370100: {
        370102: '历下区',
        370103: '市中区',
        370104: '槐荫区',
        370105: '天桥区',
        370112: '历城区',
        370113: '长清区',
        370124: '平阴县',
        370125: '济阳县',
        370126: '商河县',
        370181: '章丘市'
    },
    370200: {
        370202: '市南区',
        370203: '市北区',
        370211: '黄岛区',
        370212: '崂山区',
        370213: '李沧区',
        370214: '城阳区',
        370281: '胶州市',
        370282: '即墨市',
        370283: '平度市',
        370285: '莱西市'
    },
    370300: {
        370302: '淄川区',
        370303: '张店区',
        370304: '博山区',
        370305: '临淄区',
        370306: '周村区',
        370321: '桓台县',
        370322: '高青县',
        370323: '沂源县'
    },
    370400: {
        370402: '市中区',
        370403: '薛城区',
        370404: '峄城区',
        370405: '台儿庄区',
        370406: '山亭区',
        370481: '滕州市'
    },
    370500: {
        370502: '东营区',
        370503: '河口区',
        370521: '垦利县',
        370522: '利津县',
        370523: '广饶县'
    },
    370600: {
        370602: '芝罘区',
        370611: '福山区',
        370612: '牟平区',
        370613: '莱山区',
        370634: '长岛县',
        370681: '龙口市',
        370682: '莱阳市',
        370683: '莱州市',
        370684: '蓬莱市',
        370685: '招远市',
        370686: '栖霞市',
        370687: '海阳市'
    },
    370700: {
        370702: '潍城区',
        370703: '寒亭区',
        370704: '坊子区',
        370705: '奎文区',
        370724: '临朐县',
        370725: '昌乐县',
        370781: '青州市',
        370782: '诸城市',
        370783: '寿光市',
        370784: '安丘市',
        370785: '高密市',
        370786: '昌邑市'
    },
    370800: {
        370811: '任城区',
        370812: '兖州区',
        370826: '微山县',
        370827: '鱼台县',
        370828: '金乡县',
        370829: '嘉祥县',
        370830: '汶上县',
        370831: '泗水县',
        370832: '梁山县',
        370881: '曲阜市',
        370883: '邹城市'
    },
    370900: {
        370902: '泰山区',
        370911: '岱岳区',
        370921: '宁阳县',
        370923: '东平县',
        370982: '新泰市',
        370983: '肥城市'
    },
    371000: {
        371002: '环翠区',
        371003: '文登区',
        371082: '荣成市',
        371083: '乳山市'
    },
    371100: {
        371102: '东港区',
        371103: '岚山区',
        371121: '五莲县',
        371122: '莒县'
    },
    371200: {
        371202: '莱城区',
        371203: '钢城区'
    },
    371300: {
        371302: '兰山区',
        371311: '罗庄区',
        371312: '河东区',
        371321: '沂南县',
        371322: '郯城县',
        371323: '沂水县',
        371324: '兰陵县',
        371325: '费县',
        371326: '平邑县',
        371327: '莒南县',
        371328: '蒙阴县',
        371329: '临沭县'
    },
    371400: {
        371402: '德城区',
        371403: '陵城区',
        371422: '宁津县',
        371423: '庆云县',
        371424: '临邑县',
        371425: '齐河县',
        371426: '平原县',
        371427: '夏津县',
        371428: '武城县',
        371481: '乐陵市',
        371482: '禹城市'
    },
    371500: {
        371502: '东昌府区',
        371521: '阳谷县',
        371522: '莘县',
        371523: '茌平县',
        371524: '东阿县',
        371525: '冠县',
        371526: '高唐县',
        371581: '临清市'
    },
    371600: {
        371602: '滨城区',
        371603: '沾化区',
        371621: '惠民县',
        371622: '阳信县',
        371623: '无棣县',
        371625: '博兴县',
        371626: '邹平县'
    },
    371700: {
        371702: '牡丹区',
        371721: '曹县',
        371722: '单县',
        371723: '成武县',
        371724: '巨野县',
        371725: '郓城县',
        371726: '鄄城县',
        371727: '定陶县',
        371728: '东明县'
    },
    410000: {
        410100: '郑州市',
        410200: '开封市',
        410300: '洛阳市',
        410400: '平顶山市',
        410500: '安阳市',
        410600: '鹤壁市',
        410700: '新乡市',
        410800: '焦作市',
        410900: '濮阳市',
        411000: '许昌市',
        411100: '漯河市',
        411200: '三门峡市',
        411300: '南阳市',
        411400: '商丘市',
        411500: '信阳市',
        411600: '周口市',
        411700: '驻马店市',
        419001: '济源市'
    },
    419001: {
        4190010: '济源市'
    },
    410100: {
        410102: '中原区',
        410103: '二七区',
        410104: '管城回族区',
        410105: '金水区',
        410106: '上街区',
        410108: '惠济区',
        410122: '中牟县',
        410181: '巩义市',
        410182: '荥阳市',
        410183: '新密市',
        410184: '新郑市',
        410185: '登封市'
    },
    410200: {
        410202: '龙亭区',
        410203: '顺河回族区',
        410204: '鼓楼区',
        410205: '禹王台区',
        410212: '祥符区',
        410221: '杞县',
        410222: '通许县',
        410223: '尉氏县',
        410225: '兰考县'
    },
    410300: {
        410302: '老城区',
        410303: '西工区',
        410304: '瀍河回族区',
        410305: '涧西区',
        410306: '吉利区',
        410311: '洛龙区',
        410322: '孟津县',
        410323: '新安县',
        410324: '栾川县',
        410325: '嵩县',
        410326: '汝阳县',
        410327: '宜阳县',
        410328: '洛宁县',
        410329: '伊川县',
        410381: '偃师市'
    },
    410400: {
        410402: '新华区',
        410403: '卫东区',
        410404: '石龙区',
        410411: '湛河区',
        410421: '宝丰县',
        410422: '叶县',
        410423: '鲁山县',
        410425: '郏县',
        410481: '舞钢市',
        410482: '汝州市'
    },
    410500: {
        410502: '文峰区',
        410503: '北关区',
        410505: '殷都区',
        410506: '龙安区',
        410522: '安阳县',
        410523: '汤阴县',
        410526: '滑县',
        410527: '内黄县',
        410581: '林州市'
    },
    410600: {
        410602: '鹤山区',
        410603: '山城区',
        410611: '淇滨区',
        410621: '浚县',
        410622: '淇县'
    },
    410700: {
        410702: '红旗区',
        410703: '卫滨区',
        410704: '凤泉区',
        410711: '牧野区',
        410721: '新乡县',
        410724: '获嘉县',
        410725: '原阳县',
        410726: '延津县',
        410727: '封丘县',
        410728: '长垣县',
        410781: '卫辉市',
        410782: '辉县市'
    },
    410800: {
        410802: '解放区',
        410803: '中站区',
        410804: '马村区',
        410811: '山阳区',
        410821: '修武县',
        410822: '博爱县',
        410823: '武陟县',
        410825: '温县',
        410882: '沁阳市',
        410883: '孟州市'
    },
    410900: {
        410902: '华龙区',
        410922: '清丰县',
        410923: '南乐县',
        410926: '范县',
        410927: '台前县',
        410928: '濮阳县'
    },
    411000: {
        411002: '魏都区',
        411023: '许昌县',
        411024: '鄢陵县',
        411025: '襄城县',
        411081: '禹州市',
        411082: '长葛市'
    },
    411100: {
        411102: '源汇区',
        411103: '郾城区',
        411104: '召陵区',
        411121: '舞阳县',
        411122: '临颍县'
    },
    411200: {
        411202: '湖滨区',
        411203: '陕州区',
        411221: '渑池县',
        411224: '卢氏县',
        411281: '义马市',
        411282: '灵宝市'
    },
    411300: {
        411302: '宛城区',
        411303: '卧龙区',
        411321: '南召县',
        411322: '方城县',
        411323: '西峡县',
        411324: '镇平县',
        411325: '内乡县',
        411326: '淅川县',
        411327: '社旗县',
        411328: '唐河县',
        411329: '新野县',
        411330: '桐柏县',
        411381: '邓州市'
    },
    411400: {
        411402: '梁园区',
        411403: '睢阳区',
        411421: '民权县',
        411422: '睢县',
        411423: '宁陵县',
        411424: '柘城县',
        411425: '虞城县',
        411426: '夏邑县',
        411481: '永城市'
    },
    411500: {
        411502: '浉河区',
        411503: '平桥区',
        411521: '罗山县',
        411522: '光山县',
        411523: '新县',
        411524: '商城县',
        411525: '固始县',
        411526: '潢川县',
        411527: '淮滨县',
        411528: '息县'
    },
    411600: {
        411602: '川汇区',
        411621: '扶沟县',
        411622: '西华县',
        411623: '商水县',
        411624: '沈丘县',
        411625: '郸城县',
        411626: '淮阳县',
        411627: '太康县',
        411628: '鹿邑县',
        411681: '项城市'
    },
    411700: {
        411702: '驿城区',
        411721: '西平县',
        411722: '上蔡县',
        411723: '平舆县',
        411724: '正阳县',
        411725: '确山县',
        411726: '泌阳县',
        411727: '汝南县',
        411728: '遂平县',
        411729: '新蔡县'
    },
    420000: {
        420100: '武汉市',
        420200: '黄石市',
        420300: '十堰市',
        420500: '宜昌市',
        420600: '襄阳市',
        420700: '鄂州市',
        420800: '荆门市',
        420900: '孝感市',
        421000: '荆州市',
        421100: '黄冈市',
        421200: '咸宁市',
        421300: '随州市',
        422800: '恩施土家族苗族自治州',
        429004: '仙桃市',
        429005: '潜江市',
        429006: '天门市',
        429021: '神农架林区'
    },
    429004: {
        4290040: '仙桃市'
    },
    429005: {
        4290050: '潜江市'
    },
    429006: {
        4290060: '天门市'
    },
    429021: {
        4290210: '神农架林区'
    },
    420100: {
        420102: '江岸区',
        420103: '江汉区',
        420104: '硚口区',
        420105: '汉阳区',
        420106: '武昌区',
        420107: '青山区',
        420111: '洪山区',
        420112: '东西湖区',
        420113: '汉南区',
        420114: '蔡甸区',
        420115: '江夏区',
        420116: '黄陂区',
        420117: '新洲区'
    },
    420200: {
        420202: '黄石港区',
        420203: '西塞山区',
        420204: '下陆区',
        420205: '铁山区',
        420222: '阳新县',
        420281: '大冶市'
    },
    420300: {
        420302: '茅箭区',
        420303: '张湾区',
        420304: '郧阳区',
        420322: '郧西县',
        420323: '竹山县',
        420324: '竹溪县',
        420325: '房县',
        420381: '丹江口市'
    },
    420500: {
        420502: '西陵区',
        420503: '伍家岗区',
        420504: '点军区',
        420505: '猇亭区',
        420506: '夷陵区',
        420525: '远安县',
        420526: '兴山县',
        420527: '秭归县',
        420528: '长阳土家族自治县',
        420529: '五峰土家族自治县',
        420581: '宜都市',
        420582: '当阳市',
        420583: '枝江市'
    },
    420600: {
        420602: '襄城区',
        420606: '樊城区',
        420607: '襄州区',
        420624: '南漳县',
        420625: '谷城县',
        420626: '保康县',
        420682: '老河口市',
        420683: '枣阳市',
        420684: '宜城市'
    },
    420700: {
        420702: '梁子湖区',
        420703: '华容区',
        420704: '鄂城区'
    },
    420800: {
        420802: '东宝区',
        420804: '掇刀区',
        420821: '京山县',
        420822: '沙洋县',
        420881: '钟祥市'
    },
    420900: {
        420902: '孝南区',
        420921: '孝昌县',
        420922: '大悟县',
        420923: '云梦县',
        420981: '应城市',
        420982: '安陆市',
        420984: '汉川市'
    },
    421000: {
        421002: '沙市区',
        421003: '荆州区',
        421022: '公安县',
        421023: '监利县',
        421024: '江陵县',
        421081: '石首市',
        421083: '洪湖市',
        421087: '松滋市'
    },
    421100: {
        421102: '黄州区',
        421121: '团风县',
        421122: '红安县',
        421123: '罗田县',
        421124: '英山县',
        421125: '浠水县',
        421126: '蕲春县',
        421127: '黄梅县',
        421181: '麻城市',
        421182: '武穴市'
    },
    421200: {
        421202: '咸安区',
        421221: '嘉鱼县',
        421222: '通城县',
        421223: '崇阳县',
        421224: '通山县',
        421281: '赤壁市'
    },
    421300: {
        421303: '曾都区',
        421321: '随县',
        421381: '广水市'
    },
    422800: {
        422801: '恩施市',
        422802: '利川市',
        422822: '建始县',
        422823: '巴东县',
        422825: '宣恩县',
        422826: '咸丰县',
        422827: '来凤县',
        422828: '鹤峰县'
    },
    430000: {
        430100: '长沙市',
        430200: '株洲市',
        430300: '湘潭市',
        430400: '衡阳市',
        430500: '邵阳市',
        430600: '岳阳市',
        430700: '常德市',
        430800: '张家界市',
        430900: '益阳市',
        431000: '郴州市',
        431100: '永州市',
        431200: '怀化市',
        431300: '娄底市',
        433100: '湘西土家族苗族自治州'
    },
    430100: {
        430102: '芙蓉区',
        430103: '天心区',
        430104: '岳麓区',
        430105: '开福区',
        430111: '雨花区',
        430112: '望城区',
        430121: '长沙县',
        430124: '宁乡县',
        430181: '浏阳市'
    },
    430200: {
        430202: '荷塘区',
        430203: '芦淞区',
        430204: '石峰区',
        430211: '天元区',
        430221: '株洲县',
        430223: '攸县',
        430224: '茶陵县',
        430225: '炎陵县',
        430281: '醴陵市'
    },
    430300: {
        430302: '雨湖区',
        430304: '岳塘区',
        430321: '湘潭县',
        430381: '湘乡市',
        430382: '韶山市'
    },
    430400: {
        430405: '珠晖区',
        430406: '雁峰区',
        430407: '石鼓区',
        430408: '蒸湘区',
        430412: '南岳区',
        430421: '衡阳县',
        430422: '衡南县',
        430423: '衡山县',
        430424: '衡东县',
        430426: '祁东县',
        430481: '耒阳市',
        430482: '常宁市'
    },
    430500: {
        430502: '双清区',
        430503: '大祥区',
        430511: '北塔区',
        430521: '邵东县',
        430522: '新邵县',
        430523: '邵阳县',
        430524: '隆回县',
        430525: '洞口县',
        430527: '绥宁县',
        430528: '新宁县',
        430529: '城步苗族自治县',
        430581: '武冈市'
    },
    430600: {
        430602: '岳阳楼区',
        430603: '云溪区',
        430611: '君山区',
        430621: '岳阳县',
        430623: '华容县',
        430624: '湘阴县',
        430626: '平江县',
        430681: '汨罗市',
        430682: '临湘市'
    },
    430700: {
        430702: '武陵区',
        430703: '鼎城区',
        430721: '安乡县',
        430722: '汉寿县',
        430723: '澧县',
        430724: '临澧县',
        430725: '桃源县',
        430726: '石门县',
        430781: '津市市'
    },
    430800: {
        430802: '永定区',
        430811: '武陵源区',
        430821: '慈利县',
        430822: '桑植县'
    },
    430900: {
        430902: '资阳区',
        430903: '赫山区',
        430921: '南县',
        430922: '桃江县',
        430923: '安化县',
        430981: '沅江市'
    },
    431000: {
        431002: '北湖区',
        431003: '苏仙区',
        431021: '桂阳县',
        431022: '宜章县',
        431023: '永兴县',
        431024: '嘉禾县',
        431025: '临武县',
        431026: '汝城县',
        431027: '桂东县',
        431028: '安仁县',
        431081: '资兴市'
    },
    431100: {
        431102: '零陵区',
        431103: '冷水滩区',
        431121: '祁阳县',
        431122: '东安县',
        431123: '双牌县',
        431124: '道县',
        431125: '江永县',
        431126: '宁远县',
        431127: '蓝山县',
        431128: '新田县',
        431129: '江华瑶族自治县'
    },
    431200: {
        431202: '鹤城区',
        431221: '中方县',
        431222: '沅陵县',
        431223: '辰溪县',
        431224: '溆浦县',
        431225: '会同县',
        431226: '麻阳苗族自治县',
        431227: '新晃侗族自治县',
        431228: '芷江侗族自治县',
        431229: '靖州苗族侗族自治县',
        431230: '通道侗族自治县',
        431281: '洪江市'
    },
    431300: {
        431302: '娄星区',
        431321: '双峰县',
        431322: '新化县',
        431381: '冷水江市',
        431382: '涟源市'
    },
    433100: {
        433101: '吉首市',
        433122: '泸溪县',
        433123: '凤凰县',
        433124: '花垣县',
        433125: '保靖县',
        433126: '古丈县',
        433127: '永顺县',
        433130: '龙山县'
    },
    440000: {
        440100: '广州市',
        440200: '韶关市',
        440300: '深圳市',
        440400: '珠海市',
        440500: '汕头市',
        440600: '佛山市',
        440700: '江门市',
        440800: '湛江市',
        440900: '茂名市',
        441200: '肇庆市',
        441300: '惠州市',
        441400: '梅州市',
        441500: '汕尾市',
        441600: '河源市',
        441700: '阳江市',
        441800: '清远市',
        441900: '东莞市',
        442000: '中山市',
        445100: '潮州市',
        445200: '揭阳市',
        445300: '云浮市'
    },
    440100: {
        440103: '荔湾区',
        440104: '越秀区',
        440105: '海珠区',
        440106: '天河区',
        440111: '白云区',
        440112: '黄埔区',
        440113: '番禺区',
        440114: '花都区',
        440115: '南沙区',
        440117: '从化区',
        440118: '增城区'
    },
    440200: {
        440203: '武江区',
        440204: '浈江区',
        440205: '曲江区',
        440222: '始兴县',
        440224: '仁化县',
        440229: '翁源县',
        440232: '乳源瑶族自治县',
        440233: '新丰县',
        440281: '乐昌市',
        440282: '南雄市'
    },
    440300: {
        440303: '罗湖区',
        440304: '福田区',
        440305: '南山区',
        440306: '宝安区',
        440307: '龙岗区',
        440308: '盐田区'
    },
    440400: {
        440402: '香洲区',
        440403: '斗门区',
        440404: '金湾区'
    },
    440500: {
        440507: '龙湖区',
        440511: '金平区',
        440512: '濠江区',
        440513: '潮阳区',
        440514: '潮南区',
        440515: '澄海区',
        440523: '南澳县'
    },
    440600: {
        440604: '禅城区',
        440605: '南海区',
        440606: '顺德区',
        440607: '三水区',
        440608: '高明区'
    },
    440700: {
        440703: '蓬江区',
        440704: '江海区',
        440705: '新会区',
        440781: '台山市',
        440783: '开平市',
        440784: '鹤山市',
        440785: '恩平市'
    },
    440800: {
        440802: '赤坎区',
        440803: '霞山区',
        440804: '坡头区',
        440811: '麻章区',
        440823: '遂溪县',
        440825: '徐闻县',
        440881: '廉江市',
        440882: '雷州市',
        440883: '吴川市'
    },
    440900: {
        440902: '茂南区',
        440904: '电白区',
        440981: '高州市',
        440982: '化州市',
        440983: '信宜市'
    },
    441200: {
        441202: '端州区',
        441203: '鼎湖区',
        441204: '高要区',
        441223: '广宁县',
        441224: '怀集县',
        441225: '封开县',
        441226: '德庆县',
        441284: '四会市'
    },
    441300: {
        441302: '惠城区',
        441303: '惠阳区',
        441322: '博罗县',
        441323: '惠东县',
        441324: '龙门县'
    },
    441400: {
        441402: '梅江区',
        441403: '梅县区',
        441422: '大埔县',
        441423: '丰顺县',
        441424: '五华县',
        441426: '平远县',
        441427: '蕉岭县',
        441481: '兴宁市'
    },
    441500: {
        441502: '城区',
        441521: '海丰县',
        441523: '陆河县',
        441581: '陆丰市'
    },
    441600: {
        441602: '源城区',
        441621: '紫金县',
        441622: '龙川县',
        441623: '连平县',
        441624: '和平县',
        441625: '东源县'
    },
    441700: {
        441702: '江城区',
        441704: '阳东区',
        441721: '阳西县',
        441781: '阳春市'
    },
    441800: {
        441802: '清城区',
        441803: '清新区',
        441821: '佛冈县',
        441823: '阳山县',
        441825: '连山壮族瑶族自治县',
        441826: '连南瑶族自治县',
        441881: '英德市',
        441882: '连州市'
    },
    441900: {
        441900: '三元里'
    },
    442000: {
        442000: '湖滨北路'
    },
    445100: {
        445102: '湘桥区',
        445103: '潮安区',
        445122: '饶平县'
    },
    445200: {
        445202: '榕城区',
        445203: '揭东区',
        445222: '揭西县',
        445224: '惠来县',
        445281: '普宁市'
    },
    445300: {
        445302: '云城区',
        445303: '云安区',
        445321: '新兴县',
        445322: '郁南县',
        445381: '罗定市'
    },
    450000: {
        450100: '南宁市',
        450200: '柳州市',
        450300: '桂林市',
        450400: '梧州市',
        450500: '北海市',
        450600: '防城港市',
        450700: '钦州市',
        450800: '贵港市',
        450900: '玉林市',
        451000: '百色市',
        451100: '贺州市',
        451200: '河池市',
        451300: '来宾市',
        451400: '崇左市'
    },
    450100: {
        450102: '兴宁区',
        450103: '青秀区',
        450105: '江南区',
        450107: '西乡塘区',
        450108: '良庆区',
        450109: '邕宁区',
        450110: '武鸣区',
        450123: '隆安县',
        450124: '马山县',
        450125: '上林县',
        450126: '宾阳县',
        450127: '横县'
    },
    450200: {
        450202: '城中区',
        450203: '鱼峰区',
        450204: '柳南区',
        450205: '柳北区',
        450221: '柳江县',
        450222: '柳城县',
        450223: '鹿寨县',
        450224: '融安县',
        450225: '融水苗族自治县',
        450226: '三江侗族自治县'
    },
    450300: {
        450302: '秀峰区',
        450303: '叠彩区',
        450304: '象山区',
        450305: '七星区',
        450311: '雁山区',
        450312: '临桂区',
        450321: '阳朔县',
        450323: '灵川县',
        450324: '全州县',
        450325: '兴安县',
        450326: '永福县',
        450327: '灌阳县',
        450328: '龙胜各族自治县',
        450329: '资源县',
        450330: '平乐县',
        450331: '荔浦县',
        450332: '恭城瑶族自治县'
    },
    450400: {
        450403: '万秀区',
        450405: '长洲区',
        450406: '龙圩区',
        450421: '苍梧县',
        450422: '藤县',
        450423: '蒙山县',
        450481: '岑溪市'
    },
    450500: {
        450502: '海城区',
        450503: '银海区',
        450512: '铁山港区',
        450521: '合浦县'
    },
    450600: {
        450602: '港口区',
        450603: '防城区',
        450621: '上思县',
        450681: '东兴市'
    },
    450700: {
        450702: '钦南区',
        450703: '钦北区',
        450721: '灵山县',
        450722: '浦北县'
    },
    450800: {
        450802: '港北区',
        450803: '港南区',
        450804: '覃塘区',
        450821: '平南县',
        450881: '桂平市'
    },
    450900: {
        450902: '玉州区',
        450903: '福绵区',
        450921: '容县',
        450922: '陆川县',
        450923: '博白县',
        450924: '兴业县',
        450981: '北流市'
    },
    451000: {
        451002: '右江区',
        451021: '田阳县',
        451022: '田东县',
        451023: '平果县',
        451024: '德保县',
        451026: '那坡县',
        451027: '凌云县',
        451028: '乐业县',
        451029: '田林县',
        451030: '西林县',
        451031: '隆林各族自治县',
        451081: '靖西市'
    },
    451100: {
        451102: '八步区',
        451121: '昭平县',
        451122: '钟山县',
        451123: '富川瑶族自治县'
    },
    451200: {
        451202: '金城江区',
        451221: '南丹县',
        451222: '天峨县',
        451223: '凤山县',
        451224: '东兰县',
        451225: '罗城仫佬族自治县',
        451226: '环江毛南族自治县',
        451227: '巴马瑶族自治县',
        451228: '都安瑶族自治县',
        451229: '大化瑶族自治县',
        451281: '宜州市'
    },
    451300: {
        451302: '兴宾区',
        451321: '忻城县',
        451322: '象州县',
        451323: '武宣县',
        451324: '金秀瑶族自治县',
        451381: '合山市'
    },
    451400: {
        451402: '江州区',
        451421: '扶绥县',
        451422: '宁明县',
        451423: '龙州县',
        451424: '大新县',
        451425: '天等县',
        451481: '凭祥市'
    },
    460000: {
        460100: '海口市',
        460200: '三亚市',
        460300: '三沙市',
        460400: '儋州市',
        469001: '五指山市',
        469002: '琼海市',
        469005: '文昌市',
        469006: '万宁市',
        469007: '东方市',
        469021: '定安县',
        469022: '屯昌县',
        469023: '澄迈县',
        469024: '临高县',
        469025: '白沙黎族自治县',
        469026: '昌江黎族自治县',
        469027: '乐东黎族自治县',
        469028: '陵水黎族自治县',
        469029: '保亭黎族苗族自治县',
        469030: '琼中黎族苗族自治县'
    },
    460400: {
        4604000: '儋州市'
    },
    469002: {
        4690020: '琼海市'
    },
    469001: {
        4690010: '五指山市'
    },
    469005: {
        4690050: '文昌市'
    },
    469006: {
        469006: '万宁市'
    },
    469007: {
        4690070: '东方市'
    },
    469021: {
        4690210: '定安县'
    },
    469022: {
        4690220: '屯昌县'
    },
    469023: {
        4690230: '澄迈县'
    },
    469024: {
        4690240: '临高县'
    },
    469025: {
        4690250: '白沙黎族自治县'
    },
    469026: {
        4690260: '昌江黎族自治县'
    },
    469027: {
        4690270: '乐东黎族自治县'
    },
    469028: {
        4690280: '陵水黎族自治县'
    },
    469029: {
        4690290: '保亭黎族苗族自治县'
    },
    469030: {
        46902300: '琼中黎族苗族自治县'
    },
    460100: {
        460105: '秀英区',
        460106: '龙华区',
        460107: '琼山区',
        460108: '美兰区'
    },
    460200: {
        460200: '三亚湾',
        460202: '海棠区',
        460203: '吉阳区',
        460204: '天涯区',
        460205: '崖州区'
    },
    460300: {
        460321: '西沙群岛',
        460322: '南沙群岛',
        460323: '中沙群岛的岛礁及其海域'
    },
    500000: {
        500100: '重庆市市辖区',
        500200: '重庆市郊县'
    },
    500200: {
        5002000: '重庆市郊县'
    },
    500100: {
        500101: '万州区',
        500102: '涪陵区',
        500103: '渝中区',
        500104: '大渡口区',
        500105: '江北区',
        500106: '沙坪坝区',
        500107: '九龙坡区',
        500108: '南岸区',
        500109: '北碚区',
        500110: '綦江区',
        500111: '大足区',
        500112: '渝北区',
        500113: '巴南区',
        500114: '黔江区',
        500115: '长寿区',
        500116: '江津区',
        500117: '合川区',
        500118: '永川区',
        500119: '南川区',
        500120: '璧山区',
        500151: '铜梁区',
        500152: '潼南区',
        500153: '荣昌区',
        500228: '梁平县',
        500229: '城口县',
        500230: '丰都县',
        500231: '垫江县',
        500232: '武隆县',
        500233: '忠县',
        500234: '开县',
        500235: '云阳县',
        500236: '奉节县',
        500237: '巫山县',
        500238: '巫溪县',
        500240: '石柱土家族自治县',
        500241: '秀山土家族苗族自治县',
        500242: '酉阳土家族苗族自治县',
        500243: '彭水苗族土家族自治县'
    },
    510000: {
        510100: '成都市',
        510300: '自贡市',
        510400: '攀枝花市',
        510500: '泸州市',
        510600: '德阳市',
        510700: '绵阳市',
        510800: '广元市',
        510900: '遂宁市',
        511000: '内江市',
        511100: '乐山市',
        511300: '南充市',
        511400: '眉山市',
        511500: '宜宾市',
        511600: '广安市',
        511700: '达州市',
        511800: '雅安市',
        511900: '巴中市',
        512000: '资阳市',
        513200: '阿坝藏族羌族自治州',
        513300: '甘孜藏族自治州',
        513400: '凉山彝族自治州'
    },
    510100: {
        510104: '锦江区',
        510105: '青羊区',
        510106: '金牛区',
        510107: '武侯区',
        510108: '成华区',
        510112: '龙泉驿区',
        510113: '青白江区',
        510114: '新都区',
        510115: '温江区',
        510116: '双流区',
        510121: '金堂县',
        510124: '郫县',
        510129: '大邑县',
        510131: '蒲江县',
        510132: '新津县',
        510181: '都江堰市',
        510182: '彭州市',
        510183: '邛崃市',
        510184: '崇州市'
    },
    510300: {
        510302: '自流井区',
        510303: '贡井区',
        510304: '大安区',
        510311: '沿滩区',
        510321: '荣县',
        510322: '富顺县'
    },
    510400: {
        510402: '东区',
        510403: '西区',
        510411: '仁和区',
        510421: '米易县',
        510422: '盐边县'
    },
    510500: {
        510502: '江阳区',
        510503: '纳溪区',
        510504: '龙马潭区',
        510521: '泸县',
        510522: '合江县',
        510524: '叙永县',
        510525: '古蔺县'
    },
    510600: {
        510603: '旌阳区',
        510623: '中江县',
        510626: '罗江县',
        510681: '广汉市',
        510682: '什邡市',
        510683: '绵竹市'
    },
    510700: {
        510703: '涪城区',
        510704: '游仙区',
        510722: '三台县',
        510723: '盐亭县',
        510724: '安县',
        510725: '梓潼县',
        510726: '北川羌族自治县',
        510727: '平武县',
        510781: '江油市'
    },
    510800: {
        510802: '利州区',
        510811: '昭化区',
        510812: '朝天区',
        510821: '旺苍县',
        510822: '青川县',
        510823: '剑阁县',
        510824: '苍溪县'
    },
    510900: {
        510903: '船山区',
        510904: '安居区',
        510921: '蓬溪县',
        510922: '射洪县',
        510923: '大英县'
    },
    511000: {
        511002: '市中区',
        511011: '东兴区',
        511024: '威远县',
        511025: '资中县',
        511028: '隆昌县'
    },
    511100: {
        511102: '市中区',
        511111: '沙湾区',
        511112: '五通桥区',
        511113: '金口河区',
        511123: '犍为县',
        511124: '井研县',
        511126: '夹江县',
        511129: '沐川县',
        511132: '峨边彝族自治县',
        511133: '马边彝族自治县',
        511181: '峨眉山市'
    },
    511300: {
        511302: '顺庆区',
        511303: '高坪区',
        511304: '嘉陵区',
        511321: '南部县',
        511322: '营山县',
        511323: '蓬安县',
        511324: '仪陇县',
        511325: '西充县',
        511381: '阆中市'
    },
    511400: {
        511402: '东坡区',
        511403: '彭山区',
        511421: '仁寿县',
        511423: '洪雅县',
        511424: '丹棱县',
        511425: '青神县'
    },
    511500: {
        511502: '翠屏区',
        511503: '南溪区',
        511521: '宜宾县',
        511523: '江安县',
        511524: '长宁县',
        511525: '高县',
        511526: '珙县',
        511527: '筠连县',
        511528: '兴文县',
        511529: '屏山县'
    },
    511600: {
        511602: '广安区',
        511603: '前锋区',
        511621: '岳池县',
        511622: '武胜县',
        511623: '邻水县',
        511681: '华蓥市'
    },
    511700: {
        511702: '通川区',
        511703: '达川区',
        511722: '宣汉县',
        511723: '开江县',
        511724: '大竹县',
        511725: '渠县',
        511781: '万源市'
    },
    511800: {
        511802: '雨城区',
        511803: '名山区',
        511822: '荥经县',
        511823: '汉源县',
        511824: '石棉县',
        511825: '天全县',
        511826: '芦山县',
        511827: '宝兴县'
    },
    511900: {
        511902: '巴州区',
        511903: '恩阳区',
        511921: '通江县',
        511922: '南江县',
        511923: '平昌县'
    },
    512000: {
        512002: '雁江区',
        512021: '安岳县',
        512022: '乐至县',
        512081: '简阳市'
    },
    513200: {
        513201: '马尔康市',
        513221: '汶川县',
        513222: '理县',
        513223: '茂县',
        513224: '松潘县',
        513225: '九寨沟县',
        513226: '金川县',
        513227: '小金县',
        513228: '黑水县',
        513230: '壤塘县',
        513231: '阿坝县',
        513232: '若尔盖县',
        513233: '红原县'
    },
    513300: {
        513301: '康定市',
        513322: '泸定县',
        513323: '丹巴县',
        513324: '九龙县',
        513325: '雅江县',
        513326: '道孚县',
        513327: '炉霍县',
        513328: '甘孜县',
        513329: '新龙县',
        513330: '德格县',
        513331: '白玉县',
        513332: '石渠县',
        513333: '色达县',
        513334: '理塘县',
        513335: '巴塘县',
        513336: '乡城县',
        513337: '稻城县',
        513338: '得荣县'
    },
    513400: {
        513401: '西昌市',
        513422: '木里藏族自治县',
        513423: '盐源县',
        513424: '德昌县',
        513425: '会理县',
        513426: '会东县',
        513427: '宁南县',
        513428: '普格县',
        513429: '布拖县',
        513430: '金阳县',
        513431: '昭觉县',
        513432: '喜德县',
        513433: '冕宁县',
        513434: '越西县',
        513435: '甘洛县',
        513436: '美姑县',
        513437: '雷波县'
    },
    520000: {
        520100: '贵阳市',
        520200: '六盘水市',
        520300: '遵义市',
        520400: '安顺市',
        520500: '毕节市',
        520600: '铜仁市',
        522300: '黔西南布依族苗族自治州',
        522600: '黔东南苗族侗族自治州',
        522700: '黔南布依族苗族自治州'
    },
    520100: {
        520102: '南明区',
        520103: '云岩区',
        520111: '花溪区',
        520112: '乌当区',
        520113: '白云区',
        520115: '观山湖区',
        520121: '开阳县',
        520122: '息烽县',
        520123: '修文县',
        520181: '清镇市'
    },
    520200: {
        520201: '钟山区',
        520203: '六枝特区',
        520221: '水城县',
        520222: '盘县'
    },
    520300: {
        520302: '红花岗区',
        520303: '汇川区',
        520321: '遵义县',
        520322: '桐梓县',
        520323: '绥阳县',
        520324: '正安县',
        520325: '道真仡佬族苗族自治县',
        520326: '务川仡佬族苗族自治县',
        520327: '凤冈县',
        520328: '湄潭县',
        520329: '余庆县',
        520330: '习水县',
        520381: '赤水市',
        520382: '仁怀市'
    },
    520400: {
        520402: '西秀区',
        520403: '平坝区',
        520422: '普定县',
        520423: '镇宁布依族苗族自治县',
        520424: '关岭布依族苗族自治县',
        520425: '紫云苗族布依族自治县'
    },
    520500: {
        520502: '七星关区',
        520521: '大方县',
        520522: '黔西县',
        520523: '金沙县',
        520524: '织金县',
        520525: '纳雍县',
        520526: '威宁彝族回族苗族自治县',
        520527: '赫章县'
    },
    520600: {
        520602: '碧江区',
        520603: '万山区',
        520621: '江口县',
        520622: '玉屏侗族自治县',
        520623: '石阡县',
        520624: '思南县',
        520625: '印江土家族苗族自治县',
        520626: '德江县',
        520627: '沿河土家族自治县',
        520628: '松桃苗族自治县'
    },
    522300: {
        522301: '兴义市',
        522322: '兴仁县',
        522323: '普安县',
        522324: '晴隆县',
        522325: '贞丰县',
        522326: '望谟县',
        522327: '册亨县',
        522328: '安龙县'
    },
    522600: {
        522601: '凯里市',
        522622: '黄平县',
        522623: '施秉县',
        522624: '三穗县',
        522625: '镇远县',
        522626: '岑巩县',
        522627: '天柱县',
        522628: '锦屏县',
        522629: '剑河县',
        522630: '台江县',
        522631: '黎平县',
        522632: '榕江县',
        522633: '从江县',
        522634: '雷山县',
        522635: '麻江县',
        522636: '丹寨县'
    },
    522700: {
        522701: '都匀市',
        522702: '福泉市',
        522722: '荔波县',
        522723: '贵定县',
        522725: '瓮安县',
        522726: '独山县',
        522727: '平塘县',
        522728: '罗甸县',
        522729: '长顺县',
        522730: '龙里县',
        522731: '惠水县',
        522732: '三都水族自治县'
    },
    530000: {
        530100: '昆明市',
        530300: '曲靖市',
        530400: '玉溪市',
        530500: '保山市',
        530600: '昭通市',
        530700: '丽江市',
        530800: '普洱市',
        530900: '临沧市',
        532300: '楚雄彝族自治州',
        532500: '红河哈尼族彝族自治州',
        532600: '文山壮族苗族自治州',
        532800: '西双版纳傣族自治州',
        532900: '大理白族自治州',
        533100: '德宏傣族景颇族自治州',
        533300: '怒江傈僳族自治州',
        533400: '迪庆藏族自治州'
    },
    530100: {
        530102: '五华区',
        530103: '盘龙区',
        530111: '官渡区',
        530112: '西山区',
        530113: '东川区',
        530114: '呈贡区',
        530122: '晋宁县',
        530124: '富民县',
        530125: '宜良县',
        530126: '石林彝族自治县',
        530127: '嵩明县',
        530128: '禄劝彝族苗族自治县',
        530129: '寻甸回族彝族自治县',
        530181: '安宁市'
    },
    530300: {
        530302: '麒麟区',
        530321: '马龙县',
        530322: '陆良县',
        530323: '师宗县',
        530324: '罗平县',
        530325: '富源县',
        530326: '会泽县',
        530328: '沾益县',
        530381: '宣威市'
    },
    530400: {
        530402: '红塔区',
        530403: '江川区',
        530422: '澄江县',
        530423: '通海县',
        530424: '华宁县',
        530425: '易门县',
        530426: '峨山彝族自治县',
        530427: '新平彝族傣族自治县',
        530428: '元江哈尼族彝族傣族自治县'
    },
    530500: {
        530502: '隆阳区',
        530521: '施甸县',
        530523: '龙陵县',
        530524: '昌宁县',
        530581: '腾冲市'
    },
    530600: {
        530602: '昭阳区',
        530621: '鲁甸县',
        530622: '巧家县',
        530623: '盐津县',
        530624: '大关县',
        530625: '永善县',
        530626: '绥江县',
        530627: '镇雄县',
        530628: '彝良县',
        530629: '威信县',
        530630: '水富县'
    },
    530700: {
        530702: '古城区',
        530721: '玉龙纳西族自治县',
        530722: '永胜县',
        530723: '华坪县',
        530724: '宁蒗彝族自治县'
    },
    530800: {
        530802: '思茅区',
        530821: '宁洱哈尼族彝族自治县',
        530822: '墨江哈尼族自治县',
        530823: '景东彝族自治县',
        530824: '景谷傣族彝族自治县',
        530825: '镇沅彝族哈尼族拉祜族自治县',
        530826: '江城哈尼族彝族自治县',
        530827: '孟连傣族拉祜族佤族自治县',
        530828: '澜沧拉祜族自治县',
        530829: '西盟佤族自治县'
    },
    530900: {
        530902: '临翔区',
        530921: '凤庆县',
        530922: '云县',
        530923: '永德县',
        530924: '镇康县',
        530925: '双江拉祜族佤族布朗族傣族自治县',
        530926: '耿马傣族佤族自治县',
        530927: '沧源佤族自治县'
    },
    532300: {
        532301: '楚雄市',
        532322: '双柏县',
        532323: '牟定县',
        532324: '南华县',
        532325: '姚安县',
        532326: '大姚县',
        532327: '永仁县',
        532328: '元谋县',
        532329: '武定县',
        532331: '禄丰县'
    },
    532500: {
        532501: '个旧市',
        532502: '开远市',
        532503: '蒙自市',
        532504: '弥勒市',
        532523: '屏边苗族自治县',
        532524: '建水县',
        532525: '石屏县',
        532527: '泸西县',
        532528: '元阳县',
        532529: '红河县',
        532530: '金平苗族瑶族傣族自治县',
        532531: '绿春县',
        532532: '河口瑶族自治县'
    },
    532600: {
        532601: '文山市',
        532622: '砚山县',
        532623: '西畴县',
        532624: '麻栗坡县',
        532625: '马关县',
        532626: '丘北县',
        532627: '广南县',
        532628: '富宁县'
    },
    532800: {
        532801: '景洪市',
        532822: '勐海县',
        532823: '勐腊县'
    },
    532900: {
        532901: '大理市',
        532922: '漾濞彝族自治县',
        532923: '祥云县',
        532924: '宾川县',
        532925: '弥渡县',
        532926: '南涧彝族自治县',
        532927: '巍山彝族回族自治县',
        532928: '永平县',
        532929: '云龙县',
        532930: '洱源县',
        532931: '剑川县',
        532932: '鹤庆县'
    },
    533100: {
        533102: '瑞丽市',
        533103: '芒市',
        533122: '梁河县',
        533123: '盈江县',
        533124: '陇川县'
    },
    533300: {
        533321: '泸水县',
        533323: '福贡县',
        533324: '贡山独龙族怒族自治县',
        533325: '兰坪白族普米族自治县'
    },
    533400: {
        533401: '香格里拉市',
        533422: '德钦县',
        533423: '维西傈僳族自治县'
    },
    540000: {
        540100: '拉萨市',
        540200: '日喀则市',
        540300: '昌都市',
        540400: '林芝市',
        542200: '山南地区',
        542400: '那曲地区',
        542500: '阿里地区'
    },
    540100: {
        540102: '城关区',
        540103: '堆龙德庆区',
        540121: '林周县',
        540122: '当雄县',
        540123: '尼木县',
        540124: '曲水县',
        540126: '达孜县',
        540127: '墨竹工卡县'
    },
    540200: {
        540202: '桑珠孜区',
        540221: '南木林县',
        540222: '江孜县',
        540223: '定日县',
        540224: '萨迦县',
        540225: '拉孜县',
        540226: '昂仁县',
        540227: '谢通门县',
        540228: '白朗县',
        540229: '仁布县',
        540230: '康马县',
        540231: '定结县',
        540232: '仲巴县',
        540233: '亚东县',
        540234: '吉隆县',
        540235: '聂拉木县',
        540236: '萨嘎县',
        540237: '岗巴县'
    },
    540300: {
        540302: '卡若区',
        540321: '江达县',
        540322: '贡觉县',
        540323: '类乌齐县',
        540324: '丁青县',
        540325: '察雅县',
        540326: '八宿县',
        540327: '左贡县',
        540328: '芒康县',
        540329: '洛隆县',
        540330: '边坝县'
    },
    540400: {
        540402: '巴宜区',
        540421: '工布江达县',
        540422: '米林县',
        540423: '墨脱县',
        540424: '波密县',
        540425: '察隅县',
        540426: '朗县'
    },
    542200: {
        542221: '乃东县',
        542222: '扎囊县',
        542223: '贡嘎县',
        542224: '桑日县',
        542225: '琼结县',
        542226: '曲松县',
        542227: '措美县',
        542228: '洛扎县',
        542229: '加查县',
        542231: '隆子县',
        542232: '错那县',
        542233: '浪卡子县'
    },
    542400: {
        542421: '那曲县',
        542422: '嘉黎县',
        542423: '比如县',
        542424: '聂荣县',
        542425: '安多县',
        542426: '申扎县',
        542427: '索县',
        542428: '班戈县',
        542429: '巴青县',
        542430: '尼玛县',
        542431: '双湖县'
    },
    542500: {
        542521: '普兰县',
        542522: '札达县',
        542523: '噶尔县',
        542524: '日土县',
        542525: '革吉县',
        542526: '改则县',
        542527: '措勤县'
    },
    610000: {
        610100: '西安市',
        610200: '铜川市',
        610300: '宝鸡市',
        610400: '咸阳市',
        610500: '渭南市',
        610600: '延安市',
        610700: '汉中市',
        610800: '榆林市',
        610900: '安康市',
        611000: '商洛市'
    },
    610100: {
        610102: '新城区',
        610103: '碑林区',
        610104: '莲湖区',
        610111: '灞桥区',
        610112: '未央区',
        610113: '雁塔区',
        610114: '阎良区',
        610115: '临潼区',
        610116: '长安区',
        610117: '高陵区',
        610122: '蓝田县',
        610124: '周至县',
        610125: '户县'
    },
    610200: {
        610202: '王益区',
        610203: '印台区',
        610204: '耀州区',
        610222: '宜君县'
    },
    610300: {
        610302: '渭滨区',
        610303: '金台区',
        610304: '陈仓区',
        610322: '凤翔县',
        610323: '岐山县',
        610324: '扶风县',
        610326: '眉县',
        610327: '陇县',
        610328: '千阳县',
        610329: '麟游县',
        610330: '凤县',
        610331: '太白县'
    },
    610400: {
        610402: '秦都区',
        610403: '杨陵区',
        610404: '渭城区',
        610422: '三原县',
        610423: '泾阳县',
        610424: '乾县',
        610425: '礼泉县',
        610426: '永寿县',
        610427: '彬县',
        610428: '长武县',
        610429: '旬邑县',
        610430: '淳化县',
        610431: '武功县',
        610481: '兴平市'
    },
    610500: {
        610502: '临渭区',
        610503: '华州区',
        610522: '潼关县',
        610523: '大荔县',
        610524: '合阳县',
        610525: '澄城县',
        610526: '蒲城县',
        610527: '白水县',
        610528: '富平县',
        610581: '韩城市',
        610582: '华阴市'
    },
    610600: {
        610602: '宝塔区',
        610621: '延长县',
        610622: '延川县',
        610623: '子长县',
        610624: '安塞县',
        610625: '志丹县',
        610626: '吴起县',
        610627: '甘泉县',
        610628: '富县',
        610629: '洛川县',
        610630: '宜川县',
        610631: '黄龙县',
        610632: '黄陵县'
    },
    610700: {
        610702: '汉台区',
        610721: '南郑县',
        610722: '城固县',
        610723: '洋县',
        610724: '西乡县',
        610725: '勉县',
        610726: '宁强县',
        610727: '略阳县',
        610728: '镇巴县',
        610729: '留坝县',
        610730: '佛坪县'
    },
    610800: {
        610802: '榆阳区',
        610803: '横山区',
        610821: '神木县',
        610822: '府谷县',
        610824: '靖边县',
        610825: '定边县',
        610826: '绥德县',
        610827: '米脂县',
        610828: '佳县',
        610829: '吴堡县',
        610830: '清涧县',
        610831: '子洲县'
    },
    610900: {
        610902: '汉滨区',
        610921: '汉阴县',
        610922: '石泉县',
        610923: '宁陕县',
        610924: '紫阳县',
        610925: '岚皋县',
        610926: '平利县',
        610927: '镇坪县',
        610928: '旬阳县',
        610929: '白河县'
    },
    611000: {
        611002: '商州区',
        611021: '洛南县',
        611022: '丹凤县',
        611023: '商南县',
        611024: '山阳县',
        611025: '镇安县',
        611026: '柞水县'
    },
    620000: {
        620100: '兰州市',
        620200: '嘉峪关市',
        620300: '金昌市',
        620400: '白银市',
        620500: '天水市',
        620600: '武威市',
        620700: '张掖市',
        620800: '平凉市',
        620900: '酒泉市',
        621000: '庆阳市',
        621100: '定西市',
        621200: '陇南市',
        622900: '临夏回族自治州',
        623000: '甘南藏族自治州'
    },
    620200: {
        6202000: '嘉峪关市'
    },
    620100: {
        620102: '城关区',
        620103: '七里河区',
        620104: '西固区',
        620105: '安宁区',
        620111: '红古区',
        620121: '永登县',
        620122: '皋兰县',
        620123: '榆中县'
    },
    620300: {
        620302: '金川区',
        620321: '永昌县'
    },
    620400: {
        620402: '白银区',
        620403: '平川区',
        620421: '靖远县',
        620422: '会宁县',
        620423: '景泰县'
    },
    620500: {
        620502: '秦州区',
        620503: '麦积区',
        620521: '清水县',
        620522: '秦安县',
        620523: '甘谷县',
        620524: '武山县',
        620525: '张家川回族自治县'
    },
    620600: {
        620602: '凉州区',
        620621: '民勤县',
        620622: '古浪县',
        620623: '天祝藏族自治县'
    },
    620700: {
        620702: '甘州区',
        620721: '肃南裕固族自治县',
        620722: '民乐县',
        620723: '临泽县',
        620724: '高台县',
        620725: '山丹县'
    },
    620800: {
        620802: '崆峒区',
        620821: '泾川县',
        620822: '灵台县',
        620823: '崇信县',
        620824: '华亭县',
        620825: '庄浪县',
        620826: '静宁县'
    },
    620900: {
        620902: '肃州区',
        620921: '金塔县',
        620922: '瓜州县',
        620923: '肃北蒙古族自治县',
        620924: '阿克塞哈萨克族自治县',
        620981: '玉门市',
        620982: '敦煌市'
    },
    621000: {
        621002: '西峰区',
        621021: '庆城县',
        621022: '环县',
        621023: '华池县',
        621024: '合水县',
        621025: '正宁县',
        621026: '宁县',
        621027: '镇原县'
    },
    621100: {
        621102: '安定区',
        621121: '通渭县',
        621122: '陇西县',
        621123: '渭源县',
        621124: '临洮县',
        621125: '漳县',
        621126: '岷县'
    },
    621200: {
        621202: '武都区',
        621221: '成县',
        621222: '文县',
        621223: '宕昌县',
        621224: '康县',
        621225: '西和县',
        621226: '礼县',
        621227: '徽县',
        621228: '两当县'
    },
    622900: {
        622901: '临夏市',
        622921: '临夏县',
        622922: '康乐县',
        622923: '永靖县',
        622924: '广河县',
        622925: '和政县',
        622926: '东乡族自治县',
        622927: '积石山保安族东乡族撒拉族自治县'
    },
    623000: {
        623001: '合作市',
        623021: '临潭县',
        623022: '卓尼县',
        623023: '舟曲县',
        623024: '迭部县',
        623025: '玛曲县',
        623026: '碌曲县',
        623027: '夏河县'
    },
    630000: {
        630100: '西宁市',
        630200: '海东市',
        632200: '海北藏族自治州',
        632300: '黄南藏族自治州',
        632500: '海南藏族自治州',
        632600: '果洛藏族自治州',
        632700: '玉树藏族自治州',
        632800: '海西蒙古族藏族自治州'
    },
    630100: {
        630102: '城东区',
        630103: '城中区',
        630104: '城西区',
        630105: '城北区',
        630121: '大通回族土族自治县',
        630122: '湟中县',
        630123: '湟源县'
    },
    630200: {
        630202: '乐都区',
        630203: '平安区',
        630222: '民和回族土族自治县',
        630223: '互助土族自治县',
        630224: '化隆回族自治县',
        630225: '循化撒拉族自治县'
    },
    632200: {
        632221: '门源回族自治县',
        632222: '祁连县',
        632223: '海晏县',
        632224: '刚察县'
    },
    632300: {
        632321: '同仁县',
        632322: '尖扎县',
        632323: '泽库县',
        632324: '河南蒙古族自治县'
    },
    632500: {
        632521: '共和县',
        632522: '同德县',
        632523: '贵德县',
        632524: '兴海县',
        632525: '贵南县'
    },
    632600: {
        632621: '玛沁县',
        632622: '班玛县',
        632623: '甘德县',
        632624: '达日县',
        632625: '久治县',
        632626: '玛多县'
    },
    632700: {
        632701: '玉树市',
        632722: '杂多县',
        632723: '称多县',
        632724: '治多县',
        632725: '囊谦县',
        632726: '曲麻莱县'
    },
    632800: {
        632801: '格尔木市',
        632802: '德令哈市',
        632821: '乌兰县',
        632822: '都兰县',
        632823: '天峻县',
        632825: '海西蒙古族藏族自治州直辖'
    },
    640000: {
        640100: '银川市',
        640200: '石嘴山市',
        640300: '吴忠市',
        640400: '固原市',
        640500: '中卫市'
    },
    640100: {
        640104: '兴庆区',
        640105: '西夏区',
        640106: '金凤区',
        640121: '永宁县',
        640122: '贺兰县',
        640181: '灵武市'
    },
    640200: {
        640202: '大武口区',
        640205: '惠农区',
        640221: '平罗县'
    },
    640300: {
        640302: '利通区',
        640303: '红寺堡区',
        640323: '盐池县',
        640324: '同心县',
        640381: '青铜峡市'
    },
    640400: {
        640402: '原州区',
        640422: '西吉县',
        640423: '隆德县',
        640424: '泾源县',
        640425: '彭阳县'
    },
    640500: {
        640502: '沙坡头区',
        640521: '中宁县',
        640522: '海原县'
    },
    650000: {
        650100: '乌鲁木齐市',
        650200: '克拉玛依市',
        650400: '吐鲁番市',
        652200: '哈密地区',
        652300: '昌吉回族自治州',
        652700: '博尔塔拉蒙古自治州',
        652800: '巴音郭楞蒙古自治州',
        652900: '阿克苏地区',
        653000: '克孜勒苏柯尔克孜自治州',
        653100: '喀什地区',
        653200: '和田地区',
        654000: '伊犁哈萨克自治州',
        654200: '塔城地区',
        654300: '阿勒泰地区',
        659001: '石河子市',
        659002: '阿拉尔市',
        659003: '图木舒克市',
        659004: '五家渠市',
        659005: '北屯市',
        659006: '铁门关市',
        659007: '双河市',
        659008: '可克达拉市'
    },
    659001: {
        6590010: '石河子市'
    },
    659002: {
        6590020: '阿拉尔市'
    },
    659003: {
        6590030: '图木舒克市'
    },
    659004: {
        6590040: '五家渠市'
    },
    659005: {
        6590050: '北屯市'
    },
    659006: {
        6590060: '铁门关市'
    },
    659007: {
        6590070: '双河市'
    },
    659008: {
        6590080: '可克达拉市'
    },
    650100: {
        650102: '天山区',
        650103: '沙依巴克区',
        650104: '新市区',
        650105: '水磨沟区',
        650106: '头屯河区',
        650107: '达坂城区',
        650109: '米东区',
        650121: '乌鲁木齐县'
    },
    650200: {
        650202: '独山子区',
        650203: '克拉玛依区',
        650204: '白碱滩区',
        650205: '乌尔禾区'
    },
    650400: {
        650402: '高昌区',
        650421: '鄯善县',
        650422: '托克逊县'
    },
    652200: {
        652201: '哈密市',
        652222: '巴里坤哈萨克自治县',
        652223: '伊吾县'
    },
    652300: {
        652301: '昌吉市',
        652302: '阜康市',
        652323: '呼图壁县',
        652324: '玛纳斯县',
        652325: '奇台县',
        652327: '吉木萨尔县',
        652328: '木垒哈萨克自治县'
    },
    652700: {
        652701: '博乐市',
        652702: '阿拉山口市',
        652722: '精河县',
        652723: '温泉县'
    },
    652800: {
        652801: '库尔勒市',
        652822: '轮台县',
        652823: '尉犁县',
        652824: '若羌县',
        652825: '且末县',
        652826: '焉耆回族自治县',
        652827: '和静县',
        652828: '和硕县',
        652829: '博湖县'
    },
    652900: {
        652901: '阿克苏市',
        652922: '温宿县',
        652923: '库车县',
        652924: '沙雅县',
        652925: '新和县',
        652926: '拜城县',
        652927: '乌什县',
        652928: '阿瓦提县',
        652929: '柯坪县'
    },
    653000: {
        653001: '阿图什市',
        653022: '阿克陶县',
        653023: '阿合奇县',
        653024: '乌恰县'
    },
    653100: {
        653101: '喀什市',
        653121: '疏附县',
        653122: '疏勒县',
        653123: '英吉沙县',
        653124: '泽普县',
        653125: '莎车县',
        653126: '叶城县',
        653127: '麦盖提县',
        653128: '岳普湖县',
        653129: '伽师县',
        653130: '巴楚县',
        653131: '塔什库尔干塔吉克自治县'
    },
    653200: {
        653201: '和田市',
        653221: '和田县',
        653222: '墨玉县',
        653223: '皮山县',
        653224: '洛浦县',
        653225: '策勒县',
        653226: '于田县',
        653227: '民丰县'
    },
    654000: {
        654002: '伊宁市',
        654003: '奎屯市',
        654004: '霍尔果斯市',
        654021: '伊宁县',
        654022: '察布查尔锡伯自治县',
        654023: '霍城县',
        654024: '巩留县',
        654025: '新源县',
        654026: '昭苏县',
        654027: '特克斯县',
        654028: '尼勒克县'
    },
    654200: {
        654201: '塔城市',
        654202: '乌苏市',
        654221: '额敏县',
        654223: '沙湾县',
        654224: '托里县',
        654225: '裕民县',
        654226: '和布克赛尔蒙古自治县'
    },
    654300: {
        654301: '阿勒泰市',
        654321: '布尔津县',
        654322: '富蕴县',
        654323: '福海县',
        654324: '哈巴河县',
        654325: '青河县',
        654326: '吉木乃县'
    },
    810000: {
        810001: '中西区',
        810002: '湾仔区',
        810003: '东区',
        810004: '南区',
        810005: '油尖旺区',
        810006: '深水埗区',
        810007: '九龙城区',
        810008: '黄大仙区',
        810009: '观塘区',
        810010: '荃湾区',
        810011: '屯门区',
        810012: '元朗区',
        810013: '北区',
        810014: '大埔区',
        810015: '西贡区',
        810016: '沙田区',
        810017: '葵青区',
        810018: '离岛区'
    },
    820000: {
        820001: '花地玛堂区',
        820002: '花王堂区',
        820003: '望德堂区',
        820004: '大堂区',
        820005: '风顺堂区',
        820006: '嘉模堂区',
        820007: '路凼填海区',
        820008: '圣方济各堂区'
    }
};

const AreaData = areaData;
const useHandMove$3 = () => {
    const listData = ref([Object.values(AreaData['86']), [], []]);
    const distance = ref([88, 88, 88]);
    const duration = ref(0);
    const currentValue = [listData.value[0][0]];
    let startY = 0;
    let startDistence = 0;
    let startTime = 0;
    const openTransition = (time) => {
        duration.value = time;
        setTimeout(() => {
            duration.value = 0;
        }, time);
    };
    const setArea = () => {
        let index = 0;
        for (const keys in AreaData['86']) {
            if (AreaData['86'][keys] === currentValue[0]) {
                for (const key in AreaData[keys]) {
                    if (AreaData[keys][key] === currentValue[1]) {
                        index = +key;
                        break;
                    }
                }
                break;
            }
        }
        const [arrOne] = (listData.value[2] = Object.values(AreaData[index]));
        currentValue[2] = arrOne;
    };
    const setDateDist = (i) => {
        let oldDist = distance.value[i];
        const len = listData.value[i].length - 1;
        if (oldDist > 88) {
            oldDist = 88;
        }
        else if (oldDist < 88 - len * 44) {
            oldDist = 88 - len * 44;
        }
        distance.value[i] = oldDist;
        openTransition(400);
    };
    const setCity = () => {
        let index = 0;
        for (const key in AreaData['86']) {
            if (AreaData['86'][key] === currentValue[0]) {
                index = +key;
                break;
            }
        }
        const [arrOne] = (listData.value[1] = Object.values(AreaData[index]));
        currentValue[1] = arrOne;
        setArea();
    };
    const setValue = (tarDir, i) => {
        const count = Math.abs(tarDir / 44 - 2);
        currentValue[i] = listData.value[i][count];
        i !== 2 && setDateDist(i + 1);
        if (i === 2)
            return;
        if (i === 0) {
            setCity();
        }
        else {
            setArea();
        }
        setDateDist(i + 1);
    };
    const onTouchstart = (e, i) => {
        startY = e.changedTouches[0].clientY;
        startDistence = distance.value[i];
        startTime = +new Date();
    };
    const onTouchmove = (e, i) => {
        const currentY = e.changedTouches[0].clientY;
        const diffX = currentY - startY;
        const actualDist = startDistence + diffX;
        distance.value[i] = actualDist;
    };
    const onTouchend = (e, i) => {
        let oldDist = distance.value[i];
        const endTime = +new Date();
        const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2);
        if (speed > 0.12 || speed < -0.12) {
            const wantDist = Math.ceil(speed * 400);
            oldDist += wantDist;
        }
        const surplus = oldDist % 44;
        if (surplus !== 0) {
            let tarDir = 0;
            if (surplus > 0) {
                tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
            }
            else {
                tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
            }
            const list = listData.value[i];
            const len = typeof list === 'number' ? list - 1 : list.length - 1;
            if (tarDir > 88) {
                tarDir = 88;
            }
            else if (tarDir < 88 - len * 44) {
                tarDir = 88 - len * 44;
            }
            distance.value[i] = tarDir;
            openTransition(400);
            setValue(tarDir, i);
        }
    };
    const onMousedown = (e, i) => {
        startY = e.clientY;
        startDistence = distance.value[i];
        startTime = +new Date();
        document.onmousemove = (ev) => {
            const currentY = ev.clientY;
            const diffX = currentY - startY;
            const actualDist = startDistence + diffX;
            distance.value[i] = actualDist;
        };
        document.onmouseup = (ev) => {
            let oldDist = distance.value[i];
            const endTime = +new Date();
            const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2);
            if (speed > 0.12 || speed < -0.12) {
                const wantDist = Math.ceil(speed * 400);
                oldDist += wantDist;
            }
            const surplus = oldDist % 44;
            if (surplus !== 0) {
                let tarDir = 0;
                if (surplus > 0) {
                    tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus;
                }
                else {
                    tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus;
                }
                const list = listData.value[i];
                const len = typeof list === 'number' ? list - 1 : list.length - 1;
                if (tarDir > 88) {
                    tarDir = 88;
                }
                else if (tarDir < 88 - len * 44) {
                    tarDir = 88 - len * 44;
                }
                distance.value[i] = tarDir;
                openTransition(400);
                setValue(tarDir, i);
            }
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    setCity();
    return { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown };
};
const useBtns$4 = (props, emit, currentValue) => {
    const onCancel = () => {
        emit('on-cancel');
    };
    const onSure = () => {
        const str = currentValue.reduce((prev, elem, i) => prev + (i === 0 ? '' : props.separator) + elem, '');
        emit('update:modelValue', str);
        emit('on-sure', currentValue);
    };
    return { onCancel, onSure };
};

var script$y = defineComponent({
    name: 'MeAddressPicker',
    emits: ['update:modelValue', 'on-cancel', 'on-sure'],
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        visible: {
            type: Boolean,
            default: false
        },
        separator: {
            type: String,
            default: '-'
        }
    },
    setup(props, { emit }) {
        const { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove$3();
        const { onCancel, onSure } = useBtns$4(props, emit, currentValue);
        return { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown, onCancel, onSure };
    }
});

const _hoisted_1$r = {
  key: 0,
  class: "me-address-picker"
};
const _hoisted_2$e = { class: "m-hd" };
const _hoisted_3$8 = /*#__PURE__*/createElementVNode("span", { class: "u-line" }, null, -1 /* HOISTED */);
const _hoisted_4$5 = { class: "m-bd" };
const _hoisted_5$3 = ["onTouchstart", "onTouchmove", "onTouchend", "onMousedown"];

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 时间选择器 "),
    createVNode(Transition, { name: "translate" }, {
      default: withCtx(() => [
        (_ctx.visible)
          ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
              createCommentVNode(" 头部按钮 "),
              createElementVNode("div", _hoisted_2$e, [
                createElementVNode("button", {
                  type: "button",
                  class: "u-cancel",
                  onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
                }, "取消"),
                _hoisted_3$8,
                createElementVNode("button", {
                  type: "button",
                  class: "u-sure",
                  onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onSure && _ctx.onSure(...args)))
                }, "确定")
              ]),
              createCommentVNode(" 主体内容 "),
              createElementVNode("ul", _hoisted_4$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item, index) => {
                  return (openBlock(), createElementBlock("li", {
                    key: index,
                    onTouchstart: withModifiers($event => (_ctx.onTouchstart($event, index)), ["prevent"]),
                    onTouchmove: $event => (_ctx.onTouchmove($event, index)),
                    onTouchend: $event => (_ctx.onTouchend($event, index)),
                    onMousedown: withModifiers($event => (_ctx.onMousedown($event, index)), ["prevent"])
                  }, [
                    createCommentVNode(" 移动的区域 "),
                    createElementVNode("ol", {
                      style: normalizeStyle(`transform:translateY(${_ctx.distance[index]}px);transition-property:${_ctx.duration > 0 ? 'all' : 'none'};transition-duration: ${_ctx.duration}ms;`)
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, i) => {
                        return (openBlock(), createElementBlock("li", { key: i }, toDisplayString(value), 1 /* TEXT */))
                      }), 128 /* KEYED_FRAGMENT */))
                    ], 4 /* STYLE */)
                  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$3))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    })
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$y.render = render$y;
script$y.__file = "packages/MeAddressPicker/index.vue";

script$y.install = (app) => {
    app.component(script$y.name, script$y);
};
const InMeAddressPicker = script$y;

const useHandler$d = (props, emit) => {
    const listData = ref(props.fileList);
    const curNum = ref(1);
    const isPreview = ref(false);
    let timer = null;
    const onDelete = (e, item) => {
        e.stopPropagation();
        if (!props.disabled && props.beforeDelete(item) !== false) {
            const index = listData.value.findIndex(({ id }) => id === item.id) ?? 0;
            listData.value.splice(index, 1);
            emit('update:fileList', listData.value);
            emit('update:file-list', listData.value);
            emit('on-change', listData.value);
        }
    };
    const startTimer = () => {
        if (listData.value.length > 1) {
            timer = setInterval(() => {
                curNum.value++;
                if (curNum.value > listData.value.length) {
                    curNum.value = 1;
                }
            }, 3000);
        }
    };
    const closePreview = () => {
        clearInterval(timer);
        isPreview.value = false;
    };
    const onChange = (e) => {
        const files = Object.values(e.target.files).slice(0, props.maxCount);
        if (props.beforeRead(files) !== false) {
            const arr = [];
            files.forEach(elem => {
                if (elem.size <= props.maxSize && Validator.validImgs.test(elem.name)) {
                    const len = listData.value.length;
                    const id = len === 0 ? 1 : listData.value[len - 1].id + 1;
                    const url = window.URL.createObjectURL(elem);
                    listData.value.push({ id, url });
                    arr.push(elem);
                }
            });
            if (arr.length > 0) {
                props.afterRead(arr);
                emit('on-change', listData.value);
            }
        }
    };
    const onPreview = ({ id }) => {
        if (!props.disabled && props.preview) {
            curNum.value = id;
            isPreview.value = true;
            startTimer();
        }
    };
    watch(() => props.fileList, value => {
        listData.value = value;
    }, {
        deep: true
    });
    return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview };
};

var script$x = defineComponent({
    name: 'MeUpload',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:fileList', 'update:file-list', 'on-change'],
    props: {
        fileList: {
            type: Array,
            default: () => []
        },
        preview: {
            type: Boolean,
            default: true
        },
        maxCount: {
            type: Number,
            default: 1000
        },
        maxSize: {
            type: Number,
            default: 2 * 1024 * 1024
        },
        multiple: {
            type: Boolean,
            default: false
        },
        deletable: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        beforeRead: {
            type: Function,
            default: () => () => true
        },
        afterRead: {
            type: Function,
            default: () => () => true
        },
        beforeDelete: {
            type: Function,
            default: () => () => true
        }
    },
    setup(props, { emit }) {
        const { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview } = useHandler$d(props, emit);
        return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview };
    }
});

const _hoisted_1$q = ["data-disabled"];
const _hoisted_2$d = ["onClick"];
const _hoisted_3$7 = ["src"];
const _hoisted_4$4 = {
  key: 0,
  class: "m-upload"
};
const _hoisted_5$2 = ["multiple", "disabled"];
const _hoisted_6$1 = { class: "u-num" };
const _hoisted_7 = ["src"];

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 上传图片 "),
    createElementVNode("div", {
      class: "me-upload",
      "data-disabled": _ctx.disabled
    }, [
      createCommentVNode(" 展示图片 "),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
        return (openBlock(), createElementBlock("div", {
          class: "m-imgs",
          key: item.id,
          onClick: $event => (_ctx.onPreview(item))
        }, [
          createElementVNode("img", {
            src: item.url,
            class: "u-img",
            alt: "图片"
          }, null, 8 /* PROPS */, _hoisted_3$7),
          (_ctx.deletable)
            ? (openBlock(), createBlock(_component_me_icon, {
                key: 0,
                name: "icon-close",
                color: "#dcdee0",
                size: "16px",
                onOnClick: $event => (_ctx.onDelete($event, item))
              }, null, 8 /* PROPS */, ["onOnClick"]))
            : createCommentVNode("v-if", true)
        ], 8 /* PROPS */, _hoisted_2$d))
      }), 128 /* KEYED_FRAGMENT */)),
      createCommentVNode(" 上传按钮 "),
      (_ctx.listData.length < _ctx.maxCount)
        ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
            createVNode(_component_me_icon, {
              name: "icon-xiangji",
              color: "#dcdee0",
              size: "20px"
            }),
            createElementVNode("input", {
              type: "file",
              class: "u-file",
              multiple: _ctx.multiple,
              onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.onChange && _ctx.onChange(...args))),
              disabled: _ctx.disabled
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$2)
          ]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" 图片预览 "),
      (_ctx.isPreview)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "m-preview",
            onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.closePreview && _ctx.closePreview(...args)))
          }, [
            createElementVNode("div", _hoisted_6$1, toDisplayString(_ctx.curNum) + " / " + toDisplayString(_ctx.listData.length), 1 /* TEXT */),
            createVNode(TransitionGroup, {
              tag: "ul",
              name: "slider",
              class: "m-slider"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
                  return withDirectives((openBlock(), createElementBlock("li", {
                    key: item.id
                  }, [
                    createElementVNode("img", {
                      src: item.url,
                      alt: "图片"
                    }, null, 8 /* PROPS */, _hoisted_7)
                  ])), [
                    [vShow, _ctx.curNum === item.id]
                  ])
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              _: 1 /* STABLE */
            })
          ]))
        : createCommentVNode("v-if", true)
    ], 8 /* PROPS */, _hoisted_1$q)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$x.render = render$x;
script$x.__file = "packages/MeUpload/index.vue";

script$x.install = (app) => {
    app.component(script$x.name, script$x);
};
const InMeUpload = script$x;

const useShow$4 = (props) => {
    const isDestroy = ref(false);
    const isShow = ref(false);
    const closeShow = () => {
        isShow.value = false;
        setTimeout(() => {
            isDestroy.value = true;
        }, 400);
    };
    const startShow = () => {
        setTimeout(() => {
            isShow.value && closeShow();
        }, props.durction);
    };
    onMounted(() => {
        setTimeout(() => {
            isShow.value = true;
            startShow();
        }, 100);
    });
    return { isShow, isDestroy };
};

var script$w = defineComponent({
    name: 'MeToast',
    props: {
        message: {
            type: [String, Number],
            default: ''
        },
        bgColor: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        durction: {
            type: Number,
            default: 1000
        }
    },
    components: {
        MeIcon: InMeIcon
    },
    setup(props) {
        const { isShow, isDestroy } = useShow$4(props);
        return { isShow, isDestroy };
    }
});

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 消息提示 "),
    (!_ctx.isDestroy)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["me-toast", { show: _ctx.isShow }]),
          style: normalizeStyle(`background:${_ctx.bgColor};`)
        }, [
          (_ctx.icon)
            ? (openBlock(), createBlock(_component_me_icon, {
                key: 0,
                name: _ctx.icon,
                color: "#fff"
              }, null, 8 /* PROPS */, ["name"]))
            : createCommentVNode("v-if", true),
          createElementVNode("span", null, toDisplayString(_ctx.message), 1 /* TEXT */)
        ], 6 /* CLASS, STYLE */))
      : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$w.render = render$w;
script$w.__file = "packages/MeToast/index.vue";

const Toast = (arg) => {
    const options = IsType('String', arg) || IsType('Number', arg) ? { message: arg } : IsType('Object', arg) ? { ...arg } : {};
    const vm = createVNode(script$w, options);
    const container = document.createElement('div');
    render$P(vm, container);
    document.body.appendChild(container.firstElementChild);
};

const InMeToast = Toast;
InMeToast.install = (app) => {
    app.config.globalProperties.$MeToast = Toast;
};

const useHandler$c = (props, emit) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const arr = Object.keys(props.model);
        const option = {
            valid: true,
            message: '',
            type: '',
            value: props.model
        };
        for (let i = 0; i < props.rules.length; i++) {
            const { type, required, message, validator, pattern } = props.rules[i];
            if (arr.includes(type)) {
                if (validator !== undefined || pattern !== undefined || required !== undefined) {
                    const valid = validator !== undefined ? validator(props.model[type]) : pattern !== undefined ? pattern.test(props.model[type]) : String(props.model[type]).trim() !== '';
                    if (!valid) {
                        option.valid = valid;
                        option.message = message || '';
                        option.type = type;
                        message && InMeToast(message);
                        break;
                    }
                }
            }
        }
        emit('on-submit', option);
    };
    return { onSubmit };
};

var script$v = defineComponent({
    name: 'MeForm',
    emits: ['on-submit'],
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit }) {
        const { onSubmit } = useHandler$c(props, emit);
        return { onSubmit };
    }
});

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 表单 "),
    createElementVNode("form", {
      class: "me-form",
      onSubmit: _cache[0] || (_cache[0] = (...args) => (_ctx.onSubmit && _ctx.onSubmit(...args)))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 32 /* HYDRATE_EVENTS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$v.render = render$v;
script$v.__file = "packages/MeForm/index.vue";

script$v.install = (app) => {
    app.component(script$v.name, script$v);
};
const InMeForm = script$v;

const useShowSheet = (props, emit) => {
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
const useBtns$3 = (emit) => {
    const onLi = (item) => {
        emit('update:visible', false);
        emit('on-change', item);
    };
    const onCancel = (e) => {
        emit('update:visible', false);
        emit('on-cancel', e);
    };
    return { onLi, onCancel };
};

var script$u = defineComponent({
    name: 'MeActionSheet',
    emits: ['update:visible', 'on-change', 'on-cancel'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            required: true,
            validator: (value) => value.length > 0 && Object.keys(value[0]).length > 0
        },
        index: {
            type: String,
            default: 'id'
        },
        label: {
            type: String,
            default: 'value'
        }
    },
    setup(props, { emit }) {
        const { isShowMask, isShow, hideMask } = useShowSheet(props, emit);
        const { onLi, onCancel } = useBtns$3(emit);
        return { isShowMask, isShow, hideMask, onLi, onCancel };
    }
});

const _hoisted_1$p = ["onClick"];

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 动作面板 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-action-sheet", { show: _ctx.isShow }]),
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.hideMask && _ctx.hideMask(...args)))
    }, [
      createElementVNode("ul", {
        class: normalizeClass(["m-list-li", { on: _ctx.isShow }]),
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item[_ctx.index],
            onClick: withModifiers($event => (_ctx.onLi(item)), ["stop"])
          }, toDisplayString(item[_ctx.label]), 9 /* TEXT, PROPS */, _hoisted_1$p))
        }), 128 /* KEYED_FRAGMENT */)),
        createElementVNode("li", {
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onCancel && _ctx.onCancel(...args)), ["stop"]))
        }, "取消")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$u.render = render$u;
script$u.__file = "packages/MeActionSheet/index.vue";

script$u.install = (app) => {
    app.component(script$u.name, script$u);
};
const InMeActionSheet = script$u;

!(function (c) {
  let a;
  let l;
  let o;
  let h;
  let t;
  let i;
  let s =
    '<svg><symbol id="icon-notice" viewBox="0 0 1024 1024"><path d="M96.226087 333.550749l0 337.925383 126.721123 0 295.682279 253.442246L518.629489 80.106456 222.94721 333.550749 96.226087 333.550749zM259.620457 376.36895 462.326159 204.684776l0 597.803201L243.781724 615.207593l-91.246167 0L152.535557 389.897058l91.246167 0L259.620457 376.36895z"  ></path><path d="M772.074805 502.512928c0-108.652606-88.401376-197.095937-197.135846-197.095937l0 56.348356c77.632101 0 140.828422 63.114456 140.828422 140.747581 0 77.633125-63.196321 140.829446-140.828422 140.829446l0 56.345286C683.674453 699.68766 772.074805 611.249445 772.074805 502.512928z"  ></path><path d="M574.939983 136.454812l0 56.348356c171.107029 0 309.789579 138.683573 309.789579 309.708737 0 171.106006-138.682549 309.790602-309.789579 309.790602l0 56.348356c201.876824 0 366.097002-164.260088 366.097002-366.138958C941.035962 300.716946 776.816806 136.454812 574.939983 136.454812z"  ></path></symbol><symbol id="icon-wangluocuowu" viewBox="0 0 1024 1024"><path d="M1011.13622 364c-12.6 16-36 16-50.4 3.6-478-419-882.2-17.8-900.2 0-7.2 7-16.2 10.6-25.2 10.6s-18-3.6-25.2-10.6c-12.6-12.4-14.4-35.4 0-49.8 3.6-5.4 469-467 999-3.6 14.6 12.4 16.4 35.6 2 49.8z"  ></path><path d="M867.33622 466.8c12.4 9.6 15.2 25.4 10 38.8-18-4.4-36.8-6.8-56-6.8-8.4 0-16.6 0.4-24.6 1.2-324.6-261-581.8 9.8-592.2 22-7.2 8.8-18 12.4-27 12.4-7.2 0-16.2-3.6-23.4-8.8-14.4-12.4-14.4-35.4-1.8-49.8 3.6-3.6 328.8-348 715-9zM499.13622 530.8c51.4-2.2 101.6 12 149.4 42-16.8 17.4-30.6 37.4-41.6 59.2-34.4-20.8-69-31.2-104.4-30.2-89.8 1.8-156.4 79.8-156.4 79.8-12.6 16-35.8 17.8-50.4 5.4-16.2-12.4-18-33.6-5.4-49.8 3.8-5.2 86.6-101 208.8-106.4zM509.73622 720.8c18.8 0 37.6 7.6 50.8 20.8 13.4 13.2 21 31.6 21 50.2s-7.6 37-21 50.2c-13.4 13.2-32 20.8-50.8 20.8-18.8 0-37.6-7.6-50.8-20.8-13.4-13.2-21-31.6-21-50.2s7.6-37 21-50.2c13.4-13.2 32-20.8 50.8-20.8zM827.73622 561c-98 0-177.6 79.4-177.6 177.4s79.6 177.6 177.6 177.6 177.6-79.4 177.6-177.4-79.4-177.6-177.6-177.6z m90.8 220.2c7.4 7.4 2.6 24-10.8 37.4-13.2 13.2-30 18-37.4 10.8l-42.8-42.8-42.8 42.8c-7.4 7.4-24 2.6-37.4-10.8-13.2-13.2-18-30-10.8-37.4l42.8-42.8-42.8-42.8c-7.4-7.4-2.6-24 10.8-37.4 13.2-13.2 30-18 37.4-10.8l42.8 42.8 42.8-42.8c7.4-7.4 24-2.6 37.4 10.8 13.2 13.2 18 30 10.8 37.4l-42.8 42.8 42.8 42.8z"  ></path></symbol><symbol id="icon-jigou_wushuju" viewBox="0 0 1483 1024"><path d="M177.632581 574.693643v-21.10693A10.281792 10.281792 0 0 0 167.183605 543.346717a10.448975 10.448975 0 0 0-10.448975 10.239996v21.10693H135.6277A10.281792 10.281792 0 0 0 125.387704 585.142618c0 5.600651 4.597549 10.448975 10.239996 10.448976H156.73463v21.10693c0 5.746936 4.681141 10.239996 10.448975 10.239996a10.448975 10.448975 0 0 0 10.448976-10.239996V595.591594h21.10693c5.746936 0 10.239996-4.681141 10.239996-10.448976a10.448975 10.448975 0 0 0-10.239996-10.448975H177.632581z m1274.774989 41.795901h21.106931a10.448975 10.448975 0 0 1 10.239995 10.448976c0 5.767834-4.493059 10.448975-10.239995 10.448975H1452.40757v21.10693a10.448975 10.448975 0 0 1-10.448975 10.239996 10.281792 10.281792 0 0 1-10.448975-10.239996V637.387495h-21.10693A10.448975 10.448975 0 0 1 1400.162694 626.93852c0-5.767834 4.493059-10.448975 10.239996-10.448976h21.10693v-21.10693A10.448975 10.448975 0 0 1 1441.958595 585.142618c5.767834 0 10.448975 4.493059 10.448975 10.239996v21.10693zM245.55092 47.020389V15.882442c0-8.777139-7.021711-15.882442-15.673463-15.882442-8.714445 0-15.673463 7.105303-15.673463 15.882442v31.137947H183.066048c-8.777139 0-15.882442 7.021711-15.882443 15.673463 0 8.714445 7.105303 15.673463 15.882443 15.673463h31.137946v31.137946c0 8.777139 7.021711 15.882442 15.673463 15.882443 8.714445 0 15.673463-7.105303 15.673463-15.882443V78.367315h31.137947c8.777139 0 15.882442-7.021711 15.882442-15.673463 0-8.714445-7.105303-15.673463-15.882442-15.673463h-31.137947zM417.959013 982.203681V209.14669A83.696292 83.696292 0 0 1 501.488122 125.387704h418.084401A83.591803 83.591803 0 0 1 1003.101631 209.14669v240.869779A82.881272 82.881272 0 0 1 1044.751247 438.856964h125.680275A83.487313 83.487313 0 0 1 1253.877039 522.574154V982.203681h167.03732A20.897951 20.897951 0 0 1 1441.958595 1003.101631c0 11.535669-9.404078 20.897951-21.044236 20.897951H250.921694A20.897951 20.897951 0 0 1 229.877457 1003.101631c0-11.535669 9.404078-20.897951 21.044237-20.89795H417.959013z m41.795901 0h501.550816V209.083996C961.30573 185.887271 942.53937 167.183605 919.405339 167.183605h-417.750034A41.900391 41.900391 0 0 0 459.754914 209.083996V982.203681z m543.346717 0h208.979507V522.532358A41.733207 41.733207 0 0 0 1170.285237 480.652865h-125.387704c-23.259419 0-41.795901 18.745462-41.795902 41.879493V982.203681zM543.346717 376.163112a20.897951 20.897951 0 0 1 20.688971-20.897951h84.009762c11.410281 0 20.688971 9.27869 20.688971 20.897951a20.897951 20.897951 0 0 1-20.688971 20.89795h-84.009762a20.751665 20.751665 0 0 1-20.688971-20.89795z m208.979507 0a20.897951 20.897951 0 0 1 20.688971-20.897951h84.009761c11.410281 0 20.688971 9.27869 20.688971 20.897951a20.897951 20.897951 0 0 1-20.688971 20.89795h-84.009761a20.751665 20.751665 0 0 1-20.688971-20.89795zM543.346717 585.142618a20.897951 20.897951 0 0 1 20.688971-20.89795h84.009762c11.410281 0 20.688971 9.27869 20.688971 20.89795a20.897951 20.897951 0 0 1-20.688971 20.897951h-84.009762a20.751665 20.751665 0 0 1-20.688971-20.897951z m208.979507 0a20.897951 20.897951 0 0 1 20.688971-20.89795h84.009761c11.410281 0 20.688971 9.27869 20.688971 20.89795a20.897951 20.897951 0 0 1-20.688971 20.897951h-84.009761a20.751665 20.751665 0 0 1-20.688971-20.897951zM543.346717 794.122125a20.897951 20.897951 0 0 1 20.688971-20.897951h84.009762c11.410281 0 20.688971 9.27869 20.688971 20.897951a20.897951 20.897951 0 0 1-20.688971 20.897951h-84.009762a20.751665 20.751665 0 0 1-20.688971-20.897951z m208.979507 0a20.897951 20.897951 0 0 1 20.688971-20.897951h84.009761c11.410281 0 20.688971 9.27869 20.688971 20.897951a20.897951 20.897951 0 0 1-20.688971 20.897951h-84.009761a20.751665 20.751665 0 0 1-20.688971-20.897951z m334.36721-209.188486c0-11.410281 9.27869-20.688971 20.897951-20.688971a20.897951 20.897951 0 0 1 20.89795 20.688971v84.009761c0 11.410281-9.27869 20.688971-20.89795 20.688972a20.897951 20.897951 0 0 1-20.897951-20.688972v-84.009761z m0 208.979506c0-11.410281 9.27869-20.688971 20.897951-20.688971a20.897951 20.897951 0 0 1 20.89795 20.688971v84.009762c0 11.410281-9.27869 20.688971-20.89795 20.688971a20.897951 20.897951 0 0 1-20.897951-20.688971v-84.009762zM20.897951 1003.101631c0-11.535669 9.153302-20.897951 20.960644-20.89795h104.364366A20.877053 20.877053 0 0 1 167.183605 1003.101631c0 11.535669-9.153302 20.897951-20.960644 20.897951H41.858595A20.877053 20.877053 0 0 1 20.897951 1003.101631z m41.795901-626.938519a62.693852 62.693852 0 1 1 0-125.387704 62.693852 62.693852 0 0 1 0 125.387704z m0-31.346926a31.346926 31.346926 0 1 0 0-62.693852 31.346926 31.346926 0 0 0 0 62.693852zM1274.77499 250.775408a62.693852 62.693852 0 1 1 0-125.387704 62.693852 62.693852 0 0 1 0 125.387704z m0-31.346926a31.346926 31.346926 0 1 0 0-62.693852 31.346926 31.346926 0 0 0 0 62.693852z"  ></path></symbol><symbol id="icon-wushuju" viewBox="0 0 1567 1024"><path d="M156.662278 699.758173h21.097186A10.444152 10.444152 0 0 1 187.994733 710.202325c0 5.765172-4.490985 10.444152-10.235269 10.444152H156.662278v21.097186A10.444152 10.444152 0 0 1 146.218126 751.978932a10.277045 10.277045 0 0 1-10.444152-10.235269V720.646477H114.676787A10.444152 10.444152 0 0 1 104.441518 710.202325c0-5.765172 4.490985-10.444152 10.235269-10.444152H135.773974v-21.097187A10.444152 10.444152 0 0 1 146.218126 668.425717c5.765172 0 10.444152 4.490985 10.444152 10.235269v21.097187z m1378.628042-83.553215v-21.097186A10.277045 10.277045 0 0 0 1524.846168 584.872503a10.444152 10.444152 0 0 0-10.444152 10.235269v21.097186h-21.097186a10.277045 10.277045 0 0 0-10.235269 10.444152c0 5.598065 4.595427 10.444152 10.235269 10.444152h21.097186v21.097187c0 5.744284 4.67898 10.235269 10.444152 10.235268a10.444152 10.444152 0 0 0 10.444152-10.235268V637.093262h21.097187c5.744284 0 10.235269-4.67898 10.235268-10.444152a10.444152 10.444152 0 0 0-10.235268-10.444152H1535.29032zM776.460024 960.861969H250.596979A20.80475 20.80475 0 0 1 229.77134 939.973665c0-11.530344 9.462402-20.888304 20.825639-20.888303h94.728457A83.010119 83.010119 0 0 1 334.212859 877.413196v-605.96969A83.49055 83.49055 0 0 1 417.849627 187.994733H480.430984V167.001988A83.49055 83.49055 0 0 1 564.067752 83.553215h501.152182A83.448773 83.448773 0 0 1 1148.856702 167.001988v605.969689c0 15.185797-4.052331 29.410732-11.133466 41.672166h115.554096c11.551232 0 20.909192 9.274407 20.909192 20.888304 0 11.530344-9.295295 20.888304-20.888304 20.888304H1002.638576v20.992745c0 15.185797-4.052331 29.410732-11.133466 41.672166h11.196131c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304h-109.893365c9.545955 16.000441 7.478013 36.972297-6.41271 50.863019a41.672166 41.672166 0 0 1-59.072122 0L776.460024 960.861969z m76.367638-41.776607h66.424806c22.977134 0 41.609501-18.59059 41.609501-41.881049V270.461756c0-22.559368-18.047494-40.690416-40.314426-40.690416H416.303892c-22.266932 0-40.314426 18.214601-40.314426 40.690416v606.742557c0 23.123352 18.799473 41.881049 41.588613 41.881049h317.084449l-10.736588-10.757477a41.693054 41.693054 0 0 1-10.861918-40.377091l-19.718558-19.739447A146.259902 146.259902 0 0 1 502.363703 627.693525a146.218126 146.218126 0 0 1 220.517822 190.981761l19.739447 19.739447a41.630389 41.630389 0 0 1 40.377091 10.841029L852.827662 919.085362zM1002.638576 814.643843h62.852906A41.797496 41.797496 0 0 0 1107.080095 772.867236V167.106429c0-23.14424-18.632367-41.776607-41.588613-41.776607H563.775316A41.797496 41.797496 0 0 0 522.207592 167.106429v20.888304h396.794216A83.448773 83.448773 0 0 1 1002.638576 271.443506V814.643843zM266.325872 46.998683h31.123572c8.773088 0 15.875111 6.955805 15.875111 15.666228 0 8.647758-7.102023 15.666228-15.875111 15.666228h-31.123572v31.123572c0 8.773088-6.955805 15.875111-15.666228 15.875111a15.770669 15.770669 0 0 1-15.666228-15.875111V78.331139H203.869844A15.728893 15.728893 0 0 1 187.994733 62.664911c0-8.647758 7.102023-15.666228 15.875111-15.666228h31.123572V15.875111c0-8.773088 6.955805-15.875111 15.666228-15.875111 8.647758 0 15.666228 7.102023 15.666228 15.875111v31.123572zM20.888304 939.973665c0-11.530344 9.462402-20.888304 20.825638-20.888303h125.455152c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304H41.713942A20.80475 20.80475 0 0 1 20.888304 939.973665z m658.733544-135.021995a104.441518 104.441518 0 1 0-147.722083-147.722083 104.441518 104.441518 0 0 0 147.722083 147.722083zM459.542681 313.324555a20.888304 20.888304 0 0 1 20.867415-20.888304H710.202325a20.888304 20.888304 0 1 1 0 41.776608H480.430984A20.825639 20.825639 0 0 1 459.542681 313.324555z m0 104.441518c0-11.530344 9.295295-20.888304 20.742085-20.888303h334.505295c11.44679 0 20.742086 9.274407 20.742086 20.888303 0 11.530344-9.295295 20.888304-20.742086 20.888304H480.284766A20.762974 20.762974 0 0 1 459.542681 417.766073z m0 104.441519c0-11.530344 9.316183-20.888304 20.846527-20.888304h146.301679c11.509455 0 20.846527 9.274407 20.846527 20.888304 0 11.530344-9.316183 20.888304-20.846527 20.888303h-146.301679A20.80475 20.80475 0 0 1 459.542681 522.207592zM62.664911 396.87777a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911zM1357.739739 271.547948a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M512.01598 0C229.68971 0 0 229.68971 0 512.01598s229.68971 511.98402 512.01598 511.98402c282.29431 0 511.98402-229.68971 511.98402-511.98402S794.31029 0 512.01598 0zM512.01598 960.081895C264.940545 960.081895 63.918105 759.059455 63.918105 512.01598S264.940545 63.918105 512.01598 63.918105c247.043476 0 448.065916 201.02244 448.065916 448.097875S759.059455 960.081895 512.01598 960.081895zM743.079929 472.195l-279.833463-171.172685-4.122718-2.141257c-2.36497-1.02269-23.969289-9.939265-46.947848-9.939265-39.757061 0-65.484098 26.430136-65.484098 67.273805l0 324.895727 1.725789 5.017571c6.008302 17.673356 26.174464 47.55507 63.374801 47.55507l0 0c11.824849 0 24.065167-3.195905 37.551887-10.099061l276.637558-156.791111 2.716519-1.757748c19.047595-13.48672 39.629225-47.363316 18.440373-85.522424L743.079929 472.195zM419.047096 667.368934c-4.026841 2.045379-6.295933 2.36497-7.030992 2.428888-0.383509-0.319591-0.862894-0.862894-1.374239-1.534035l0-312.048188c0-1.374239 0.063918-2.492806 0.191754-3.323741 5.912425-0.319591 16.970257 2.460847 21.508442 4.122718l256.918823 157.142661L419.047096 667.368934z"  ></path></symbol><symbol id="icon-zanting1" viewBox="0 0 1024 1024"><path d="M512.1 0.2C229.8 0.2 0.2 229.8 0.2 512.1S229.8 1024 512.1 1024 1024 794.4 1024 512.1 794.4 0.2 512.1 0.2z m0 958.1c-246 0-446.2-200.2-446.2-446.2S266 65.9 512.1 65.9s446.2 200.2 446.2 446.2-200.1 446.2-446.2 446.2z"  ></path><path d="M418.2 306.8c-18.1 0-32.8 14.7-32.8 32.8v345c0 18.1 14.7 32.8 32.8 32.8s32.8-14.7 32.8-32.8v-345c0.1-18.1-14.6-32.8-32.8-32.8zM606 306.8c-18.1 0-32.8 14.7-32.8 32.8v345c0 18.1 14.7 32.8 32.8 32.8 18.1 0 32.8-14.7 32.8-32.8v-345c0-18.1-14.7-32.8-32.8-32.8z"  ></path></symbol><symbol id="icon-gongnengguanli" viewBox="0 0 1024 1024"><path d="M109.227 157.952c0-20.866 16.902-37.779 37.778-37.779H412.29c20.865 0 37.778 16.903 37.778 37.779v265.284c0 20.866-16.902 37.779-37.778 37.779H147.005c-20.865 0-37.778-16.903-37.778-37.779V157.952z m570.532-50.937c14.752-14.753 38.662-14.763 53.425 0L920.774 294.6c14.749 14.753 14.756 38.667 0 53.426L733.184 535.61c-14.752 14.76-38.663 14.766-53.425 0L492.172 348.027c-14.752-14.753-14.763-38.666 0-53.426l187.587-187.586zM542.88 605.255c0-20.862 16.9-37.775 37.78-37.775h265.28c20.866 0 37.779 16.9 37.779 37.776v265.287c0 20.863-16.9 37.776-37.779 37.776H580.66c-20.867 0-37.78-16.903-37.78-37.776V605.256z m-433.653 0c0-20.862 16.902-37.775 37.778-37.775H412.29c20.865 0 37.778 16.9 37.778 37.776v265.287c0 20.863-16.902 37.776-37.778 37.776H147.005c-20.865 0-37.778-16.903-37.778-37.776V605.256z"  ></path></symbol><symbol id="icon-user1" viewBox="0 0 1024 1024"><path d="M512.9 281.3m-215.5 0a215.5 215.5 0 1 0 431 0 215.5 215.5 0 1 0-431 0Z"  ></path><path d="M878.8 721.3c-8.1-132.6-79.2-237.2-169.2-236.1-5.9 0-10.9 1.9-15.1 4.2-86.4 48.8-259.6 56.5-365.7 0-5.2-2.8-10.4-4.2-15.2-4.2-82.4 0.2-157.2 106.7-169.2 236.1-10.2 131.5-0.5 236.7 169.2 236.1h396c153.1 2 183.7-101.1 169.2-236.1z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M837.8 389.8V104.7H674.9v122.2L512 64 64 512h81.5v448h244.4V593.5h244.4V960h244.4V512H960L837.8 389.8z"  ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M64.933 127.224v769.1h894.8v-769.1h-894.8z m649.6 177.101c39.267 0 71.099 31.832 71.099 71.099s-31.832 71.099-71.099 71.099-71.099-31.832-71.099-71.099 31.832-71.099 71.099-71.099z m140.8 487.599h-685.9v-213.6l146.8-200.3 252.2 315.2 196.3-130 90.6 91.4v137.3z"  ></path></symbol><symbol id="icon-qr-code" viewBox="0 0 1024 1024"><path d="M426.666667 469.333333H128c-25.6 0-42.666667-17.066667-42.666667-42.666666V128c0-25.6 17.066667-42.666667 42.666667-42.666667h298.666667c25.6 0 42.666667 17.066667 42.666666 42.666667v298.666667c0 25.6-17.066667 42.666667-42.666666 42.666666zM170.666667 384h213.333333V170.666667H170.666667v213.333333zM896 469.333333h-298.666667c-25.6 0-42.666667-17.066667-42.666666-42.666666V128c0-25.6 17.066667-42.666667 42.666666-42.666667h298.666667c25.6 0 42.666667 17.066667 42.666667 42.666667v298.666667c0 25.6-17.066667 42.666667-42.666667 42.666666z m-256-85.333333h213.333333V170.666667h-213.333333v213.333333zM426.666667 938.666667H128c-25.6 0-42.666667-17.066667-42.666667-42.666667v-298.666667c0-25.6 17.066667-42.666667 42.666667-42.666666h298.666667c25.6 0 42.666667 17.066667 42.666666 42.666666v298.666667c0 25.6-17.066667 42.666667-42.666666 42.666667z m-256-85.333334h213.333333v-213.333333H170.666667v213.333333zM896 789.333333h-149.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666V640H640v106.666667c0 25.6-17.066667 42.666667-42.666667 42.666666s-42.666667-17.066667-42.666666-42.666666V597.333333c0-25.6 17.066667-42.666667 42.666666-42.666666h149.333334c25.6 0 42.666667 17.066667 42.666666 42.666666v106.666667H853.333333V597.333333c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v149.333334c0 25.6-17.066667 42.666667-42.666667 42.666666zM746.666667 938.666667H597.333333c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667h149.333334c25.6 0 42.666667 17.066667 42.666666 42.666667s-17.066667 42.666667-42.666666 42.666667z"  ></path><path d="M302.933333 789.333333H251.733333c-8.533333 0-17.066667-8.533333-17.066666-17.066666v-51.2c0-8.533333 8.533333-17.066667 17.066666-17.066667h51.2c8.533333 0 17.066667 8.533333 17.066667 17.066667v51.2c0 8.533333-8.533333 17.066667-17.066667 17.066666zM302.933333 320H251.733333c-8.533333 0-17.066667-8.533333-17.066666-17.066667V251.733333c0-8.533333 8.533333-17.066667 17.066666-17.066666h51.2c8.533333 0 17.066667 8.533333 17.066667 17.066666v51.2c0 8.533333-8.533333 17.066667-17.066667 17.066667zM772.266667 320h-51.2c-8.533333 0-17.066667-8.533333-17.066667-17.066667V251.733333c0-8.533333 8.533333-17.066667 17.066667-17.066666h51.2c8.533333 0 17.066667 8.533333 17.066666 17.066666v51.2c0 8.533333-8.533333 17.066667-17.066666 17.066667zM896 938.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-8.533333-8.533333-12.8-17.066667-12.8-29.866667 0-12.8 4.266667-21.333333 12.8-29.866667 17.066667-17.066667 42.666667-17.066667 59.733334 0 8.533333 8.533333 12.8 21.333333 12.8 29.866667 0 12.8-4.266667 21.333333-12.8 29.866667-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  ></path></symbol><symbol id="icon-pengyouquan" viewBox="0 0 1024 1024"><path d="M541.76 311.637333 283.946667 54.72c-9.856 4.906667-19.541333 10.048-28.970667 15.509333C217.002667 91.968 181.226667 118.826667 148.906667 151.018667c-13.973333 13.845333-26.666667 28.373333-38.506667 43.221333-29.12 36.522667-52.522667 76.096-70.165333 117.482667C40.234667 311.722667 526.208 309.162667 541.76 311.637333z"  ></path><path d="M391.722667 348.16 27.093333 348.16c-3.52 10.197333-6.634667 20.714667-9.536 31.296C6.186667 421.504 0 465.685333 0 511.36c0 19.52 1.216 38.741333 3.434667 57.642667 5.248 46.378667 16.853333 90.773333 33.813333 132.416C37.248 701.418667 378.965333 357.248 391.722667 348.16z"  ></path><path d="M970.24 282.432c-4.842667-9.664-10.005333-19.328-15.488-28.821333-21.888-37.717333-48.768-73.408-81.173333-105.621333-13.845333-13.781333-28.373333-26.56-43.349333-38.378667-36.672-28.992-76.330667-52.330667-117.866667-69.866667 0 0 2.581333 484.138667 0 499.562667L970.24 282.432z"  ></path><path d="M676.565333 390.336 676.565333 27.072c-10.304-3.477333-20.864-6.656-31.445333-9.6C602.965333 6.208 558.592 0 512.725333 0c-19.605333 0-38.869333 1.216-57.877333 3.413333-46.485333 5.248-91.050667 16.853333-132.970667 33.642667C321.877333 37.056 667.285333 377.664 676.565333 390.336z"  ></path><path d="M311.146667 482.090667 53.418667 739.008c4.778667 9.834667 10.048 19.370667 15.488 28.885333 21.781333 37.781333 48.746667 73.472 81.173333 105.706667 13.824 13.802667 28.373333 26.474667 43.349333 38.378667 36.672 29.056 76.245333 52.288 117.866667 69.802667C311.296 981.76 308.650667 497.621333 311.146667 482.090667z"  ></path><path d="M479.744 714.282667l257.877333 256.917333c9.749333-4.885333 19.413333-10.048 28.992-15.509333 37.781333-21.696 73.536-48.490667 106.005333-80.832 13.781333-13.76 26.538667-28.202667 38.485333-43.157333 29.056-36.544 52.522667-75.989333 70.101333-117.461333C981.162667 714.24 495.317333 716.885333 479.744 714.282667z"  ></path><path d="M1020.544 455.189333c-5.312-46.314667-16.832-90.752-33.770667-132.458667 0 0-341.781333 344.149333-354.56 353.344l364.629333 0c3.456-10.282667 6.634667-20.8 9.493333-31.338667C1017.770667 602.645333 1024 558.592 1024 512.896 1024 493.354667 1022.741333 474.112 1020.544 455.189333z"  ></path><path d="M347.456 633.6l0 363.306667c10.346667 3.498667 20.864 6.656 31.424 9.493333C421.098667 1017.856 465.408 1024 511.274667 1024c19.541333 0 38.848-1.216 57.770667-3.434667 46.549333-5.269333 91.050667-16.725333 132.906667-33.6C702.016 986.965333 356.650667 646.4 347.456 633.6z"  ></path></symbol><symbol id="icon-weibo" viewBox="0 0 1024 1024"><path d="M757.142721 501.400594c-39.591717-7.653307-20.312628-28.559453-20.312628-28.559453s38.734186-63.074547-7.748475-108.983133c-57.487296-56.781214-197.431581 7.147794-197.431581 7.147794-53.370535 16.314571-39.249933-7.482415-31.680537-47.948035 0-47.772027-16.524348-128.522142-158.877497-80.923054C198.914864 290.249547 76.868203 458.387965 76.868203 458.387965-7.990486 570.08286 3.20039 656.447856 3.20039 656.447856c21.168112 190.756555 226.526223 243.119133 386.265344 255.530814 168.005388 12.925381 394.875442-57.126069 463.552591-201.294562C921.87353 566.341652 796.904307 509.221724 757.142721 501.400594L757.142721 501.400594 757.142721 501.400594zM401.854902 858.254072c-166.79891 7.649214-301.746392-74.803683-301.746392-184.631044 0-110.0003 134.947482-198.066031 301.746392-205.720362 166.972872-7.648191 302.098409 60.3546 302.098409 170.011068C703.952288 747.57532 568.827775 850.77268 401.854902 858.254072L401.854902 858.254072 401.854902 858.254072zM368.636337 540.16548C200.803887 559.543829 220.253868 714.597231 220.253868 714.597231s-1.718131 49.133024 44.930305 74.125231c98.114598 52.534494 199.326744 20.739347 250.279207-44.37465C566.587758 679.404708 536.642748 520.948813 368.636337 540.16548L368.636337 540.16548 368.636337 540.16548zM326.291926 757.948575c-31.329543 3.568269-56.631812-14.286378-56.631812-40.127929 0-25.669636 22.372543-52.702316 53.702086-55.930847 35.980469-3.400446 59.387575 17.003256 59.387575 43.012629C382.923738 730.578204 357.447507 754.379283 326.291926 757.948575L326.291926 757.948575 326.291926 757.948575zM425.268148 674.813133c-10.673084 7.816013-23.750937 6.79987-29.265534-2.716878-5.847172-9.188266-3.613294-23.810289 7.059789-31.456433 12.394285-9.184173 25.303292-6.459109 30.981618 2.717901C439.558619 652.538827 435.596378 666.647149 425.268148 674.813133L425.268148 674.813133 425.268148 674.813133zM838.903863 434.247148c13.596669 0 24.959461-9.862625 27.027563-22.780843 0.171915-1.023306 0.336668-1.871627 0.336668-2.894933 20.48966-181.740204-150.95506-150.455687-150.95506-150.455687-15.146978 0-27.370371 12.06785-27.370371 27.370371 0 14.963807 12.223393 27.031657 27.370371 27.031657 123.07406-26.864858 96.051613 94.691639 96.051613 94.691639C811.194778 422.173159 823.585993 434.247148 838.903863 434.247148L838.903863 434.247148 838.903863 434.247148zM818.939159 117.002784c-59.214636-13.769608-120.323413-1.868557-137.364531 1.354857-1.379417 0.172939-2.579755 1.36816-3.78521 1.533936-0.51677 0.172939-1.033539 0.677429-1.033539 0.677429-16.865109 4.764514-29.089525 20.060895-29.089525 38.255279 0 21.589714 17.724687 39.438221 39.932478 39.438221 0 0 21.516036-2.888793 36.152385-8.498558 14.452153-5.77554 137.355321-4.246721 198.287065 96.737228 33.232892 73.785493 14.637372 123.091456 12.229532 131.079384 0 0-7.92039 19.215644-7.92039 38.08234 0 21.762653 17.73185 35.536354 39.932478 35.536354 18.421558 0 33.913391-2.550079 38.388309-33.32192l0.171915 0C1070.594713 242.472404 924.969031 141.315516 818.939159 117.002784L818.939159 117.002784 818.939159 117.002784z"  ></path></symbol><symbol id="icon-wechat" viewBox="0 0 1024 1024"><path d="M1004.416 543.914667c-25.984-58.88-75.008-105.642667-131.925333-134.442667-100.437333-50.858667-225.322667-50.56-325.504 1.28-69.589333 35.712-127.701333 99.712-144.170667 177.578667-13.568 57.344-1.408 119.082667 29.013333 169.002666 45.269333 75.178667 127.104 123.178667 212.096 138.581334 61.568 12.501333 125.269333 5.077333 185.088-12.16 35.925333 13.909333 67.925333 36.437333 102.741334 53.162666a2238.762667 2238.762667 0 0 0-28.842667-89.685333c39.082667-27.733333 74.496-62.336 95.744-105.770667 31.744-60.373333 33.664-135.296 5.76-197.546666z m-423.424-403.882667c-106.453333-59.904-239.018667-68.906667-353.536-27.52-75.264 27.093333-143.36 77.44-185.429333 145.92-38.186667 61.866667-52.48 139.008-34.090667 209.792 18.474667 78.506667 73.002667 144.341333 139.178667 188.288-12.8 36.266667-24.96 72.490667-36.48 109.013333 41.6-21.76 83.2-44.501333 124.842666-66.602666 49.92 16 103.04 23.850667 156.16 22.101333a262.784 262.784 0 0 1-10.88-125.909333c9.6-58.496 41.6-112 85.077334-151.637334 73.642667-68.906667 177.962667-97.962667 277.162666-90.922666-18.602667-91.093333-82.602667-168.064-163.157333-212.48h1.152z m73.941333 426.197333c-8.917333 27.818667-49.322667 36.181333-68.906666 15.018667-21.589333-19.584-13.184-60.501333 15.146666-69.248 31.317333-13.226667 67.498667 22.912 53.76 54.229333z m204.586667 3.925334c-10.922667 25.002667-48.682667 30.848-67.242667 11.52-8.917333-8.149333-11.52-20.437333-14.677333-31.146667 4.437333-19.541333 17.92-39.808 39.68-40.746667 30.08-4.181333 57.002667 32.981333 41.6 60.416h0.64zM554.24 294.784c0.341333 41.002667-54.4 66.602667-85.12 38.784-31.872-22.826667-22.826667-78.378667 14.592-89.856 33.493333-13.44 73.088 14.677333 70.442667 50.56l0.085333 0.512z m-258.517333 10.410667c-7.338667 35.626667-55.082667 52.821333-83.029334 28.928-32.384-22.826667-23.296-79.402667 14.72-90.922667 37.248-14.336 79.573333 23.466667 68.309334 61.994667z"  ></path></symbol><symbol id="icon-zhifubao" viewBox="0 0 1024 1024"><path d="M230.4 576.512c-12.288 9.728-25.088 24.064-28.672 41.984-5.12 24.576-1.024 55.296 22.528 79.872 28.672 29.184 72.704 37.376 91.648 38.912 51.2 3.584 105.984-22.016 147.456-50.688 16.384-11.264 44.032-34.304 70.144-69.632-59.392-30.72-133.632-64.512-212.48-61.44-40.448 1.536-69.632 9.728-90.624 20.992z m752.64 135.68c26.112-61.44 40.96-129.024 40.96-200.192C1024 229.888 794.112 0 512 0S0 229.888 0 512s229.888 512 512 512c170.496 0 321.536-83.968 414.72-211.968-88.064-43.52-232.96-115.712-322.56-159.232-42.496 48.64-105.472 97.28-176.64 118.272-44.544 13.312-84.992 18.432-126.976 9.728-41.984-8.704-72.704-28.16-90.624-47.616-9.216-10.24-19.456-22.528-27.136-37.888 0.512 1.024 1.024 2.048 1.024 3.072 0 0-4.608-7.68-7.68-19.456-1.536-6.144-3.072-11.776-3.584-17.92-0.512-4.096-0.512-8.704 0-12.8-0.512-7.68 0-15.872 1.536-24.064 4.096-20.48 12.8-44.032 35.328-65.536 49.152-48.128 114.688-50.688 148.992-50.176 50.176 0.512 138.24 22.528 211.968 48.64 20.48-43.52 33.792-90.112 41.984-121.344h-307.2v-33.28h157.696v-66.56H272.384V302.08h190.464V235.52c0-9.216 2.048-16.384 16.384-16.384h74.752V302.08h207.36v33.28h-207.36v66.56h165.888s-16.896 92.672-68.608 184.32c115.2 40.96 278.016 104.448 331.776 125.952z"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M964.040544 682.873786a403.883495 403.883495 0 0 0-108.116505-207.223301c12.427184-113.398058-33.242718-133.592233-33.242719-133.592233-9.631068-351.68932-283.339806-341.747573-289.242718-341.747572s-316.582524-9.631068-326.213592 341.747572c0 0-45.669903 20.194175-33.242719 133.592233a403.883495 403.883495 0 0 0-108.116505 207.223301s-10.873786 211.262136 100.038835 25.786408a601.786408 601.786408 0 0 0 70.524272 133.902913s-81.708738 28.893204-74.873786 103.45631c0 0-2.796117 83.572816 174.912621 77.669903 0 0 124.271845-9.941748 162.174757-64.621359H531.574524c37.592233 54.679612 162.174757 64.621359 162.174758 64.621359 177.708738 5.902913 174.912621-77.669903 174.912621-77.669903 6.834951-74.563107-74.873786-103.456311-74.873786-103.45631a601.786408 601.786408 0 0 0 70.524271-133.902913c110.912621 186.407767 99.728155-25.786408 99.728156-25.786408"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M1023.849566 529.032144C1022.533495 457.744999 1007.544916 386.64064 979.907438 321.641387 952.343075 256.605575 912.349158 197.674868 863.252422 148.980264 814.192243 100.249102 755.992686 61.717486 693.004095 36.310016 630.052062 10.792874 562.347552-1.380777 495.483865 0.081523 428.620178 1.470709 362.012394 16.495846 301.144139 44.206439 240.202769 71.807359 185.000928 111.874391 139.377154 161.044242 93.753381 210.177537 57.707676 268.450209 33.945294 331.475357 10.073239 394.463948-1.296147 462.1319 0.166154 529.032144 1.482224 595.968946 15.593423 662.503615 41.549256 723.371871 67.468531 784.240126 105.013094 839.405409 151.075558 884.956067 197.101464 930.579841 251.645269 966.552431 310.612534 990.241698 369.543241 1014.040637 432.860849 1025.336908 495.483865 1023.874608 558.143438 1022.485422 620.291206 1008.337666 677.174693 982.381833 734.094737 956.462558 785.677384 918.954552 828.230327 872.892089 870.819826 826.902741 904.416179 772.395492 926.533473 713.5379 939.986637 677.85777 949.089457 640.605667 953.915048 602.841758 955.194561 602.951431 956.510631 602.987988 957.790144 602.987988 994.27454 602.987988 1023.849566 572.425909 1023.849566 534.735116 1023.849566 532.834125 1023.739893 530.933135 1023.593663 529.032144L1023.849566 529.032144 1023.849566 529.032144ZM918.892953 710.284282C894.691881 767.021538 859.596671 818.421398 816.568481 860.82811 773.540291 903.307938 722.652236 936.75806 667.706298 958.729124 612.760359 980.773303 553.902767 991.192193 495.483865 989.729893 437.064963 988.377265 379.304096 975.106889 326.441936 950.832702 273.543218 926.668187 225.616322 891.682649 186.097653 848.764132 146.542426 805.91873 115.35887 755.176905 94.959779 700.486869 74.451015 645.796833 64.799833 587.195144 66.189018 529.032144 67.541646 470.869145 79.934642 413.437296 102.563741 360.867595 125.119725 308.297895 157.765582 260.663459 197.759499 221.364135 237.716858 182.064811 284.985719 151.137157 335.910331 130.884296 386.834944 110.55832 441.305634 101.01681 495.483865 102.47911 549.662096 103.868296 603.036061 116.261292 651.876895 138.780718 700.754287 161.22703 745.025432 193.690099 781.509828 233.428113 818.067339 273.166127 846.764984 320.142529 865.518987 370.665008 884.346105 421.224045 893.156465 475.256046 891.76728 529.032144L891.986625 529.032144C891.840395 530.933135 891.76728 532.797568 891.76728 534.735116 891.76728 569.939999 917.540325 598.893547 950.66143 602.585856 944.227308 639.728286 933.589072 675.956779 918.892953 710.284282Z"  ></path></symbol><symbol id="icon-loading_ico" viewBox="0 0 1024 1024"><path d="M511.296 0.384C228.992 0.384 0 229.568 0 512.192 0 794.88 228.992 1024 511.296 1024a511.616 511.616 0 0 0 511.488-511.808C1022.656 229.568 793.6 0.384 511.296 0.384z m0 954.24c-243.712 0-441.984-198.4-441.984-442.432 0-243.968 198.272-442.432 441.984-442.432 243.84 0 442.112 198.4 442.112 442.432-0.064 244.032-198.272 442.432-442.112 442.432z"  ></path><path d="M707.264 343.488c0-160.128-186.752-160.128-186.752-160.128v320.192c-0.064 0 186.752 0 186.752-160.064zM343.488 316.8c-160.128 0-160.128 186.752-160.128 186.752h320.192s0-186.752-160.064-186.752zM316.8 680.64c0 160 186.752 160 186.752 160V520.512s-186.752 0-186.752 160.128zM680.64 707.264c160 0 160-186.752 160-186.752H520.448s0 186.752 160.192 186.752z"  ></path></symbol><symbol id="icon-Loading" viewBox="0 0 1024 1024"><path d="M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"  ></path></symbol><symbol id="icon-loading_flat" viewBox="0 0 1024 1024"><path d="M521.216 960c-247.42-0.78-447.36-201.99-446.58-449.41 0.78-247.43 201.99-447.37 449.42-446.59 133.24 0.42 259.38 60.13 344.17 162.9a454.492 454.492 0 0 1 40.73 59.06c10.43 19.93 2.73 44.54-17.2 54.97-18.75 9.81-41.9 3.62-53.25-14.24-101.15-175.36-325.3-235.51-500.66-134.36-175.35 101.15-235.51 325.3-134.36 500.66 101.15 175.36 325.3 235.51 500.66 134.36 12.68-7.31 24.9-15.38 36.61-24.15 17.95-13.56 43.49-10 57.05 7.94 13.56 17.95 10 43.49-7.95 57.05l-0.23 0.17A448 448 0 0 1 521.216 960z"  ></path><path d="M739.926 318.14l176.35-143.77c8.78-7.03 21.6-5.61 28.62 3.17a20.4 20.4 0 0 1 4.37 14.75l-16.29 160.06c-1.06 11.2-11 19.41-22.2 18.35-0.07-0.01-0.14-0.01-0.2-0.02l-160.06-16.29c-11.19-1.12-19.36-11.1-18.24-22.29 0.55-5.5 3.31-10.54 7.65-13.96z"  ></path></symbol><symbol id="icon-loading04" viewBox="0 0 1024 1024"><path d="M227.2 364.8L128 262.4 262.4 128l102.4 102.4c16-9.6 35.2-16 51.2-22.4V64h192v144c19.2 6.4 35.2 12.8 51.2 22.4L761.6 128 896 262.4l-102.4 102.4c9.6 16 16 35.2 22.4 51.2H960v192h-144c-6.4 19.2-12.8 35.2-22.4 51.2l102.4 102.4-134.4 134.4-102.4-102.4c-16 9.6-35.2 16-51.2 22.4V960h-192v-144c-19.2-6.4-35.2-12.8-51.2-22.4L262.4 896 128 761.6l102.4-102.4c-9.6-16-16-35.2-22.4-51.2H64v-192h144c3.2-19.2 12.8-35.2 19.2-51.2zM512 704c105.6 0 192-86.4 192-192s-86.4-192-192-192-192 86.4-192 192 86.4 192 192 192z"  ></path></symbol><symbol id="icon-financial_loading" viewBox="0 0 1024 1024"><path d="M1023.500488 536.376195c-4.795317 100.102244-38.462439 192.711805-92.809366 269.636683-12.787512 18.182244-38.961951 20.280195-54.746537 4.49561-12.387902-12.387902-13.986341-31.96878-3.896195-46.254829 56.844488-80.521366 87.214829-181.02322 78.523317-288.917854-16.983415-213.79122-187.61678-384.324683-401.408-401.408-92.309854-7.39278-179.224976 13.786537-252.853073 55.645658l96.305951 96.305952c14.086244 14.086244 14.086244 36.864 0 50.850341-6.993171 6.993171-16.184195 10.489756-25.475122 10.489756S348.759415 283.722927 341.666341 276.729756L213.79122 148.854634c-6.893268-6.893268-10.389854-15.784585-10.489757-24.775805v-0.199805-0.999024c0.099902-11.089171 5.194927-21.978537 15.085269-28.971707 76.924878-54.346927 169.534439-88.014049 269.636683-92.809366 300.806244-14.385951 549.863024 234.570927 535.477073 535.277268zM684.231805 745.771707c-14.086244-14.086244-36.864-14.086244-50.850342 0s-14.086244 36.864 0 50.850342l96.705561 96.705561c-73.728 41.959024-160.743024 63.238244-253.15278 55.845463C263.043122 932.089756 92.509659 761.45639 75.426341 547.665171c-8.59161-107.894634 21.778732-208.396488 78.523318-288.917854 10.090146-14.385951 8.59161-33.866927-3.896196-46.254829-15.684683-15.684683-41.859122-13.586732-54.746536 4.49561C40.96 293.912976 7.292878 386.522537 2.497561 486.62478c-14.385951 300.706341 234.570927 549.66322 535.277268 535.277269 100.102244-4.795317 192.711805-38.462439 269.636683-92.809366 10.090146-7.093073 15.185171-18.382049 15.085268-29.671024 0.099902-9.390829-3.396683-18.781659-10.489756-25.874732L684.231805 745.771707z"  ></path></symbol><symbol id="icon-xiangji" viewBox="0 0 1024 1024"><path d="M959.791 258.732c-25.828-25.828-56.262-37.478-91.391-37.478H755.786l-25.828-68.002c-7.044-16.436-18.784-30.524-35.13-42.173-16.436-11.74-35.13-18.784-51.566-18.784H385.343c-18.784 0-35.13 7.044-51.565 18.784-16.436 11.74-28.176 25.828-35.13 42.173l-28.176 68.002H155.6c-35.13 0-65.653 11.74-91.391 37.478C38.38 284.56 26.73 314.994 26.73 350.214v452.532c0 35.13 11.74 65.654 37.478 91.482 25.828 25.828 56.262 37.477 91.391 37.477h712.71c35.13 0 65.653-11.74 91.39-37.477 25.829-25.828 37.479-56.262 37.479-91.482V350.214c0.09-35.22-11.56-65.654-37.388-91.482zM511.955 781.614c-117.22 0-213.397-96.088-213.397-213.397 0-117.22 96.087-213.398 213.397-213.398s213.397 96.088 213.397 213.398-96.178 213.397-213.397 213.397z m0 0"  ></path><path d="M511.955 427.607c-79.742 0-143.048 63.306-143.048 143.048s63.306 143.047 143.048 143.047 143.047-63.305 143.047-143.047-63.305-143.048-143.047-143.048z m0 0"  ></path></symbol><symbol id="icon-star3" viewBox="0 0 1024 1024"><path d="M987.428571 369.714286q0 12.571429-14.857142 27.428571l-207.428572 202.285714 49.142857 285.714286q0.571429 4 0.571429 11.428572 0 12-6 20.285714T791.428571 925.142857q-10.857143 0-22.857142-6.857143l-256.571429-134.857143-256.571429 134.857143q-12.571429 6.857143-22.857142 6.857143-12 0-18-8.285714T208.571429 896.571429q0-3.428571 1.142857-11.428572l49.142857-285.714286L50.857143 397.142857Q36.571429 381.714286 36.571429 369.714286q0-21.142857 32-26.285715l286.857142-41.714285L484 41.714286q10.857143-23.428571 28-23.428572t28 23.428572l128.571429 260 286.857142 41.714285q32 5.142857 32 26.285715z"  ></path></symbol><symbol id="icon-star4" viewBox="0 0 1024 1024"><path d="M954.514 402.113c-7.724-22.304-27.494-38.582-51.328-42.155l-231.982-34.509-100.877-209.394c-10.595-22.01-33.307-36.087-58.312-36.087-24.918 0-47.632 14.077-58.264 36.087L352.876 325.449l-232.025 34.509c-23.84 3.574-43.606 19.851-51.329 42.155-7.685 22.299-1.873 46.884 14.989 63.662l169.98 169.855-39.451 235.515c-3.946 23.716 6.311 47.551 26.454 61.424 11.087 7.642 24.086 11.464 37.084 11.464a66.023 66.023 0 0 0 31.149-7.809l202.25-108.934L714.31 936.224c9.714 5.23 20.431 7.809 31.105 7.809a65.877 65.877 0 0 0 37.127-11.464c20.1-13.874 30.354-37.67 26.369-61.424L769.5 635.63l170.104-169.855c16.778-16.778 22.51-41.363 14.91-63.662zM734.95 590.657l-28.326 28.278 6.563 39.457 39.409 235.058-203.784-109.64-36.833-19.851-36.839 19.851-203.828 109.68 39.414-235.098 6.602-39.457-28.321-28.278-168.61-168.277 231.274-34.348 40.702-6.058 17.855-37.049 101.75-211.051 101.746 211.051 17.898 37.049 40.658 6.058 231.275 34.348L734.95 590.657z"  ></path></symbol><symbol id="icon-search1" viewBox="0 0 1024 1024"><path d="M429.12 806.976C220.736 806.976 51.2 637.44 51.2 429.12S220.736 51.2 429.12 51.2s377.92 169.536 377.92 377.92-169.536 377.856-377.92 377.856z m0-704.576C248.96 102.4 102.4 248.96 102.4 429.12s146.56 326.72 326.72 326.72c180.16 0 326.72-146.56 326.72-326.72S609.28 102.4 429.12 102.4z"  ></path><path d="M947.2 972.8a25.6 25.6 0 0 1-18.112-7.488l-249.088-249.088a25.6 25.6 0 0 1 36.224-36.224l249.088 249.088a25.6 25.6 0 0 1-18.112 43.712z"  ></path></symbol><symbol id="icon-dian" viewBox="0 0 1024 1024"><path d="M512 512m-447.616766 0a438 438 0 1 0 895.233533 0 438 438 0 1 0-895.233533 0Z"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M896 128H341.333333L0 512l341.333333 384h554.666667c70.688 0 128-57.312 128-128V256c0-70.688-57.312-128-128-128z m42.666667 640c0 23.530667-19.136 42.666667-42.666667 42.666667H379.658667L114.176 512l265.482667-298.666667H896c23.530667 0 42.666667 19.136 42.666667 42.666667v512zM798.165333 609.834667a42.666667 42.666667 0 0 1-59.274666 61.376c-0.362667-0.330667-0.704-0.682667-1.056-1.045334L640 572.341333l-97.834667 97.824A42.538667 42.538667 0 0 1 512 682.666667a42.666667 42.666667 0 0 1-30.165333-72.832L579.658667 512l-97.824-97.834667a42.666667 42.666667 0 1 1 59.285333-61.376c0.362667 0.341333 0.704 0.693333 1.056 1.045334L640 451.658667l97.834667-97.824a42.666667 42.666667 0 1 1 60.330666 60.341333L700.341333 512l97.824 97.834667z"  ></path></symbol><symbol id="icon-delete1" viewBox="0 0 1024 1024"><path d="M608 768c-17.696 0-32-14.304-32-32V384c0-17.696 14.304-32 32-32s32 14.304 32 32v352c0 17.696-14.304 32-32 32zM416 768c-17.696 0-32-14.304-32-32V384c0-17.696 14.304-32 32-32s32 14.304 32 32v352c0 17.696-14.304 32-32 32zM928 224H768v-64c0-52.928-42.72-96-95.264-96H352c-52.928 0-96 43.072-96 96v64H96c-17.696 0-32 14.304-32 32s14.304 32 32 32h832c17.696 0 32-14.304 32-32s-14.304-32-32-32z m-608-64c0-17.632 14.368-32 32-32h320.736C690.272 128 704 142.048 704 160v64H320v-64z"  ></path><path d="M736.128 960H288.064c-52.928 0-96-43.072-96-96V383.52c0-17.664 14.336-32 32-32s32 14.336 32 32V864c0 17.664 14.368 32 32 32h448.064c17.664 0 32-14.336 32-32V384.832c0-17.664 14.304-32 32-32s32 14.336 32 32V864c0 52.928-43.072 96-96 96z"  ></path></symbol><symbol id="icon-password" viewBox="0 0 1024 1024"><path d="M804.571429 1023.975619 219.428571 1023.975619C165.571048 1023.975619 121.904762 1004.714667 121.904762 950.832762L121.904762 536.356571C121.904762 482.499048 165.571048 438.832762 219.428571 438.832762L219.428571 438.832762 219.428571 292.547048 219.428571 292.547048C219.428571 130.974476 350.403048-0.024381 512-0.024381 673.572571-0.024381 804.571429 130.974476 804.571429 292.547048L804.571429 438.832762C858.428952 438.832762 902.095238 482.499048 902.095238 536.356571L902.095238 950.832762C902.095238 1004.714667 858.428952 1023.975619 804.571429 1023.975619ZM755.809524 292.547048 755.809524 292.547048C755.809524 292.547048 755.809524 292.547048 755.809524 292.547048 755.809524 157.891048 646.631619 48.737524 512 48.737524 377.344 48.737524 268.166095 157.891048 268.166095 292.547048 268.166095 292.547048 268.166095 292.547048 268.166095 292.547048L268.190476 292.547048 268.190476 438.832762 755.809524 438.832762 755.809524 292.547048ZM853.333333 536.356571C853.333333 509.44 831.488 487.594667 804.571429 487.594667L219.428571 487.594667C192.487619 487.594667 170.666667 509.44 170.666667 536.356571L170.666667 950.832762C170.666667 977.773714 192.487619 975.213714 219.428571 975.213714L804.571429 975.213714C831.488 975.213714 853.333333 977.773714 853.333333 950.832762L853.333333 536.356571ZM536.380952 801.109333 536.380952 877.714286C536.380952 891.172571 525.458286 902.095238 512 902.095238 498.541714 902.095238 487.619048 891.172571 487.619048 877.714286L487.619048 801.109333C445.635048 790.235429 414.47619 752.420571 414.47619 707.023238 414.47619 653.165714 458.142476 609.499429 512 609.499429 565.857524 609.499429 609.52381 653.165714 609.52381 707.023238 609.52381 752.420571 578.364952 790.235429 536.380952 801.109333ZM512 658.261333C485.059048 658.261333 463.238095 680.106667 463.238095 707.023238 463.238095 733.96419 485.059048 755.809524 512 755.809524 538.916571 755.809524 560.761905 733.96419 560.761905 707.023238 560.761905 680.106667 538.916571 658.261333 512 658.261333Z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M907.788 819.637c-21.631-51.141-52.593-97.064-92.025-136.498-39.434-39.433-85.358-70.394-136.498-92.024a427.22 427.22 0 0 0-55.298-19.058c27.979-12.982 53.754-30.915 76.214-53.375 50.238-50.238 77.906-117.033 77.906-188.081s-27.668-137.843-77.906-188.082S583.147 64.613 512.1 64.613 374.257 92.28 324.018 142.519s-77.906 117.034-77.906 188.082 27.667 137.843 77.906 188.081c22.46 22.46 48.236 40.393 76.215 53.375a427.22 427.22 0 0 0-55.298 19.058c-51.14 21.631-97.064 52.592-136.497 92.025-39.433 39.433-70.395 85.356-92.025 136.497-18.872 44.619-29.905 91.571-32.911 139.921h40.106c14.031-202.079 182.91-362.2 388.492-362.2 205.582 0 374.462 160.121 388.494 362.199h40.105c-3.007-48.349-14.039-95.301-32.911-139.92zM286.112 330.601c0-124.61 101.377-225.987 225.987-225.987s225.987 101.377 225.987 225.987S636.71 556.588 512.1 556.588c-124.61 0-225.988-101.378-225.988-225.987z"  ></path></symbol><symbol id="icon-love" viewBox="0 0 1024 1024"><path d="M739.584 70.592c-92.224 0-177.792 63.04-228.224 109.568C460.864 133.632 375.36 70.592 283.008 70.592 108.48 70.592 0 176.96 0 348.16 0 492.8 130.688 608.256 131.2 608.64l340.544 328.512c10.432 10.432 24.448 16.256 39.552 16.256s29.056-5.824 39.296-16l341.248-328.64c30.656-29.376 130.752-134.848 130.752-260.544C1022.656 176.96 914.176 70.592 739.584 70.592z"  ></path></symbol><symbol id="icon-aixinD" viewBox="0 0 1024 1024"><path d="M935.424 192c-53.76-53.76-124.928-82.944-200.192-82.944-75.776 0-146.944 29.696-200.192 82.944l-20.48 20.48-20.48-20.48C440.832 138.24 369.664 108.544 293.888 108.544S146.944 138.24 93.184 192c-110.08 110.592-109.568 290.304 0.512 400.896l389.632 389.632c8.704 8.704 19.968 13.312 31.744 13.312 11.776 0 23.04-4.608 31.744-13.312l389.632-389.632c110.08-111.104 109.568-290.816-1.024-400.896z m-41.984 357.376l-377.856 377.856-377.856-377.856c-86.528-86.528-87.04-227.328-1.024-314.368 41.984-41.984 97.792-65.024 157.184-65.024s115.2 23.04 157.184 65.024l63.488 63.488 63.488-63.488c41.984-41.984 97.792-65.024 157.184-65.024 59.392 0 115.2 23.04 157.184 65.024 86.016 86.528 86.528 227.328 1.024 314.368z"  ></path></symbol><symbol id="icon-radio3" viewBox="0 0 1024 1024"><path d="M511.83 113.707c219.43 0 397.952 178.52 397.952 397.952S731.26 909.611 511.829 909.611 113.877 731.09 113.877 511.658s178.521-397.951 397.952-397.951m0-49.745c-247.256 0-447.696 200.44-447.696 447.696 0 247.257 200.44 447.697 447.696 447.697s447.697-200.44 447.697-447.697c0-247.255-200.44-447.696-447.697-447.696z"  ></path></symbol><symbol id="icon-radio" viewBox="0 0 1024 1024"><path d="M512.572028 64.021106c-247.112074 0-447.435519 200.324468-447.435519 447.435519 0 247.112074 200.323445 447.435519 447.435519 447.435519 247.111051 0 447.435519-200.323445 447.435519-447.435519C960.00857 264.345574 759.683079 64.021106 512.572028 64.021106zM801.432948 389.292284 454.691783 736.010937c-8.739035 8.739035-20.186761 13.108552-31.635511 13.108552-11.447726 0-22.896476-4.369517-31.635511-13.108552L212.469066 557.080731c-17.47807-17.45658-17.47807-45.791929 0-63.269999 17.47807-17.47807 45.791929-17.47807 63.269999 0l147.317207 147.295718 315.105654-315.084165c17.47807-17.47807 45.791929-17.47807 63.269999 0C818.909995 343.500355 818.909995 371.814214 801.432948 389.292284z"  ></path></symbol><symbol id="icon-baseline-check_box_outline_blank-px" viewBox="0 0 1024 1024"><path d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334m0-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z"  ></path></symbol><symbol id="icon-baseline-check_box-px" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333z m-384 597.333333l-213.333334-213.333333 60.16-60.16L426.666667 604.586667l323.84-323.84L810.666667 341.333333l-384 384z"  ></path></symbol><symbol id="icon-in_biyan" viewBox="0 0 1024 1024"><path d="M599.54 491.87l57.84 55.35C660.14 535.85 662 524.18 662 512c0-82.71-67.29-150-150-150-14.46 0-28.14 2.7-41.4 6.54l57.6 55.11c35.31 6.45 63.33 33.48 71.34 68.22zM553.49 655.43L495.95 600.35c-35.43-6.42-63.6-33.51-71.55-68.4l-57.78-55.26C363.86 488.09 362 499.79 362 512c0 82.71 67.29 150 150 150 14.49 0 28.2-2.73 41.49-6.57zM199.76 160.31c-12-11.43-30.99-11.01-42.42 0.96-11.46 11.97-11.04 30.96 0.93 42.42l690 660A29.91 29.91 0 0 0 869 872c7.92 0 15.78-3.12 21.69-9.27 11.46-11.97 11.01-30.96-0.93-42.42l-690-660z"  ></path><path d="M512 782c-158.7 0-314.37-106.47-388.95-266.19-0.15-0.57-0.33-1.08-0.51-1.62-0.06-0.51-0.21-0.93-0.27-1.23-0.03-0.33-0.27-0.75-0.27-1.17v-0.39c0-0.69 0.42-1.38 0.51-2.07 0.12-0.42 0.33-0.78 0.45-1.2 27.87-60.12 67.5-112.74 114.51-154.98l-43.41-41.49C142.04 359.15 98.36 417.74 67.85 484.4c-0.99 1.98-1.68 3.84-2.13 5.52a15.6253125 15.6253125 0 0 0-0.6 1.5c-1.65 4.74-1.65 7.95-1.53 7.23-0.75 3.51-1.5 10.5-1.5 10.5-0.21 2.1-0.18 3.78 0.06 5.88 0 0 0.66 12.63 0.99 13.89l4.26 12.78C150.5 723.26 329.18 843.65 512 843.65c65.46 0 130.29-16.68 190.41-44.94l-46.74-45.54C609.62 771.8 560.96 782 512 782zM962 512.09c0-5.43-0.93-9.93-1.2-10.44-0.18-2.73-1.08-7.59-1.95-10.14-0.24-0.63-0.51-1.29-0.78-1.95-0.45-1.47-0.96-2.91-1.5-4.05C873.56 303.95 694.91 182 512 182c-65.4 0-130.2 15.81-190.32 44.13l46.74 44.67C414.47 252.2 463.07 242 512 242c159.15 0 315.18 106.92 388.83 265.95 0.09 0.3 0.15 0.57 0.24 0.75 0.06 0.27 0.15 0.57 0.24 0.81 0.15 1.2 0.3 2.34 0.45 2.97-0.15 0.63-0.24 1.2-0.36 1.83-0.03 0.15-0.09 0.3-0.12 0.45-0.12 0.39-0.27 0.81-0.39 1.29-27.84 60-67.38 112.53-114.33 154.74l43.44 41.55c51.87-47.34 95.37-105.63 125.64-171.9 1.29-2.34 2.1-4.53 2.67-6.48 0.24-0.57 0.45-1.11 0.63-1.65 1.44-4.2 1.74-7.83 1.62-7.83 0 0 0 0.03-0.03 0.03 0.57-2.88 1.47-7.2 1.47-12.42z"  ></path></symbol><symbol id="icon-in_zhengyan" viewBox="0 0 1024 1024"><path d="M962 512.09c0-5.4-0.93-9.93-1.2-10.44-0.18-2.7-1.08-7.56-1.95-10.14-0.24-0.63-0.51-1.29-0.78-1.95-0.45-1.47-0.96-2.91-1.5-4.05C873.56 303.98 694.91 182 512 182c-182.88 0-361.53 121.89-444.15 302.43-0.99 1.98-1.68 3.84-2.13 5.49a52.0425 52.0425 0 0 0-0.6 1.5c-1.65 4.77-1.68 8.1-1.53 7.26-0.78 3.51-1.47 10.47-1.47 10.47-0.21 2.13-0.21 3.78 0.03 5.91 0 0 0.69 6.06 1.02 7.32 0.12 1.71 0.54 4.23 1.05 6.54h-0.03c0.42 1.95 1.05 3.84 1.86 5.7 0.45 1.44 0.93 2.79 1.38 3.78C150.53 719.99 329.18 842 512 842c182.94 0 361.59-121.92 443.64-301.59 1.29-2.34 2.1-4.53 2.67-6.48 0.24-0.57 0.45-1.11 0.63-1.62 1.44-4.2 1.74-7.8 1.62-7.8l-0.03 0.03c0.57-2.91 1.47-7.26 1.47-12.45z m-60.63 2.22c-0.03 0.15-0.09 0.3-0.12 0.45-0.12 0.39-0.27 0.81-0.39 1.29C827.03 675.2 671.09 782 512 782c-158.7 0-314.37-106.47-388.95-266.22-0.15-0.54-0.3-1.08-0.48-1.59-0.06-0.51-0.15-0.96-0.18-1.26-0.06-0.33-0.12-0.75-0.18-1.17l0.03-0.39c0.15-0.66 0.27-1.35 0.36-2.07 0.12-0.39 0.24-0.78 0.36-1.2C196.85 348.86 352.91 242 512 242c159.15 0 315.18 106.95 388.83 265.95 0.09 0.3 0.15 0.57 0.24 0.78 0.06 0.27 0.15 0.54 0.24 0.81 0.15 1.2 0.3 2.37 0.45 2.97-0.18 0.6-0.27 1.2-0.39 1.8z"  ></path><path d="M512 362c-82.71 0-150 67.29-150 150s67.29 150 150 150 150-67.29 150-150-67.29-150-150-150z m0 240c-49.62 0-90-40.38-90-90s40.38-90 90-90 90 40.38 90 90-40.38 90-90 90z"  ></path></symbol><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M233.008 967.344c-10.272 0-20.176-5.52-25.28-15.12-7.328-13.888-1.968-31.008 12-38.352l279.008-145.824c8.336-4.336 18.24-4.336 26.576 0l227.872 119.088-43.568-252.336c-1.6-9.216 1.472-18.592 8.208-25.104l184.32-178.672-254.736-36.8c-9.264-1.376-17.296-7.184-21.472-15.552L512.016 149.056l-113.952 229.616c-4.16 8.352-12.192 14.16-21.488 15.552l-254.736 36.8 184.336 178.672c6.72 6.512 9.792 15.888 8.208 25.104l-23.248 134.688c-2.64 15.44-17.328 25.744-32.928 23.168-15.536-2.64-25.952-17.296-23.28-32.72l20.672-120.048L40.624 431.536c-7.776-7.568-10.592-18.816-7.216-29.12 3.328-10.256 12.288-17.728 23.008-19.296l297.104-42.96 132.88-267.728c4.816-9.712 14.752-15.808 25.6-15.808 10.848 0 20.752 6.096 25.568 15.808l132.912 267.728 297.072 42.96c10.8 1.552 19.696 9.024 23.04 19.328 3.344 10.272 0.528 21.52-7.2 29.088L768.416 639.888l50.72 294.336c1.824 10.672-2.512 21.408-11.312 27.728s-20.464 7.152-30.016 2.176l-265.792-138.992-265.76 138.992C242.032 966.336 237.488 967.344 233.008 967.344L233.008 967.344z"  ></path></symbol><symbol id="icon-Danger" viewBox="0 0 1024 1024"><path d="M458.24 499.2c-7.970133 8.533333-17.92 12.8-29.866667 12.8s-22.186667-4.266667-30.72-12.8c-7.953067-7.970133-11.946667-17.92-11.946666-29.866667s3.976533-22.186667 11.946666-30.72c8.533333-7.970133 18.773333-11.946667 30.72-11.946666s21.896533 3.976533 29.866667 11.946666c8.533333 8.533333 12.8 18.773333 12.8 30.72s-4.266667 21.896533-12.8 29.866667z m98.133333-29.866667c0-11.946667 3.976533-22.186667 11.946667-30.72 8.533333-7.970133 18.7904-11.946667 30.72-11.946666 11.946667 0 21.896533 3.976533 29.866667 11.946666 8.533333 8.533333 12.8 18.773333 12.8 30.72s-4.266667 21.896533-12.8 29.866667c-7.970133 8.533333-17.92 12.8-29.866667 12.8-11.9296 0-22.186667-4.266667-30.72-12.8-7.970133-7.970133-11.946667-17.92-11.946667-29.866667z"  ></path><path d="M938.666667 955.733333a17.015467 17.015467 0 0 1-12.066134-5.000533L699.733333 723.8656V768a17.066667 17.066667 0 0 1-17.066666 17.066667H341.333333a17.066667 17.066667 0 0 1-17.066666-17.066667v-44.1344L97.399467 950.7328a17.0496 17.0496 0 1 1-24.132267-24.132267L324.266667 675.601067l-0.136534-50.8416-5.102933-5.12C265.8816 566.493867 238.933333 501.572267 238.933333 426.666667c0-47.684267 11.127467-91.511467 33.1264-130.474667L73.2672 97.399467a17.0496 17.0496 0 1 1 24.132267-24.132267l193.4336 193.4336a272.366933 272.366933 0 0 1 28.194133-33.024C372.1728 180.548267 437.0944 153.6 512 153.6c74.922667 0 139.8272 26.948267 192.9728 80.093867a302.8992 302.8992 0 0 1 28.757333 33.245866l192.853334-193.655466a17.083733 17.083733 0 0 1 24.200533 24.081066L752.6912 296.260267C774.178133 335.223467 785.066667 379.016533 785.066667 426.666667c0 74.9056-26.948267 139.8272-80.093867 192.9728l-5.239467 5.239466v50.722134l250.999467 250.999466A17.0496 17.0496 0 0 1 938.666667 955.733333zM614.4 750.933333h51.2v-133.12c0-4.539733 1.792-8.874667 5.000533-12.066133l10.205867-10.222933C727.995733 548.352 750.933333 493.124267 750.933333 426.666667c0-46.011733-11.4688-87.739733-34.082133-124.0576-10.069333-15.889067-22.186667-30.958933-36.010667-44.8C633.668267 210.653867 578.4576 187.733333 512 187.733333s-121.668267 22.920533-168.840533 70.0928a231.202133 231.202133 0 0 0-35.037867 44.5952l-0.017067 0.017067a2.9696 2.9696 0 0 1-0.187733 0.3072C284.791467 339.029333 273.066667 380.706133 273.066667 426.666667c0 66.4576 22.920533 121.668267 70.0928 168.840533l10.24 10.257067A16.981333 16.981333 0 0 1 358.4 617.813333V750.933333h55.466667v-68.266666a17.066667 17.066667 0 1 1 34.133333 0v68.266666H494.933333v-68.266666a17.066667 17.066667 0 1 1 34.133334 0v68.266666h51.2v-68.266666a17.066667 17.066667 0 1 1 34.133333 0v68.266666z m-15.36-221.866666a58.606933 58.606933 0 0 1-42.786133-17.800534c-11.246933-11.246933-16.9472-25.344-16.9472-41.9328 0-16.349867 5.563733-30.600533 16.5376-42.359466C568.4224 415.163733 582.673067 409.6 599.04 409.6c16.5888 0 30.702933 5.700267 41.9328 16.964267A58.538667 58.538667 0 0 1 658.773333 469.333333c0 16.571733-6.2976 31.214933-18.210133 42.3424C630.254933 522.769067 615.594667 529.066667 599.04 529.066667z m0-85.333334c-7.6288 0-13.704533 2.338133-19.063467 7.355734-4.215467 4.5568-6.536533 10.615467-6.536533 18.244266 0 7.406933 2.218667 13.056 6.946133 17.800534 5.307733 5.3248 11.246933 7.799467 18.653867 7.799466 7.2704 0 12.629333-2.269867 17.390933-7.389866 5.922133-5.5808 8.209067-10.939733 8.209067-18.210134 0-7.406933-2.491733-13.329067-7.799467-18.653866-4.744533-4.744533-10.410667-6.946133-17.800533-6.946134z m-170.666667 85.333334a58.5728 58.5728 0 0 1-42.786133-17.800534c-11.246933-11.264-16.9472-25.378133-16.9472-41.9328 0-16.349867 5.563733-30.600533 16.5376-42.359466C397.755733 415.163733 412.0064 409.6 428.373333 409.6c16.5888 0 30.685867 5.700267 41.9328 16.9472A58.5728 58.5728 0 0 1 488.106667 469.333333a56.490667 56.490667 0 0 1-17.800534 41.949867A56.490667 56.490667 0 0 1 428.373333 529.066667z m0-85.333334c-7.645867 0-13.704533 2.338133-19.080533 7.355734-4.181333 4.539733-6.519467 10.5984-6.519467 18.244266 0 7.406933 2.2016 13.056 6.9632 17.800534 5.307733 5.3248 11.229867 7.799467 18.6368 7.799466 7.253333 0 12.629333-2.269867 17.408-7.389866a9.284267 9.284267 0 0 1 0.8192-0.8192c5.102933-4.7616 7.3728-10.120533 7.3728-17.390934a24.917333 24.917333 0 0 0-7.799466-18.653866c-4.744533-4.744533-10.3936-6.946133-17.800534-6.946134z"  ></path></symbol><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M672 832H224c-52.928 0-96-43.072-96-96V160c0-52.928 43.072-96 96-96h448c52.928 0 96 43.072 96 96v576c0 52.928-43.072 96-96 96zM224 128c-17.632 0-32 14.368-32 32v576c0 17.664 14.368 32 32 32h448a32 32 0 0 0 32-32V160c0-17.632-14.336-32-32-32H224z m576 832H320a32 32 0 1 1 0-64h480a32 32 0 0 0 32-32V256a32 32 0 1 1 64 0v608c0 52.928-43.072 96-96 96z m-256-640H288a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z m64 160H288.032a32 32 0 0 1 0-64H608a32 32 0 1 1 0 64z m0 160H288a32 32 0 1 1 0-64h320a32 32 0 1 1 0 64z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M512 428.8 256 224l0 115.2 256 204.8 256-204.8L768 224 512 428.8zM256 480l0 115.2 256 204.8 256-204.8L768 480l-256 204.8L256 480z"  ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M768 800l0-115.2L512 480l-256 204.8 0 115.2 256-204.8L768 800zM512 339.2l256 204.8L768 428.8 512 224 256 428.8l0 115.2L512 339.2z"  ></path></symbol><symbol id="icon-up1" viewBox="0 0 1024 1024"><path d="M176.442548 161.367201l671.114904 0 0 87.866187-671.114904 0 0-87.866187Z"  ></path><path d="M562.948369 862.632799 463.180108 862.632799 463.180108 427.634544 320.117808 569.036018 256.157078 505.075287 512 249.232364 767.841899 505.075287 703.882192 569.036018 561.41341 430.704462Z"  ></path></symbol><symbol id="icon-down1" viewBox="0 0 1024 1024"><path d="M792.832 485.856c-12.512-12.544-32.8-12.48-45.248-0.032L544 688.992V128c0-17.664-14.336-32-32-32s-32 14.336-32 32v563.04L245.952 455.584c-12.48-12.576-32.704-12.64-45.248-0.128-12.544 12.448-12.608 32.704-0.128 45.248l287.52 289.248c3.168 3.2 6.88 5.536 10.816 7.136 4 1.792 8.384 2.912 13.088 2.912 11.296 0 20.704-6.176 26.4-14.976l254.368-253.952c12.544-12.448 12.544-32.704 0.064-45.216zM864 928H160c-17.664 0-32-14.304-32-32s14.336-32 32-32h704c17.696 0 32 14.304 32 32s-14.304 32-32 32z"  ></path></symbol><symbol id="icon-Clouduploadstorage" viewBox="0 0 1024 1024"><path d="M525.333333 516.672a21.312 21.312 0 0 0-26.666666 0l-106.666667 85.333333a21.333333 21.333333 0 0 0 26.666667 33.322667l72-57.6V874.666667a21.333333 21.333333 0 0 0 42.666666 0V577.728l72 57.6a21.333333 21.333333 0 1 0 26.666667-33.322667z"  ></path><path d="M810.666667 384c-1.130667 0-2.218667 0-3.328 0.042667a298.474667 298.474667 0 0 0-565.397334-84.906667A213.333333 213.333333 0 0 0 256 725.333333h21.333333a21.333333 21.333333 0 0 0 0-42.666666h-21.333333a170.666667 170.666667 0 0 1 0-341.333334 21.333333 21.333333 0 0 0 19.690667-13.12 255.808 255.808 0 0 1 491.392 80.832 21.376 21.376 0 0 0 24.576 19.626667A123.904 123.904 0 0 1 810.666667 426.666667a128 128 0 0 1 0 256h-64a21.333333 21.333333 0 0 0 0 42.666666h64a170.666667 170.666667 0 0 0 0-341.333333z"  ></path></symbol><symbol id="icon-down2" viewBox="0 0 1024 1024"><path d="M512 622.336l311.168-311.168a42.667 42.667 0 0 1 60.33 60.33L542.166 712.833a42.667 42.667 0 0 1-60.33 0L140.5 371.499a42.667 42.667 0 0 1 60.331-60.331L512 622.336z"  ></path></symbol><symbol id="icon-up2" viewBox="0 0 1024 1024"><path d="M512 401.664L200.832 712.832a42.667 42.667 0 1 1-60.33-60.33l341.333-341.334a42.667 42.667 0 0 1 60.33 0L883.5 652.501a42.667 42.667 0 0 1-60.331 60.331L512 401.664z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z"  ></path></symbol><symbol id="icon-warning1" viewBox="0 0 1024 1024"><path d="M598.272514 158.17909C545.018272 71.994036 451.264177 71.951401 397.724122 158.397341L25.049726 760.118586C-28.93569 847.283607 14.324655 927.325257 116.435565 929.308966L891.057077 929.313666C993.88467 931.315989 1036.926865 868.038259 983.25955 781.189694 980.374633 776.521099 980.374633 776.521099 971.719878 762.515313 967.393745 755.514432 967.393745 755.514432 963.78822 749.679695 956.511588 737.90409 941.113263 734.285867 929.3951 741.59817 917.676937 748.910473 914.076365 764.384279 921.352996 776.159885 924.958522 781.994622 924.958522 781.994622 929.284655 788.995503 937.939409 803.001289 937.939409 803.001289 940.824326 807.669884 972.284602 858.581314 957.441559 880.402549 891.539823 879.122276L116.918309 879.117577C54.037254 877.891296 33.95555 840.735497 67.458075 786.642217L440.132471 184.920971C474.112981 130.055931 522.112175 130.077759 556.029583 184.965509L857.08969 656.83971C864.534622 668.508595 879.98329 671.9032 891.595253 664.421773 903.207217 656.940343 906.585263 641.415949 899.140331 629.747063L598.272514 158.17909Z"  ></path><path d="M474.536585 619.793346C474.536585 633.654611 485.718547 644.891386 499.512194 644.891386 513.305843 644.891386 524.487806 633.654611 524.487806 619.793346L524.487806 299.793346C524.487806 285.932082 513.305843 274.695307 499.512194 274.695307 485.718547 274.695307 474.536585 285.932082 474.536585 299.793346L474.536585 619.793346Z"  ></path><path d="M474.465781 776.736145C474.565553 790.597047 485.828105 801.75225 499.621393 801.651987 513.414679 801.551725 524.515467 790.233967 524.415695 776.373065L523.955031 712.375667C523.855258 698.514767 512.592708 687.359563 498.79942 687.459825 485.006133 687.560087 473.905346 698.877847 474.005118 712.738748L474.465781 776.736145Z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path></symbol><symbol id="icon-Success" viewBox="0 0 1024 1024"><path d="M508.248559 953.897386c-60.0824 0-118.381178-11.772115-173.275415-34.991956-53.009308-22.420639-100.612489-54.513568-141.484361-95.385441-40.872896-40.872896-72.964802-88.475054-95.386464-141.485384-23.218818-54.894238-34.990932-113.193015-34.990933-173.275416s11.773138-118.381178 34.990933-173.275415c22.421662-53.009308 54.513568-100.612489 95.386464-141.484362 40.871873-40.872896 88.475054-72.964802 141.484361-95.386464 54.895261-23.218818 113.194038-34.990932 173.275415-34.990932 60.0824 0 118.380154 11.773138 173.275416 34.990932 53.009308 22.421662 100.611465 54.513568 141.484361 95.386464 40.871873 40.871873 72.964802 88.475054 95.385441 141.484362 23.218818 54.895261 34.991955 113.194038 34.991955 173.275415s-11.773138 118.381178-34.991955 173.275416c-22.420639 53.010331-54.513568 100.612489-95.385441 141.485384-40.872896 40.871873-88.475054 72.964802-141.484361 95.385441-54.895261 23.218818-113.193015 34.991955-173.275416 34.991956z m0-839.844794c-217.641879 0-394.706597 177.064718-394.706596 394.706597 0 217.642902 177.064718 394.706597 394.706596 394.706597s394.705574-177.063695 394.705574-394.706597c0.001023-217.641879-177.063695-394.706597-394.705574-394.706597z"  ></path><path d="M448.493617 738.906893a25.485441 25.485441 0 0 1-16.624632-6.148024L250.937193 577.889663c-10.733459-9.188266-11.987009-25.337061-2.799766-36.07052 9.188266-10.732435 25.337061-11.988032 36.071543-2.798743l161.571863 138.297786L718.296483 361.414353c9.228175-10.69969 25.384134-11.890818 36.081777-2.660596 10.697643 9.229199 11.888771 25.38311 2.660596 36.081777L467.87606 730.034828c-5.058203 5.863545-12.199856 8.872065-19.382443 8.872065z"  ></path></symbol><symbol id="icon-warning2" viewBox="0 0 1024 1024"><path d="M575.667042 127.981836c0-35.051307-28.199249-63.502289-63.147202-63.940264-0.173962-0.008186-0.349971-0.020466-0.51984-0.020466-0.036839 0-0.076748 0.004093-0.11461 0.004093-0.060375 0-0.118704-0.004093-0.179079-0.004093-35.32453 0-63.960731 28.636201-63.960731 63.96073 0 2.503007 0.159636 4.968152 0.438999 7.396458l31.835056 536.268729c0 17.662265 14.3181 31.980365 31.980365 31.980366 17.662265 0 31.980365-14.3181 31.980365-31.980366l31.262005-536.385386c0.271176-2.390443 0.424672-4.816702 0.424672-7.279801z"  ></path><path d="M511.706311 831.54885m-63.960731 0a63.960731 63.960731 0 1 0 127.921462 0 63.960731 63.960731 0 1 0-127.921462 0Z"  ></path></symbol><symbol id="icon-bg-warning" viewBox="0 0 1024 1024"><path d="M512 794.026667a44.8 44.8 0 1 1 44.8-44.8A44.8 44.8 0 0 1 512 794.026667z m-40.106667-563.2a40.106667 40.106667 0 0 1 80.213334 0v369.066666a40.106667 40.106667 0 0 1-79.786667 0zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"  ></path></symbol><symbol id="icon-tuichu" viewBox="0 0 1024 1024"><path d="M661.333333 99.776l0 76.586667c149.333333 67.989333 225.365333 206.165333 225.365333 365.674667 0 226.816-183.061333 410.645333-409.856 410.645333-226.773333 0-405.930667-183.829333-405.930667-410.645333C70.912 382.869333 170.666667 244.906667 298.666667 176.789333L298.666667 100.16C106.666667 173.184 1.984 343.530667 1.984 542.016c0 265.088 212.714667 479.936 477.781333 479.936 265.045333 0 477.333333-214.848 477.333333-479.936C957.098667 343.210667 853.333333 172.608 661.333333 99.776z"  ></path><path d="M512 405.333333c0 23.552-19.114667 42.666667-42.666667 42.666667l0 0c-23.552 0-42.666667-19.114667-42.666667-42.666667L426.666667 42.666667c0-23.552 19.114667-42.666667 42.666667-42.666667l0 0c23.552 0 42.666667 19.114667 42.666667 42.666667L512 405.333333z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M376.157637 513.757017 377.263831 512.650823 376.157637 511.525186 765.033435 122.658597 706.420503 64.073294 258.968611 511.525186 260.074805 512.650823 258.968611 513.757017 706.420503 961.198675 765.015016 902.604162Z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M512 451.6608 403.3536 343.0144a42.606933 42.606933 0 0 0-60.305067 0.034133 42.666667 42.666667 0 0 0-0.034133 60.305067L451.6608 512 343.0144 620.6464a42.606933 42.606933 0 0 0 0.034133 60.305067 42.666667 42.666667 0 0 0 60.305067 0.034133L512 572.3392l108.6464 108.6464a42.606933 42.606933 0 0 0 60.305067-0.034133 42.666667 42.666667 0 0 0 0.034133-60.305067L572.3392 512l108.6464-108.6464a42.606933 42.606933 0 0 0-0.034133-60.305067 42.666667 42.666667 0 0 0-60.305067-0.034133L512 451.6608zM512 1024C229.666133 1024 0 794.333867 0 512S229.666133 0 512 0s512 229.666133 512 512-229.666133 512-512 512zm0-938.666667c-235.264 0-426.666667 191.402667-426.666667 426.666667s191.402667 426.666667 426.666667 426.666667 426.666667-191.402667 426.666667-426.666667-191.402667-426.666667-426.666667-426.666667z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M482.1 381.5c-168.6 0-309.3 194.9-311.6 368.1 0 13.8 11.3 17.7 22 0C246.9 652.4 335.9 602 452.6 602h26.1v115.4c0 34.5 39.8 58.1 68.7 34.9l266.8-214.1c29-23.2 29-61.2 0.1-84.4L545.5 237.5c-28.9-23.3-62.8-7.2-62.8 33.7l-0.6 110.3h-4.9 4.9z m0.1-0.1"  ></path></symbol><symbol id="icon-baseline-close-px" viewBox="0 0 1024 1024"><path d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"  ></path></symbol><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M426.666667 384V213.333333l-298.666667 298.666667 298.666667 298.666667v-174.933334c213.333333 0 362.666667 68.266667 469.333333 217.6-42.666667-213.333333-170.666667-426.666667-469.333333-469.333333z"  ></path></symbol><symbol id="icon-warning" viewBox="0 0 1024 1024"><path d="M467.2 748.8A44.8 44.8 0 1 0 512 704a44.8 44.8 0 0 0-44.8 44.8zM512 640a40.106667 40.106667 0 0 1-40.106667-40.106667V230.826667a40.106667 40.106667 0 0 1 80.213334 0v369.066666A40.106667 40.106667 0 0 1 512 640z m0-640a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 72.106667a439.893333 439.893333 0 0 1 170.666667 845.226666A439.893333 439.893333 0 0 1 200.96 200.96a439.04 439.04 0 0 1 311.04-128z"  ></path></symbol><symbol id="icon-right1" viewBox="0 0 1024 1024"><path d="M654.2336 506.7264L311.296 163.328a35.328 35.328 0 0 1 0.6144-50.688 37.1712 37.1712 0 0 1 51.8144 0.6144l368.2816 368.7936a35.328 35.328 0 0 1-0.3072 50.432l-387.584 378.6752a37.2224 37.2224 0 0 1-51.712 0 35.328 35.328 0 0 1 0-50.688l361.8816-353.6896z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"  ></path></symbol></svg>';
  function m() {
    t || ((t = !0), o());
  }
  (a = function () {
    let c;
    let a;
    let l;
    let o;
    ((o = document.createElement("div")).innerHTML = s),
      (s = null),
      (l = o.getElementsByTagName("svg")[0]) &&
        (l.setAttribute("data-hidden", "true"),
        (l.style.position = "absolute"),
        (l.style.width = 0),
        (l.style.height = 0),
        (l.style.overflow = "hidden"),
        (c = l),
        (a = document.body).firstChild ? ((o = c), (l = a.firstChild).parentNode.insertBefore(o, l)) : a.appendChild(c));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(a, 0)
        : ((l = function () {
            document.removeEventListener("DOMContentLoaded", l, !1), a();
          }),
          document.addEventListener("DOMContentLoaded", l, !1))
      : document.attachEvent &&
        ((o = a),
        (h = c.document),
        (t = !1),
        (i = function () {
          try {
            h.documentElement.doScroll("left");
          } catch (c) {
            return void setTimeout(i, 50);
          }
          m();
        })(),
        (h.onreadystatechange = function () {
          h.readyState == "complete" && ((h.onreadystatechange = null), m());
        }));
})(window);

const useData = (props) => {
    const typeName = {
        circle: 'icon-loading',
        circle2: 'icon-Loading',
        circle3: 'icon-loading_flat',
        circle4: 'icon-loading04',
        circle5: 'icon-financial_loading',
        circle6: 'icon-loading_ico'
    };
    const iconName = ref(typeName[props.type] || 'icon-loading');
    return { iconName };
};

var script$t = defineComponent({
    name: 'MeLoading',
    props: {
        type: {
            type: String,
            default: 'circle'
        },
        size: {
            type: String,
            default: '30px'
        },
        color: {
            type: String,
            default: '#949494'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { iconName } = useData(props);
        return { iconName };
    }
});

const _hoisted_1$o = { class: "me-loading" };
const _hoisted_2$c = ["xlink:href"];

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 加载 "),
    createElementVNode("div", _hoisted_1$o, [
      (openBlock(), createElementBlock("svg", {
        class: "icon svg-icon",
        "data-hidden": "true",
        style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`)
      }, [
        createElementVNode("use", {
          "xlink:href": `#${_ctx.icon || _ctx.iconName}`
        }, null, 8 /* PROPS */, _hoisted_2$c)
      ], 4 /* STYLE */)),
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$t.render = render$t;
script$t.__file = "packages/MeLoading/index.vue";

script$t.install = (app) => {
    app.component(script$t.name, script$t);
};
const InMeLoading = script$t;

const useHandler$b = (props, emit) => {
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
    const clickMask = () => {
        props.maskClose && hideMask();
    };
    watch(() => props.visible, value => {
        value ? showMask() : hideMask();
    }, {
        immediate: true
    });
    return { isShowMask, isShow, clickMask };
};

var script$s = defineComponent({
    name: 'MeMask',
    emits: ['update:visible'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        maskClose: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { isShowMask, isShow, clickMask } = useHandler$b(props, emit);
        return { isShowMask, isShow, clickMask };
    }
});

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 遮罩层 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-mask", { show: _ctx.isShow }]),
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.clickMask && _ctx.clickMask(...args)))
    }, [
      renderSlot(_ctx.$slots, "default", {
        class: normalizeClass({ on: _ctx.isShow }),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
      })
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$s.render = render$s;
script$s.__file = "packages/MeMask/index.vue";

script$s.install = (app) => {
    app.component(script$s.name, script$s);
};
const InMeMask = script$s;

const useShow$3 = (props, emit) => {
    const isDestroy = ref(false);
    const isShow = ref(false);
    const inputValue = ref('');
    const closeShow = (cusEventName, value) => {
        isShow.value = false;
        emit('action', cusEventName, value);
        setTimeout(() => {
            isDestroy.value = true;
        }, 400);
    };
    const onCancel = () => {
        closeShow('onOff');
    };
    const onConfirm = () => {
        closeShow('onOk', props.type === 'prompt' ? inputValue.value : undefined);
    };
    onMounted(() => {
        setTimeout(() => {
            isShow.value = true;
        }, 100);
    });
    return { isShow, isDestroy, inputValue, onCancel, onConfirm };
};

var script$r = defineComponent({
    name: 'MeMessageBox',
    emits: ['action'],
    props: {
        tips: {
            type: String,
            default: '提示'
        },
        type: {
            type: String,
            default: 'confirm'
        },
        message: {
            type: String,
            default: ''
        },
        html: {
            type: String,
            default: ''
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        confirmButtonText: {
            type: String,
            default: '确认'
        },
        onOk: {
            type: Function,
            default: () => () => { }
        },
        onOff: {
            type: Function,
            default: () => () => { }
        }
    },
    setup(props, { emit }) {
        const { isShow, isDestroy, inputValue, onCancel, onConfirm } = useShow$3(props, emit);
        return { isShow, isDestroy, inputValue, onCancel, onConfirm };
    }
});

const _hoisted_1$n = { class: "u-tips" };
const _hoisted_2$b = {
  key: 0,
  class: "m-text"
};
const _hoisted_3$6 = {
  key: 1,
  class: "u-prompt"
};
const _hoisted_4$3 = { class: "u-label" };
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6 = { class: "m-btn" };

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 弹出框 "),
    (!_ctx.isDestroy)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["me-message-box", { show: _ctx.isShow }]),
          onClick: _cache[4] || (_cache[4] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
        }, [
          createElementVNode("div", {
            class: normalizeClass(["m-picker", { show: _ctx.isShow }]),
            onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
          }, [
            createCommentVNode(" 提示语 "),
            createElementVNode("h3", _hoisted_1$n, toDisplayString(_ctx.tips), 1 /* TEXT */),
            createCommentVNode(" Alert 弹出框 / Confirm 确认框 "),
            (['alert', 'confirm'].includes(_ctx.type))
              ? (openBlock(), createElementBlock("div", _hoisted_2$b, toDisplayString(_ctx.message), 1 /* TEXT */))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Prompt 输入框 "),
            (_ctx.type === 'prompt')
              ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
                  createElementVNode("label", _hoisted_4$3, toDisplayString(_ctx.message), 1 /* TEXT */),
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "u-input",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, _ctx.inputValue]
                  ])
                ]))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Custom 自定义框 "),
            (_ctx.type === 'custom')
              ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  innerHTML: _ctx.html
                }, null, 8 /* PROPS */, _hoisted_5$1))
              : createCommentVNode("v-if", true),
            createCommentVNode(" 操作按钮 "),
            createElementVNode("div", _hoisted_6, [
              createCommentVNode(" 取消按钮 "),
              (_ctx.type !== 'alert')
                ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    type: "button",
                    class: "u-btn-cancel",
                    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
                  }, toDisplayString(_ctx.cancelButtonText), 1 /* TEXT */))
                : createCommentVNode("v-if", true),
              createCommentVNode(" 确认按钮 "),
              createElementVNode("button", {
                type: "button",
                class: "u-btn-confirm",
                onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onConfirm && _ctx.onConfirm(...args)))
              }, toDisplayString(_ctx.confirmButtonText), 1 /* TEXT */)
            ])
          ], 2 /* CLASS */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$r.render = render$r;
script$r.__file = "packages/MeMessageBox/index.vue";

const MessageBox = (option, type) => {
    if (!IsType('Object', option)) {
        throw new Error(`${option} is not Object`);
    }
    else if (option.html && option.html.includes('script')) {
        throw new Error('Your HTML may be attacked by XSS');
    }
    else {
        return new Promise((resolve, reject) => {
            const curOption = { ...option };
            type && (curOption.type = type);
            curOption.onAction = (action, value) => {
                switch (action) {
                    case 'onOk':
                        curOption.onOk ? curOption.onOk(value) : resolve(value);
                        break;
                    case 'onOff':
                        curOption.onOff ? curOption.onOff() : reject();
                        break;
                }
            };
            const vm = createVNode(script$r, curOption);
            const container = document.createElement('div');
            render$P(vm, container);
            document.body.appendChild(container.firstElementChild);
        });
    }
};
const types = ['alert', 'confirm', 'prompt', 'custom'];
types.forEach(type => {
    MessageBox[type] = (option) => MessageBox(option, type);
});
const alert = (option) => MessageBox(option, 'alert');
const confirm = (option) => MessageBox(option, 'confirm');
const prompt = (option) => MessageBox(option, 'prompt');
const custom = (option) => MessageBox(option, 'custom');

const InMeMessageBox = MessageBox;
InMeMessageBox.install = (app) => {
    app.config.globalProperties.$MeMessageBox = MessageBox;
    app.config.globalProperties.$MeAlert = alert;
    app.config.globalProperties.$MeConfirm = confirm;
    app.config.globalProperties.$MePrompt = prompt;
    app.config.globalProperties.$MeCustom = custom;
};

const useShow$2 = (props, emit) => {
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

var script$q = defineComponent({
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
        const { isShowMask, isShow, hideMask } = useShow$2(props, emit);
        return { isShowMask, isShow, hideMask };
    }
});

const _hoisted_1$m = { class: "u-tips" };

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
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
        createElementVNode("h3", _hoisted_1$m, toDisplayString(_ctx.tips), 1 /* TEXT */),
        createCommentVNode(" 内容 "),
        renderSlot(_ctx.$slots, "default")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$q.render = render$q;
script$q.__file = "packages/MeDialog/index.vue";

script$q.install = (app) => {
    app.component(script$q.name, script$q);
};
const InMeDialog = script$q;

const useShow$1 = (props, emit) => {
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
const useBtns$2 = (emit) => {
    const onLi = (item) => {
        emit('update:visible', false);
        emit('on-change', item);
    };
    const onCancel = (e) => {
        emit('update:visible', false);
        emit('on-cancel', e);
    };
    return { onLi, onCancel };
};

var script$p = defineComponent({
    name: 'MeShareSheet',
    emits: ['update:visible', 'on-change', 'on-cancel'],
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        tips: {
            type: String,
            default: '立即分享给好友'
        },
        list: {
            type: Array,
            required: true,
            validator: (value) => value.length > 0 && Object.keys(value[0]).length > 0
        }
    },
    setup(props, { emit }) {
        const { isShowMask, isShow, hideMask } = useShow$1(props, emit);
        const { onLi, onCancel } = useBtns$2(emit);
        return { isShowMask, isShow, hideMask, onLi, onCancel };
    }
});

const _hoisted_1$l = { class: "u-tips" };
const _hoisted_2$a = { class: "m-list-li" };
const _hoisted_3$5 = ["onClick"];
const _hoisted_4$2 = { class: "u-desc" };

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 分享面板 "),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["me-share-sheet", { show: _ctx.isShow }]),
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.hideMask && _ctx.hideMask(...args)))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["m-picker", { show: _ctx.isShow }]),
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
      }, [
        createCommentVNode(" 提示语 "),
        createElementVNode("h3", _hoisted_1$l, toDisplayString(_ctx.tips), 1 /* TEXT */),
        createCommentVNode(" 分享列表 "),
        createElementVNode("ul", _hoisted_2$a, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
            return (openBlock(), createElementBlock("li", {
              key: index,
              onClick: $event => (_ctx.onLi(item))
            }, [
              createElementVNode("i", {
                class: normalizeClass(["iconfont u-icon", item.icon]),
                style: normalizeStyle(`color:${item.color};`)
              }, null, 6 /* CLASS, STYLE */),
              createElementVNode("span", _hoisted_4$2, toDisplayString(item.value), 1 /* TEXT */)
            ], 8 /* PROPS */, _hoisted_3$5))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        createCommentVNode(" 取消按钮 "),
        createElementVNode("button", {
          type: "button",
          class: "u-btn-cancel",
          onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
        }, "取消")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */), [
      [vShow, _ctx.isShowMask]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$p.render = render$p;
script$p.__file = "packages/MeShareSheet/index.vue";

script$p.install = (app) => {
    app.component(script$p.name, script$p);
};
const InMeShareSheet = script$p;

const useHandMove$2 = () => {
    const hidden = ref();
    const maxDistance = ref(0);
    const currentValue = ref(0);
    const isActive = ref(false);
    let initialValue = 0;
    let startX = 0;
    let minDistance = 0;
    const onTouchstart = (e) => {
        initialValue = currentValue.value;
        isActive.value = false;
        startX = e.changedTouches[0].clientX;
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = initialValue + currentX - startX;
        currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX;
    };
    const onTouchend = (e) => {
        isActive.value = true;
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            currentValue.value = diffX > minDistance ? 0 : -maxDistance.value;
        }
        else if (diffX < 0) {
            currentValue.value = diffX < -minDistance ? -maxDistance.value : 0;
        }
    };
    const onMousemove = (e) => {
        isActive.value = false;
        const currentX = e.clientX;
        const diffX = initialValue + currentX - startX;
        currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX;
    };
    const onMouseup = (e) => {
        const currentX = e.clientX;
        const diffX = currentX - startX;
        isActive.value = true;
        if (diffX > 0) {
            currentValue.value = diffX > minDistance ? 0 : -maxDistance.value;
        }
        else if (diffX < 0) {
            currentValue.value = diffX < -minDistance ? -maxDistance.value : 0;
        }
        document.onmousemove = null;
        document.onmouseup = null;
    };
    const onMousedown = (e) => {
        initialValue = currentValue.value;
        startX = e.clientX;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
    };
    onMounted(() => {
        const { offsetWidth } = hidden.value;
        maxDistance.value = offsetWidth;
        minDistance = offsetWidth / 4;
    });
    return { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script$o = defineComponent({
    name: 'MeSwiperCell',
    setup() {
        const { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove$2();
        return { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1$k = { class: "me-swiper-cell" };
const _hoisted_2$9 = { class: "u-content" };

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 滑动单元格 "),
    createElementVNode("div", _hoisted_1$k, [
      createElementVNode("div", {
        class: normalizeClass(["m-swiper", { active: _ctx.isActive }]),
        style: normalizeStyle(`transform:translateX(${_ctx.currentValue}px);`),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent","stop"])),
        onTouchstart: _cache[1] || (_cache[1] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
        onTouchend: _cache[3] || (_cache[3] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
        onMousedown: _cache[4] || (_cache[4] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
      }, [
        createCommentVNode(" 内容 "),
        createElementVNode("div", _hoisted_2$9, [
          renderSlot(_ctx.$slots, "content")
        ]),
        createCommentVNode(" 右侧隐藏部分 "),
        createElementVNode("div", {
          class: "u-hidden",
          ref: "hidden",
          style: normalizeStyle(`right:-${_ctx.maxDistance}px;`)
        }, [
          renderSlot(_ctx.$slots, "hidden")
        ], 4 /* STYLE */)
      ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$o.render = render$o;
script$o.__file = "packages/MeSwiperCell/index.vue";

script$o.install = (app) => {
    app.component(script$o.name, script$o);
};
const InMeSwiperCell = script$o;

const MeGridKey = 'MeGrid';

const useInitSlots$3 = (props) => {
    const grid = ref();
    const params = { cols: props.cols, borderColor: props.borderColor };
    provide(MeGridKey, { name: MeGridKey, params });
    onMounted(() => {
        const gridItems = grid.value?.querySelectorAll('.me-grid-item');
        gridItems?.forEach((elem, i) => {
            elem.style.borderTopWidth = `${+(i < props.cols)}px`;
            elem.style.borderLeftWidth = `${+(i % props.cols === 0)}px`;
        });
    });
    return { grid };
};

var script$n = defineComponent({
    name: 'MeGrid',
    props: {
        cols: {
            type: Number,
            default: 4
        },
        borderColor: {
            type: String,
            default: '#edeff2'
        }
    },
    setup(props) {
        const { grid } = useInitSlots$3(props);
        return { grid };
    }
});

const _hoisted_1$j = {
  class: "me-grid",
  ref: "grid"
};

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 宫格 "),
    createElementVNode("div", _hoisted_1$j, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$n.render = render$n;
script$n.__file = "packages/MeGrid/index.vue";

script$n.install = (app) => {
    app.component(script$n.name, script$n);
};
const InMeGrid = script$n;

const useHandler$a = (emit) => {
    const { name, params } = inject(MeGridKey, {});
    const cols = ref(4);
    const widthValue = ref(25);
    const borderColor = ref('');
    const setData = () => {
        cols.value = params.cols;
        widthValue.value = 100 / params.cols;
        borderColor.value = params.borderColor;
    };
    name === MeGridKey && setData();
    const handleClick = (e) => {
        emit('on-click', e);
    };
    return { cols, widthValue, borderColor, handleClick };
};

var script$m = defineComponent({
    name: 'MeGridItem',
    emits: ['on-click'],
    props: {
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { cols, widthValue, borderColor, handleClick } = useHandler$a(emit);
        return { cols, widthValue, borderColor, handleClick };
    }
});

const _hoisted_1$i = {
  key: 2,
  class: "u-custom"
};

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 宫格选项 "),
    createElementVNode("div", {
      class: "me-grid-item",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args))),
      style: normalizeStyle(`width:${_ctx.widthValue}%;border-color:${_ctx.borderColor};`)
    }, [
      (_ctx.icon)
        ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["iconfont u-icon", _ctx.icon]),
            style: normalizeStyle(`color:${_ctx.iconColor};`)
          }, null, 6 /* CLASS, STYLE */))
        : createCommentVNode("v-if", true),
      (_ctx.text)
        ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "u-desc",
            style: normalizeStyle(`color:${_ctx.textColor};`)
          }, toDisplayString(_ctx.text), 5 /* TEXT, STYLE */))
        : createCommentVNode("v-if", true),
      (!_ctx.icon && !_ctx.text)
        ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true)
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$m.render = render$m;
script$m.__file = "packages/MeGridItem/index.vue";

script$m.install = (app) => {
    app.component(script$m.name, script$m);
};
const InMeGridItem = script$m;

const CountryData = [
    {
        name: 'A',
        cities: [
            { code: 'AR', en: 'Argentina', cn: '阿根廷' },
            { code: 'AD', en: 'Andorra', cn: '安道尔' },
            { code: 'AE', en: 'United Arab Emirates', cn: '阿联酋' },
            { code: 'AF', en: 'Afghanistan', cn: '阿富汗' },
            { code: 'AG', en: 'Antigua & Barbuda', cn: '安提瓜和巴布达' },
            { code: 'AI', en: 'Anguilla', cn: '安圭拉' },
            { code: 'AL', en: 'Albania', cn: '阿尔巴尼亚' },
            { code: 'AM', en: 'Armenia', cn: '亚美尼亚' },
            { code: 'AO', en: 'Angola', cn: '安哥拉' },
            { code: 'AQ', en: 'Antarctica', cn: '南极洲' },
            { code: 'AS', en: 'American Samoa', cn: '美属萨摩亚' },
            { code: 'AT', en: 'Austria', cn: '奥地利' },
            { code: 'AU', en: 'Australia', cn: '澳大利亚' },
            { code: 'AW', en: 'Aruba', cn: '阿鲁巴' },
            { code: 'AX', en: 'Aland Island', cn: '奥兰群岛' },
            { code: 'AZ', en: 'Azerbaijan', cn: '阿塞拜疆' }
        ]
    },
    {
        name: 'B',
        cities: [
            { code: 'BA', en: 'Bosnia & Herzegovina', cn: '波黑' },
            { code: 'BB', en: 'Barbados', cn: '巴巴多斯' },
            { code: 'BD', en: 'Bangladesh', cn: '孟加拉' },
            { code: 'BE', en: 'Belgium', cn: '比利时' },
            { code: 'BF', en: 'Burkina', cn: '布基纳法索' },
            { code: 'BG', en: 'Bulgaria', cn: '保加利亚' },
            { code: 'BH', en: 'Bahrain', cn: '巴林' },
            { code: 'BI', en: 'Burundi', cn: '布隆迪' },
            { code: 'BJ', en: 'Benin', cn: '贝宁' },
            { code: 'BL', en: 'Saint Barthélemy', cn: '圣巴泰勒米岛' },
            { code: 'BM', en: 'Bermuda', cn: '百慕大' },
            { code: 'BN', en: 'Brunei', cn: '文莱' },
            { code: 'BO', en: 'Bolivia', cn: '玻利维亚' },
            { code: 'BQ', en: 'Caribbean Netherlands', cn: '荷兰加勒比区' },
            { code: 'BR', en: 'Brazil', cn: '巴西' },
            { code: 'BS', en: 'The Bahamas', cn: '巴哈马' },
            { code: 'BT', en: 'Bhutan', cn: '不丹' },
            { code: 'BV', en: 'Bouvet Island', cn: '布韦岛' },
            { code: 'BW', en: 'Botswana', cn: '博茨瓦纳' },
            { code: 'BY', en: 'Belarus', cn: '白俄罗斯' },
            { code: 'BZ', en: 'Belize', cn: '伯利兹' }
        ]
    },
    {
        name: 'C',
        cities: [
            { code: 'CA', en: 'Canada', cn: '加拿大' },
            { code: 'CC', en: 'Cocos (Keeling) Islands', cn: '科科斯群岛' },
            { code: 'CD', en: 'Democratic Republic of the Congo', cn: '刚果（金）' },
            { code: 'CF', en: 'Central African Republic', cn: '中非' },
            { code: 'CG', en: 'Republic of the Congo', cn: '刚果（布）' },
            { code: 'CH', en: 'Switzerland', cn: '瑞士' },
            { code: 'CI', en: "Cote d'Ivoire", cn: '科特迪瓦' },
            { code: 'CK', en: 'Cook Islands', cn: '库克群岛' },
            { code: 'CL', en: 'Chile', cn: '智利' },
            { code: 'CM', en: 'Cameroon', cn: '喀麦隆' },
            { code: 'CN', en: 'China', cn: '中国' },
            { code: 'CO', en: 'Colombia', cn: '哥伦比亚' },
            { code: 'CR', en: 'Costa Rica', cn: '哥斯达黎加' },
            { code: 'CU', en: 'Cuba', cn: '古巴' },
            { code: 'CV', en: 'Cape Verde', cn: '佛得角' },
            { code: 'CW', en: 'Curacao', cn: '库拉索' },
            { code: 'CX', en: 'Christmas Island', cn: '圣诞岛' },
            { code: 'CY', en: 'Cyprus', cn: '塞浦路斯' },
            { code: 'CZ', en: 'Czech Republic', cn: '捷克' }
        ]
    },
    {
        name: 'D',
        cities: [
            { code: 'DE', en: 'Germany', cn: '德国' },
            { code: 'DJ', en: 'Djibouti', cn: '吉布提' },
            { code: 'DK', en: 'Denmark', cn: '丹麦' },
            { code: 'DM', en: 'Dominica', cn: '多米尼克' },
            { code: 'DO', en: 'Dominican Republic', cn: '多米尼加' },
            { code: 'DZ', en: 'Algeria', cn: '阿尔及利亚' }
        ]
    },
    {
        name: 'E',
        cities: [
            { code: 'EC', en: 'Ecuador', cn: '厄瓜多尔' },
            { code: 'EE', en: 'Estonia', cn: '爱沙尼亚' },
            { code: 'EG', en: 'Egypt', cn: '埃及' },
            { code: 'EH', en: 'Western Sahara', cn: '西撒哈拉' },
            { code: 'ER', en: 'Eritrea', cn: '厄立特里亚' },
            { code: 'ES', en: 'Spain', cn: '西班牙' },
            { code: 'ET', en: 'Ethiopia', cn: '埃塞俄比亚' }
        ]
    },
    {
        name: 'F',
        cities: [
            { code: 'FI', en: 'Finland', cn: '芬兰' },
            { code: 'FJ', en: 'Fiji', cn: '斐济群岛' },
            { code: 'FK', en: 'Falkland Islands', cn: '马尔维纳斯群岛（福克兰）' },
            { code: 'FM', en: 'Federated States of Micronesia', cn: '密克罗尼西亚联邦' },
            { code: 'FO', en: 'Faroe Islands', cn: '法罗群岛' },
            { code: 'FR', en: 'France', cn: '法国 法国' }
        ]
    },
    {
        name: 'G',
        cities: [
            { code: 'GA', en: 'Gabon', cn: '加蓬' },
            { code: 'GB', en: 'Great Britain (United Kingdom; England)', cn: '英国' },
            { code: 'GD', en: 'Grenada', cn: '格林纳达' },
            { code: 'GE', en: 'Georgia', cn: '格鲁吉亚' },
            { code: 'GF', en: 'French Guiana', cn: '法属圭亚那' },
            { code: 'GG', en: 'Guernsey', cn: '根西岛' },
            { code: 'GH', en: 'Ghana', cn: '加纳' },
            { code: 'GI', en: 'Gibraltar', cn: '直布罗陀' },
            { code: 'GL', en: 'Greenland', cn: '格陵兰' },
            { code: 'GM', en: 'Gambia', cn: '冈比亚' },
            { code: 'GN', en: 'Guinea', cn: '几内亚' },
            { code: 'GP', en: 'Guadeloupe', cn: '瓜德罗普' },
            { code: 'GQ', en: 'Equatorial Guinea', cn: '赤道几内亚' },
            { code: 'GR', en: 'Greece', cn: '希腊' },
            { code: 'GS', en: 'South Georgia and the South Sandwich Islands', cn: '南乔治亚岛和南桑威奇群岛' },
            { code: 'GT', en: 'Guatemala', cn: '危地马拉' },
            { code: 'GU', en: 'Guam', cn: '关岛' },
            { code: 'GW', en: 'Guinea-Bissau', cn: '几内亚比绍' },
            { code: 'GY', en: 'Guyana', cn: '圭亚那' }
        ]
    },
    {
        name: 'H',
        cities: [
            { code: 'HK', en: 'Hong Kong', cn: '香港' },
            { code: 'HM', en: 'Heard Island and McDonald Islands', cn: '赫德岛和麦克唐纳群岛' },
            { code: 'HN', en: 'Honduras', cn: '洪都拉斯' },
            { code: 'HR', en: 'Croatia', cn: '克罗地亚' },
            { code: 'HT', en: 'Haiti', cn: '海地' },
            { code: 'HU', en: 'Hungary', cn: '匈牙利' }
        ]
    },
    {
        name: 'I',
        cities: [
            { code: 'ID', en: 'Indonesia', cn: '印尼' },
            { code: 'IE', en: 'Ireland', cn: '爱尔兰' },
            { code: 'IL', en: 'Israel', cn: '以色列' },
            { code: 'IM', en: 'Isle of Man', cn: '马恩岛' },
            { code: 'IN', en: 'India', cn: '印度' },
            { code: 'IO', en: 'British Indian Ocean Territory', cn: '英属印度洋领地' },
            { code: 'IQ', en: 'Iraq', cn: '伊拉克' },
            { code: 'IR', en: 'Iran', cn: '伊朗' },
            { code: 'IS', en: 'Iceland', cn: '冰岛' },
            { code: 'IT', en: 'Italy', cn: '意大利' }
        ]
    },
    {
        name: 'J',
        cities: [
            { code: 'JE', en: 'Jersey', cn: '泽西岛' },
            { code: 'JM', en: 'Jamaica', cn: '牙买加' },
            { code: 'JO', en: 'Jordan', cn: '约旦' },
            { code: 'JP', en: 'Japan', cn: '日本' }
        ]
    },
    {
        name: 'K',
        cities: [
            { code: 'KE', en: 'Kenya', cn: '肯尼亚' },
            { code: 'KG', en: 'Kyrgyzstan', cn: '吉尔吉斯斯坦' },
            { code: 'KH', en: 'Cambodia', cn: '柬埔寨' },
            { code: 'KI', en: 'Kiribati', cn: '基里巴斯' },
            { code: 'KM', en: 'The Comoros', cn: '科摩罗' },
            { code: 'KN', en: 'St. Kitts & Nevis', cn: '圣基茨和尼维斯' },
            { code: 'KP', en: 'North Korea', cn: '朝鲜' },
            { code: 'KR', en: 'South Korea', cn: '韩国' },
            { code: 'KW', en: 'Kuwait', cn: '科威特' },
            { code: 'KY', en: 'Cayman Islands', cn: '开曼群岛' },
            { code: 'KZ', en: 'Kazakhstan', cn: '哈萨克斯坦' }
        ]
    },
    {
        name: 'L',
        cities: [
            { code: 'LA', en: 'Laos', cn: '老挝' },
            { code: 'LB', en: 'Lebanon', cn: '黎巴嫩' },
            { code: 'LC', en: 'St. Lucia', cn: '圣卢西亚' },
            { code: 'LI', en: 'Liechtenstein', cn: '列支敦士登' },
            { code: 'LK', en: 'Sri Lanka', cn: '斯里兰卡' },
            { code: 'LR', en: 'Liberia', cn: '利比里亚' },
            { code: 'LS', en: 'Lesotho', cn: '莱索托' },
            { code: 'LT', en: 'Lithuania', cn: '立陶宛' },
            { code: 'LU', en: 'Luxembourg', cn: '卢森堡' },
            { code: 'LV', en: 'Latvia', cn: '拉脱维亚' },
            { code: 'LY', en: 'Libya', cn: '利比亚' }
        ]
    },
    {
        name: 'M',
        cities: [
            { code: 'MO', en: 'Macao', cn: '澳门' },
            { code: 'MA', en: 'Morocco', cn: '摩洛哥' },
            { code: 'MC', en: 'Monaco', cn: '摩纳哥' },
            { code: 'MD', en: 'Moldova', cn: '摩尔多瓦' },
            { code: 'ME', en: 'Montenegro', cn: '黑山' },
            { code: 'MF', en: 'Saint Martin (France)', cn: '法属圣马丁' },
            { code: 'MG', en: 'Madagascar', cn: '马达加斯加' },
            { code: 'MH', en: 'Marshall islands', cn: '马绍尔群岛' },
            { code: 'MK', en: 'Republic of Macedonia (FYROM)', cn: '马其顿' },
            { code: 'ML', en: 'Mali', cn: '马里' },
            { code: 'MM', en: 'Myanmar (Burma)', cn: '缅甸' },
            { code: 'MN', en: 'Mongolia', cn: '蒙古国' },
            { code: 'MP', en: 'Northern Mariana Islands', cn: '北马里亚纳群岛' },
            { code: 'MQ', en: 'Martinique', cn: '马提尼克' },
            { code: 'MR', en: 'Mauritania', cn: '毛里塔尼亚' },
            { code: 'MS', en: 'Montserrat', cn: '蒙塞拉特岛' },
            { code: 'MT', en: 'Malta', cn: '马耳他' },
            { code: 'MU', en: 'Mauritius', cn: '毛里求斯' },
            { code: 'MV', en: 'Maldives', cn: '马尔代夫' },
            { code: 'MW', en: 'Malawi', cn: '马拉维' },
            { code: 'MX', en: 'Mexico', cn: '墨西哥' },
            { code: 'MY', en: 'Malaysia', cn: '马来西亚' },
            { code: 'MZ', en: 'Mozambique', cn: '莫桑比克' }
        ]
    },
    {
        name: 'N',
        cities: [
            { code: 'NA', en: 'Namibia', cn: '纳米比亚' },
            { code: 'NC', en: 'New Caledonia', cn: '新喀里多尼亚' },
            { code: 'NE', en: 'Niger', cn: '尼日尔' },
            { code: 'NF', en: 'Norfolk Island', cn: '诺福克岛' },
            { code: 'NG', en: 'Nigeria', cn: '尼日利亚' },
            { code: 'NI', en: 'Nicaragua', cn: '尼加拉瓜' },
            { code: 'NL', en: 'Netherlands', cn: '荷兰' },
            { code: 'NO', en: 'Norway', cn: '挪威' },
            { code: 'NP', en: 'Nepal', cn: '尼泊尔' },
            { code: 'NR', en: 'Nauru', cn: '瑙鲁' },
            { code: 'NU', en: 'Niue', cn: '纽埃' },
            { code: 'NZ', en: 'New Zealand', cn: '新西兰' }
        ]
    },
    {
        name: 'O',
        cities: [{ code: 'OM', en: 'Oman', cn: '阿曼' }]
    },
    {
        name: 'P',
        cities: [
            { code: 'PA', en: 'Panama', cn: '巴拿马' },
            { code: 'PE', en: 'Peru', cn: '秘鲁' },
            { code: 'PF', en: 'French polynesia', cn: '法属波利尼西亚' },
            { code: 'PG', en: 'Papua New Guinea', cn: '巴布亚新几内亚' },
            { code: 'PH', en: 'The Philippines', cn: '菲律宾' },
            { code: 'PK', en: 'Pakistan', cn: '巴基斯坦' },
            { code: 'PL', en: 'Poland', cn: '波兰' },
            { code: 'PM', en: 'Saint-Pierre and Miquelon', cn: '圣皮埃尔和密克隆' },
            { code: 'PN', en: 'Pitcairn Islands', cn: '皮特凯恩群岛' },
            { code: 'PR', en: 'Puerto Rico', cn: '波多黎各' },
            { code: 'PS', en: 'Palestinian territories', cn: '巴勒斯坦' },
            { code: 'PT', en: 'Portugal', cn: '葡萄牙' },
            { code: 'PW', en: 'Palau', cn: '帕劳' },
            { code: 'PY', en: 'Paraguay', cn: '巴拉圭' }
        ]
    },
    {
        name: 'Q',
        cities: [{ code: 'QA', en: 'Qatar', cn: '卡塔尔' }]
    },
    {
        name: 'R',
        cities: [
            { code: 'RE', en: 'Réunion', cn: '留尼汪' },
            { code: 'RO', en: 'Romania', cn: '罗马尼亚' },
            { code: 'RS', en: 'Serbia', cn: '塞尔维亚' },
            { code: 'RU', en: 'Russian Federation', cn: '俄罗斯' },
            { code: 'RW', en: 'Rwanda', cn: '卢旺达' }
        ]
    },
    {
        name: 'S',
        cities: [
            { code: 'SA', en: 'Saudi Arabia', cn: '沙特阿拉伯' },
            { code: 'SB', en: 'Solomon Islands', cn: '所罗门群岛' },
            { code: 'SC', en: 'Seychelles', cn: '塞舌尔' },
            { code: 'SD', en: 'Sudan', cn: '苏丹' },
            { code: 'SE', en: 'Sweden', cn: '瑞典' },
            { code: 'SG', en: 'Singapore', cn: '新加坡' },
            { code: 'SH', en: 'St. Helena & Dependencies', cn: '圣赫勒拿' },
            { code: 'SI', en: 'Slovenia', cn: '斯洛文尼亚' },
            { code: 'SJ', en: 'Svalbard and Jan Mayen', cn: '斯瓦尔巴群岛和扬马延岛' },
            { code: 'SK', en: 'Slovakia', cn: '斯洛伐克' },
            { code: 'SL', en: 'Sierra Leone', cn: '塞拉利昂' },
            { code: 'SM', en: 'San Marino', cn: '圣马力诺' },
            { code: 'SN', en: 'Senegal', cn: '塞内加尔' },
            { code: 'SO', en: 'Somalia', cn: '索马里' },
            { code: 'SR', en: 'Suriname', cn: '苏里南' },
            { code: 'SS', en: 'South Sudan', cn: '南苏丹' },
            { code: 'ST', en: 'Sao Tome & Principe', cn: '圣多美和普林西比' },
            { code: 'SV', en: 'El Salvador', cn: '萨尔瓦多' },
            { code: 'SX', en: 'Sint Maarten', cn: '荷属圣马丁' },
            { code: 'SY', en: 'Syria', cn: '叙利亚' },
            { code: 'SZ', en: 'Swaziland', cn: '斯威士兰' }
        ]
    },
    {
        name: 'T',
        cities: [
            { code: 'TW', en: 'Taiwan', cn: '台湾' },
            { code: 'TC', en: 'Turks & Caicos Islands', cn: '特克斯和凯科斯群岛' },
            { code: 'TD', en: 'Chad', cn: '乍得' },
            { code: 'TF', en: 'French Southern Territories', cn: '法属南部领地' },
            { code: 'TG', en: 'Togo', cn: '多哥' },
            { code: 'TH', en: 'Thailand', cn: '泰国' },
            { code: 'TJ', en: 'Tajikistan', cn: '塔吉克斯坦' },
            { code: 'TK', en: 'Tokelau', cn: '托克劳' },
            { code: 'TL', en: 'Timor-Leste (East Timor)', cn: '东帝汶' },
            { code: 'TM', en: 'Turkmenistan', cn: '土库曼斯坦' },
            { code: 'TN', en: 'Tunisia', cn: '突尼斯' },
            { code: 'TO', en: 'Tonga', cn: '汤加' },
            { code: 'TR', en: 'Turkey', cn: '土耳其' },
            { code: 'TT', en: 'Trinidad & Tobago', cn: '特立尼达和多巴哥' },
            { code: 'TV', en: 'Tuvalu', cn: '图瓦卢' },
            { code: 'TZ', en: 'Tanzania', cn: '坦桑尼亚' }
        ]
    },
    {
        name: 'U',
        cities: [
            { code: 'US', en: 'United States of America (USA)', cn: '美国' },
            { code: 'UA', en: 'Ukraine', cn: '乌克兰' },
            { code: 'UG', en: 'Uganda', cn: '乌干达' },
            { code: 'UM', en: 'United States Minor Outlying Islands', cn: '美国本土外小岛屿' },
            { code: 'UY', en: 'Uruguay', cn: '乌拉圭' },
            { code: 'UZ', en: 'Uzbekistan', cn: '乌兹别克斯坦' }
        ]
    },
    {
        name: 'V',
        cities: [
            { code: 'VA', en: 'Vatican City (The Holy See)', cn: '梵蒂冈' },
            { code: 'VC', en: 'St. Vincent & the Grenadines', cn: '圣文森特和格林纳丁斯' },
            { code: 'VE', en: 'Venezuela', cn: '委内瑞拉' },
            { code: 'VG', en: 'British Virgin Islands', cn: '英属维尔京群岛' },
            { code: 'VI', en: 'United States Virgin Islands', cn: '美属维尔京群岛' },
            { code: 'VN', en: 'Vietnam', cn: '越南' },
            { code: 'VU', en: 'Vanuatu', cn: '瓦努阿图' }
        ]
    },
    {
        name: 'W',
        cities: [
            { code: 'WF', en: 'Wallis and Futuna', cn: '瓦利斯和富图纳' },
            { code: 'WS', en: 'Samoa', cn: '萨摩亚' }
        ]
    },
    {
        name: 'X',
        cities: []
    },
    {
        name: 'Y',
        cities: [
            { code: 'YE', en: 'Yemen', cn: '也门' },
            { code: 'YT', en: 'Mayotte', cn: '马约特' }
        ]
    },
    {
        name: 'Z',
        cities: [
            { code: 'ZA', en: 'South Africa', cn: '南非' },
            { code: 'ZM', en: 'Zambia', cn: '赞比亚' },
            { code: 'ZW', en: 'Zimbabwe', cn: '津巴布韦' }
        ]
    }
];

const useScroll = () => {
    const curLetter = ref('');
    const listCont = ref();
    let arrLi;
    const onScroll = () => {
        const { scrollTop } = document.documentElement;
        if (scrollTop >= arrLi[0].offsetTop) {
            for (let i = 0; i < arrLi.length; i++) {
                const el = arrLi[i];
                if (el.nodeName === 'LI' && scrollTop > arrLi[0].offsetTop && scrollTop < el.offsetTop) {
                    curLetter.value = arrLi[i - 1].children[0].children[0].innerHTML;
                    break;
                }
            }
        }
        else {
            curLetter.value = '';
        }
    };
    onMounted(() => {
        arrLi = listCont.value.children;
        Bind(document, 'scroll', onScroll);
    });
    onUnmounted(() => {
        Unbind(document, 'scroll', onScroll);
    });
    return { curLetter, listCont };
};
const useBtns$1 = (emit) => {
    const handleLi = (item) => {
        emit('on-click', { ...item });
    };
    return { handleLi };
};

var script$l = defineComponent({
    name: 'MeIndexBar',
    emits: ['on-click'],
    props: {
        list: {
            type: Array,
            default: () => CountryData
        },
        topHeight: {
            type: String,
            default: '50px'
        }
    },
    setup(props, { emit }) {
        const { curLetter, listCont } = useScroll();
        const { handleLi } = useBtns$1(emit);
        return { curLetter, listCont, handleLi };
    }
});

const _hoisted_1$h = { class: "me-index-bar" };
const _hoisted_2$8 = { class: "m-list-rt" };
const _hoisted_3$4 = {
  class: "m-list-cont",
  ref: "listCont"
};
const _hoisted_4$1 = { class: "m-list-item" };
const _hoisted_5 = ["onClick"];

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 索引栏 "),
    createElementVNode("div", _hoisted_1$h, [
      createCommentVNode(" 顶部固定项 "),
      withDirectives(createElementVNode("div", {
        class: "m-top",
        style: normalizeStyle(`height:${_ctx.topHeight};line-height:${_ctx.topHeight};`)
      }, toDisplayString(_ctx.curLetter), 5 /* TEXT, STYLE */), [
        [vShow, _ctx.curLetter]
      ]),
      createCommentVNode(" 右侧列表值 "),
      createElementVNode("ul", _hoisted_2$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item.name,
            class: normalizeClass({ on: item.name === _ctx.curLetter })
          }, toDisplayString(item.name), 3 /* TEXT, CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      createCommentVNode(" 内容列表 "),
      createElementVNode("ul", _hoisted_3$4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item.name
          }, [
            createElementVNode("dl", _hoisted_4$1, [
              createElementVNode("dt", null, toDisplayString(item.name), 1 /* TEXT */),
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.cities, (city) => {
                return (openBlock(), createElementBlock("dd", {
                  key: city.code,
                  onClick: $event => (_ctx.handleLi(city))
                }, toDisplayString(city.code) + "（" + toDisplayString(city.cn) + "）", 9 /* TEXT, PROPS */, _hoisted_5))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 512 /* NEED_PATCH */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$l.render = render$l;
script$l.__file = "packages/MeIndexBar/index.vue";

script$l.install = (app) => {
    app.component(script$l.name, script$l);
};
const InMeIndexBar = script$l;

const useHandler$9 = (emit) => {
    const onClickLeft = (e) => {
        emit('click-left', e);
    };
    const onClickRight = (e) => {
        emit('click-right', e);
    };
    return { onClickLeft, onClickRight };
};

var script$k = defineComponent({
    name: 'MeNavBar',
    emits: ['click-left', 'click-right'],
    props: {
        title: {
            type: String,
            default: ''
        },
        leftArrow: {
            type: Boolean,
            default: true
        },
        leftText: {
            type: String,
            default: ''
        },
        rightText: {
            type: String,
            default: ''
        },
        styles: {
            type: Object,
            default: () => ({
                borderColor: '#dcdfe6',
                background: '#fff',
                titleColor: '#494949',
                leftColor: '#949494',
                rightColor: '#949494'
            })
        }
    },
    setup(props, { emit }) {
        const { onClickLeft, onClickRight } = useHandler$9(emit);
        return { onClickLeft, onClickRight };
    }
});

const _hoisted_1$g = {
  key: 0,
  class: "iconfont icon-left"
};
const _hoisted_2$7 = { class: "u-rt" };

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 导航栏 "),
    createElementVNode("div", {
      class: "me-nav-bar",
      style: normalizeStyle(`background:${_ctx.styles.background};border-bottom-color:${_ctx.styles.borderColor};`)
    }, [
      createCommentVNode(" 左侧按钮 "),
      createElementVNode("div", {
        class: "u-lf",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClickLeft && _ctx.onClickLeft(...args))),
        style: normalizeStyle(`color:${_ctx.styles.leftColor};`)
      }, [
        (_ctx.leftArrow)
          ? (openBlock(), createElementBlock("i", _hoisted_1$g))
          : createCommentVNode("v-if", true),
        createElementVNode("span", null, toDisplayString(_ctx.leftText), 1 /* TEXT */)
      ], 4 /* STYLE */),
      createCommentVNode(" 中间标题 "),
      createElementVNode("h2", {
        class: "u-tit",
        style: normalizeStyle(`color:${_ctx.styles.titleColor};`)
      }, toDisplayString(_ctx.title), 5 /* TEXT, STYLE */),
      createCommentVNode(" 右侧按钮 "),
      createElementVNode("div", _hoisted_2$7, [
        (_ctx.rightText)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "u-btn",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClickRight && _ctx.onClickRight(...args))),
              style: normalizeStyle(`color:${_ctx.styles.rightColor};`)
            }, toDisplayString(_ctx.rightText), 5 /* TEXT, STYLE */))
          : renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$k.render = render$k;
script$k.__file = "packages/MeNavBar/index.vue";

script$k.install = (app) => {
    app.component(script$k.name, script$k);
};
const InMeNavBar = script$k;

const MeTabKey = 'MeTab';

const useInitSlots$2 = (props, emit) => {
    const tabsDom = ref();
    const tabList = ref([]);
    const transX = ref(0);
    const duration = ref(0);
    const currentValue = ref(props.modelValue);
    const initTranslateX = () => {
        transX.value = tabsDom.value.offsetWidth / (tabList.value.length * 2);
        duration.value = 0;
    };
    const onClick = ({ name }) => {
        if (name !== props.modelValue) {
            duration.value = 0.4;
            emit('update:modelValue', name);
            emit('on-change', name);
        }
    };
    const getLabelName = (item) => {
        tabList.value.push(item);
    };
    const curIndex = computed(() => tabList.value.findIndex(item => item.name === props.modelValue));
    provide(MeTabKey, { name: MeTabKey, currentValue, getLabelName });
    onMounted(() => {
        initTranslateX();
    });
    watch(() => props.modelValue, value => {
        currentValue.value = value;
    });
    return { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick };
};

var script$j = defineComponent({
    name: 'MeTab',
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        color: {
            type: String,
            default: '#949494'
        },
        activeColor: {
            type: String,
            default: '#494949'
        },
        lineColor: {
            type: String,
            default: '#f56c6c'
        }
    },
    setup(props, { emit }) {
        const { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick } = useInitSlots$2(props, emit);
        return { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick };
    }
});

const _hoisted_1$f = { class: "me-tab" };
const _hoisted_2$6 = {
  class: "m-tabs",
  ref: "tabsDom"
};
const _hoisted_3$3 = ["onClick"];

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签页 "),
    createElementVNode("div", _hoisted_1$f, [
      createCommentVNode(" 标签组 "),
      createElementVNode("div", _hoisted_2$6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabList, (item) => {
          return (openBlock(), createElementBlock("div", {
            class: normalizeClass(["m-tab-item", { active: _ctx.modelValue === item.name }]),
            key: item.name,
            onClick: $event => (_ctx.onClick(item)),
            style: normalizeStyle(`color:${_ctx.modelValue === item.name ? _ctx.activeColor : _ctx.color};`)
          }, toDisplayString(item.label), 15 /* TEXT, CLASS, STYLE, PROPS */, _hoisted_3$3))
        }), 128 /* KEYED_FRAGMENT */)),
        createElementVNode("div", {
          class: "u-line-bt",
          style: normalizeStyle(`transform:translateX(${_ctx.transX * (_ctx.curIndex * 2 + 1)}px) translateX(-50%);transition-duration:${_ctx.duration}s;background:${_ctx.lineColor};`)
        }, null, 4 /* STYLE */)
      ], 512 /* NEED_PATCH */),
      createCommentVNode(" slot 内容 "),
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$j.render = render$j;
script$j.__file = "packages/MeTab/index.vue";

script$j.install = (app) => {
    app.component(script$j.name, script$j);
};
const InMeTab = script$j;

const useHandler$8 = (props) => {
    const { name, currentValue, getLabelName } = inject(MeTabKey, {});
    getLabelName({ label: props.label, name: props.name });
    const isShow = ref(false);
    const initShow = () => {
        isShow.value = name === MeTabKey && props.name === currentValue.value;
    };
    watch(currentValue, initShow, { immediate: true });
    return { isShow };
};

var script$i = defineComponent({
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
        const { isShow } = useHandler$8(prop);
        return { isShow };
    }
});

const _hoisted_1$e = { class: "me-tab-item" };

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签选项 "),
    withDirectives(createElementVNode("div", _hoisted_1$e, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */), [
      [vShow, _ctx.isShow]
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$i.render = render$i;
script$i.__file = "packages/MeTabItem/index.vue";

script$i.install = (app) => {
    app.component(script$i.name, script$i);
};
const InMeTabItem = script$i;

const useHandler$7 = (emit) => {
    const onClick = (item) => {
        !item.state && emit('on-change', { ...item });
    };
    return { onClick };
};

var script$h = defineComponent({
    name: 'MeTabBar',
    emits: ['on-change'],
    props: {
        list: {
            type: Array,
            required: true
        },
        borderColor: {
            type: String,
            default: '#dcdfe6'
        },
        background: {
            type: String,
            default: '#fff'
        },
        color: {
            type: String,
            default: '#949494'
        },
        colorSelected: {
            type: String,
            default: '#409eff'
        }
    },
    setup(props, { emit }) {
        const { onClick } = useHandler$7(emit);
        return { onClick };
    }
});

const _hoisted_1$d = ["onClick"];
const _hoisted_2$5 = { key: 0 };
const _hoisted_3$2 = ["src"];
const _hoisted_4 = { class: "u-txt" };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签栏 "),
    createElementVNode("ul", {
      class: "me-tab-bar",
      style: normalizeStyle(`border-top-color:${_ctx.borderColor};background:${_ctx.background};`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
        return (openBlock(), createElementBlock("li", {
          key: index,
          onClick: $event => (_ctx.onClick(item)),
          class: normalizeClass({ selected: item.state }),
          style: normalizeStyle(`color:${item.state ? _ctx.colorSelected : _ctx.color};`)
        }, [
          (item.icon)
            ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["iconfont u-icon", [item.icon, item.dot && 'dot']])
              }, [
                (item.badge && !item.dot)
                  ? (openBlock(), createElementBlock("em", _hoisted_2$5, toDisplayString(item.badge), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 2 /* CLASS */))
            : (openBlock(), createElementBlock("img", {
                key: 1,
                src: item.state ? item.imgSelected : item.img,
                alt: "图标",
                class: "u-img"
              }, null, 8 /* PROPS */, _hoisted_3$2)),
          createElementVNode("span", _hoisted_4, toDisplayString(item.text), 1 /* TEXT */)
        ], 14 /* CLASS, STYLE, PROPS */, _hoisted_1$d))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$h.render = render$h;
script$h.__file = "packages/MeTabBar/index.vue";

script$h.install = (app) => {
    app.component(script$h.name, script$h);
};
const InMeTabBar = script$h;

const useHandMove$1 = (props, emit) => {
    const activeState = ref(0);
    const transY = ref(0);
    const scale = ref(0);
    const showValue = ref(50);
    const duration = ref(0);
    let startY = 0;
    let step = 0;
    const onTouchstart = (e) => {
        if (props.modelValue)
            return;
        startY = e.changedTouches[0].clientY;
        step = 0;
        duration.value = 0;
    };
    const onTouchmove = (e) => {
        if (props.modelValue)
            return;
        const distY = e.changedTouches[0].clientY - startY;
        if (distY > showValue.value) {
            activeState.value = 1;
            step += 0.09;
            transY.value = showValue.value + (distY - showValue.value) / step;
            scale.value = 1;
        }
        else {
            transY.value = distY;
            scale.value = distY / showValue.value;
            activeState.value = 0;
        }
    };
    const onTouchend = (e) => {
        if (props.modelValue)
            return;
        const distY = e.changedTouches[0].clientY - startY;
        duration.value = 400;
        if (distY > showValue.value) {
            activeState.value = 2;
            transY.value = showValue.value;
            scale.value = 1;
            emit('update:modelValue', true);
            emit('on-refresh');
        }
        else {
            activeState.value = 0;
            transY.value = 0;
            scale.value = 0;
        }
    };
    const onMousemove = (e) => {
        if (props.modelValue)
            return;
        const distY = e.clientY - startY;
        if (distY > showValue.value) {
            activeState.value = 1;
            step += 0.09;
            transY.value = showValue.value + (distY - showValue.value) / step;
            scale.value = 1;
        }
        else {
            transY.value = distY;
            scale.value = distY / showValue.value;
            activeState.value = 0;
        }
    };
    const onMouseup = (e) => {
        if (props.modelValue)
            return;
        const distY = e.clientY - startY;
        duration.value = 400;
        if (distY > showValue.value) {
            activeState.value = 2;
            transY.value = showValue.value;
            scale.value = 1;
            emit('update:modelValue', true);
            emit('on-refresh');
        }
        else {
            activeState.value = 0;
            transY.value = 0;
            scale.value = 0;
        }
        document.onmousemove = null;
        document.onmouseup = null;
    };
    const onMousedown = (e) => {
        if (props.modelValue)
            return;
        startY = e.clientY;
        step = 0;
        duration.value = 0;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
    };
    watch(() => props.modelValue, value => {
        if (!value) {
            activeState.value = 3;
            setTimeout(() => {
                transY.value = 0;
                scale.value = 0;
            }, 600);
        }
    });
    return { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup };
};

var script$g = defineComponent({
    name: 'MePullRefresh',
    components: {
        MeLoading: InMeLoading
    },
    emits: ['update:modelValue', 'on-refresh'],
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        loadText: {
            type: Array,
            default: () => ['下拉即可刷新...', '释放即可刷新...', '加载中...', '刷新成功']
        },
        loadIcon: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { emit }) {
        const { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup } = useHandMove$1(props, emit);
        return { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup };
    }
});

const _hoisted_1$c = { class: "me-pull-refresh" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_loading = resolveComponent("me-loading");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 下拉刷新 "),
    createElementVNode("div", _hoisted_1$c, [
      createElementVNode("div", {
        class: "m-cont",
        style: normalizeStyle(`transform: translateY(${_ctx.transY - _ctx.showValue}px);transition-duration: ${_ctx.duration}ms;`),
        onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
        onTouchend: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
        onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
      }, [
        createElementVNode("div", {
          class: "m-hd",
          style: normalizeStyle(`transform:scale(${_ctx.scale});`)
        }, [
          (_ctx.loadIcon && _ctx.activeState === 2)
            ? (openBlock(), createBlock(_component_me_loading, {
                key: 0,
                type: "circle"
              }))
            : createCommentVNode("v-if", true),
          createTextVNode(" " + toDisplayString(_ctx.loadText[_ctx.activeState]), 1 /* TEXT */)
        ], 4 /* STYLE */),
        renderSlot(_ctx.$slots, "default")
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$g.render = render$g;
script$g.__file = "packages/MePullRefresh/index.vue";

script$g.install = (app) => {
    app.component(script$g.name, script$g);
};
const InMePullRefresh = script$g;

const useCounts = (props) => {
    const curText = computed(() => {
        const defaultText = `${props.modelValue}%`;
        return props.text ? props.text.replace(/\$default/g, defaultText) : defaultText;
    });
    const curPosi = computed(() => 5 * props.size + 500);
    return { curText, curPosi };
};

var script$f = defineComponent({
    name: 'MeProgressBar',
    props: {
        modelValue: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            default: 'line'
        },
        text: {
            type: String,
            default: ''
        },
        textShow: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: '100px'
        },
        borderRadius: {
            type: String,
            default: '8px'
        },
        size: {
            type: Number,
            default: 4
        },
        textColor: {
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: '#409eff'
        },
        backgorund: {
            type: String,
            default: '#ccc'
        },
        padding: {
            type: String,
            default: '0 10px'
        }
    },
    setup(props) {
        const { curText, curPosi } = useCounts(props);
        return { curText, curPosi };
    }
});

const _hoisted_1$b = ["viewBox"];
const _hoisted_2$4 = ["d", "stroke", "stroke-width"];
const _hoisted_3$1 = ["d", "stroke", "stroke-dasharray", "stroke-width"];

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 进度条 "),
    createElementVNode("div", {
      class: "me-progress-bar",
      style: normalizeStyle(`padding:${_ctx.padding};`)
    }, [
      createCommentVNode(" 线型进度条 "),
      (_ctx.type === 'line')
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "m-line",
            style: normalizeStyle(`width:${_ctx.width};`)
          }, [
            (_ctx.textShow)
              ? (openBlock(), createElementBlock("h3", {
                  key: 0,
                  class: "u-txt",
                  style: normalizeStyle(`left:${_ctx.modelValue}%;background:${_ctx.activeColor};color:${_ctx.textColor};`)
                }, toDisplayString(_ctx.curText), 5 /* TEXT, STYLE */))
              : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "u-dot",
                  style: normalizeStyle(`width:${_ctx.size + 8}px;height:${_ctx.size + 8}px;left:${_ctx.modelValue}%;background:${_ctx.activeColor};`)
                }, null, 4 /* STYLE */)),
            createElementVNode("p", {
              class: "u-line",
              style: normalizeStyle(`height:${_ctx.size}px; background:${_ctx.backgorund};`)
            }, [
              createElementVNode("span", {
                style: normalizeStyle(`background:${_ctx.activeColor}; transform:translateX(${_ctx.modelValue - 100}%)`)
              }, null, 4 /* STYLE */)
            ], 4 /* STYLE */)
          ], 4 /* STYLE */))
        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" 环形进度条 "),
            createElementVNode("div", {
              class: "m-circle",
              style: normalizeStyle(`width:${_ctx.width};height:${_ctx.width};`)
            }, [
              (openBlock(), createElementBlock("svg", {
                viewBox: `0 0 ${_ctx.curPosi * 2} ${_ctx.curPosi * 2}`
              }, [
                createElementVNode("path", {
                  d: `M ${_ctx.curPosi} ${_ctx.curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`,
                  stroke: _ctx.backgorund,
                  "stroke-width": `${10 * this.size}px`
                }, null, 8 /* PROPS */, _hoisted_2$4),
                createElementVNode("path", {
                  d: `M ${_ctx.curPosi} ${_ctx.curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`,
                  stroke: _ctx.activeColor,
                  "stroke-dasharray": `${Math.round(31.4 * _ctx.modelValue)}px, 3140px`,
                  "stroke-width": `${10 * this.size}px`
                }, null, 8 /* PROPS */, _hoisted_3$1)
              ], 8 /* PROPS */, _hoisted_1$b)),
              (_ctx.textShow)
                ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "u-txt",
                    style: normalizeStyle(`color:${_ctx.textColor};`)
                  }, toDisplayString(_ctx.curText), 5 /* TEXT, STYLE */))
                : createCommentVNode("v-if", true)
            ], 4 /* STYLE */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$f.render = render$f;
script$f.__file = "packages/MeProgressBar/index.vue";

script$f.install = (app) => {
    app.component(script$f.name, script$f);
};
const InMeProgressBar = script$f;

const MeAccordionKey = 'MeAccordion';

const useInitSlots$1 = (props, emit) => {
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

var script$e = defineComponent({
    name: 'MeAccordion',
    emits: ['update:modelValue', 'on-change'],
    props: {
        modelValue: {
            type: [Number, String],
            required: true
        }
    },
    setup(props, { emit }) {
        useInitSlots$1(props, emit);
        return {};
    }
});

const _hoisted_1$a = { class: "me-accordion" };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 手风琴  "),
    createElementVNode("div", _hoisted_1$a, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$e.render = render$e;
script$e.__file = "packages/MeAccordion/index.vue";

script$e.install = (app) => {
    app.component(script$e.name, script$e);
};
const InMeAccordion = script$e;

const useHandler$6 = (props, emit) => {
    const { name, currentValue, onChange } = inject(MeAccordionKey, {});
    const accordionItemCont = ref();
    const isShow = ref(false);
    const curHeight = ref(0);
    const setData = () => {
        isShow.value = name === MeAccordionKey && props.name === currentValue.value;
    };
    const onClick = (e) => {
        name === MeAccordionKey && onChange(props.name);
        emit('on-click', e);
    };
    watch(currentValue, setData, { immediate: true });
    watch(isShow, value => {
        nextTick(() => {
            curHeight.value = value ? accordionItemCont.value.offsetHeight : 0;
        });
    });
    return { accordionItemCont, isShow, curHeight, onClick };
};

var script$d = defineComponent({
    name: 'MeAccordionItem',
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: [Number, String],
            required: true
        },
        borderColor: {
            type: String,
            default: '#dcdfe6'
        }
    },
    emits: ['on-click'],
    setup(props, { emit }) {
        const { accordionItemCont, isShow, curHeight, onClick } = useHandler$6(props, emit);
        return { accordionItemCont, isShow, curHeight, onClick };
    }
});

const _hoisted_1$9 = { class: "me-accordion-item" };
const _hoisted_2$3 = { ref: "accordionItemCont" };

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 手风琴选项 "),
    createElementVNode("div", _hoisted_1$9, [
      createCommentVNode(" 头部区域 "),
      createElementVNode("div", {
        class: "m-hd",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args))),
        style: normalizeStyle(`border-bottom-color:${_ctx.borderColor};`)
      }, [
        createElementVNode("h3", null, toDisplayString(_ctx.label), 1 /* TEXT */),
        createElementVNode("i", {
          class: normalizeClass(["iconfont icon-right1", { open: _ctx.isShow }])
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */),
      createCommentVNode(" 内容区域 "),
      createElementVNode("div", {
        class: "m-bd",
        style: normalizeStyle(`height:${_ctx.curHeight}px;`)
      }, [
        createElementVNode("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */)
      ], 4 /* STYLE */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$d.render = render$d;
script$d.__file = "packages/MeAccordionItem/index.vue";

script$d.install = (app) => {
    app.component(script$d.name, script$d);
};
const InMeAccordionItem = script$d;

const useCountdown = (props, emit) => {
    const formatAfter = ref({});
    let timer;
    const addSubNum = props.format.includes('ms') ? 10 : 1000;
    let curTime = 0;
    const startCountdown = () => {
        if (timer)
            return;
        timer = setInterval(() => {
            if (curTime <= 0) {
                clearInterval(timer);
                timer = undefined;
                emit('on-end');
            }
            else {
                curTime -= addSubNum;
                formatAfter.value = CountDown(curTime, props.format);
                emit('on-progress', curTime);
            }
        }, addSubNum);
    };
    const suspendCountdown = () => {
        clearInterval(timer);
        timer = undefined;
    };
    const resetCountdown = () => {
        curTime = props.time;
        formatAfter.value = CountDown(curTime, props.format);
    };
    watch(() => props.isStart, value => {
        value && startCountdown();
    }, {
        immediate: true
    });
    watch(() => props.isSuspend, value => {
        value && suspendCountdown();
    });
    watch(() => props.isReset, value => {
        value && resetCountdown();
    });
    resetCountdown();
    return { formatAfter };
};

var script$c = defineComponent({
    name: 'MeCountDown',
    emits: ['on-end', 'on-progress'],
    props: {
        time: {
            type: Number,
            required: true
        },
        format: {
            type: String,
            default: 'hh:mm:ss'
        },
        isStart: {
            type: Boolean,
            default: true
        },
        isSuspend: {
            type: Boolean,
            default: false
        },
        isReset: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { formatAfter } = useCountdown(props, emit);
        return { formatAfter };
    }
});

const _hoisted_1$8 = { class: "me-count-down" };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 倒计时 "),
    createElementVNode("div", _hoisted_1$8, [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.formatAfter)), () => [
        (_ctx.formatAfter.DD !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.DD) + " 天", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.hh !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.hh) + " 时", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.mm !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.mm) + " 分", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.ss !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.ss) + " 秒", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.ms !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.ms) + " 毫秒", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true)
      ])
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$c.render = render$c;
script$c.__file = "packages/MeCountDown/index.vue";

script$c.install = (app) => {
    app.component(script$c.name, script$c);
};
const InMeCountDown = script$c;

const useHandler$5 = (props) => {
    const fieldsetList = ref([]);
    const len = props.list.length;
    const flagBool = len < 3;
    const curLine = ref(props.line);
    if (flagBool) {
        curLine.value.radius = curLine.value.radius ?? 0;
        curLine.value.size = curLine.value.size ?? 1;
    }
    fieldsetList.value = props.list.map((item, index) => {
        let deg = (360 / len) * index;
        deg = flagBool ? 0 : deg;
        return {
            text: item,
            deg
        };
    });
    return { fieldsetList, curLine };
};

var script$b = defineComponent({
    name: 'MeDivider',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        left: {
            type: Number
        },
        right: {
            type: Number
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        origin: {
            type: Number
        },
        line: {
            type: Object,
            default: () => ({
                radius: 0,
                color: '#dcdfe6',
                size: 1
            })
        },
        text: {
            type: Object,
            default: () => ({
                color: '#494949',
                size: 14
            })
        }
    },
    setup(props) {
        const { fieldsetList, curLine } = useHandler$5(props);
        return { fieldsetList, curLine };
    }
});

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 分割线 "),
    createElementVNode("div", {
      class: "me-divider",
      style: normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px;`)
    }, [
      (_ctx.fieldsetList.length > 0)
        ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fieldsetList, (item, index) => {
            return (openBlock(), createElementBlock("fieldset", {
              class: "u-fieldset",
              key: index,
              style: normalizeStyle(`transform-origin:center ${_ctx.origin}px;transform:translate(-50%, -50%) rotate(${item.deg}deg);border-top-width:${_ctx.curLine.size}px;border-top-color:${_ctx.curLine.color};border-radius: ${_ctx.curLine.radius}px;`),
              role: "presentation"
            }, [
              createElementVNode("legend", {
                class: "u-legend",
                style: normalizeStyle(`margin-left:${_ctx.left}px;margin-right:${_ctx.right}px;color:${_ctx.text.color};font-size:${_ctx.text.size}px`)
              }, toDisplayString(item.text), 5 /* TEXT, STYLE */)
            ], 4 /* STYLE */))
          }), 128 /* KEYED_FRAGMENT */))
        : (openBlock(), createElementBlock("fieldset", {
            key: 1,
            class: "u-fieldset",
            style: normalizeStyle(`transform-origin:center ${_ctx.origin}px;border-top-width:${_ctx.curLine.size}px;border-top-color:${_ctx.curLine.color};border-radius: ${_ctx.curLine.radius}px;`),
            role: "presentation"
          }, null, 4 /* STYLE */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$b.render = render$b;
script$b.__file = "packages/MeDivider/index.vue";

script$b.install = (app) => {
    app.component(script$b.name, script$b);
};
const InMeDivider = script$b;

const useIconName = (props) => {
    const names = {
        default: 'jigou_wushuju',
        network: 'wangluocuowu',
        search: 'wushuju'
    };
    const icon = ref(props.iconName || names[props.type]);
    return { icon };
};

var script$a = defineComponent({
    name: 'MeEmpty',
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'default'
        },
        height: {
            type: Number,
            default: 200
        },
        iconName: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { icon } = useIconName(props);
        return { icon };
    }
});

const _hoisted_1$7 = { class: "u-img" };
const _hoisted_2$2 = ["src"];
const _hoisted_3 = { class: "u-txt" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 空状态 "),
    createElementVNode("div", {
      class: "me-empty",
      style: normalizeStyle(`min-height:${_ctx.height}px;`)
    }, [
      createCommentVNode(" 图片 "),
      createElementVNode("div", _hoisted_1$7, [
        (_ctx.url)
          ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.url,
              alt: "empty"
            }, null, 8 /* PROPS */, _hoisted_2$2))
          : (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(`iconfont icon-${_ctx.icon}`)
            }, null, 2 /* CLASS */))
      ]),
      createCommentVNode(" 文本 "),
      createElementVNode("div", _hoisted_3, toDisplayString(_ctx.text), 1 /* TEXT */),
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$a.render = render$a;
script$a.__file = "packages/MeEmpty/index.vue";

script$a.install = (app) => {
    app.component(script$a.name, script$a);
};
const InMeEmpty = script$a;

const useShow = () => {
    const isDestroy = ref(false);
    const isShow = ref(false);
    const onClose = () => {
        isShow.value = false;
        setTimeout(() => {
            isDestroy.value = true;
        }, 400);
    };
    onMounted(() => {
        setTimeout(() => {
            isShow.value = true;
        }, 100);
    });
    return { isShow, isDestroy, onClose };
};

var script$9 = defineComponent({
    name: 'MePreview',
    props: {
        url: {
            type: String,
            default: ''
        },
        zIndex: {
            type: Number,
            default: 99
        },
        background: {
            type: String,
            default: '#000'
        }
    },
    setup() {
        const { isShow, isDestroy, onClose } = useShow();
        return { isShow, isDestroy, onClose };
    }
});

const _hoisted_1$6 = ["src"];

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图片预览 "),
    (!_ctx.isDestroy)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["me-preview", { show: _ctx.isShow }]),
          style: normalizeStyle(`z-index:${_ctx.zIndex};background:${_ctx.background};`),
          onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClose && _ctx.onClose(...args)))
        }, [
          createElementVNode("img", {
            class: "u-img",
            src: _ctx.url,
            alt: "preview-img"
          }, null, 8 /* PROPS */, _hoisted_1$6),
          renderSlot(_ctx.$slots, "default")
        ], 6 /* CLASS, STYLE */))
      : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$9.render = render$9;
script$9.__file = "packages/MePreview/index.vue";

const Preview = (arg) => {
    if (!IsType('Object', arg))
        throw new Error(`${arg} is not object`);
    const options = { ...arg };
    const vm = createVNode(script$9, options);
    const container = document.createElement('div');
    render$P(vm, container);
    document.body.appendChild(container.firstElementChild);
};

const InMePreview = Preview;
InMePreview.install = (app) => {
    app.config.globalProperties.$MePreview = Preview;
};

const useAnimate = (props) => {
    const noticeList = ref();
    const left = ref(0);
    const listData = ref(Array.isArray(props.list) ? props.list : [props.list]);
    const listIndex = ref(0);
    let timer;
    let isSwitch = true;
    const startAnimate = () => {
        if (props.scroll === 'horizontal') {
            const { offsetWidth, parentNode } = noticeList.value;
            let startTime;
            const startCurAnimate = (timestamp) => {
                startTime === undefined && (startTime = timestamp);
                const elapsed = timestamp - startTime;
                const beforeLeft = left.value;
                if (beforeLeft < -offsetWidth) {
                    left.value = parentNode.offsetWidth;
                    startTime = undefined;
                }
                else {
                    left.value = ~(elapsed / 18);
                }
                isSwitch && window.requestAnimationFrame(startCurAnimate);
            };
            window.requestAnimationFrame(startCurAnimate);
        }
        else {
            const len = listData.value.length;
            if (len <= 1)
                return;
            timer = setInterval(() => {
                const index = listIndex.value;
                listIndex.value = index >= len - 1 ? 0 : index + 1;
            }, props.delay);
        }
    };
    const closeAnimate = () => {
        if (props.scroll === 'horizontal') {
            isSwitch = false;
        }
        else {
            clearInterval(timer);
        }
    };
    watch(() => props.loop, value => {
        value ? startAnimate() : closeAnimate();
    });
    onMounted(() => {
        props.loop && startAnimate();
    });
    return { noticeList, left, listData, listIndex };
};
const useBtns = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    const onClickPreappend = (e) => {
        emit('on-click:preappend', e);
    };
    const onClickAppend = (e) => {
        emit('on-click:append', e);
    };
    return { onClick, onClickPreappend, onClickAppend };
};

var script$8 = defineComponent({
    name: 'MeNoticeBar',
    emits: ['on-click', 'on-click:preappend', 'on-click:append'],
    props: {
        list: {
            type: [String, Array],
            required: true
        },
        scroll: {
            type: String,
            default: 'horizontal'
        },
        loop: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 3000
        },
        preappendIcon: {
            type: String,
            default: 'notice'
        },
        preappendColor: {
            type: String,
            default: '#f56c6c'
        },
        appendIcon: {
            type: String,
            default: 'right1'
        },
        appendColor: {
            type: String,
            default: '#c8c7cc'
        },
        height: {
            type: Number,
            default: 40
        },
        radius: {
            type: [Number, String],
            default: 4
        },
        background: {
            type: String,
            default: '#f6f6f6'
        },
        color: {
            type: String,
            default: '#494949'
        }
    },
    setup(props, { emit }) {
        const { noticeList, left, listData, listIndex } = useAnimate(props);
        const { onClick, onClickPreappend, onClickAppend } = useBtns(emit);
        return { noticeList, left, listData, listIndex, onClick, onClickPreappend, onClickAppend };
    }
});

const _hoisted_1$5 = { class: "u-notice" };
const _hoisted_2$1 = ["onClick"];

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 公告栏 "),
    createElementVNode("div", {
      class: "me-notice-bar",
      style: normalizeStyle(`height:${_ctx.height}px;border-radius:${_ctx.radius + (String(_ctx.radius).includes('px') ? '' : 'px')};background:${_ctx.background};`)
    }, [
      createCommentVNode(" 前面图标 "),
      createElementVNode("div", {
        class: "u-icon u-icon-preappend",
        style: normalizeStyle(`color:${_ctx.preappendColor};`),
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClickPreappend && _ctx.onClickPreappend(...args)))
      }, [
        createElementVNode("i", {
          class: normalizeClass(`iconfont icon-${_ctx.preappendIcon}`)
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */),
      createCommentVNode(" 滚动公告 "),
      createElementVNode("div", _hoisted_1$5, [
        createCommentVNode(" 水平动画 "),
        (_ctx.scroll === 'horizontal')
          ? (openBlock(), createElementBlock("ul", {
              key: 0,
              class: "u-notice-horizontal",
              style: normalizeStyle(`left:${_ctx.left}px;color:${_ctx.color};`),
              ref: "noticeList"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item, index) => {
                return (openBlock(), createElementBlock("li", {
                  key: index,
                  onClick: $event => (_ctx.onClick(index))
                }, [
                  createElementVNode("span", null, toDisplayString(item), 1 /* TEXT */)
                ], 8 /* PROPS */, _hoisted_2$1))
              }), 128 /* KEYED_FRAGMENT */))
            ], 4 /* STYLE */))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" 垂直动画 "),
              createVNode(Transition, {
                name: "slide",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("div", {
                    class: "u-notice-vertical",
                    key: _ctx.listIndex,
                    onClick: _cache[1] || (_cache[1] = $event => (_ctx.onClick(_ctx.listIndex))),
                    style: normalizeStyle(`color:${_ctx.color};`)
                  }, [
                    createElementVNode("span", null, toDisplayString(_ctx.listData[_ctx.listIndex]), 1 /* TEXT */)
                  ], 4 /* STYLE */))
                ]),
                _: 1 /* STABLE */
              })
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]),
      createCommentVNode(" 后面图标 "),
      createElementVNode("div", {
        class: "u-icon u-icon-append",
        style: normalizeStyle(`color:${_ctx.appendColor};`),
        onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onClickAppend && _ctx.onClickAppend(...args)))
      }, [
        createElementVNode("i", {
          class: normalizeClass(`iconfont icon-${_ctx.appendIcon}`)
        }, null, 2 /* CLASS */)
      ], 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$8.render = render$8;
script$8.__file = "packages/MeNoticeBar/index.vue";

script$8.install = (app) => {
    app.component(script$8.name, script$8);
};
const InMeNoticeBar = script$8;

const MeSwiperKey = 'MeSwiper';

const useHandMove = (props, emit) => {
    const swiperDom = ref();
    const dots = ref(1);
    const dotIndex = ref(0);
    const currentValue = ref(0);
    const isActive = ref(false);
    let maxDistance = 0;
    let initialValue = 0;
    let startX = 0;
    let minDistance = 0;
    let timer;
    const names = [];
    const startAnimate = () => {
        timer = setInterval(() => {
            dotIndex.value = dotIndex.value < dots.value - 1 ? dotIndex.value + 1 : 0;
            isActive.value = true;
            currentValue.value = -dotIndex.value * maxDistance;
        }, props.delay);
    };
    const closeAnimate = () => {
        clearInterval(timer);
    };
    const onTouchstart = (e) => {
        initialValue = currentValue.value;
        isActive.value = false;
        startX = e.changedTouches[0].clientX;
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX;
        currentValue.value = distanceX + initialValue;
    };
    const onTouchend = (e) => {
        isActive.value = true;
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            const distanceX = diffX > minDistance ? maxDistance : 0;
            const idealX = initialValue + distanceX;
            currentValue.value = idealX > 0 ? 0 : idealX;
        }
        else if (diffX < 0) {
            const distanceX = diffX < -minDistance ? -maxDistance : 0;
            const idealX = initialValue + distanceX;
            const maxDistanceX = (1 - dots.value) * maxDistance;
            currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX;
        }
        dotIndex.value = -currentValue.value / maxDistance;
        emit('on-change', names[dotIndex.value - 1]);
    };
    const onMousemove = (e) => {
        isActive.value = false;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX;
        currentValue.value = distanceX + initialValue;
    };
    const onMouseup = (e) => {
        isActive.value = true;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            const distanceX = diffX > minDistance ? maxDistance : 0;
            const idealX = initialValue + distanceX;
            currentValue.value = idealX > 0 ? 0 : idealX;
        }
        else if (diffX < 0) {
            const distanceX = diffX < -minDistance ? -maxDistance : 0;
            const idealX = initialValue + distanceX;
            const maxDistanceX = (1 - dots.value) * maxDistance;
            currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX;
        }
        dotIndex.value = -currentValue.value / maxDistance;
        emit('on-change', names[dotIndex.value - 1]);
        document.onmousemove = null;
        document.onmouseup = null;
    };
    const onMousedown = (e) => {
        initialValue = currentValue.value;
        startX = e.clientX;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
    };
    const updateValue = () => {
        const { offsetWidth } = swiperDom.value;
        maxDistance = offsetWidth;
        minDistance = offsetWidth / 4;
        props.loop && startAnimate();
        dots.value = names.length;
    };
    watch(() => props.loop, value => {
        value ? startAnimate() : closeAnimate();
    });
    const getName = (name) => {
        names.push(name);
    };
    provide(MeSwiperKey, { name: MeSwiperKey, getName });
    onMounted(updateValue);
    onUnmounted(closeAnimate);
    return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script$7 = defineComponent({
    name: 'MeSwiper',
    emits: ['on-change'],
    props: {
        loop: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 3000
        },
        height: {
            type: Number
        },
        dot: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: 4
        }
    },
    setup(props, { emit }) {
        const { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit);
        return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1$4 = {
  key: 0,
  class: "m-dot"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 轮播图 "),
    createElementVNode("div", {
      class: "me-swiper",
      style: normalizeStyle(`height:${_ctx.height}px;border-radius:${_ctx.radius}px;`),
      ref: "swiperDom",
      onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
      onTouchend: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
      onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["m-imgs", { active: _ctx.isActive }]),
        style: normalizeStyle(`transform:translateX(${_ctx.currentValue}px);`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6 /* CLASS, STYLE */),
      createCommentVNode(" 指示点 "),
      (_ctx.dot)
        ? (openBlock(), createElementBlock("ul", _hoisted_1$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dots, (item, index) => {
              return (openBlock(), createElementBlock("li", {
                key: index,
                class: normalizeClass({ on: _ctx.dotIndex === index })
              }, null, 2 /* CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true)
    ], 36 /* STYLE, HYDRATE_EVENTS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$7.render = render$7;
script$7.__file = "packages/MeSwiper/index.vue";

script$7.install = (app) => {
    app.component(script$7.name, script$7);
};
const InMeSwiper = script$7;

const useName = (props) => {
    const { name, getName } = inject(MeSwiperKey, {});
    name === MeSwiperKey && getName(props.name);
    return {};
};

var script$6 = defineComponent({
    name: 'MeSwiperItem',
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        url: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        background: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        useName(props);
        return {};
    }
});

const _hoisted_1$3 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "u-text"
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 轮播图 "),
    createElementVNode("div", {
      class: "me-swiper-item",
      style: normalizeStyle(`background:${_ctx.background};`)
    }, [
      (_ctx.url)
        ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "u-img",
            src: _ctx.url,
            alt: "banner",
            draggable: "false"
          }, null, 8 /* PROPS */, _hoisted_1$3))
        : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        (_ctx.text)
          ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.text), 1 /* TEXT */))
          : createCommentVNode("v-if", true)
      ])
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$6.render = render$6;
script$6.__file = "packages/MeSwiperItem/index.vue";

script$6.install = (app) => {
    app.component(script$6.name, script$6);
};
const InMeSwiperItem = script$6;

const useHandler$4 = (emit) => {
    const onClose = (e) => {
        emit('on-close', e);
    };
    return { onClose };
};

var script$5 = defineComponent({
    name: 'MeTag',
    emits: ['on-close'],
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        plain: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: 4
        },
        width: {
            type: Number
        },
        height: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: '标签'
        },
        textColor: {
            type: String,
            default: ''
        },
        closeable: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { onClose } = useHandler$4(emit);
        return { onClose };
    }
});

const _hoisted_1$2 = { class: "u-txt" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签 "),
    createElementVNode("div", {
      class: normalizeClass(["me-tag", [_ctx.type, _ctx.plain && 'plain']]),
      style: normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px;border-color:${_ctx.color};border-radius:${_ctx.radius}px;background:${_ctx.color};color:${_ctx.textColor};`)
    }, [
      createElementVNode("div", _hoisted_1$2, [
        createElementVNode("span", null, toDisplayString(_ctx.text), 1 /* TEXT */),
        (_ctx.closeable)
          ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "iconfont icon-baseline-close-px",
              onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClose && _ctx.onClose(...args)))
            }))
          : createCommentVNode("v-if", true)
      ])
    ], 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$5.render = render$5;
script$5.__file = "packages/MeTag/index.vue";

script$5.install = (app) => {
    app.component(script$5.name, script$5);
};
const InMeTag = script$5;

const useHandler$3 = (props, emit) => {
    const curValue = ref(props.startValue);
    const comValue = computed(() => (props.thousand ? FormatThousand(curValue.value) : curValue.value));
    const startAnimate = () => {
        let startTime;
        const startCurAnimate = (timestamp) => {
            startTime === undefined && (startTime = timestamp);
            const elapsed = timestamp - startTime;
            const virtual = ~~(((props.endValue - props.startValue) * elapsed) / props.duration + props.startValue);
            curValue.value = Math.min(virtual, props.endValue);
            if (elapsed < props.duration) {
                window.requestAnimationFrame(startCurAnimate);
            }
            else {
                emit('update:modelValue', false);
                emit('on-end');
            }
        };
        window.requestAnimationFrame(startCurAnimate);
    };
    watch(() => props.modelValue, value => {
        value && startAnimate();
    }, {
        immediate: true
    });
    return { comValue };
};

var script$4 = defineComponent({
    name: 'MeCountTo',
    emits: ['update:modelValue', 'on-end'],
    props: {
        modelValue: {
            type: Boolean,
            default: true
        },
        startValue: {
            type: Number,
            default: 0
        },
        endValue: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            default: 1500
        },
        thousand: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { comValue } = useHandler$3(props, emit);
        return { comValue };
    }
});

const _hoisted_1$1 = { class: "me-count-to" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 数字滚动 "),
    createElementVNode("div", _hoisted_1$1, toDisplayString(_ctx.comValue), 1 /* TEXT */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$4.render = render$4;
script$4.__file = "packages/MeCountTo/index.vue";

script$4.install = (app) => {
    app.component(script$4.name, script$4);
};
const InMeCountTo = script$4;

const useHandler$2 = (props, emit) => {
    const scrollBarHeight = ref(0);
    const scrollTranslateY = ref(0);
    const listData = ref([]);
    const startIndex = ref(0);
    const endIndex = ref(0);
    const nodes = [];
    const prevScreen = computed(() => props.remain * props.screen[0]);
    const nextScreen = computed(() => props.remain * props.screen[1]);
    const prevCount = computed(() => Math.min(startIndex.value, prevScreen.value));
    const nextCount = computed(() => Math.min(props.list.length - endIndex.value, nextScreen.value));
    const renderData = computed(() => listData.value.slice(startIndex.value - prevCount.value, endIndex.value + nextCount.value));
    const updateHeight = () => {
        nextTick(() => {
            if (props.itemHeight === 0) {
                nodes.forEach(node => {
                    const { height } = node.getBoundingClientRect();
                    const index = +node.dataset.index;
                    const oldHeight = listData.value[index].height;
                    height && oldHeight !== height && (listData.value[index].height = height);
                });
            }
            scrollBarHeight.value = listData.value.reduce((prev, item) => prev + item.height, 0);
        });
    };
    let onScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (props.itemHeight) {
            startIndex.value = ~~(scrollTop / props.itemHeight);
            endIndex.value = startIndex.value + props.remain;
            scrollTranslateY.value = (startIndex.value - prevCount.value) * props.itemHeight;
        }
        else {
            let prevSum = 0;
            const index = listData.value.findIndex(item => {
                prevSum += item.height;
                return prevSum > scrollTop;
            });
            startIndex.value = index;
            endIndex.value = startIndex.value + props.remain;
            let curPrevSum = 0;
            const maxindex = startIndex.value - prevCount.value;
            listData.value.find((item, i) => {
                if (i >= maxindex) {
                    return true;
                }
                curPrevSum += item.height;
                return false;
            });
            scrollTranslateY.value = curPrevSum;
            updateHeight();
        }
        nextTick(() => {
            scrollTop + clientHeight >= scrollHeight - props.distance && emit('on-load-more');
        });
    };
    onScroll = Throttle(onScroll, props.interval);
    const setItemRef = (el, index) => {
        el && (nodes[index] = el);
    };
    watch(() => props.list, value => {
        const height = props.itemHeight || 100;
        listData.value = value.map((item, virtualId) => ({ ...item, virtualId, height }));
        updateHeight();
    }, { deep: true, immediate: true });
    return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef };
};

var script$3 = defineComponent({
    name: 'MeVirtualList',
    emits: ['on-load-more'],
    props: {
        list: {
            type: Array,
            default: () => []
        },
        interval: {
            type: Number,
            default: 100
        },
        height: {
            type: String,
            default: '100%'
        },
        itemHeight: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 50
        },
        screen: {
            type: Array,
            default: () => [1, 1]
        },
        remain: {
            type: Number,
            default: 8
        }
    },
    setup(props, { emit }) {
        const { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef } = useHandler$2(props, emit);
        return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef };
    }
});

const _hoisted_1 = ["data-index"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 虚拟列表 "),
    createElementVNode("div", {
      class: "me-virtual-list",
      style: normalizeStyle(`height:${_ctx.height};`),
      onScrollPassive: _cache[0] || (_cache[0] = (...args) => (_ctx.onScroll && _ctx.onScroll(...args)))
    }, [
      createCommentVNode(" 滚动高度 "),
      createElementVNode("div", {
        class: "u-scroll-bar",
        style: normalizeStyle(`height:${_ctx.scrollBarHeight}px;`)
      }, null, 4 /* STYLE */),
      createCommentVNode(" 列表 "),
      createElementVNode("ul", {
        class: "m-list-scroll",
        style: normalizeStyle(`transform:translateY(${_ctx.scrollTranslateY}px);`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.renderData, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item.virtualId,
            "data-index": item.virtualId,
            ref_for: true,
            ref: $event => _ctx.setItemRef($event, item.virtualId)
          }, [
            renderSlot(_ctx.$slots, "default", { item: item })
          ], 8 /* PROPS */, _hoisted_1))
        }), 128 /* KEYED_FRAGMENT */))
      ], 4 /* STYLE */),
      renderSlot(_ctx.$slots, "more")
    ], 36 /* STYLE, HYDRATE_EVENTS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$3.render = render$3;
script$3.__file = "packages/MeVirtualList/index.vue";

script$3.install = (app) => {
    app.component(script$3.name, script$3);
};
const InMeVirtualList = script$3;

/*!
 * html2canvas 1.4.0 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

var Bounds = /** @class */ (function () {
    function Bounds(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    Bounds.prototype.add = function (x, y, w, h) {
        return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
    };
    Bounds.fromClientRect = function (context, clientRect) {
        return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
    };
    Bounds.fromDOMRectList = function (context, domRectList) {
        var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
        return domRect
            ? new Bounds(domRect.x + context.windowBounds.left, domRect.y + context.windowBounds.top, domRect.width, domRect.height)
            : Bounds.EMPTY;
    };
    Bounds.EMPTY = new Bounds(0, 0, 0, 0);
    return Bounds;
}());
var parseBounds = function (context, node) {
    return Bounds.fromClientRect(context, node.getBoundingClientRect());
};
var parseDocumentSize = function (document) {
    var body = document.body;
    var documentElement = document.documentElement;
    if (!body || !documentElement) {
        throw new Error("Unable to get document size");
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
    return new Bounds(0, 0, width, height);
};

/*
 * css-line-break 2.0.1 <https://github.com/niklasvh/css-line-break#readme>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var toCodePoints$1 = function (str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            }
            else {
                codePoints.push(value);
                i--;
            }
        }
        else {
            codePoints.push(value);
        }
    }
    return codePoints;
};
var fromCodePoint$1 = function () {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
        return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = codePoints[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        }
        else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};
var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
    lookup$2[chars$2.charCodeAt(i$2)] = i$2;
}
var decode$1 = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8Array !== 'undefined' &&
        typeof Uint8Array.prototype.slice !== 'undefined'
        ? new ArrayBuffer(bufferLength)
        : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$2[base64.charCodeAt(i)];
        encoded2 = lookup$2[base64.charCodeAt(i + 1)];
        encoded3 = lookup$2[base64.charCodeAt(i + 2)];
        encoded4 = lookup$2[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return buffer;
};
var polyUint16Array$1 = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
        bytes.push((buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};
var polyUint32Array$1 = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
        bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2$1 = 5;
/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1$1 = 6 + 5;
/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT$1 = 2;
/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
var slice16$1 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32$1 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64$1 = function (base64) {
    var buffer = decode$1(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2
        ? slice16$1(view16, (headerLength + view32[4]) / 2)
        : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie$1 = /** @class */ (function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
        var ix;
        if (codePoint >= 0) {
            if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
            }
            if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
            }
            if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                ix = this.index[ix];
                ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
            }
            if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
            }
        }
        // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
        return this.errorValue;
    };
    return Trie;
}());

var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

/* @flow */
var LETTER_NUMBER_MODIFIER = 50;
// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR$1 = 2; //  Cause a line break (after), except between CR and LF
var LF$1 = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
var ea_OP = [0x2329, 0xff08];
var BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED$1 = '×';
var BREAK_ALLOWED$1 = '÷';
var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
var SPACE$1 = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function (codePoints, lineBreak) {
    if (lineBreak === void 0) { lineBreak = 'strict'; }
    var types = [];
    var indices = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie$1.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        }
        else {
            categories.push(false);
        }
        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
            }
        }
        if (classType === CM || classType === ZWJ$1) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indices.push(index);
                return types.push(AL);
            }
            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
            }
            indices.push(index);
            return types.push(AL);
        }
        indices.push(index);
        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }
        if (classType === SA) {
            return types.push(AL);
        }
        if (classType === AI) {
            return types.push(AL);
        }
        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                return types.push(ID);
            }
            else {
                return types.push(AL);
            }
        }
        types.push(classType);
    });
    return [indices, types, categories];
};
var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];
            if (next === b) {
                return true;
            }
            if (next !== SP) {
                break;
            }
        }
    }
    if (current === SP) {
        var i = currentIndex;
        while (i > 0) {
            i--;
            var prev = classTypes[i];
            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var next = classTypes[n];
                    if (next === b) {
                        return true;
                    }
                    if (next !== SP) {
                        break;
                    }
                }
            }
            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};
var previousNonSpaceClassType = function (currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        }
        else {
            return type;
        }
    }
    return 0;
};
var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED$1;
    }
    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED$1;
    }
    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];
    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];
    if (current === CR$1 && next === LF$1) {
        return BREAK_NOT_ALLOWED$1;
    }
    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }
    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB7 Do not break before spaces or zero width space.
    if (SPACE$1.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED$1;
    }
    // LB8a Do not break after a zero width joiner.
    if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // zwj emojis
    if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED$1;
    }
    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED$1;
    }
    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB22 Do not break before ellipsis.
    if (next === IN) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB23 Do not break between digits and letters.
    if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
        ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
        (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    ([PR, PO].indexOf(current) !== -1 &&
        (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
        // ( OP | HY ) × NU
        ([OP, HY].indexOf(current) !== -1 && next === NU) ||
        // NU ×	(NU | SY | IS)
        (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // LB26 Do not break a Korean syllable.
    if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
        ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
        ([JT, H3].indexOf(current) !== -1 && next === JT)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB27 Treat a Korean Syllable Block the same as ID.
    if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
        (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
        next === OP &&
        ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
        (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
        return BREAK_NOT_ALLOWED$1;
    }
    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI$1 && next === RI$1) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI$1) {
                count++;
            }
            else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED$1;
        }
    }
    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED$1;
    }
    return BREAK_ALLOWED$1;
};
var cssFormattedClasses = function (codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }
    var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
    }
    var forbiddenBreakpoints = options.wordBreak === 'keep-all'
        ? isLetterNumber.map(function (letterNumber, i) {
            return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        })
        : undefined;
    return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = /** @class */ (function () {
    function Break(codePoints, lineBreak, start, end) {
        this.codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }
    Break.prototype.slice = function () {
        return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break;
}());
var LineBreaker = function (str, options) {
    var codePoints = toCodePoints$1(str);
    var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
        next: function () {
            if (nextIndex >= length) {
                return { done: true, value: null };
            }
            var lineBreak = BREAK_NOT_ALLOWED$1;
            while (nextIndex < length &&
                (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                    BREAK_NOT_ALLOWED$1) { }
            if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }
            return { done: true, value: null };
        },
    };
};

// https://www.w3.org/TR/css-syntax-3
var FLAG_UNRESTRICTED = 1 << 0;
var FLAG_ID = 1 << 1;
var FLAG_INTEGER = 1 << 2;
var FLAG_NUMBER = 1 << 3;
var LINE_FEED = 0x000a;
var SOLIDUS = 0x002f;
var REVERSE_SOLIDUS = 0x005c;
var CHARACTER_TABULATION = 0x0009;
var SPACE = 0x0020;
var QUOTATION_MARK = 0x0022;
var EQUALS_SIGN = 0x003d;
var NUMBER_SIGN = 0x0023;
var DOLLAR_SIGN = 0x0024;
var PERCENTAGE_SIGN = 0x0025;
var APOSTROPHE = 0x0027;
var LEFT_PARENTHESIS = 0x0028;
var RIGHT_PARENTHESIS = 0x0029;
var LOW_LINE = 0x005f;
var HYPHEN_MINUS = 0x002d;
var EXCLAMATION_MARK = 0x0021;
var LESS_THAN_SIGN = 0x003c;
var GREATER_THAN_SIGN = 0x003e;
var COMMERCIAL_AT = 0x0040;
var LEFT_SQUARE_BRACKET = 0x005b;
var RIGHT_SQUARE_BRACKET = 0x005d;
var CIRCUMFLEX_ACCENT = 0x003d;
var LEFT_CURLY_BRACKET = 0x007b;
var QUESTION_MARK = 0x003f;
var RIGHT_CURLY_BRACKET = 0x007d;
var VERTICAL_LINE = 0x007c;
var TILDE = 0x007e;
var CONTROL = 0x0080;
var REPLACEMENT_CHARACTER = 0xfffd;
var ASTERISK = 0x002a;
var PLUS_SIGN = 0x002b;
var COMMA = 0x002c;
var COLON = 0x003a;
var SEMICOLON = 0x003b;
var FULL_STOP = 0x002e;
var NULL = 0x0000;
var BACKSPACE = 0x0008;
var LINE_TABULATION = 0x000b;
var SHIFT_OUT = 0x000e;
var INFORMATION_SEPARATOR_ONE = 0x001f;
var DELETE = 0x007f;
var EOF = -1;
var ZERO = 0x0030;
var a = 0x0061;
var e = 0x0065;
var f = 0x0066;
var u = 0x0075;
var z = 0x007a;
var A = 0x0041;
var E = 0x0045;
var F = 0x0046;
var U = 0x0055;
var Z = 0x005a;
var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
var isHex = function (codePoint) {
    return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
};
var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint); };
var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
var isWhiteSpace = function (codePoint) {
    return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
};
var isNameStartCodePoint = function (codePoint) {
    return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
};
var isNameCodePoint = function (codePoint) {
    return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
};
var isNonPrintableCodePoint = function (codePoint) {
    return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
        codePoint === LINE_TABULATION ||
        (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
        codePoint === DELETE);
};
var isValidEscape = function (c1, c2) {
    if (c1 !== REVERSE_SOLIDUS) {
        return false;
    }
    return c2 !== LINE_FEED;
};
var isIdentifierStart = function (c1, c2, c3) {
    if (c1 === HYPHEN_MINUS) {
        return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
    }
    else if (isNameStartCodePoint(c1)) {
        return true;
    }
    else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
        return true;
    }
    return false;
};
var isNumberStart = function (c1, c2, c3) {
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        if (isDigit(c2)) {
            return true;
        }
        return c2 === FULL_STOP && isDigit(c3);
    }
    if (c1 === FULL_STOP) {
        return isDigit(c2);
    }
    return isDigit(c1);
};
var stringToNumber = function (codePoints) {
    var c = 0;
    var sign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
        if (codePoints[c] === HYPHEN_MINUS) {
            sign = -1;
        }
        c++;
    }
    var integers = [];
    while (isDigit(codePoints[c])) {
        integers.push(codePoints[c++]);
    }
    var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
    if (codePoints[c] === FULL_STOP) {
        c++;
    }
    var fraction = [];
    while (isDigit(codePoints[c])) {
        fraction.push(codePoints[c++]);
    }
    var fracd = fraction.length;
    var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
    if (codePoints[c] === E || codePoints[c] === e) {
        c++;
    }
    var expsign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
        if (codePoints[c] === HYPHEN_MINUS) {
            expsign = -1;
        }
        c++;
    }
    var exponent = [];
    while (isDigit(codePoints[c])) {
        exponent.push(codePoints[c++]);
    }
    var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
    return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
};
var LEFT_PARENTHESIS_TOKEN = {
    type: 2 /* LEFT_PARENTHESIS_TOKEN */
};
var RIGHT_PARENTHESIS_TOKEN = {
    type: 3 /* RIGHT_PARENTHESIS_TOKEN */
};
var COMMA_TOKEN = { type: 4 /* COMMA_TOKEN */ };
var SUFFIX_MATCH_TOKEN = { type: 13 /* SUFFIX_MATCH_TOKEN */ };
var PREFIX_MATCH_TOKEN = { type: 8 /* PREFIX_MATCH_TOKEN */ };
var COLUMN_TOKEN = { type: 21 /* COLUMN_TOKEN */ };
var DASH_MATCH_TOKEN = { type: 9 /* DASH_MATCH_TOKEN */ };
var INCLUDE_MATCH_TOKEN = { type: 10 /* INCLUDE_MATCH_TOKEN */ };
var LEFT_CURLY_BRACKET_TOKEN = {
    type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
};
var RIGHT_CURLY_BRACKET_TOKEN = {
    type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
};
var SUBSTRING_MATCH_TOKEN = { type: 14 /* SUBSTRING_MATCH_TOKEN */ };
var BAD_URL_TOKEN = { type: 23 /* BAD_URL_TOKEN */ };
var BAD_STRING_TOKEN = { type: 1 /* BAD_STRING_TOKEN */ };
var CDO_TOKEN = { type: 25 /* CDO_TOKEN */ };
var CDC_TOKEN = { type: 24 /* CDC_TOKEN */ };
var COLON_TOKEN = { type: 26 /* COLON_TOKEN */ };
var SEMICOLON_TOKEN = { type: 27 /* SEMICOLON_TOKEN */ };
var LEFT_SQUARE_BRACKET_TOKEN = {
    type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
};
var RIGHT_SQUARE_BRACKET_TOKEN = {
    type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
};
var WHITESPACE_TOKEN = { type: 31 /* WHITESPACE_TOKEN */ };
var EOF_TOKEN = { type: 32 /* EOF_TOKEN */ };
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
        this._value = [];
    }
    Tokenizer.prototype.write = function (chunk) {
        this._value = this._value.concat(toCodePoints$1(chunk));
    };
    Tokenizer.prototype.read = function () {
        var tokens = [];
        var token = this.consumeToken();
        while (token !== EOF_TOKEN) {
            tokens.push(token);
            token = this.consumeToken();
        }
        return tokens;
    };
    Tokenizer.prototype.consumeToken = function () {
        var codePoint = this.consumeCodePoint();
        switch (codePoint) {
            case QUOTATION_MARK:
                return this.consumeStringToken(QUOTATION_MARK);
            case NUMBER_SIGN:
                var c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                    var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                    var value = this.consumeName();
                    return { type: 5 /* HASH_TOKEN */, value: value, flags: flags };
                }
                break;
            case DOLLAR_SIGN:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUFFIX_MATCH_TOKEN;
                }
                break;
            case APOSTROPHE:
                return this.consumeStringToken(APOSTROPHE);
            case LEFT_PARENTHESIS:
                return LEFT_PARENTHESIS_TOKEN;
            case RIGHT_PARENTHESIS:
                return RIGHT_PARENTHESIS_TOKEN;
            case ASTERISK:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUBSTRING_MATCH_TOKEN;
                }
                break;
            case PLUS_SIGN:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                }
                break;
            case COMMA:
                return COMMA_TOKEN;
            case HYPHEN_MINUS:
                var e1 = codePoint;
                var e2 = this.peekCodePoint(0);
                var e3 = this.peekCodePoint(1);
                if (isNumberStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                }
                if (isIdentifierStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                }
                if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDC_TOKEN;
                }
                break;
            case FULL_STOP:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                }
                break;
            case SOLIDUS:
                if (this.peekCodePoint(0) === ASTERISK) {
                    this.consumeCodePoint();
                    while (true) {
                        var c = this.consumeCodePoint();
                        if (c === ASTERISK) {
                            c = this.consumeCodePoint();
                            if (c === SOLIDUS) {
                                return this.consumeToken();
                            }
                        }
                        if (c === EOF) {
                            return this.consumeToken();
                        }
                    }
                }
                break;
            case COLON:
                return COLON_TOKEN;
            case SEMICOLON:
                return SEMICOLON_TOKEN;
            case LESS_THAN_SIGN:
                if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                    this.peekCodePoint(1) === HYPHEN_MINUS &&
                    this.peekCodePoint(2) === HYPHEN_MINUS) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDO_TOKEN;
                }
                break;
            case COMMERCIAL_AT:
                var a1 = this.peekCodePoint(0);
                var a2 = this.peekCodePoint(1);
                var a3 = this.peekCodePoint(2);
                if (isIdentifierStart(a1, a2, a3)) {
                    var value = this.consumeName();
                    return { type: 7 /* AT_KEYWORD_TOKEN */, value: value };
                }
                break;
            case LEFT_SQUARE_BRACKET:
                return LEFT_SQUARE_BRACKET_TOKEN;
            case REVERSE_SOLIDUS:
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                }
                break;
            case RIGHT_SQUARE_BRACKET:
                return RIGHT_SQUARE_BRACKET_TOKEN;
            case CIRCUMFLEX_ACCENT:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return PREFIX_MATCH_TOKEN;
                }
                break;
            case LEFT_CURLY_BRACKET:
                return LEFT_CURLY_BRACKET_TOKEN;
            case RIGHT_CURLY_BRACKET:
                return RIGHT_CURLY_BRACKET_TOKEN;
            case u:
            case U:
                var u1 = this.peekCodePoint(0);
                var u2 = this.peekCodePoint(1);
                if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                    this.consumeCodePoint();
                    this.consumeUnicodeRangeToken();
                }
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
            case VERTICAL_LINE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return DASH_MATCH_TOKEN;
                }
                if (this.peekCodePoint(0) === VERTICAL_LINE) {
                    this.consumeCodePoint();
                    return COLUMN_TOKEN;
                }
                break;
            case TILDE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return INCLUDE_MATCH_TOKEN;
                }
                break;
            case EOF:
                return EOF_TOKEN;
        }
        if (isWhiteSpace(codePoint)) {
            this.consumeWhiteSpace();
            return WHITESPACE_TOKEN;
        }
        if (isDigit(codePoint)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
        }
        if (isNameStartCodePoint(codePoint)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
        }
        return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
    };
    Tokenizer.prototype.consumeCodePoint = function () {
        var value = this._value.shift();
        return typeof value === 'undefined' ? -1 : value;
    };
    Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
        this._value.unshift(codePoint);
    };
    Tokenizer.prototype.peekCodePoint = function (delta) {
        if (delta >= this._value.length) {
            return -1;
        }
        return this._value[delta];
    };
    Tokenizer.prototype.consumeUnicodeRangeToken = function () {
        var digits = [];
        var codePoint = this.consumeCodePoint();
        while (isHex(codePoint) && digits.length < 6) {
            digits.push(codePoint);
            codePoint = this.consumeCodePoint();
        }
        var questionMarks = false;
        while (codePoint === QUESTION_MARK && digits.length < 6) {
            digits.push(codePoint);
            codePoint = this.consumeCodePoint();
            questionMarks = true;
        }
        if (questionMarks) {
            var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
            var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
            return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
        }
        var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
        if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
            this.consumeCodePoint();
            codePoint = this.consumeCodePoint();
            var endDigits = [];
            while (isHex(codePoint) && endDigits.length < 6) {
                endDigits.push(codePoint);
                codePoint = this.consumeCodePoint();
            }
            var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
            return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
        }
        else {
            return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
        }
    };
    Tokenizer.prototype.consumeIdentLikeToken = function () {
        var value = this.consumeName();
        if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
            this.consumeCodePoint();
            return this.consumeUrlToken();
        }
        else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: 19 /* FUNCTION_TOKEN */, value: value };
        }
        return { type: 20 /* IDENT_TOKEN */, value: value };
    };
    Tokenizer.prototype.consumeUrlToken = function () {
        var value = [];
        this.consumeWhiteSpace();
        if (this.peekCodePoint(0) === EOF) {
            return { type: 22 /* URL_TOKEN */, value: '' };
        }
        var next = this.peekCodePoint(0);
        if (next === APOSTROPHE || next === QUOTATION_MARK) {
            var stringToken = this.consumeStringToken(this.consumeCodePoint());
            if (stringToken.type === 0 /* STRING_TOKEN */) {
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22 /* URL_TOKEN */, value: stringToken.value };
                }
            }
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
        }
        while (true) {
            var codePoint = this.consumeCodePoint();
            if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
            }
            else if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            else if (codePoint === QUOTATION_MARK ||
                codePoint === APOSTROPHE ||
                codePoint === LEFT_PARENTHESIS ||
                isNonPrintableCodePoint(codePoint)) {
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            else if (codePoint === REVERSE_SOLIDUS) {
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    value.push(this.consumeEscapedCodePoint());
                }
                else {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
            }
            else {
                value.push(codePoint);
            }
        }
    };
    Tokenizer.prototype.consumeWhiteSpace = function () {
        while (isWhiteSpace(this.peekCodePoint(0))) {
            this.consumeCodePoint();
        }
    };
    Tokenizer.prototype.consumeBadUrlRemnants = function () {
        while (true) {
            var codePoint = this.consumeCodePoint();
            if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                return;
            }
            if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                this.consumeEscapedCodePoint();
            }
        }
    };
    Tokenizer.prototype.consumeStringSlice = function (count) {
        var SLICE_STACK_SIZE = 50000;
        var value = '';
        while (count > 0) {
            var amount = Math.min(SLICE_STACK_SIZE, count);
            value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
            count -= amount;
        }
        this._value.shift();
        return value;
    };
    Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
        var value = '';
        var i = 0;
        do {
            var codePoint = this._value[i];
            if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                value += this.consumeStringSlice(i);
                return { type: 0 /* STRING_TOKEN */, value: value };
            }
            if (codePoint === LINE_FEED) {
                this._value.splice(0, i);
                return BAD_STRING_TOKEN;
            }
            if (codePoint === REVERSE_SOLIDUS) {
                var next = this._value[i + 1];
                if (next !== EOF && next !== undefined) {
                    if (next === LINE_FEED) {
                        value += this.consumeStringSlice(i);
                        i = -1;
                        this._value.shift();
                    }
                    else if (isValidEscape(codePoint, next)) {
                        value += this.consumeStringSlice(i);
                        value += fromCodePoint$1(this.consumeEscapedCodePoint());
                        i = -1;
                    }
                }
            }
            i++;
        } while (true);
    };
    Tokenizer.prototype.consumeNumber = function () {
        var repr = [];
        var type = FLAG_INTEGER;
        var c1 = this.peekCodePoint(0);
        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            repr.push(this.consumeCodePoint());
        }
        while (isDigit(this.peekCodePoint(0))) {
            repr.push(this.consumeCodePoint());
        }
        c1 = this.peekCodePoint(0);
        var c2 = this.peekCodePoint(1);
        if (c1 === FULL_STOP && isDigit(c2)) {
            repr.push(this.consumeCodePoint(), this.consumeCodePoint());
            type = FLAG_NUMBER;
            while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
        }
        c1 = this.peekCodePoint(0);
        c2 = this.peekCodePoint(1);
        var c3 = this.peekCodePoint(2);
        if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
            repr.push(this.consumeCodePoint(), this.consumeCodePoint());
            type = FLAG_NUMBER;
            while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
        }
        return [stringToNumber(repr), type];
    };
    Tokenizer.prototype.consumeNumericToken = function () {
        var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
        var c1 = this.peekCodePoint(0);
        var c2 = this.peekCodePoint(1);
        var c3 = this.peekCodePoint(2);
        if (isIdentifierStart(c1, c2, c3)) {
            var unit = this.consumeName();
            return { type: 15 /* DIMENSION_TOKEN */, number: number, flags: flags, unit: unit };
        }
        if (c1 === PERCENTAGE_SIGN) {
            this.consumeCodePoint();
            return { type: 16 /* PERCENTAGE_TOKEN */, number: number, flags: flags };
        }
        return { type: 17 /* NUMBER_TOKEN */, number: number, flags: flags };
    };
    Tokenizer.prototype.consumeEscapedCodePoint = function () {
        var codePoint = this.consumeCodePoint();
        if (isHex(codePoint)) {
            var hex = fromCodePoint$1(codePoint);
            while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                hex += fromCodePoint$1(this.consumeCodePoint());
            }
            if (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
            }
            var hexCodePoint = parseInt(hex, 16);
            if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                return REPLACEMENT_CHARACTER;
            }
            return hexCodePoint;
        }
        if (codePoint === EOF) {
            return REPLACEMENT_CHARACTER;
        }
        return codePoint;
    };
    Tokenizer.prototype.consumeName = function () {
        var result = '';
        while (true) {
            var codePoint = this.consumeCodePoint();
            if (isNameCodePoint(codePoint)) {
                result += fromCodePoint$1(codePoint);
            }
            else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                result += fromCodePoint$1(this.consumeEscapedCodePoint());
            }
            else {
                this.reconsumeCodePoint(codePoint);
                return result;
            }
        }
    };
    return Tokenizer;
}());

var Parser = /** @class */ (function () {
    function Parser(tokens) {
        this._tokens = tokens;
    }
    Parser.create = function (value) {
        var tokenizer = new Tokenizer();
        tokenizer.write(value);
        return new Parser(tokenizer.read());
    };
    Parser.parseValue = function (value) {
        return Parser.create(value).parseComponentValue();
    };
    Parser.parseValues = function (value) {
        return Parser.create(value).parseComponentValues();
    };
    Parser.prototype.parseComponentValue = function () {
        var token = this.consumeToken();
        while (token.type === 31 /* WHITESPACE_TOKEN */) {
            token = this.consumeToken();
        }
        if (token.type === 32 /* EOF_TOKEN */) {
            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        }
        this.reconsumeToken(token);
        var value = this.consumeComponentValue();
        do {
            token = this.consumeToken();
        } while (token.type === 31 /* WHITESPACE_TOKEN */);
        if (token.type === 32 /* EOF_TOKEN */) {
            return value;
        }
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    };
    Parser.prototype.parseComponentValues = function () {
        var values = [];
        while (true) {
            var value = this.consumeComponentValue();
            if (value.type === 32 /* EOF_TOKEN */) {
                return values;
            }
            values.push(value);
            values.push();
        }
    };
    Parser.prototype.consumeComponentValue = function () {
        var token = this.consumeToken();
        switch (token.type) {
            case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
            case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
            case 2 /* LEFT_PARENTHESIS_TOKEN */:
                return this.consumeSimpleBlock(token.type);
            case 19 /* FUNCTION_TOKEN */:
                return this.consumeFunction(token);
        }
        return token;
    };
    Parser.prototype.consumeSimpleBlock = function (type) {
        var block = { type: type, values: [] };
        var token = this.consumeToken();
        while (true) {
            if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
                return block;
            }
            this.reconsumeToken(token);
            block.values.push(this.consumeComponentValue());
            token = this.consumeToken();
        }
    };
    Parser.prototype.consumeFunction = function (functionToken) {
        var cssFunction = {
            name: functionToken.value,
            values: [],
            type: 18 /* FUNCTION */
        };
        while (true) {
            var token = this.consumeToken();
            if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
                return cssFunction;
            }
            this.reconsumeToken(token);
            cssFunction.values.push(this.consumeComponentValue());
        }
    };
    Parser.prototype.consumeToken = function () {
        var token = this._tokens.shift();
        return typeof token === 'undefined' ? EOF_TOKEN : token;
    };
    Parser.prototype.reconsumeToken = function (token) {
        this._tokens.unshift(token);
    };
    return Parser;
}());
var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
var isIdentWithValue = function (token, value) {
    return isIdentToken(token) && token.value === value;
};
var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
var nonFunctionArgSeparator = function (token) {
    return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
};
var parseFunctionArgs = function (tokens) {
    var args = [];
    var arg = [];
    tokens.forEach(function (token) {
        if (token.type === 4 /* COMMA_TOKEN */) {
            if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
            }
            args.push(arg);
            arg = [];
            return;
        }
        if (token.type !== 31 /* WHITESPACE_TOKEN */) {
            arg.push(token);
        }
    });
    if (arg.length) {
        args.push(arg);
    }
    return args;
};
var isEndingTokenFor = function (token, type) {
    if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
        return true;
    }
    if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
        return true;
    }
    return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
};

var isLength = function (token) {
    return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
};

var isLengthPercentage = function (token) {
    return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
};
var parseLengthPercentageTuple = function (tokens) {
    return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
};
var ZERO_LENGTH = {
    type: 17 /* NUMBER_TOKEN */,
    number: 0,
    flags: FLAG_INTEGER
};
var FIFTY_PERCENT = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 50,
    flags: FLAG_INTEGER
};
var HUNDRED_PERCENT = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 100,
    flags: FLAG_INTEGER
};
var getAbsoluteValueForTuple = function (tuple, width, height) {
    var x = tuple[0], y = tuple[1];
    return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
};
var getAbsoluteValue = function (token, parent) {
    if (token.type === 16 /* PERCENTAGE_TOKEN */) {
        return (token.number / 100) * parent;
    }
    if (isDimensionToken(token)) {
        switch (token.unit) {
            case 'rem':
            case 'em':
                return 16 * token.number; // TODO use correct font-size
            case 'px':
            default:
                return token.number;
        }
    }
    return token.number;
};

var DEG = 'deg';
var GRAD = 'grad';
var RAD = 'rad';
var TURN = 'turn';
var angle = {
    name: 'angle',
    parse: function (_context, value) {
        if (value.type === 15 /* DIMENSION_TOKEN */) {
            switch (value.unit) {
                case DEG:
                    return (Math.PI * value.number) / 180;
                case GRAD:
                    return (Math.PI / 200) * value.number;
                case RAD:
                    return value.number;
                case TURN:
                    return Math.PI * 2 * value.number;
            }
        }
        throw new Error("Unsupported angle type");
    }
};
var isAngle = function (value) {
    if (value.type === 15 /* DIMENSION_TOKEN */) {
        if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
            return true;
        }
    }
    return false;
};
var parseNamedSide = function (tokens) {
    var sideOrCorner = tokens
        .filter(isIdentToken)
        .map(function (ident) { return ident.value; })
        .join(' ');
    switch (sideOrCorner) {
        case 'to bottom right':
        case 'to right bottom':
        case 'left top':
        case 'top left':
            return [ZERO_LENGTH, ZERO_LENGTH];
        case 'to top':
        case 'bottom':
            return deg(0);
        case 'to bottom left':
        case 'to left bottom':
        case 'right top':
        case 'top right':
            return [ZERO_LENGTH, HUNDRED_PERCENT];
        case 'to right':
        case 'left':
            return deg(90);
        case 'to top left':
        case 'to left top':
        case 'right bottom':
        case 'bottom right':
            return [HUNDRED_PERCENT, HUNDRED_PERCENT];
        case 'to bottom':
        case 'top':
            return deg(180);
        case 'to top right':
        case 'to right top':
        case 'left bottom':
        case 'bottom left':
            return [HUNDRED_PERCENT, ZERO_LENGTH];
        case 'to left':
        case 'right':
            return deg(270);
    }
    return 0;
};
var deg = function (deg) { return (Math.PI * deg) / 180; };

var color$1 = {
    name: 'color',
    parse: function (context, value) {
        if (value.type === 18 /* FUNCTION */) {
            var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
            if (typeof colorFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
            }
            return colorFunction(context, value.values);
        }
        if (value.type === 5 /* HASH_TOKEN */) {
            if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
            }
            if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
            }
            if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
            }
            if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
            }
        }
        if (value.type === 20 /* IDENT_TOKEN */) {
            var namedColor = COLORS[value.value.toUpperCase()];
            if (typeof namedColor !== 'undefined') {
                return namedColor;
            }
        }
        return COLORS.TRANSPARENT;
    }
};
var isTransparent = function (color) { return (0xff & color) === 0; };
var asString = function (color) {
    var alpha = 0xff & color;
    var blue = 0xff & (color >> 8);
    var green = 0xff & (color >> 16);
    var red = 0xff & (color >> 24);
    return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
};
var pack = function (r, g, b, a) {
    return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
};
var getTokenColorValue = function (token, i) {
    if (token.type === 17 /* NUMBER_TOKEN */) {
        return token.number;
    }
    if (token.type === 16 /* PERCENTAGE_TOKEN */) {
        var max = i === 3 ? 1 : 255;
        return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
    }
    return 0;
};
var rgb = function (_context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);
    if (tokens.length === 3) {
        var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
        return pack(r, g, b, 1);
    }
    if (tokens.length === 4) {
        var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
        return pack(r, g, b, a);
    }
    return 0;
};
function hue2rgb(t1, t2, hue) {
    if (hue < 0) {
        hue += 1;
    }
    if (hue >= 1) {
        hue -= 1;
    }
    if (hue < 1 / 6) {
        return (t2 - t1) * hue * 6 + t1;
    }
    else if (hue < 1 / 2) {
        return t2;
    }
    else if (hue < 2 / 3) {
        return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
    }
    else {
        return t1;
    }
}
var hsl = function (context, args) {
    var tokens = args.filter(nonFunctionArgSeparator);
    var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
    var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
    var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
    var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
    var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
    if (s === 0) {
        return pack(l * 255, l * 255, l * 255, 1);
    }
    var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    var t1 = l * 2 - t2;
    var r = hue2rgb(t1, t2, h + 1 / 3);
    var g = hue2rgb(t1, t2, h);
    var b = hue2rgb(t1, t2, h - 1 / 3);
    return pack(r * 255, g * 255, b * 255, a);
};
var SUPPORTED_COLOR_FUNCTIONS = {
    hsl: hsl,
    hsla: hsl,
    rgb: rgb,
    rgba: rgb
};
var parseColor = function (context, value) {
    return color$1.parse(context, Parser.create(value).parseComponentValue());
};
var COLORS = {
    ALICEBLUE: 0xf0f8ffff,
    ANTIQUEWHITE: 0xfaebd7ff,
    AQUA: 0x00ffffff,
    AQUAMARINE: 0x7fffd4ff,
    AZURE: 0xf0ffffff,
    BEIGE: 0xf5f5dcff,
    BISQUE: 0xffe4c4ff,
    BLACK: 0x000000ff,
    BLANCHEDALMOND: 0xffebcdff,
    BLUE: 0x0000ffff,
    BLUEVIOLET: 0x8a2be2ff,
    BROWN: 0xa52a2aff,
    BURLYWOOD: 0xdeb887ff,
    CADETBLUE: 0x5f9ea0ff,
    CHARTREUSE: 0x7fff00ff,
    CHOCOLATE: 0xd2691eff,
    CORAL: 0xff7f50ff,
    CORNFLOWERBLUE: 0x6495edff,
    CORNSILK: 0xfff8dcff,
    CRIMSON: 0xdc143cff,
    CYAN: 0x00ffffff,
    DARKBLUE: 0x00008bff,
    DARKCYAN: 0x008b8bff,
    DARKGOLDENROD: 0xb886bbff,
    DARKGRAY: 0xa9a9a9ff,
    DARKGREEN: 0x006400ff,
    DARKGREY: 0xa9a9a9ff,
    DARKKHAKI: 0xbdb76bff,
    DARKMAGENTA: 0x8b008bff,
    DARKOLIVEGREEN: 0x556b2fff,
    DARKORANGE: 0xff8c00ff,
    DARKORCHID: 0x9932ccff,
    DARKRED: 0x8b0000ff,
    DARKSALMON: 0xe9967aff,
    DARKSEAGREEN: 0x8fbc8fff,
    DARKSLATEBLUE: 0x483d8bff,
    DARKSLATEGRAY: 0x2f4f4fff,
    DARKSLATEGREY: 0x2f4f4fff,
    DARKTURQUOISE: 0x00ced1ff,
    DARKVIOLET: 0x9400d3ff,
    DEEPPINK: 0xff1493ff,
    DEEPSKYBLUE: 0x00bfffff,
    DIMGRAY: 0x696969ff,
    DIMGREY: 0x696969ff,
    DODGERBLUE: 0x1e90ffff,
    FIREBRICK: 0xb22222ff,
    FLORALWHITE: 0xfffaf0ff,
    FORESTGREEN: 0x228b22ff,
    FUCHSIA: 0xff00ffff,
    GAINSBORO: 0xdcdcdcff,
    GHOSTWHITE: 0xf8f8ffff,
    GOLD: 0xffd700ff,
    GOLDENROD: 0xdaa520ff,
    GRAY: 0x808080ff,
    GREEN: 0x008000ff,
    GREENYELLOW: 0xadff2fff,
    GREY: 0x808080ff,
    HONEYDEW: 0xf0fff0ff,
    HOTPINK: 0xff69b4ff,
    INDIANRED: 0xcd5c5cff,
    INDIGO: 0x4b0082ff,
    IVORY: 0xfffff0ff,
    KHAKI: 0xf0e68cff,
    LAVENDER: 0xe6e6faff,
    LAVENDERBLUSH: 0xfff0f5ff,
    LAWNGREEN: 0x7cfc00ff,
    LEMONCHIFFON: 0xfffacdff,
    LIGHTBLUE: 0xadd8e6ff,
    LIGHTCORAL: 0xf08080ff,
    LIGHTCYAN: 0xe0ffffff,
    LIGHTGOLDENRODYELLOW: 0xfafad2ff,
    LIGHTGRAY: 0xd3d3d3ff,
    LIGHTGREEN: 0x90ee90ff,
    LIGHTGREY: 0xd3d3d3ff,
    LIGHTPINK: 0xffb6c1ff,
    LIGHTSALMON: 0xffa07aff,
    LIGHTSEAGREEN: 0x20b2aaff,
    LIGHTSKYBLUE: 0x87cefaff,
    LIGHTSLATEGRAY: 0x778899ff,
    LIGHTSLATEGREY: 0x778899ff,
    LIGHTSTEELBLUE: 0xb0c4deff,
    LIGHTYELLOW: 0xffffe0ff,
    LIME: 0x00ff00ff,
    LIMEGREEN: 0x32cd32ff,
    LINEN: 0xfaf0e6ff,
    MAGENTA: 0xff00ffff,
    MAROON: 0x800000ff,
    MEDIUMAQUAMARINE: 0x66cdaaff,
    MEDIUMBLUE: 0x0000cdff,
    MEDIUMORCHID: 0xba55d3ff,
    MEDIUMPURPLE: 0x9370dbff,
    MEDIUMSEAGREEN: 0x3cb371ff,
    MEDIUMSLATEBLUE: 0x7b68eeff,
    MEDIUMSPRINGGREEN: 0x00fa9aff,
    MEDIUMTURQUOISE: 0x48d1ccff,
    MEDIUMVIOLETRED: 0xc71585ff,
    MIDNIGHTBLUE: 0x191970ff,
    MINTCREAM: 0xf5fffaff,
    MISTYROSE: 0xffe4e1ff,
    MOCCASIN: 0xffe4b5ff,
    NAVAJOWHITE: 0xffdeadff,
    NAVY: 0x000080ff,
    OLDLACE: 0xfdf5e6ff,
    OLIVE: 0x808000ff,
    OLIVEDRAB: 0x6b8e23ff,
    ORANGE: 0xffa500ff,
    ORANGERED: 0xff4500ff,
    ORCHID: 0xda70d6ff,
    PALEGOLDENROD: 0xeee8aaff,
    PALEGREEN: 0x98fb98ff,
    PALETURQUOISE: 0xafeeeeff,
    PALEVIOLETRED: 0xdb7093ff,
    PAPAYAWHIP: 0xffefd5ff,
    PEACHPUFF: 0xffdab9ff,
    PERU: 0xcd853fff,
    PINK: 0xffc0cbff,
    PLUM: 0xdda0ddff,
    POWDERBLUE: 0xb0e0e6ff,
    PURPLE: 0x800080ff,
    REBECCAPURPLE: 0x663399ff,
    RED: 0xff0000ff,
    ROSYBROWN: 0xbc8f8fff,
    ROYALBLUE: 0x4169e1ff,
    SADDLEBROWN: 0x8b4513ff,
    SALMON: 0xfa8072ff,
    SANDYBROWN: 0xf4a460ff,
    SEAGREEN: 0x2e8b57ff,
    SEASHELL: 0xfff5eeff,
    SIENNA: 0xa0522dff,
    SILVER: 0xc0c0c0ff,
    SKYBLUE: 0x87ceebff,
    SLATEBLUE: 0x6a5acdff,
    SLATEGRAY: 0x708090ff,
    SLATEGREY: 0x708090ff,
    SNOW: 0xfffafaff,
    SPRINGGREEN: 0x00ff7fff,
    STEELBLUE: 0x4682b4ff,
    TAN: 0xd2b48cff,
    TEAL: 0x008080ff,
    THISTLE: 0xd8bfd8ff,
    TOMATO: 0xff6347ff,
    TRANSPARENT: 0x00000000,
    TURQUOISE: 0x40e0d0ff,
    VIOLET: 0xee82eeff,
    WHEAT: 0xf5deb3ff,
    WHITE: 0xffffffff,
    WHITESMOKE: 0xf5f5f5ff,
    YELLOW: 0xffff00ff,
    YELLOWGREEN: 0x9acd32ff
};

var backgroundClip = {
    name: 'background-clip',
    initialValue: 'border-box',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return tokens.map(function (token) {
            if (isIdentToken(token)) {
                switch (token.value) {
                    case 'padding-box':
                        return 1 /* PADDING_BOX */;
                    case 'content-box':
                        return 2 /* CONTENT_BOX */;
                }
            }
            return 0 /* BORDER_BOX */;
        });
    }
};

var backgroundColor = {
    name: "background-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
};

var parseColorStop = function (context, args) {
    var color = color$1.parse(context, args[0]);
    var stop = args[1];
    return stop && isLengthPercentage(stop) ? { color: color, stop: stop } : { color: color, stop: null };
};
var processColorStops = function (stops, lineLength) {
    var first = stops[0];
    var last = stops[stops.length - 1];
    if (first.stop === null) {
        first.stop = ZERO_LENGTH;
    }
    if (last.stop === null) {
        last.stop = HUNDRED_PERCENT;
    }
    var processStops = [];
    var previous = 0;
    for (var i = 0; i < stops.length; i++) {
        var stop_1 = stops[i].stop;
        if (stop_1 !== null) {
            var absoluteValue = getAbsoluteValue(stop_1, lineLength);
            if (absoluteValue > previous) {
                processStops.push(absoluteValue);
            }
            else {
                processStops.push(previous);
            }
            previous = absoluteValue;
        }
        else {
            processStops.push(null);
        }
    }
    var gapBegin = null;
    for (var i = 0; i < processStops.length; i++) {
        var stop_2 = processStops[i];
        if (stop_2 === null) {
            if (gapBegin === null) {
                gapBegin = i;
            }
        }
        else if (gapBegin !== null) {
            var gapLength = i - gapBegin;
            var beforeGap = processStops[gapBegin - 1];
            var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
            for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
            }
            gapBegin = null;
        }
    }
    return stops.map(function (_a, i) {
        var color = _a.color;
        return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
    });
};
var getAngleFromCorner = function (corner, width, height) {
    var centerX = width / 2;
    var centerY = height / 2;
    var x = getAbsoluteValue(corner[0], width) - centerX;
    var y = centerY - getAbsoluteValue(corner[1], height);
    return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
};
var calculateGradientDirection = function (angle, width, height) {
    var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var halfLineLength = lineLength / 2;
    var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
    var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
    return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
};
var distance = function (a, b) { return Math.sqrt(a * a + b * b); };
var findCorner = function (width, height, x, y, closest) {
    var corners = [
        [0, 0],
        [0, height],
        [width, 0],
        [width, height]
    ];
    return corners.reduce(function (stat, corner) {
        var cx = corner[0], cy = corner[1];
        var d = distance(x - cx, y - cy);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }
        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};
var calculateRadius = function (gradient, x, y, width, height) {
    var rx = 0;
    var ry = 0;
    switch (gradient.size) {
        case 0 /* CLOSEST_SIDE */:
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (gradient.shape === 0 /* CIRCLE */) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
            }
            else if (gradient.shape === 1 /* ELLIPSE */) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
            }
            break;
        case 2 /* CLOSEST_CORNER */:
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (gradient.shape === 0 /* CIRCLE */) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
            }
            else if (gradient.shape === 1 /* ELLIPSE */) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
            }
            break;
        case 1 /* FARTHEST_SIDE */:
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (gradient.shape === 0 /* CIRCLE */) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
            }
            else if (gradient.shape === 1 /* ELLIPSE */) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
            }
            break;
        case 3 /* FARTHEST_CORNER */:
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (gradient.shape === 0 /* CIRCLE */) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
            }
            else if (gradient.shape === 1 /* ELLIPSE */) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
            }
            break;
    }
    if (Array.isArray(gradient.size)) {
        rx = getAbsoluteValue(gradient.size[0], width);
        ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
    }
    return [rx, ry];
};

var linearGradient = function (context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
        if (i === 0) {
            var firstToken = arg[0];
            if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                angle$1 = parseNamedSide(arg);
                return;
            }
            else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
            }
        }
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
    });
    return { angle: angle$1, stops: stops, type: 1 /* LINEAR_GRADIENT */ };
};

var prefixLinearGradient = function (context, tokens) {
    var angle$1 = deg(180);
    var stops = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
        if (i === 0) {
            var firstToken = arg[0];
            if (firstToken.type === 20 /* IDENT_TOKEN */ &&
                ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
            }
            else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
            }
        }
        var colorStop = parseColorStop(context, arg);
        stops.push(colorStop);
    });
    return {
        angle: angle$1,
        stops: stops,
        type: 1 /* LINEAR_GRADIENT */
    };
};

var webkitGradient = function (context, tokens) {
    var angle = deg(180);
    var stops = [];
    var type = 1 /* LINEAR_GRADIENT */;
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
        var firstToken = arg[0];
        if (i === 0) {
            if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                type = 1 /* LINEAR_GRADIENT */;
                return;
            }
            else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                type = 2 /* RADIAL_GRADIENT */;
                return;
            }
        }
        if (firstToken.type === 18 /* FUNCTION */) {
            if (firstToken.name === 'from') {
                var color = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: ZERO_LENGTH, color: color });
            }
            else if (firstToken.name === 'to') {
                var color = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: HUNDRED_PERCENT, color: color });
            }
            else if (firstToken.name === 'color-stop') {
                var values = firstToken.values.filter(nonFunctionArgSeparator);
                if (values.length === 2) {
                    var color = color$1.parse(context, values[1]);
                    var stop_1 = values[0];
                    if (isNumberToken(stop_1)) {
                        stops.push({
                            stop: { type: 16 /* PERCENTAGE_TOKEN */, number: stop_1.number * 100, flags: stop_1.flags },
                            color: color
                        });
                    }
                }
            }
        }
    });
    return type === 1 /* LINEAR_GRADIENT */
        ? {
            angle: (angle + deg(180)) % deg(360),
            stops: stops,
            type: type
        }
        : { size: size, shape: shape, stops: stops, position: position, type: type };
};

var CLOSEST_SIDE = 'closest-side';
var FARTHEST_SIDE = 'farthest-side';
var CLOSEST_CORNER = 'closest-corner';
var FARTHEST_CORNER = 'farthest-corner';
var CIRCLE = 'circle';
var ELLIPSE = 'ellipse';
var COVER = 'cover';
var CONTAIN = 'contain';
var radialGradient = function (context, tokens) {
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
        var isColorStop = true;
        if (i === 0) {
            var isAtPosition_1 = false;
            isColorStop = arg.reduce(function (acc, token) {
                if (isAtPosition_1) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'center':
                                position.push(FIFTY_PERCENT);
                                return acc;
                            case 'top':
                            case 'left':
                                position.push(ZERO_LENGTH);
                                return acc;
                            case 'right':
                            case 'bottom':
                                position.push(HUNDRED_PERCENT);
                                return acc;
                        }
                    }
                    else if (isLengthPercentage(token) || isLength(token)) {
                        position.push(token);
                    }
                }
                else if (isIdentToken(token)) {
                    switch (token.value) {
                        case CIRCLE:
                            shape = 0 /* CIRCLE */;
                            return false;
                        case ELLIPSE:
                            shape = 1 /* ELLIPSE */;
                            return false;
                        case 'at':
                            isAtPosition_1 = true;
                            return false;
                        case CLOSEST_SIDE:
                            size = 0 /* CLOSEST_SIDE */;
                            return false;
                        case COVER:
                        case FARTHEST_SIDE:
                            size = 1 /* FARTHEST_SIDE */;
                            return false;
                        case CONTAIN:
                        case CLOSEST_CORNER:
                            size = 2 /* CLOSEST_CORNER */;
                            return false;
                        case FARTHEST_CORNER:
                            size = 3 /* FARTHEST_CORNER */;
                            return false;
                    }
                }
                else if (isLength(token) || isLengthPercentage(token)) {
                    if (!Array.isArray(size)) {
                        size = [];
                    }
                    size.push(token);
                    return false;
                }
                return acc;
            }, isColorStop);
        }
        if (isColorStop) {
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        }
    });
    return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
};

var prefixRadialGradient = function (context, tokens) {
    var shape = 0 /* CIRCLE */;
    var size = 3 /* FARTHEST_CORNER */;
    var stops = [];
    var position = [];
    parseFunctionArgs(tokens).forEach(function (arg, i) {
        var isColorStop = true;
        if (i === 0) {
            isColorStop = arg.reduce(function (acc, token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'center':
                            position.push(FIFTY_PERCENT);
                            return false;
                        case 'top':
                        case 'left':
                            position.push(ZERO_LENGTH);
                            return false;
                        case 'right':
                        case 'bottom':
                            position.push(HUNDRED_PERCENT);
                            return false;
                    }
                }
                else if (isLengthPercentage(token) || isLength(token)) {
                    position.push(token);
                    return false;
                }
                return acc;
            }, isColorStop);
        }
        else if (i === 1) {
            isColorStop = arg.reduce(function (acc, token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case CIRCLE:
                            shape = 0 /* CIRCLE */;
                            return false;
                        case ELLIPSE:
                            shape = 1 /* ELLIPSE */;
                            return false;
                        case CONTAIN:
                        case CLOSEST_SIDE:
                            size = 0 /* CLOSEST_SIDE */;
                            return false;
                        case FARTHEST_SIDE:
                            size = 1 /* FARTHEST_SIDE */;
                            return false;
                        case CLOSEST_CORNER:
                            size = 2 /* CLOSEST_CORNER */;
                            return false;
                        case COVER:
                        case FARTHEST_CORNER:
                            size = 3 /* FARTHEST_CORNER */;
                            return false;
                    }
                }
                else if (isLength(token) || isLengthPercentage(token)) {
                    if (!Array.isArray(size)) {
                        size = [];
                    }
                    size.push(token);
                    return false;
                }
                return acc;
            }, isColorStop);
        }
        if (isColorStop) {
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        }
    });
    return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
};

var isLinearGradient = function (background) {
    return background.type === 1 /* LINEAR_GRADIENT */;
};
var isRadialGradient = function (background) {
    return background.type === 2 /* RADIAL_GRADIENT */;
};
var image = {
    name: 'image',
    parse: function (context, value) {
        if (value.type === 22 /* URL_TOKEN */) {
            var image_1 = { url: value.value, type: 0 /* URL */ };
            context.cache.addImage(value.value);
            return image_1;
        }
        if (value.type === 18 /* FUNCTION */) {
            var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
            if (typeof imageFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
            }
            return imageFunction(context, value.values);
        }
        throw new Error("Unsupported image type " + value.type);
    }
};
function isSupportedImage(value) {
    return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
        (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
}
var SUPPORTED_IMAGE_FUNCTIONS = {
    'linear-gradient': linearGradient,
    '-moz-linear-gradient': prefixLinearGradient,
    '-ms-linear-gradient': prefixLinearGradient,
    '-o-linear-gradient': prefixLinearGradient,
    '-webkit-linear-gradient': prefixLinearGradient,
    'radial-gradient': radialGradient,
    '-moz-radial-gradient': prefixRadialGradient,
    '-ms-radial-gradient': prefixRadialGradient,
    '-o-radial-gradient': prefixRadialGradient,
    '-webkit-radial-gradient': prefixRadialGradient,
    '-webkit-gradient': webkitGradient
};

var backgroundImage = {
    name: 'background-image',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (context, tokens) {
        if (tokens.length === 0) {
            return [];
        }
        var first = tokens[0];
        if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
            return [];
        }
        return tokens
            .filter(function (value) { return nonFunctionArgSeparator(value) && isSupportedImage(value); })
            .map(function (value) { return image.parse(context, value); });
    }
};

var backgroundOrigin = {
    name: 'background-origin',
    initialValue: 'border-box',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return tokens.map(function (token) {
            if (isIdentToken(token)) {
                switch (token.value) {
                    case 'padding-box':
                        return 1 /* PADDING_BOX */;
                    case 'content-box':
                        return 2 /* CONTENT_BOX */;
                }
            }
            return 0 /* BORDER_BOX */;
        });
    }
};

var backgroundPosition = {
    name: 'background-position',
    initialValue: '0% 0%',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (_context, tokens) {
        return parseFunctionArgs(tokens)
            .map(function (values) { return values.filter(isLengthPercentage); })
            .map(parseLengthPercentageTuple);
    }
};

var backgroundRepeat = {
    name: 'background-repeat',
    initialValue: 'repeat',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return parseFunctionArgs(tokens)
            .map(function (values) {
            return values
                .filter(isIdentToken)
                .map(function (token) { return token.value; })
                .join(' ');
        })
            .map(parseBackgroundRepeat);
    }
};
var parseBackgroundRepeat = function (value) {
    switch (value) {
        case 'no-repeat':
            return 1 /* NO_REPEAT */;
        case 'repeat-x':
        case 'repeat no-repeat':
            return 2 /* REPEAT_X */;
        case 'repeat-y':
        case 'no-repeat repeat':
            return 3 /* REPEAT_Y */;
        case 'repeat':
        default:
            return 0 /* REPEAT */;
    }
};

var BACKGROUND_SIZE;
(function (BACKGROUND_SIZE) {
    BACKGROUND_SIZE["AUTO"] = "auto";
    BACKGROUND_SIZE["CONTAIN"] = "contain";
    BACKGROUND_SIZE["COVER"] = "cover";
})(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
var backgroundSize = {
    name: 'background-size',
    initialValue: '0',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return parseFunctionArgs(tokens).map(function (values) { return values.filter(isBackgroundSizeInfoToken); });
    }
};
var isBackgroundSizeInfoToken = function (value) {
    return isIdentToken(value) || isLengthPercentage(value);
};

var borderColorForSide = function (side) { return ({
    name: "border-" + side + "-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
}); };
var borderTopColor = borderColorForSide('top');
var borderRightColor = borderColorForSide('right');
var borderBottomColor = borderColorForSide('bottom');
var borderLeftColor = borderColorForSide('left');

var borderRadiusForSide = function (side) { return ({
    name: "border-radius-" + side,
    initialValue: '0 0',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
    }
}); };
var borderTopLeftRadius = borderRadiusForSide('top-left');
var borderTopRightRadius = borderRadiusForSide('top-right');
var borderBottomRightRadius = borderRadiusForSide('bottom-right');
var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

var borderStyleForSide = function (side) { return ({
    name: "border-" + side + "-style",
    initialValue: 'solid',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, style) {
        switch (style) {
            case 'none':
                return 0 /* NONE */;
            case 'dashed':
                return 2 /* DASHED */;
            case 'dotted':
                return 3 /* DOTTED */;
            case 'double':
                return 4 /* DOUBLE */;
        }
        return 1 /* SOLID */;
    }
}); };
var borderTopStyle = borderStyleForSide('top');
var borderRightStyle = borderStyleForSide('right');
var borderBottomStyle = borderStyleForSide('bottom');
var borderLeftStyle = borderStyleForSide('left');

var borderWidthForSide = function (side) { return ({
    name: "border-" + side + "-width",
    initialValue: '0',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function (_context, token) {
        if (isDimensionToken(token)) {
            return token.number;
        }
        return 0;
    }
}); };
var borderTopWidth = borderWidthForSide('top');
var borderRightWidth = borderWidthForSide('right');
var borderBottomWidth = borderWidthForSide('bottom');
var borderLeftWidth = borderWidthForSide('left');

var color = {
    name: "color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
};

var direction = {
    name: 'direction',
    initialValue: 'ltr',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, direction) {
        switch (direction) {
            case 'rtl':
                return 1 /* RTL */;
            case 'ltr':
            default:
                return 0 /* LTR */;
        }
    }
};

var display = {
    name: 'display',
    initialValue: 'inline-block',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return tokens.filter(isIdentToken).reduce(function (bit, token) {
            return bit | parseDisplayValue(token.value);
        }, 0 /* NONE */);
    }
};
var parseDisplayValue = function (display) {
    switch (display) {
        case 'block':
        case '-webkit-box':
            return 2 /* BLOCK */;
        case 'inline':
            return 4 /* INLINE */;
        case 'run-in':
            return 8 /* RUN_IN */;
        case 'flow':
            return 16 /* FLOW */;
        case 'flow-root':
            return 32 /* FLOW_ROOT */;
        case 'table':
            return 64 /* TABLE */;
        case 'flex':
        case '-webkit-flex':
            return 128 /* FLEX */;
        case 'grid':
        case '-ms-grid':
            return 256 /* GRID */;
        case 'ruby':
            return 512 /* RUBY */;
        case 'subgrid':
            return 1024 /* SUBGRID */;
        case 'list-item':
            return 2048 /* LIST_ITEM */;
        case 'table-row-group':
            return 4096 /* TABLE_ROW_GROUP */;
        case 'table-header-group':
            return 8192 /* TABLE_HEADER_GROUP */;
        case 'table-footer-group':
            return 16384 /* TABLE_FOOTER_GROUP */;
        case 'table-row':
            return 32768 /* TABLE_ROW */;
        case 'table-cell':
            return 65536 /* TABLE_CELL */;
        case 'table-column-group':
            return 131072 /* TABLE_COLUMN_GROUP */;
        case 'table-column':
            return 262144 /* TABLE_COLUMN */;
        case 'table-caption':
            return 524288 /* TABLE_CAPTION */;
        case 'ruby-base':
            return 1048576 /* RUBY_BASE */;
        case 'ruby-text':
            return 2097152 /* RUBY_TEXT */;
        case 'ruby-base-container':
            return 4194304 /* RUBY_BASE_CONTAINER */;
        case 'ruby-text-container':
            return 8388608 /* RUBY_TEXT_CONTAINER */;
        case 'contents':
            return 16777216 /* CONTENTS */;
        case 'inline-block':
            return 33554432 /* INLINE_BLOCK */;
        case 'inline-list-item':
            return 67108864 /* INLINE_LIST_ITEM */;
        case 'inline-table':
            return 134217728 /* INLINE_TABLE */;
        case 'inline-flex':
            return 268435456 /* INLINE_FLEX */;
        case 'inline-grid':
            return 536870912 /* INLINE_GRID */;
    }
    return 0 /* NONE */;
};

var float = {
    name: 'float',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, float) {
        switch (float) {
            case 'left':
                return 1 /* LEFT */;
            case 'right':
                return 2 /* RIGHT */;
            case 'inline-start':
                return 3 /* INLINE_START */;
            case 'inline-end':
                return 4 /* INLINE_END */;
        }
        return 0 /* NONE */;
    }
};

var letterSpacing = {
    name: 'letter-spacing',
    initialValue: '0',
    prefix: false,
    type: 0 /* VALUE */,
    parse: function (_context, token) {
        if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
            return 0;
        }
        if (token.type === 17 /* NUMBER_TOKEN */) {
            return token.number;
        }
        if (token.type === 15 /* DIMENSION_TOKEN */) {
            return token.number;
        }
        return 0;
    }
};

var LINE_BREAK;
(function (LINE_BREAK) {
    LINE_BREAK["NORMAL"] = "normal";
    LINE_BREAK["STRICT"] = "strict";
})(LINE_BREAK || (LINE_BREAK = {}));
var lineBreak = {
    name: 'line-break',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, lineBreak) {
        switch (lineBreak) {
            case 'strict':
                return LINE_BREAK.STRICT;
            case 'normal':
            default:
                return LINE_BREAK.NORMAL;
        }
    }
};

var lineHeight = {
    name: 'line-height',
    initialValue: 'normal',
    prefix: false,
    type: 4 /* TOKEN_VALUE */
};
var computeLineHeight = function (token, fontSize) {
    if (isIdentToken(token) && token.value === 'normal') {
        return 1.2 * fontSize;
    }
    else if (token.type === 17 /* NUMBER_TOKEN */) {
        return fontSize * token.number;
    }
    else if (isLengthPercentage(token)) {
        return getAbsoluteValue(token, fontSize);
    }
    return fontSize;
};

var listStyleImage = {
    name: 'list-style-image',
    initialValue: 'none',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function (context, token) {
        if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
            return null;
        }
        return image.parse(context, token);
    }
};

var listStylePosition = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, position) {
        switch (position) {
            case 'inside':
                return 0 /* INSIDE */;
            case 'outside':
            default:
                return 1 /* OUTSIDE */;
        }
    }
};

var listStyleType = {
    name: 'list-style-type',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, type) {
        switch (type) {
            case 'disc':
                return 0 /* DISC */;
            case 'circle':
                return 1 /* CIRCLE */;
            case 'square':
                return 2 /* SQUARE */;
            case 'decimal':
                return 3 /* DECIMAL */;
            case 'cjk-decimal':
                return 4 /* CJK_DECIMAL */;
            case 'decimal-leading-zero':
                return 5 /* DECIMAL_LEADING_ZERO */;
            case 'lower-roman':
                return 6 /* LOWER_ROMAN */;
            case 'upper-roman':
                return 7 /* UPPER_ROMAN */;
            case 'lower-greek':
                return 8 /* LOWER_GREEK */;
            case 'lower-alpha':
                return 9 /* LOWER_ALPHA */;
            case 'upper-alpha':
                return 10 /* UPPER_ALPHA */;
            case 'arabic-indic':
                return 11 /* ARABIC_INDIC */;
            case 'armenian':
                return 12 /* ARMENIAN */;
            case 'bengali':
                return 13 /* BENGALI */;
            case 'cambodian':
                return 14 /* CAMBODIAN */;
            case 'cjk-earthly-branch':
                return 15 /* CJK_EARTHLY_BRANCH */;
            case 'cjk-heavenly-stem':
                return 16 /* CJK_HEAVENLY_STEM */;
            case 'cjk-ideographic':
                return 17 /* CJK_IDEOGRAPHIC */;
            case 'devanagari':
                return 18 /* DEVANAGARI */;
            case 'ethiopic-numeric':
                return 19 /* ETHIOPIC_NUMERIC */;
            case 'georgian':
                return 20 /* GEORGIAN */;
            case 'gujarati':
                return 21 /* GUJARATI */;
            case 'gurmukhi':
                return 22 /* GURMUKHI */;
            case 'hebrew':
                return 22 /* HEBREW */;
            case 'hiragana':
                return 23 /* HIRAGANA */;
            case 'hiragana-iroha':
                return 24 /* HIRAGANA_IROHA */;
            case 'japanese-formal':
                return 25 /* JAPANESE_FORMAL */;
            case 'japanese-informal':
                return 26 /* JAPANESE_INFORMAL */;
            case 'kannada':
                return 27 /* KANNADA */;
            case 'katakana':
                return 28 /* KATAKANA */;
            case 'katakana-iroha':
                return 29 /* KATAKANA_IROHA */;
            case 'khmer':
                return 30 /* KHMER */;
            case 'korean-hangul-formal':
                return 31 /* KOREAN_HANGUL_FORMAL */;
            case 'korean-hanja-formal':
                return 32 /* KOREAN_HANJA_FORMAL */;
            case 'korean-hanja-informal':
                return 33 /* KOREAN_HANJA_INFORMAL */;
            case 'lao':
                return 34 /* LAO */;
            case 'lower-armenian':
                return 35 /* LOWER_ARMENIAN */;
            case 'malayalam':
                return 36 /* MALAYALAM */;
            case 'mongolian':
                return 37 /* MONGOLIAN */;
            case 'myanmar':
                return 38 /* MYANMAR */;
            case 'oriya':
                return 39 /* ORIYA */;
            case 'persian':
                return 40 /* PERSIAN */;
            case 'simp-chinese-formal':
                return 41 /* SIMP_CHINESE_FORMAL */;
            case 'simp-chinese-informal':
                return 42 /* SIMP_CHINESE_INFORMAL */;
            case 'tamil':
                return 43 /* TAMIL */;
            case 'telugu':
                return 44 /* TELUGU */;
            case 'thai':
                return 45 /* THAI */;
            case 'tibetan':
                return 46 /* TIBETAN */;
            case 'trad-chinese-formal':
                return 47 /* TRAD_CHINESE_FORMAL */;
            case 'trad-chinese-informal':
                return 48 /* TRAD_CHINESE_INFORMAL */;
            case 'upper-armenian':
                return 49 /* UPPER_ARMENIAN */;
            case 'disclosure-open':
                return 50 /* DISCLOSURE_OPEN */;
            case 'disclosure-closed':
                return 51 /* DISCLOSURE_CLOSED */;
            case 'none':
            default:
                return -1 /* NONE */;
        }
    }
};

var marginForSide = function (side) { return ({
    name: "margin-" + side,
    initialValue: '0',
    prefix: false,
    type: 4 /* TOKEN_VALUE */
}); };
var marginTop = marginForSide('top');
var marginRight = marginForSide('right');
var marginBottom = marginForSide('bottom');
var marginLeft = marginForSide('left');

var overflow = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return tokens.filter(isIdentToken).map(function (overflow) {
            switch (overflow.value) {
                case 'hidden':
                    return 1 /* HIDDEN */;
                case 'scroll':
                    return 2 /* SCROLL */;
                case 'clip':
                    return 3 /* CLIP */;
                case 'auto':
                    return 4 /* AUTO */;
                case 'visible':
                default:
                    return 0 /* VISIBLE */;
            }
        });
    }
};

var overflowWrap = {
    name: 'overflow-wrap',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, overflow) {
        switch (overflow) {
            case 'break-word':
                return "break-word" /* BREAK_WORD */;
            case 'normal':
            default:
                return "normal" /* NORMAL */;
        }
    }
};

var paddingForSide = function (side) { return ({
    name: "padding-" + side,
    initialValue: '0',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'length-percentage'
}); };
var paddingTop = paddingForSide('top');
var paddingRight = paddingForSide('right');
var paddingBottom = paddingForSide('bottom');
var paddingLeft = paddingForSide('left');

var textAlign = {
    name: 'text-align',
    initialValue: 'left',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, textAlign) {
        switch (textAlign) {
            case 'right':
                return 2 /* RIGHT */;
            case 'center':
            case 'justify':
                return 1 /* CENTER */;
            case 'left':
            default:
                return 0 /* LEFT */;
        }
    }
};

var position = {
    name: 'position',
    initialValue: 'static',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, position) {
        switch (position) {
            case 'relative':
                return 1 /* RELATIVE */;
            case 'absolute':
                return 2 /* ABSOLUTE */;
            case 'fixed':
                return 3 /* FIXED */;
            case 'sticky':
                return 4 /* STICKY */;
        }
        return 0 /* STATIC */;
    }
};

var textShadow = {
    name: 'text-shadow',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (context, tokens) {
        if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
            return [];
        }
        return parseFunctionArgs(tokens).map(function (values) {
            var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
            };
            var c = 0;
            for (var i = 0; i < values.length; i++) {
                var token = values[i];
                if (isLength(token)) {
                    if (c === 0) {
                        shadow.offsetX = token;
                    }
                    else if (c === 1) {
                        shadow.offsetY = token;
                    }
                    else {
                        shadow.blur = token;
                    }
                    c++;
                }
                else {
                    shadow.color = color$1.parse(context, token);
                }
            }
            return shadow;
        });
    }
};

var textTransform = {
    name: 'text-transform',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, textTransform) {
        switch (textTransform) {
            case 'uppercase':
                return 2 /* UPPERCASE */;
            case 'lowercase':
                return 1 /* LOWERCASE */;
            case 'capitalize':
                return 3 /* CAPITALIZE */;
        }
        return 0 /* NONE */;
    }
};

var transform$1 = {
    name: 'transform',
    initialValue: 'none',
    prefix: true,
    type: 0 /* VALUE */,
    parse: function (_context, token) {
        if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
            return null;
        }
        if (token.type === 18 /* FUNCTION */) {
            var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
            if (typeof transformFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
            }
            return transformFunction(token.values);
        }
        return null;
    }
};
var matrix = function (args) {
    var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
    return values.length === 6 ? values : null;
};
// doesn't support 3D transforms at the moment
var matrix3d = function (args) {
    var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
    var a1 = values[0], b1 = values[1]; values[2]; values[3]; var a2 = values[4], b2 = values[5]; values[6]; values[7]; values[8]; values[9]; values[10]; values[11]; var a4 = values[12], b4 = values[13]; values[14]; values[15];
    return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
};
var SUPPORTED_TRANSFORM_FUNCTIONS = {
    matrix: matrix,
    matrix3d: matrix3d
};

var DEFAULT_VALUE = {
    type: 16 /* PERCENTAGE_TOKEN */,
    number: 50,
    flags: FLAG_INTEGER
};
var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
var transformOrigin = {
    name: 'transform-origin',
    initialValue: '50% 50%',
    prefix: true,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        var origins = tokens.filter(isLengthPercentage);
        if (origins.length !== 2) {
            return DEFAULT;
        }
        return [origins[0], origins[1]];
    }
};

var visibility = {
    name: 'visible',
    initialValue: 'none',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, visibility) {
        switch (visibility) {
            case 'hidden':
                return 1 /* HIDDEN */;
            case 'collapse':
                return 2 /* COLLAPSE */;
            case 'visible':
            default:
                return 0 /* VISIBLE */;
        }
    }
};

var WORD_BREAK;
(function (WORD_BREAK) {
    WORD_BREAK["NORMAL"] = "normal";
    WORD_BREAK["BREAK_ALL"] = "break-all";
    WORD_BREAK["KEEP_ALL"] = "keep-all";
})(WORD_BREAK || (WORD_BREAK = {}));
var wordBreak = {
    name: 'word-break',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, wordBreak) {
        switch (wordBreak) {
            case 'break-all':
                return WORD_BREAK.BREAK_ALL;
            case 'keep-all':
                return WORD_BREAK.KEEP_ALL;
            case 'normal':
            default:
                return WORD_BREAK.NORMAL;
        }
    }
};

var zIndex = {
    name: 'z-index',
    initialValue: 'auto',
    prefix: false,
    type: 0 /* VALUE */,
    parse: function (_context, token) {
        if (token.type === 20 /* IDENT_TOKEN */) {
            return { auto: true, order: 0 };
        }
        if (isNumberToken(token)) {
            return { auto: false, order: token.number };
        }
        throw new Error("Invalid z-index number parsed");
    }
};

var time = {
    name: 'time',
    parse: function (_context, value) {
        if (value.type === 15 /* DIMENSION_TOKEN */) {
            switch (value.unit.toLowerCase()) {
                case 's':
                    return 1000 * value.number;
                case 'ms':
                    return value.number;
            }
        }
        throw new Error("Unsupported time type");
    }
};

var opacity = {
    name: 'opacity',
    initialValue: '1',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function (_context, token) {
        if (isNumberToken(token)) {
            return token.number;
        }
        return 1;
    }
};

var textDecorationColor = {
    name: "text-decoration-color",
    initialValue: 'transparent',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
};

var textDecorationLine = {
    name: 'text-decoration-line',
    initialValue: 'none',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        return tokens
            .filter(isIdentToken)
            .map(function (token) {
            switch (token.value) {
                case 'underline':
                    return 1 /* UNDERLINE */;
                case 'overline':
                    return 2 /* OVERLINE */;
                case 'line-through':
                    return 3 /* LINE_THROUGH */;
                case 'none':
                    return 4 /* BLINK */;
            }
            return 0 /* NONE */;
        })
            .filter(function (line) { return line !== 0 /* NONE */; });
    }
};

var fontFamily = {
    name: "font-family",
    initialValue: '',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        var accumulator = [];
        var results = [];
        tokens.forEach(function (token) {
            switch (token.type) {
                case 20 /* IDENT_TOKEN */:
                case 0 /* STRING_TOKEN */:
                    accumulator.push(token.value);
                    break;
                case 17 /* NUMBER_TOKEN */:
                    accumulator.push(token.number.toString());
                    break;
                case 4 /* COMMA_TOKEN */:
                    results.push(accumulator.join(' '));
                    accumulator.length = 0;
                    break;
            }
        });
        if (accumulator.length) {
            results.push(accumulator.join(' '));
        }
        return results.map(function (result) { return (result.indexOf(' ') === -1 ? result : "'" + result + "'"); });
    }
};

var fontSize = {
    name: "font-size",
    initialValue: '0',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'length'
};

var fontWeight = {
    name: 'font-weight',
    initialValue: 'normal',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function (_context, token) {
        if (isNumberToken(token)) {
            return token.number;
        }
        if (isIdentToken(token)) {
            switch (token.value) {
                case 'bold':
                    return 700;
                case 'normal':
                default:
                    return 400;
            }
        }
        return 400;
    }
};

var fontVariant = {
    name: 'font-variant',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (_context, tokens) {
        return tokens.filter(isIdentToken).map(function (token) { return token.value; });
    }
};

var fontStyle = {
    name: 'font-style',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* IDENT_VALUE */,
    parse: function (_context, overflow) {
        switch (overflow) {
            case 'oblique':
                return "oblique" /* OBLIQUE */;
            case 'italic':
                return "italic" /* ITALIC */;
            case 'normal':
            default:
                return "normal" /* NORMAL */;
        }
    }
};

var contains = function (bit, value) { return (bit & value) !== 0; };

var content = {
    name: 'content',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (_context, tokens) {
        if (tokens.length === 0) {
            return [];
        }
        var first = tokens[0];
        if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
            return [];
        }
        return tokens;
    }
};

var counterIncrement = {
    name: 'counter-increment',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        if (tokens.length === 0) {
            return null;
        }
        var first = tokens[0];
        if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
            return null;
        }
        var increments = [];
        var filtered = tokens.filter(nonWhiteSpace);
        for (var i = 0; i < filtered.length; i++) {
            var counter = filtered[i];
            var next = filtered[i + 1];
            if (counter.type === 20 /* IDENT_TOKEN */) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({ counter: counter.value, increment: increment });
            }
        }
        return increments;
    }
};

var counterReset = {
    name: 'counter-reset',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        if (tokens.length === 0) {
            return [];
        }
        var resets = [];
        var filtered = tokens.filter(nonWhiteSpace);
        for (var i = 0; i < filtered.length; i++) {
            var counter = filtered[i];
            var next = filtered[i + 1];
            if (isIdentToken(counter) && counter.value !== 'none') {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({ counter: counter.value, reset: reset });
            }
        }
        return resets;
    }
};

var duration = {
    name: 'duration',
    initialValue: '0s',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (context, tokens) {
        return tokens.filter(isDimensionToken).map(function (token) { return time.parse(context, token); });
    }
};

var quotes = {
    name: 'quotes',
    initialValue: 'none',
    prefix: true,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        if (tokens.length === 0) {
            return null;
        }
        var first = tokens[0];
        if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
            return null;
        }
        var quotes = [];
        var filtered = tokens.filter(isStringToken);
        if (filtered.length % 2 !== 0) {
            return null;
        }
        for (var i = 0; i < filtered.length; i += 2) {
            var open_1 = filtered[i].value;
            var close_1 = filtered[i + 1].value;
            quotes.push({ open: open_1, close: close_1 });
        }
        return quotes;
    }
};
var getQuote = function (quotes, depth, open) {
    if (!quotes) {
        return '';
    }
    var quote = quotes[Math.min(depth, quotes.length - 1)];
    if (!quote) {
        return '';
    }
    return open ? quote.open : quote.close;
};

var boxShadow = {
    name: 'box-shadow',
    initialValue: 'none',
    type: 1 /* LIST */,
    prefix: false,
    parse: function (context, tokens) {
        if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
            return [];
        }
        return parseFunctionArgs(tokens).map(function (values) {
            var shadow = {
                color: 0x000000ff,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
            };
            var c = 0;
            for (var i = 0; i < values.length; i++) {
                var token = values[i];
                if (isIdentWithValue(token, 'inset')) {
                    shadow.inset = true;
                }
                else if (isLength(token)) {
                    if (c === 0) {
                        shadow.offsetX = token;
                    }
                    else if (c === 1) {
                        shadow.offsetY = token;
                    }
                    else if (c === 2) {
                        shadow.blur = token;
                    }
                    else {
                        shadow.spread = token;
                    }
                    c++;
                }
                else {
                    shadow.color = color$1.parse(context, token);
                }
            }
            return shadow;
        });
    }
};

var paintOrder = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: false,
    type: 1 /* LIST */,
    parse: function (_context, tokens) {
        var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
        var layers = [];
        tokens.filter(isIdentToken).forEach(function (token) {
            switch (token.value) {
                case 'stroke':
                    layers.push(1 /* STROKE */);
                    break;
                case 'fill':
                    layers.push(0 /* FILL */);
                    break;
                case 'markers':
                    layers.push(2 /* MARKERS */);
                    break;
            }
        });
        DEFAULT_VALUE.forEach(function (value) {
            if (layers.indexOf(value) === -1) {
                layers.push(value);
            }
        });
        return layers;
    }
};

var webkitTextStrokeColor = {
    name: "-webkit-text-stroke-color",
    initialValue: 'currentcolor',
    prefix: false,
    type: 3 /* TYPE_VALUE */,
    format: 'color'
};

var webkitTextStrokeWidth = {
    name: "-webkit-text-stroke-width",
    initialValue: '0',
    type: 0 /* VALUE */,
    prefix: false,
    parse: function (_context, token) {
        if (isDimensionToken(token)) {
            return token.number;
        }
        return 0;
    }
};

var CSSParsedDeclaration = /** @class */ (function () {
    function CSSParsedDeclaration(context, declaration) {
        var _a, _b;
        this.animationDuration = parse(context, duration, declaration.animationDuration);
        this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
        this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
        this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
        this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
        this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
        this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
        this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
        this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
        this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
        this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
        this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
        this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
        this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
        this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
        this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
        this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
        this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
        this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
        this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
        this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
        this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
        this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
        this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
        this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
        this.color = parse(context, color, declaration.color);
        this.direction = parse(context, direction, declaration.direction);
        this.display = parse(context, display, declaration.display);
        this.float = parse(context, float, declaration.cssFloat);
        this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
        this.fontSize = parse(context, fontSize, declaration.fontSize);
        this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
        this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
        this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
        this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
        this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
        this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
        this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
        this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
        this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
        this.marginTop = parse(context, marginTop, declaration.marginTop);
        this.marginRight = parse(context, marginRight, declaration.marginRight);
        this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
        this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
        this.opacity = parse(context, opacity, declaration.opacity);
        var overflowTuple = parse(context, overflow, declaration.overflow);
        this.overflowX = overflowTuple[0];
        this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
        this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
        this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
        this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
        this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
        this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
        this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
        this.position = parse(context, position, declaration.position);
        this.textAlign = parse(context, textAlign, declaration.textAlign);
        this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
        this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
        this.textShadow = parse(context, textShadow, declaration.textShadow);
        this.textTransform = parse(context, textTransform, declaration.textTransform);
        this.transform = parse(context, transform$1, declaration.transform);
        this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
        this.visibility = parse(context, visibility, declaration.visibility);
        this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
        this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
        this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
        this.zIndex = parse(context, zIndex, declaration.zIndex);
    }
    CSSParsedDeclaration.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
    };
    CSSParsedDeclaration.prototype.isTransparent = function () {
        return isTransparent(this.backgroundColor);
    };
    CSSParsedDeclaration.prototype.isTransformed = function () {
        return this.transform !== null;
    };
    CSSParsedDeclaration.prototype.isPositioned = function () {
        return this.position !== 0 /* STATIC */;
    };
    CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
    };
    CSSParsedDeclaration.prototype.isFloating = function () {
        return this.float !== 0 /* NONE */;
    };
    CSSParsedDeclaration.prototype.isInlineLevel = function () {
        return (contains(this.display, 4 /* INLINE */) ||
            contains(this.display, 33554432 /* INLINE_BLOCK */) ||
            contains(this.display, 268435456 /* INLINE_FLEX */) ||
            contains(this.display, 536870912 /* INLINE_GRID */) ||
            contains(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
            contains(this.display, 134217728 /* INLINE_TABLE */));
    };
    return CSSParsedDeclaration;
}());
var CSSParsedPseudoDeclaration = /** @class */ (function () {
    function CSSParsedPseudoDeclaration(context, declaration) {
        this.content = parse(context, content, declaration.content);
        this.quotes = parse(context, quotes, declaration.quotes);
    }
    return CSSParsedPseudoDeclaration;
}());
var CSSParsedCounterDeclaration = /** @class */ (function () {
    function CSSParsedCounterDeclaration(context, declaration) {
        this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
        this.counterReset = parse(context, counterReset, declaration.counterReset);
    }
    return CSSParsedCounterDeclaration;
}());
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var parse = function (context, descriptor, style) {
    var tokenizer = new Tokenizer();
    var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
    tokenizer.write(value);
    var parser = new Parser(tokenizer.read());
    switch (descriptor.type) {
        case 2 /* IDENT_VALUE */:
            var token = parser.parseComponentValue();
            return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
        case 0 /* VALUE */:
            return descriptor.parse(context, parser.parseComponentValue());
        case 1 /* LIST */:
            return descriptor.parse(context, parser.parseComponentValues());
        case 4 /* TOKEN_VALUE */:
            return parser.parseComponentValue();
        case 3 /* TYPE_VALUE */:
            switch (descriptor.format) {
                case 'angle':
                    return angle.parse(context, parser.parseComponentValue());
                case 'color':
                    return color$1.parse(context, parser.parseComponentValue());
                case 'image':
                    return image.parse(context, parser.parseComponentValue());
                case 'length':
                    var length_1 = parser.parseComponentValue();
                    return isLength(length_1) ? length_1 : ZERO_LENGTH;
                case 'length-percentage':
                    var value_1 = parser.parseComponentValue();
                    return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                case 'time':
                    return time.parse(context, parser.parseComponentValue());
            }
            break;
    }
};

var elementDebuggerAttribute = 'data-html2canvas-debug';
var getElementDebugType = function (element) {
    var attribute = element.getAttribute(elementDebuggerAttribute);
    switch (attribute) {
        case 'all':
            return 1 /* ALL */;
        case 'clone':
            return 2 /* CLONE */;
        case 'parse':
            return 3 /* PARSE */;
        case 'render':
            return 4 /* RENDER */;
        default:
            return 0 /* NONE */;
    }
};
var isDebugging = function (element, type) {
    var elementType = getElementDebugType(element);
    return elementType === 1 /* ALL */ || type === elementType;
};

var ElementContainer = /** @class */ (function () {
    function ElementContainer(context, element) {
        this.context = context;
        this.textNodes = [];
        this.elements = [];
        this.flags = 0;
        if (isDebugging(element, 3 /* PARSE */)) {
            debugger;
        }
        this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
        if (isHTMLElementNode(element)) {
            if (this.styles.animationDuration.some(function (duration) { return duration > 0; })) {
                element.style.animationDuration = '0s';
            }
            if (this.styles.transform !== null) {
                // getBoundingClientRect takes transforms into account
                element.style.transform = 'none';
            }
        }
        this.bounds = parseBounds(this.context, element);
        if (isDebugging(element, 4 /* RENDER */)) {
            this.flags |= 16 /* DEBUG_RENDER */;
        }
    }
    return ElementContainer;
}());

/*
 * text-segmentation 1.0.2 <https://github.com/niklasvh/text-segmentation>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

/*
 * utrie 1.0.1 <https://github.com/niklasvh/utrie>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
    lookup$1[chars$1.charCodeAt(i$1)] = i$1;
}
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8Array !== 'undefined' &&
        typeof Uint8Array.prototype.slice !== 'undefined'
        ? new ArrayBuffer(bufferLength)
        : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return buffer;
};
var polyUint16Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
        bytes.push((buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};
var polyUint32Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
        bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = 5;
/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = 6 + 5;
/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = 2;
/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function (base64, _byteLength) {
    var buffer = decode(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2
        ? slice16(view16, (headerLength + view32[4]) / 2)
        : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = /** @class */ (function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
        var ix;
        if (codePoint >= 0) {
            if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                ix = this.index[ix];
                ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
            }
        }
        // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
        return this.errorValue;
    };
    return Trie;
}());

/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var Prepend = 1;
var CR = 2;
var LF = 3;
var Control = 4;
var Extend = 5;
var SpacingMark = 7;
var L = 8;
var V = 9;
var T = 10;
var LV = 11;
var LVT = 12;
var ZWJ = 13;
var Extended_Pictographic = 14;
var RI = 15;
var toCodePoints = function (str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            }
            else {
                codePoints.push(value);
                i--;
            }
        }
        else {
            codePoints.push(value);
        }
    }
    return codePoints;
};
var fromCodePoint = function () {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
        return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = codePoints[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        }
        else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};
var UnicodeTrie = createTrieFromBase64(base64);
var BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = '÷';
var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
    var prevIndex = index - 2;
    var prev = classTypes[prevIndex];
    var current = classTypes[index - 1];
    var next = classTypes[index];
    // GB3 Do not break between a CR and LF
    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }
    // GB4 Otherwise, break before and after controls.
    if (current === CR || current === LF || current === Control) {
        return BREAK_ALLOWED;
    }
    // GB5
    if (next === CR || next === LF || next === Control) {
        return BREAK_ALLOWED;
    }
    // Do not break Hangul syllable sequences.
    // GB6
    if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // GB7
    if ((current === LV || current === V) && (next === V || next === T)) {
        return BREAK_NOT_ALLOWED;
    }
    // GB8
    if ((current === LVT || current === T) && next === T) {
        return BREAK_NOT_ALLOWED;
    }
    // GB9 Do not break before extending characters or ZWJ.
    if (next === ZWJ || next === Extend) {
        return BREAK_NOT_ALLOWED;
    }
    // Do not break before SpacingMarks, or after Prepend characters.
    // GB9a
    if (next === SpacingMark) {
        return BREAK_NOT_ALLOWED;
    }
    // GB9a
    if (current === Prepend) {
        return BREAK_NOT_ALLOWED;
    }
    // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
    if (current === ZWJ && next === Extended_Pictographic) {
        while (prev === Extend) {
            prev = classTypes[--prevIndex];
        }
        if (prev === Extended_Pictographic) {
            return BREAK_NOT_ALLOWED;
        }
    }
    // GB12 Do not break within emoji flag sequences.
    // That is, do not break between regional indicator (RI) symbols
    // if there is an odd number of RI characters before the break point.
    if (current === RI && next === RI) {
        var countRI = 0;
        while (prev === RI) {
            countRI++;
            prev = classTypes[--prevIndex];
        }
        if (countRI % 2 === 0) {
            return BREAK_NOT_ALLOWED;
        }
    }
    return BREAK_ALLOWED;
};
var GraphemeBreaker = function (str) {
    var codePoints = toCodePoints(str);
    var length = codePoints.length;
    var index = 0;
    var lastEnd = 0;
    var classTypes = codePoints.map(codePointToClass);
    return {
        next: function () {
            if (index >= length) {
                return { done: true, value: null };
            }
            var graphemeBreak = BREAK_NOT_ALLOWED;
            while (index < length &&
                (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
            if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return { value: value, done: false };
            }
            return { done: true, value: null };
        },
    };
};
var splitGraphemes = function (str) {
    var breaker = GraphemeBreaker(str);
    var graphemes = [];
    var bk;
    while (!(bk = breaker.next()).done) {
        if (bk.value) {
            graphemes.push(bk.value.slice());
        }
    }
    return graphemes;
};

var testRangeBounds = function (document) {
    var TEST_HEIGHT = 123;
    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + "px";
            testElement.style.display = 'block';
            document.body.appendChild(testElement);
            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }
    return false;
};
var testIOSLineBreak = function (document) {
    var testElement = document.createElement('boundtest');
    testElement.style.width = '50px';
    testElement.style.display = 'block';
    testElement.style.fontSize = '12px';
    testElement.style.letterSpacing = '0px';
    testElement.style.wordSpacing = '0px';
    document.body.appendChild(testElement);
    var range = document.createRange();
    testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
    var node = testElement.firstChild;
    var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
    var offset = 0;
    var prev = {};
    // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
    var supports = textList.every(function (text, i) {
        range.setStart(node, offset);
        range.setEnd(node, offset + text.length);
        var rect = range.getBoundingClientRect();
        offset += text.length;
        var boundAhead = rect.x > prev.x || rect.y > prev.y;
        prev = rect;
        if (i === 0) {
            return true;
        }
        return boundAhead;
    });
    document.body.removeChild(testElement);
    return supports;
};
var testCORS = function () { return typeof new Image().crossOrigin !== 'undefined'; };
var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'string'; };
var testSVG = function (document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        return false;
    }
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    }
    catch (e) {
        return false;
    }
    return true;
};
var isGreenPixel = function (data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};
var testForeignObject = function (document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        return Promise.reject(false);
    }
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);
    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = createForeignObjectSVG(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);
    return loadSerializedSVG$1(svg)
        .then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);
        var node = document.createElement('div');
        node.style.backgroundImage = "url(" + greenImageSrc + ")";
        node.style.height = size + "px";
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data)
            ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node))
            : Promise.reject(false);
    })
        .then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    })
        .catch(function () { return false; });
};
var createForeignObjectSVG = function (width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width.toString());
    svg.setAttributeNS(null, 'height', height.toString());
    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x.toString());
    foreignObject.setAttributeNS(null, 'y', y.toString());
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svg;
};
var loadSerializedSVG$1 = function (svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () { return resolve(img); };
        img.onerror = reject;
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};
var FEATURES = {
    get SUPPORT_RANGE_BOUNDS() {
        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    get SUPPORT_WORD_BREAKING() {
        var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
        Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', { value: value });
        return value;
    },
    get SUPPORT_SVG_DRAWING() {
        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var value = typeof Array.from === 'function' && typeof window.fetch === 'function'
            ? testForeignObject(document)
            : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    get SUPPORT_CORS_IMAGES() {
        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    get SUPPORT_RESPONSE_TYPE() {
        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    get SUPPORT_CORS_XHR() {
        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
        Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { value: value });
        return value;
    }
};

var TextBounds = /** @class */ (function () {
    function TextBounds(text, bounds) {
        this.text = text;
        this.bounds = bounds;
    }
    return TextBounds;
}());
var parseTextBounds = function (context, value, styles, node) {
    var textList = breakText(value, styles);
    var textBounds = [];
    var offset = 0;
    textList.forEach(function (text) {
        if (styles.textDecorationLine.length || text.trim().length > 0) {
            if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                var clientRects = createRange(node, offset, text.length).getClientRects();
                if (clientRects.length > 1) {
                    var subSegments = segmentGraphemes(text);
                    var subOffset_1 = 0;
                    subSegments.forEach(function (subSegment) {
                        textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                        subOffset_1 += subSegment.length;
                    });
                }
                else {
                    textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                }
            }
            else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
            }
        }
        else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    });
    return textBounds;
};
var getWrapperBounds = function (context, node) {
    var ownerDocument = node.ownerDocument;
    if (ownerDocument) {
        var wrapper = ownerDocument.createElement('html2canvaswrapper');
        wrapper.appendChild(node.cloneNode(true));
        var parentNode = node.parentNode;
        if (parentNode) {
            parentNode.replaceChild(wrapper, node);
            var bounds = parseBounds(context, wrapper);
            if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
            }
            return bounds;
        }
    }
    return Bounds.EMPTY;
};
var createRange = function (node, offset, length) {
    var ownerDocument = node.ownerDocument;
    if (!ownerDocument) {
        throw new Error('Node has no owner document');
    }
    var range = ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range;
};
var segmentGraphemes = function (value) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
    }
    return splitGraphemes(value);
};
var segmentWords = function (value, styles) {
    if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var segmenter = new Intl.Segmenter(void 0, {
            granularity: 'word'
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
    }
    return breakWords(value, styles);
};
var breakText = function (value, styles) {
    return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
};
// https://drafts.csswg.org/css-text/#word-separator
var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
var breakWords = function (str, styles) {
    var breaker = LineBreaker(str, {
        lineBreak: styles.lineBreak,
        wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
    });
    var words = [];
    var bk;
    var _loop_1 = function () {
        if (bk.value) {
            var value = bk.value.slice();
            var codePoints = toCodePoints$1(value);
            var word_1 = '';
            codePoints.forEach(function (codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                    word_1 += fromCodePoint$1(codePoint);
                }
                else {
                    if (word_1.length) {
                        words.push(word_1);
                    }
                    words.push(fromCodePoint$1(codePoint));
                    word_1 = '';
                }
            });
            if (word_1.length) {
                words.push(word_1);
            }
        }
    };
    while (!(bk = breaker.next()).done) {
        _loop_1();
    }
    return words;
};

var TextContainer = /** @class */ (function () {
    function TextContainer(context, node, styles) {
        this.text = transform(node.data, styles.textTransform);
        this.textBounds = parseTextBounds(context, this.text, styles, node);
    }
    return TextContainer;
}());
var transform = function (text, transform) {
    switch (transform) {
        case 1 /* LOWERCASE */:
            return text.toLowerCase();
        case 3 /* CAPITALIZE */:
            return text.replace(CAPITALIZE, capitalize);
        case 2 /* UPPERCASE */:
            return text.toUpperCase();
        default:
            return text;
    }
};
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var capitalize = function (m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }
    return m;
};

var ImageElementContainer = /** @class */ (function (_super) {
    __extends(ImageElementContainer, _super);
    function ImageElementContainer(context, img) {
        var _this = _super.call(this, context, img) || this;
        _this.src = img.currentSrc || img.src;
        _this.intrinsicWidth = img.naturalWidth;
        _this.intrinsicHeight = img.naturalHeight;
        _this.context.cache.addImage(_this.src);
        return _this;
    }
    return ImageElementContainer;
}(ElementContainer));

var CanvasElementContainer = /** @class */ (function (_super) {
    __extends(CanvasElementContainer, _super);
    function CanvasElementContainer(context, canvas) {
        var _this = _super.call(this, context, canvas) || this;
        _this.canvas = canvas;
        _this.intrinsicWidth = canvas.width;
        _this.intrinsicHeight = canvas.height;
        return _this;
    }
    return CanvasElementContainer;
}(ElementContainer));

var SVGElementContainer = /** @class */ (function (_super) {
    __extends(SVGElementContainer, _super);
    function SVGElementContainer(context, img) {
        var _this = _super.call(this, context, img) || this;
        var s = new XMLSerializer();
        var bounds = parseBounds(context, img);
        img.setAttribute('width', bounds.width + "px");
        img.setAttribute('height', bounds.height + "px");
        _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
        _this.intrinsicWidth = img.width.baseVal.value;
        _this.intrinsicHeight = img.height.baseVal.value;
        _this.context.cache.addImage(_this.svg);
        return _this;
    }
    return SVGElementContainer;
}(ElementContainer));

var LIElementContainer = /** @class */ (function (_super) {
    __extends(LIElementContainer, _super);
    function LIElementContainer(context, element) {
        var _this = _super.call(this, context, element) || this;
        _this.value = element.value;
        return _this;
    }
    return LIElementContainer;
}(ElementContainer));

var OLElementContainer = /** @class */ (function (_super) {
    __extends(OLElementContainer, _super);
    function OLElementContainer(context, element) {
        var _this = _super.call(this, context, element) || this;
        _this.start = element.start;
        _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
        return _this;
    }
    return OLElementContainer;
}(ElementContainer));

var CHECKBOX_BORDER_RADIUS = [
    {
        type: 15 /* DIMENSION_TOKEN */,
        flags: 0,
        unit: 'px',
        number: 3
    }
];
var RADIO_BORDER_RADIUS = [
    {
        type: 16 /* PERCENTAGE_TOKEN */,
        flags: 0,
        number: 50
    }
];
var reformatInputBounds = function (bounds) {
    if (bounds.width > bounds.height) {
        return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
    }
    else if (bounds.width < bounds.height) {
        return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
    }
    return bounds;
};
var getInputValue = function (node) {
    var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
    return value.length === 0 ? node.placeholder || '' : value;
};
var CHECKBOX = 'checkbox';
var RADIO = 'radio';
var PASSWORD = 'password';
var INPUT_COLOR = 0x2a2a2aff;
var InputElementContainer = /** @class */ (function (_super) {
    __extends(InputElementContainer, _super);
    function InputElementContainer(context, input) {
        var _this = _super.call(this, context, input) || this;
        _this.type = input.type.toLowerCase();
        _this.checked = input.checked;
        _this.value = getInputValue(input);
        if (_this.type === CHECKBOX || _this.type === RADIO) {
            _this.styles.backgroundColor = 0xdededeff;
            _this.styles.borderTopColor =
                _this.styles.borderRightColor =
                    _this.styles.borderBottomColor =
                        _this.styles.borderLeftColor =
                            0xa5a5a5ff;
            _this.styles.borderTopWidth =
                _this.styles.borderRightWidth =
                    _this.styles.borderBottomWidth =
                        _this.styles.borderLeftWidth =
                            1;
            _this.styles.borderTopStyle =
                _this.styles.borderRightStyle =
                    _this.styles.borderBottomStyle =
                        _this.styles.borderLeftStyle =
                            1 /* SOLID */;
            _this.styles.backgroundClip = [0 /* BORDER_BOX */];
            _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
            _this.bounds = reformatInputBounds(_this.bounds);
        }
        switch (_this.type) {
            case CHECKBOX:
                _this.styles.borderTopRightRadius =
                    _this.styles.borderTopLeftRadius =
                        _this.styles.borderBottomRightRadius =
                            _this.styles.borderBottomLeftRadius =
                                CHECKBOX_BORDER_RADIUS;
                break;
            case RADIO:
                _this.styles.borderTopRightRadius =
                    _this.styles.borderTopLeftRadius =
                        _this.styles.borderBottomRightRadius =
                            _this.styles.borderBottomLeftRadius =
                                RADIO_BORDER_RADIUS;
                break;
        }
        return _this;
    }
    return InputElementContainer;
}(ElementContainer));

var SelectElementContainer = /** @class */ (function (_super) {
    __extends(SelectElementContainer, _super);
    function SelectElementContainer(context, element) {
        var _this = _super.call(this, context, element) || this;
        var option = element.options[element.selectedIndex || 0];
        _this.value = option ? option.text || '' : '';
        return _this;
    }
    return SelectElementContainer;
}(ElementContainer));

var TextareaElementContainer = /** @class */ (function (_super) {
    __extends(TextareaElementContainer, _super);
    function TextareaElementContainer(context, element) {
        var _this = _super.call(this, context, element) || this;
        _this.value = element.value;
        return _this;
    }
    return TextareaElementContainer;
}(ElementContainer));

var IFrameElementContainer = /** @class */ (function (_super) {
    __extends(IFrameElementContainer, _super);
    function IFrameElementContainer(context, iframe) {
        var _this = _super.call(this, context, iframe) || this;
        _this.src = iframe.src;
        _this.width = parseInt(iframe.width, 10) || 0;
        _this.height = parseInt(iframe.height, 10) || 0;
        _this.backgroundColor = _this.styles.backgroundColor;
        try {
            if (iframe.contentWindow &&
                iframe.contentWindow.document &&
                iframe.contentWindow.document.documentElement) {
                _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                // http://www.w3.org/TR/css3-background/#special-backgrounds
                var documentBackgroundColor = iframe.contentWindow.document.documentElement
                    ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
                    : COLORS.TRANSPARENT;
                var bodyBackgroundColor = iframe.contentWindow.document.body
                    ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
                    : COLORS.TRANSPARENT;
                _this.backgroundColor = isTransparent(documentBackgroundColor)
                    ? isTransparent(bodyBackgroundColor)
                        ? _this.styles.backgroundColor
                        : bodyBackgroundColor
                    : documentBackgroundColor;
            }
        }
        catch (e) { }
        return _this;
    }
    return IFrameElementContainer;
}(ElementContainer));

var LIST_OWNERS = ['OL', 'UL', 'MENU'];
var parseNodeTree = function (context, node, parent, root) {
    for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        if (isTextNode(childNode) && childNode.data.trim().length > 0) {
            parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
        }
        else if (isElementNode(childNode)) {
            if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
            }
            else {
                var container = createContainer(context, childNode);
                if (container.styles.isVisible()) {
                    if (createsRealStackingContext(childNode, container, root)) {
                        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
                    }
                    else if (createsStackingContext(container.styles)) {
                        container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
                    }
                    if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                        container.flags |= 8 /* IS_LIST_OWNER */;
                    }
                    parent.elements.push(container);
                    childNode.slot;
                    if (childNode.shadowRoot) {
                        parseNodeTree(context, childNode.shadowRoot, container, root);
                    }
                    else if (!isTextareaElement(childNode) &&
                        !isSVGElement(childNode) &&
                        !isSelectElement(childNode)) {
                        parseNodeTree(context, childNode, container, root);
                    }
                }
            }
        }
    }
};
var createContainer = function (context, element) {
    if (isImageElement(element)) {
        return new ImageElementContainer(context, element);
    }
    if (isCanvasElement(element)) {
        return new CanvasElementContainer(context, element);
    }
    if (isSVGElement(element)) {
        return new SVGElementContainer(context, element);
    }
    if (isLIElement(element)) {
        return new LIElementContainer(context, element);
    }
    if (isOLElement(element)) {
        return new OLElementContainer(context, element);
    }
    if (isInputElement(element)) {
        return new InputElementContainer(context, element);
    }
    if (isSelectElement(element)) {
        return new SelectElementContainer(context, element);
    }
    if (isTextareaElement(element)) {
        return new TextareaElementContainer(context, element);
    }
    if (isIFrameElement(element)) {
        return new IFrameElementContainer(context, element);
    }
    return new ElementContainer(context, element);
};
var parseTree = function (context, element) {
    var container = createContainer(context, element);
    container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
    parseNodeTree(context, element, container, container);
    return container;
};
var createsRealStackingContext = function (node, container, root) {
    return (container.styles.isPositionedWithZIndex() ||
        container.styles.opacity < 1 ||
        container.styles.isTransformed() ||
        (isBodyElement(node) && root.styles.isTransparent()));
};
var createsStackingContext = function (styles) { return styles.isPositioned() || styles.isFloating(); };
var isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
var isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
var isHTMLElementNode = function (node) {
    return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
};
var isSVGElementNode = function (element) {
    return typeof element.className === 'object';
};
var isLIElement = function (node) { return node.tagName === 'LI'; };
var isOLElement = function (node) { return node.tagName === 'OL'; };
var isInputElement = function (node) { return node.tagName === 'INPUT'; };
var isHTMLElement = function (node) { return node.tagName === 'HTML'; };
var isSVGElement = function (node) { return node.tagName === 'svg'; };
var isBodyElement = function (node) { return node.tagName === 'BODY'; };
var isCanvasElement = function (node) { return node.tagName === 'CANVAS'; };
var isImageElement = function (node) { return node.tagName === 'IMG'; };
var isIFrameElement = function (node) { return node.tagName === 'IFRAME'; };
var isStyleElement = function (node) { return node.tagName === 'STYLE'; };
var isScriptElement = function (node) { return node.tagName === 'SCRIPT'; };
var isTextareaElement = function (node) { return node.tagName === 'TEXTAREA'; };
var isSelectElement = function (node) { return node.tagName === 'SELECT'; };
var isSlotElement = function (node) { return node.tagName === 'SLOT'; };
// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
var isCustomElement = function (node) { return node.tagName.indexOf('-') > 0; };

var CounterState = /** @class */ (function () {
    function CounterState() {
        this.counters = {};
    }
    CounterState.prototype.getCounterValue = function (name) {
        var counter = this.counters[name];
        if (counter && counter.length) {
            return counter[counter.length - 1];
        }
        return 1;
    };
    CounterState.prototype.getCounterValues = function (name) {
        var counter = this.counters[name];
        return counter ? counter : [];
    };
    CounterState.prototype.pop = function (counters) {
        var _this = this;
        counters.forEach(function (counter) { return _this.counters[counter].pop(); });
    };
    CounterState.prototype.parse = function (style) {
        var _this = this;
        var counterIncrement = style.counterIncrement;
        var counterReset = style.counterReset;
        var canReset = true;
        if (counterIncrement !== null) {
            counterIncrement.forEach(function (entry) {
                var counter = _this.counters[entry.counter];
                if (counter && entry.increment !== 0) {
                    canReset = false;
                    if (!counter.length) {
                        counter.push(1);
                    }
                    counter[Math.max(0, counter.length - 1)] += entry.increment;
                }
            });
        }
        var counterNames = [];
        if (canReset) {
            counterReset.forEach(function (entry) {
                var counter = _this.counters[entry.counter];
                counterNames.push(entry.counter);
                if (!counter) {
                    counter = _this.counters[entry.counter] = [];
                }
                counter.push(entry.reset);
            });
        }
        return counterNames;
    };
    return CounterState;
}());
var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};
var ARMENIAN = {
    integers: [
        9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
        60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ],
    values: [
        'Ք',
        'Փ',
        'Ւ',
        'Ց',
        'Ր',
        'Տ',
        'Վ',
        'Ս',
        'Ռ',
        'Ջ',
        'Պ',
        'Չ',
        'Ո',
        'Շ',
        'Ն',
        'Յ',
        'Մ',
        'Ճ',
        'Ղ',
        'Ձ',
        'Հ',
        'Կ',
        'Ծ',
        'Խ',
        'Լ',
        'Ի',
        'Ժ',
        'Թ',
        'Ը',
        'Է',
        'Զ',
        'Ե',
        'Դ',
        'Գ',
        'Բ',
        'Ա'
    ]
};
var HEBREW = {
    integers: [
        10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
        19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ],
    values: [
        'י׳',
        'ט׳',
        'ח׳',
        'ז׳',
        'ו׳',
        'ה׳',
        'ד׳',
        'ג׳',
        'ב׳',
        'א׳',
        'ת',
        'ש',
        'ר',
        'ק',
        'צ',
        'פ',
        'ע',
        'ס',
        'נ',
        'מ',
        'ל',
        'כ',
        'יט',
        'יח',
        'יז',
        'טז',
        'טו',
        'י',
        'ט',
        'ח',
        'ז',
        'ו',
        'ה',
        'ד',
        'ג',
        'ב',
        'א'
    ]
};
var GEORGIAN = {
    integers: [
        10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
        80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ],
    values: [
        'ჵ',
        'ჰ',
        'ჯ',
        'ჴ',
        'ხ',
        'ჭ',
        'წ',
        'ძ',
        'ც',
        'ჩ',
        'შ',
        'ყ',
        'ღ',
        'ქ',
        'ფ',
        'ჳ',
        'ტ',
        'ს',
        'რ',
        'ჟ',
        'პ',
        'ო',
        'ჲ',
        'ნ',
        'მ',
        'ლ',
        'კ',
        'ი',
        'თ',
        'ჱ',
        'ზ',
        'ვ',
        'ე',
        'დ',
        'გ',
        'ბ',
        'ა'
    ]
};
var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }
    return (symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix);
};
var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
    var string = '';
    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);
    return string;
};
var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
    return ((value < 0 ? '-' : '') +
        (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
        }) +
            suffix));
};
var createCounterStyleFromSymbols = function (value, symbols, suffix) {
    if (suffix === void 0) { suffix = '. '; }
    var codePointRangeLength = symbols.length;
    return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + suffix);
};
var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;
    if (tmp === 0) {
        return numbers[0] + string;
    }
    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;
        if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        }
        else if (coefficient > 1 ||
            (coefficient === 1 && digit === 0) ||
            (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
            (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
            (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        }
        else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }
    return (value < 0 ? negativeSign : '') + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스';
var createCounterText = function (value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    var spaceSuffix = appendSuffix ? ' ' : '';
    switch (type) {
        case 0 /* DISC */:
            return '•' + spaceSuffix;
        case 1 /* CIRCLE */:
            return '◦' + spaceSuffix;
        case 2 /* SQUARE */:
            return '◾' + spaceSuffix;
        case 5 /* DECIMAL_LEADING_ZERO */:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? "0" + string : string;
        case 4 /* CJK_DECIMAL */:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case 6 /* LOWER_ROMAN */:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
        case 7 /* UPPER_ROMAN */:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
        case 8 /* LOWER_GREEK */:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case 9 /* LOWER_ALPHA */:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case 10 /* UPPER_ALPHA */:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case 11 /* ARABIC_INDIC */:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case 12 /* ARMENIAN */:
        case 49 /* UPPER_ARMENIAN */:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
        case 35 /* LOWER_ARMENIAN */:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
        case 13 /* BENGALI */:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case 14 /* CAMBODIAN */:
        case 30 /* KHMER */:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case 15 /* CJK_EARTHLY_BRANCH */:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case 16 /* CJK_HEAVENLY_STEM */:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case 17 /* CJK_IDEOGRAPHIC */:
        case 48 /* TRAD_CHINESE_INFORMAL */:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 47 /* TRAD_CHINESE_FORMAL */:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 42 /* SIMP_CHINESE_INFORMAL */:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 41 /* SIMP_CHINESE_FORMAL */:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case 26 /* JAPANESE_INFORMAL */:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case 25 /* JAPANESE_FORMAL */:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 31 /* KOREAN_HANGUL_FORMAL */:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 33 /* KOREAN_HANJA_INFORMAL */:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case 32 /* KOREAN_HANJA_FORMAL */:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case 18 /* DEVANAGARI */:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case 20 /* GEORGIAN */:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
        case 21 /* GUJARATI */:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case 22 /* GURMUKHI */:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case 22 /* HEBREW */:
            return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
        case 23 /* HIRAGANA */:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case 24 /* HIRAGANA_IROHA */:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case 27 /* KANNADA */:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case 28 /* KATAKANA */:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case 29 /* KATAKANA_IROHA */:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case 34 /* LAO */:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case 37 /* MONGOLIAN */:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case 38 /* MYANMAR */:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case 39 /* ORIYA */:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case 40 /* PERSIAN */:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case 43 /* TAMIL */:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case 44 /* TELUGU */:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case 45 /* THAI */:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case 46 /* TIBETAN */:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case 3 /* DECIMAL */:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
var DocumentCloner = /** @class */ (function () {
    function DocumentCloner(context, element, options) {
        this.context = context;
        this.options = options;
        this.scrolledElements = [];
        this.referenceElement = element;
        this.counters = new CounterState();
        this.quoteDepth = 0;
        if (!element.ownerDocument) {
            throw new Error('Cloned element does not have an owner document');
        }
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
    }
    DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
        var _this = this;
        var iframe = createIFrameContainer(ownerDocument, windowSize);
        if (!iframe.contentWindow) {
            return Promise.reject("Unable to find iframe window");
        }
        var scrollX = ownerDocument.defaultView.pageXOffset;
        var scrollY = ownerDocument.defaultView.pageYOffset;
        var cloneWindow = iframe.contentWindow;
        var documentClone = cloneWindow.document;
        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
         if window url is about:blank, we can assign the url to current by writing onto the document
         */
        var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, function () {
            var onclone, referenceElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scrolledElements.forEach(restoreNodeScroll);
                        if (cloneWindow) {
                            cloneWindow.scrollTo(windowSize.left, windowSize.top);
                            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                this.context.logger.warn('Unable to restore scroll position for cloned document');
                                this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                            }
                        }
                        onclone = this.options.onclone;
                        referenceElement = this.clonedReferenceElement;
                        if (typeof referenceElement === 'undefined') {
                            return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                        }
                        if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                        return [4 /*yield*/, documentClone.fonts.ready];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                        return [4 /*yield*/, imagesReady(documentClone)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (typeof onclone === 'function') {
                            return [2 /*return*/, Promise.resolve()
                                    .then(function () { return onclone(documentClone, referenceElement); })
                                    .then(function () { return iframe; })];
                        }
                        return [2 /*return*/, iframe];
                }
            });
        }); });
        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
        documentClone.close();
        return iframeLoad;
    };
    DocumentCloner.prototype.createElementClone = function (node) {
        if (isDebugging(node, 2 /* CLONE */)) {
            debugger;
        }
        if (isCanvasElement(node)) {
            return this.createCanvasClone(node);
        }
        if (isStyleElement(node)) {
            return this.createStyleClone(node);
        }
        var clone = node.cloneNode(false);
        if (isImageElement(clone)) {
            if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                clone.src = node.currentSrc;
                clone.srcset = '';
            }
            if (clone.loading === 'lazy') {
                clone.loading = 'eager';
            }
        }
        if (isCustomElement(clone)) {
            return this.createCustomElementClone(clone);
        }
        return clone;
    };
    DocumentCloner.prototype.createCustomElementClone = function (node) {
        var clone = document.createElement('html2canvascustomelement');
        copyCSSStyles(node.style, clone);
        return clone;
    };
    DocumentCloner.prototype.createStyleClone = function (node) {
        try {
            var sheet = node.sheet;
            if (sheet && sheet.cssRules) {
                var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                    if (rule && typeof rule.cssText === 'string') {
                        return css + rule.cssText;
                    }
                    return css;
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }
        }
        catch (e) {
            // accessing node.sheet.cssRules throws a DOMException
            this.context.logger.error('Unable to access cssRules property', e);
            if (e.name !== 'SecurityError') {
                throw e;
            }
        }
        return node.cloneNode(false);
    };
    DocumentCloner.prototype.createCanvasClone = function (canvas) {
        var _a;
        if (this.options.inlineImages && canvas.ownerDocument) {
            var img = canvas.ownerDocument.createElement('img');
            try {
                img.src = canvas.toDataURL();
                return img;
            }
            catch (e) {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
            }
        }
        var clonedCanvas = canvas.cloneNode(false);
        try {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (clonedCtx) {
                if (!this.options.allowTaint && ctx) {
                    clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                }
                else {
                    var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
                    if (gl) {
                        var attribs = gl.getContextAttributes();
                        if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                            this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                        }
                    }
                    clonedCtx.drawImage(canvas, 0, 0);
                }
            }
            return clonedCanvas;
        }
        catch (e) {
            this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
        }
        return clonedCanvas;
    };
    DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
        if (!isElementNode(child) ||
            (!isScriptElement(child) &&
                !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
            if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                clone.appendChild(this.cloneNode(child, copyStyles));
            }
        }
    };
    DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
        var _this = this;
        if (isTextNode(node)) {
            return document.createTextNode(node.data);
        }
        if (!node.ownerDocument) {
            return node.cloneNode(false);
        }
        var window = node.ownerDocument.defaultView;
        if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
            var clone_1 = this.createElementClone(node);
            clone_1.style.transitionProperty = 'none';
            var style = window.getComputedStyle(node);
            var styleBefore = window.getComputedStyle(node, ':before');
            var styleAfter = window.getComputedStyle(node, ':after');
            if (this.referenceElement === node && isHTMLElementNode(clone_1)) {
                this.clonedReferenceElement = clone_1;
            }
            if (isBodyElement(clone_1)) {
                createPseudoHideStyles(clone_1);
            }
            var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var before = this.resolvePseudoContent(node, clone_1, styleBefore, PseudoElementType.BEFORE);
            if (isCustomElement(node)) {
                copyStyles = true;
            }
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
                    var assignedNodes = child.assignedNodes();
                    if (assignedNodes.length) {
                        assignedNodes.forEach(function (assignedNode) { return _this.appendChildNode(clone_1, assignedNode, copyStyles); });
                    }
                }
                else {
                    this.appendChildNode(clone_1, child, copyStyles);
                }
            }
            if (before) {
                clone_1.insertBefore(before, clone_1.firstChild);
            }
            var after = this.resolvePseudoContent(node, clone_1, styleAfter, PseudoElementType.AFTER);
            if (after) {
                clone_1.appendChild(after);
            }
            this.counters.pop(counters);
            if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
                copyStyles) {
                copyCSSStyles(style, clone_1);
            }
            if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                this.scrolledElements.push([clone_1, node.scrollLeft, node.scrollTop]);
            }
            if ((isTextareaElement(node) || isSelectElement(node)) &&
                (isTextareaElement(clone_1) || isSelectElement(clone_1))) {
                clone_1.value = node.value;
            }
            return clone_1;
        }
        return node.cloneNode(false);
    };
    DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
        var _this = this;
        if (!style) {
            return;
        }
        var value = style.content;
        var document = clone.ownerDocument;
        if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
            return;
        }
        this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
        var declaration = new CSSParsedPseudoDeclaration(this.context, style);
        var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
        copyCSSStyles(style, anonymousReplacedElement);
        declaration.content.forEach(function (token) {
            if (token.type === 0 /* STRING_TOKEN */) {
                anonymousReplacedElement.appendChild(document.createTextNode(token.value));
            }
            else if (token.type === 22 /* URL_TOKEN */) {
                var img = document.createElement('img');
                img.src = token.value;
                img.style.opacity = '1';
                anonymousReplacedElement.appendChild(img);
            }
            else if (token.type === 18 /* FUNCTION */) {
                if (token.name === 'attr') {
                    var attr = token.values.filter(isIdentToken);
                    if (attr.length) {
                        anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                    }
                }
                else if (token.name === 'counter') {
                    var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                    if (counter && isIdentToken(counter)) {
                        var counterState = _this.counters.getCounterValue(counter.value);
                        var counterType = counterStyle && isIdentToken(counterStyle)
                            ? listStyleType.parse(_this.context, counterStyle.value)
                            : 3 /* DECIMAL */;
                        anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                    }
                }
                else if (token.name === 'counters') {
                    var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                    if (counter && isIdentToken(counter)) {
                        var counterStates = _this.counters.getCounterValues(counter.value);
                        var counterType_1 = counterStyle && isIdentToken(counterStyle)
                            ? listStyleType.parse(_this.context, counterStyle.value)
                            : 3 /* DECIMAL */;
                        var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
                        var text = counterStates
                            .map(function (value) { return createCounterText(value, counterType_1, false); })
                            .join(separator);
                        anonymousReplacedElement.appendChild(document.createTextNode(text));
                    }
                }
                else ;
            }
            else if (token.type === 20 /* IDENT_TOKEN */) {
                switch (token.value) {
                    case 'open-quote':
                        anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                        break;
                    case 'close-quote':
                        anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                        break;
                    default:
                        // safari doesn't parse string tokens correctly because of lack of quotes
                        anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                }
            }
        });
        anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
        var newClassName = pseudoElt === PseudoElementType.BEFORE
            ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
            : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
        if (isSVGElementNode(clone)) {
            clone.className.baseValue += newClassName;
        }
        else {
            clone.className += newClassName;
        }
        return anonymousReplacedElement;
    };
    DocumentCloner.destroy = function (container) {
        if (container.parentNode) {
            container.parentNode.removeChild(container);
            return true;
        }
        return false;
    };
    return DocumentCloner;
}());
var PseudoElementType;
(function (PseudoElementType) {
    PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
    PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
})(PseudoElementType || (PseudoElementType = {}));
var createIFrameContainer = function (ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');
    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    ownerDocument.body.appendChild(cloneIframeContainer);
    return cloneIframeContainer;
};
var imageReady = function (img) {
    return new Promise(function (resolve) {
        if (img.complete) {
            resolve();
            return;
        }
        if (!img.src) {
            resolve();
            return;
        }
        img.onload = resolve;
        img.onerror = resolve;
    });
};
var imagesReady = function (document) {
    return Promise.all([].slice.call(document.images, 0).map(imageReady));
};
var iframeLoader = function (iframe) {
    return new Promise(function (resolve, reject) {
        var cloneWindow = iframe.contentWindow;
        if (!cloneWindow) {
            return reject("No window assigned for iframe");
        }
        var documentClone = cloneWindow.document;
        cloneWindow.onload = iframe.onload = function () {
            cloneWindow.onload = iframe.onload = null;
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(iframe);
                }
            }, 50);
        };
    });
};
var ignoredStyleProperties = [
    'all',
    'd',
    'content' // Safari shows pseudoelements if content is set
];
var copyCSSStyles = function (style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        if (ignoredStyleProperties.indexOf(property) === -1) {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};
var serializeDoctype = function (doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }
        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }
        if (doctype.publicId) {
            str += "\"" + doctype.publicId + "\"";
        }
        if (doctype.systemId) {
            str += "\"" + doctype.systemId + "\"";
        }
        str += '>';
    }
    return str;
};
var restoreOwnerScroll = function (ownerDocument, x, y) {
    if (ownerDocument &&
        ownerDocument.defaultView &&
        (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};
var restoreNodeScroll = function (_a) {
    var element = _a[0], x = _a[1], y = _a[2];
    element.scrollLeft = x;
    element.scrollTop = y;
};
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
var createPseudoHideStyles = function (body) {
    createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};
var createStyles = function (body, styles) {
    var document = body.ownerDocument;
    if (document) {
        var style = document.createElement('style');
        style.textContent = styles;
        body.appendChild(style);
    }
};

var CacheStorage = /** @class */ (function () {
    function CacheStorage() {
    }
    CacheStorage.getOrigin = function (url) {
        var link = CacheStorage._link;
        if (!link) {
            return 'about:blank';
        }
        link.href = url;
        link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
        return link.protocol + link.hostname + link.port;
    };
    CacheStorage.isSameOrigin = function (src) {
        return CacheStorage.getOrigin(src) === CacheStorage._origin;
    };
    CacheStorage.setContext = function (window) {
        CacheStorage._link = window.document.createElement('a');
        CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
    };
    CacheStorage._origin = 'about:blank';
    return CacheStorage;
}());
var Cache = /** @class */ (function () {
    function Cache(context, _options) {
        this.context = context;
        this._options = _options;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._cache = {};
    }
    Cache.prototype.addImage = function (src) {
        var result = Promise.resolve();
        if (this.has(src)) {
            return result;
        }
        if (isBlobImage(src) || isRenderable(src)) {
            (this._cache[src] = this.loadImage(src)).catch(function () {
                // prevent unhandled rejection
            });
            return result;
        }
        return result;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cache.prototype.match = function (src) {
        return this._cache[src];
    };
    Cache.prototype.loadImage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var isSameOrigin, useCORS, useProxy, src;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isSameOrigin = CacheStorage.isSameOrigin(key);
                        useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                        useProxy = !isInlineImage(key) &&
                            !isSameOrigin &&
                            !isBlobImage(key) &&
                            typeof this._options.proxy === 'string' &&
                            FEATURES.SUPPORT_CORS_XHR &&
                            !useCORS;
                        if (!isSameOrigin &&
                            this._options.allowTaint === false &&
                            !isInlineImage(key) &&
                            !isBlobImage(key) &&
                            !useProxy &&
                            !useCORS) {
                            return [2 /*return*/];
                        }
                        src = key;
                        if (!useProxy) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.proxy(src)];
                    case 1:
                        src = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.context.logger.debug("Added image " + key.substring(0, 256));
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var img = new Image();
                                img.onload = function () { return resolve(img); };
                                img.onerror = reject;
                                //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                if (isInlineBase64Image(src) || useCORS) {
                                    img.crossOrigin = 'anonymous';
                                }
                                img.src = src;
                                if (img.complete === true) {
                                    // Inline XML images may fail to parse, throwing an Error later on
                                    setTimeout(function () { return resolve(img); }, 500);
                                }
                                if (_this._options.imageTimeout > 0) {
                                    setTimeout(function () { return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image"); }, _this._options.imageTimeout);
                                }
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cache.prototype.has = function (key) {
        return typeof this._cache[key] !== 'undefined';
    };
    Cache.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
    };
    Cache.prototype.proxy = function (src) {
        var _this = this;
        var proxy = this._options.proxy;
        if (!proxy) {
            throw new Error('No proxy defined');
        }
        var key = src.substring(0, 256);
        return new Promise(function (resolve, reject) {
            var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    }
                    else {
                        var reader_1 = new FileReader();
                        reader_1.addEventListener('load', function () { return resolve(reader_1.result); }, false);
                        reader_1.addEventListener('error', function (e) { return reject(e); }, false);
                        reader_1.readAsDataURL(xhr.response);
                    }
                }
                else {
                    reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                }
            };
            xhr.onerror = reject;
            var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
            xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
            if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                xhr.responseType = responseType;
            }
            if (_this._options.imageTimeout) {
                var timeout_1 = _this._options.imageTimeout;
                xhr.timeout = timeout_1;
                xhr.ontimeout = function () { return reject("Timed out (" + timeout_1 + "ms) proxying " + key); };
            }
            xhr.send();
        });
    };
    return Cache;
}());
var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;
var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src); };
var isInlineImage = function (src) { return INLINE_IMG.test(src); };
var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src); };

var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.type = 0 /* VECTOR */;
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (deltaX, deltaY) {
        return new Vector(this.x + deltaX, this.y + deltaY);
    };
    return Vector;
}());

var lerp = function (a, b, t) {
    return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};
var BezierCurve = /** @class */ (function () {
    function BezierCurve(start, startControl, endControl, end) {
        this.type = 1 /* BEZIER_CURVE */;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }
    BezierCurve.prototype.subdivide = function (t, firstHalf) {
        var ab = lerp(this.start, this.startControl, t);
        var bc = lerp(this.startControl, this.endControl, t);
        var cd = lerp(this.endControl, this.end, t);
        var abbc = lerp(ab, bc, t);
        var bccd = lerp(bc, cd, t);
        var dest = lerp(abbc, bccd, t);
        return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
    };
    BezierCurve.prototype.add = function (deltaX, deltaY) {
        return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    };
    BezierCurve.prototype.reverse = function () {
        return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
    };
    return BezierCurve;
}());
var isBezierCurve = function (path) { return path.type === 1 /* BEZIER_CURVE */; };

var BoundCurves = /** @class */ (function () {
    function BoundCurves(element) {
        var styles = element.styles;
        var bounds = element.bounds;
        var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
        var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
        var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
        var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
        var factors = [];
        factors.push((tlh + trh) / bounds.width);
        factors.push((blh + brh) / bounds.width);
        factors.push((tlv + blv) / bounds.height);
        factors.push((trv + brv) / bounds.height);
        var maxFactor = Math.max.apply(Math, factors);
        if (maxFactor > 1) {
            tlh /= maxFactor;
            tlv /= maxFactor;
            trh /= maxFactor;
            trv /= maxFactor;
            brh /= maxFactor;
            brv /= maxFactor;
            blh /= maxFactor;
            blv /= maxFactor;
        }
        var topWidth = bounds.width - trh;
        var rightHeight = bounds.height - brv;
        var bottomWidth = bounds.width - brh;
        var leftHeight = bounds.height - blv;
        var borderTopWidth = styles.borderTopWidth;
        var borderRightWidth = styles.borderRightWidth;
        var borderBottomWidth = styles.borderBottomWidth;
        var borderLeftWidth = styles.borderLeftWidth;
        var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
        var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
        var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
        var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
        this.topLeftBorderDoubleOuterBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT)
                : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
        this.topRightBorderDoubleOuterBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
        this.bottomRightBorderDoubleOuterBox =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
        this.bottomLeftBorderDoubleOuterBox =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
        this.topLeftBorderDoubleInnerBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT)
                : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
        this.topRightBorderDoubleInnerBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
        this.bottomRightBorderDoubleInnerBox =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
        this.bottomLeftBorderDoubleInnerBox =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
        this.topLeftBorderStroke =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT)
                : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
        this.topRightBorderStroke =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
        this.bottomRightBorderStroke =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
        this.bottomLeftBorderStroke =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
        this.topLeftBorderBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT)
                : new Vector(bounds.left, bounds.top);
        this.topRightBorderBox =
            trh > 0 || trv > 0
                ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width, bounds.top);
        this.bottomRightBorderBox =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
        this.bottomLeftBorderBox =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left, bounds.top + bounds.height);
        this.topLeftPaddingBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT)
                : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
        this.topRightPaddingBox =
            trh > 0 || trv > 0
                ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
        this.bottomRightPaddingBox =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
        this.bottomLeftPaddingBox =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
        this.topLeftContentBox =
            tlh > 0 || tlv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT)
                : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
        this.topRightContentBox =
            trh > 0 || trv > 0
                ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT)
                : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
        this.bottomRightContentBox =
            brh > 0 || brv > 0
                ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT)
                : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
        this.bottomLeftContentBox =
            blh > 0 || blv > 0
                ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT)
                : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
    }
    return BoundCurves;
}());
var CORNER;
(function (CORNER) {
    CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
    CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
    CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(CORNER || (CORNER = {}));
var getCurvePoints = function (x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle
    switch (position) {
        case CORNER.TOP_LEFT:
            return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
        case CORNER.TOP_RIGHT:
            return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
    }
};
var calculateBorderBoxPath = function (curves) {
    return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
};
var calculateContentBoxPath = function (curves) {
    return [
        curves.topLeftContentBox,
        curves.topRightContentBox,
        curves.bottomRightContentBox,
        curves.bottomLeftContentBox
    ];
};
var calculatePaddingBoxPath = function (curves) {
    return [
        curves.topLeftPaddingBox,
        curves.topRightPaddingBox,
        curves.bottomRightPaddingBox,
        curves.bottomLeftPaddingBox
    ];
};

var TransformEffect = /** @class */ (function () {
    function TransformEffect(offsetX, offsetY, matrix) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.matrix = matrix;
        this.type = 0 /* TRANSFORM */;
        this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
    }
    return TransformEffect;
}());
var ClipEffect = /** @class */ (function () {
    function ClipEffect(path, target) {
        this.path = path;
        this.target = target;
        this.type = 1 /* CLIP */;
    }
    return ClipEffect;
}());
var OpacityEffect = /** @class */ (function () {
    function OpacityEffect(opacity) {
        this.opacity = opacity;
        this.type = 2 /* OPACITY */;
        this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
    }
    return OpacityEffect;
}());
var isTransformEffect = function (effect) {
    return effect.type === 0 /* TRANSFORM */;
};
var isClipEffect = function (effect) { return effect.type === 1 /* CLIP */; };
var isOpacityEffect = function (effect) { return effect.type === 2 /* OPACITY */; };

var equalPath = function (a, b) {
    if (a.length === b.length) {
        return a.some(function (v, i) { return v === b[i]; });
    }
    return false;
};
var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
    return path.map(function (point, index) {
        switch (index) {
            case 0:
                return point.add(deltaX, deltaY);
            case 1:
                return point.add(deltaX + deltaW, deltaY);
            case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);
            case 3:
                return point.add(deltaX, deltaY + deltaH);
        }
        return point;
    });
};

var StackingContext = /** @class */ (function () {
    function StackingContext(container) {
        this.element = container;
        this.inlineLevel = [];
        this.nonInlineLevel = [];
        this.negativeZIndex = [];
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
        this.positiveZIndex = [];
        this.nonPositionedFloats = [];
        this.nonPositionedInlineLevel = [];
    }
    return StackingContext;
}());
var ElementPaint = /** @class */ (function () {
    function ElementPaint(container, parent) {
        this.container = container;
        this.parent = parent;
        this.effects = [];
        this.curves = new BoundCurves(this.container);
        if (this.container.styles.opacity < 1) {
            this.effects.push(new OpacityEffect(this.container.styles.opacity));
        }
        if (this.container.styles.transform !== null) {
            var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
            var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
            var matrix = this.container.styles.transform;
            this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
        }
        if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
            var borderBox = calculateBorderBoxPath(this.curves);
            var paddingBox = calculatePaddingBoxPath(this.curves);
            if (equalPath(borderBox, paddingBox)) {
                this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
            }
            else {
                this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
                this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
            }
        }
    }
    ElementPaint.prototype.getEffects = function (target) {
        var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
        var parent = this.parent;
        var effects = this.effects.slice(0);
        while (parent) {
            var croplessEffects = parent.effects.filter(function (effect) { return !isClipEffect(effect); });
            if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                effects.unshift.apply(effects, croplessEffects);
                inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
                if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
                    var borderBox = calculateBorderBoxPath(parent.curves);
                    var paddingBox = calculatePaddingBoxPath(parent.curves);
                    if (!equalPath(borderBox, paddingBox)) {
                        effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                    }
                }
            }
            else {
                effects.unshift.apply(effects, croplessEffects);
            }
            parent = parent.parent;
        }
        return effects.filter(function (effect) { return contains(effect.target, target); });
    };
    return ElementPaint;
}());
var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
    parent.container.elements.forEach(function (child) {
        var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
        var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
        var paintContainer = new ElementPaint(child, parent);
        if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
            listItems.push(paintContainer);
        }
        var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
        if (treatAsRealStackingContext || createsStackingContext) {
            var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
            var stack = new StackingContext(paintContainer);
            if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;
                if (order_1 < 0) {
                    var index_1 = 0;
                    parentStack.negativeZIndex.some(function (current, i) {
                        if (order_1 > current.element.container.styles.zIndex.order) {
                            index_1 = i;
                            return false;
                        }
                        else if (index_1 > 0) {
                            return true;
                        }
                        return false;
                    });
                    parentStack.negativeZIndex.splice(index_1, 0, stack);
                }
                else if (order_1 > 0) {
                    var index_2 = 0;
                    parentStack.positiveZIndex.some(function (current, i) {
                        if (order_1 >= current.element.container.styles.zIndex.order) {
                            index_2 = i + 1;
                            return false;
                        }
                        else if (index_2 > 0) {
                            return true;
                        }
                        return false;
                    });
                    parentStack.positiveZIndex.splice(index_2, 0, stack);
                }
                else {
                    parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
            }
            else {
                if (child.styles.isFloating()) {
                    parentStack.nonPositionedFloats.push(stack);
                }
                else {
                    parentStack.nonPositionedInlineLevel.push(stack);
                }
            }
            parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
        }
        else {
            if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
            }
            else {
                stackingContext.nonInlineLevel.push(paintContainer);
            }
            parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
        }
        if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
            processListItems(child, listOwnerItems);
        }
    });
};
var processListItems = function (owner, elements) {
    var numbering = owner instanceof OLElementContainer ? owner.start : 1;
    var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
    for (var i = 0; i < elements.length; i++) {
        var item = elements[i];
        if (item.container instanceof LIElementContainer &&
            typeof item.container.value === 'number' &&
            item.container.value !== 0) {
            numbering = item.container.value;
        }
        item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
        numbering += reversed ? -1 : 1;
    }
};
var parseStackingContexts = function (container) {
    var paintContainer = new ElementPaint(container, null);
    var root = new StackingContext(paintContainer);
    var listItems = [];
    parseStackTree(paintContainer, root, root, listItems);
    processListItems(paintContainer.container, listItems);
    return root;
};

var parsePathForBorder = function (curves, borderSide) {
    switch (borderSide) {
        case 0:
            return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
        case 1:
            return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
        case 2:
            return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
        case 3:
        default:
            return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
    }
};
var parsePathForBorderDoubleOuter = function (curves, borderSide) {
    switch (borderSide) {
        case 0:
            return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
        case 1:
            return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
        case 2:
            return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
        case 3:
        default:
            return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
    }
};
var parsePathForBorderDoubleInner = function (curves, borderSide) {
    switch (borderSide) {
        case 0:
            return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
        case 1:
            return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
        case 2:
            return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
        case 3:
        default:
            return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
    }
};
var parsePathForBorderStroke = function (curves, borderSide) {
    switch (borderSide) {
        case 0:
            return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
        case 1:
            return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
        case 2:
            return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
        case 3:
        default:
            return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
    }
};
var createStrokePathFromCurves = function (outer1, outer2) {
    var path = [];
    if (isBezierCurve(outer1)) {
        path.push(outer1.subdivide(0.5, false));
    }
    else {
        path.push(outer1);
    }
    if (isBezierCurve(outer2)) {
        path.push(outer2.subdivide(0.5, true));
    }
    else {
        path.push(outer2);
    }
    return path;
};
var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
    var path = [];
    if (isBezierCurve(outer1)) {
        path.push(outer1.subdivide(0.5, false));
    }
    else {
        path.push(outer1);
    }
    if (isBezierCurve(outer2)) {
        path.push(outer2.subdivide(0.5, true));
    }
    else {
        path.push(outer2);
    }
    if (isBezierCurve(inner2)) {
        path.push(inner2.subdivide(0.5, true).reverse());
    }
    else {
        path.push(inner2);
    }
    if (isBezierCurve(inner1)) {
        path.push(inner1.subdivide(0.5, false).reverse());
    }
    else {
        path.push(inner1);
    }
    return path;
};

var paddingBox = function (element) {
    var bounds = element.bounds;
    var styles = element.styles;
    return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
};
var contentBox = function (element) {
    var styles = element.styles;
    var bounds = element.bounds;
    var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
    var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
    var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
    var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
    return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
};

var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
    if (backgroundOrigin === 0 /* BORDER_BOX */) {
        return element.bounds;
    }
    if (backgroundOrigin === 2 /* CONTENT_BOX */) {
        return contentBox(element);
    }
    return paddingBox(element);
};
var calculateBackgroundPaintingArea = function (backgroundClip, element) {
    if (backgroundClip === 0 /* BORDER_BOX */) {
        return element.bounds;
    }
    if (backgroundClip === 2 /* CONTENT_BOX */) {
        return contentBox(element);
    }
    return paddingBox(element);
};
var calculateBackgroundRendering = function (container, index, intrinsicSize) {
    var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
    var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
    var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
    var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
    var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
    var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
    var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
    var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
    return [path, offsetX, offsetY, sizeWidth, sizeHeight];
};
var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
var hasIntrinsicValue = function (value) { return typeof value === 'number'; };
var calculateBackgroundSize = function (size, _a, bounds) {
    var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
    var first = size[0], second = size[1];
    if (!first) {
        return [0, 0];
    }
    if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
        return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
    }
    var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
    if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
        if (hasIntrinsicValue(intrinsicProportion)) {
            var targetRatio = bounds.width / bounds.height;
            return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER)
                ? [bounds.width, bounds.width / intrinsicProportion]
                : [bounds.height * intrinsicProportion, bounds.height];
        }
        return [bounds.width, bounds.height];
    }
    var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
    var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
    var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
    // If the background-size is auto or auto auto:
    if (isAuto(first) && (!second || isAuto(second))) {
        // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
        if (hasIntrinsicWidth && hasIntrinsicHeight) {
            return [intrinsicWidth, intrinsicHeight];
        }
        // If the image has no intrinsic dimensions and has no intrinsic proportions,
        // it's rendered at the size of the background positioning area.
        if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
            return [bounds.width, bounds.height];
        }
        // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
        // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
        // The other dimension is computed using the specified dimension and the intrinsic proportions.
        if (hasIntrinsicDimensions && hasIntrinsicProportion) {
            var width_1 = hasIntrinsicWidth
                ? intrinsicWidth
                : intrinsicHeight * intrinsicProportion;
            var height_1 = hasIntrinsicHeight
                ? intrinsicHeight
                : intrinsicWidth / intrinsicProportion;
            return [width_1, height_1];
        }
        // If the image has only one intrinsic dimension but has no intrinsic proportions,
        // it's rendered using the specified dimension and the other dimension of the background positioning area.
        var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
        var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
        return [width_2, height_2];
    }
    // If the image has intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
    if (hasIntrinsicProportion) {
        var width_3 = 0;
        var height_3 = 0;
        if (isLengthPercentage(first)) {
            width_3 = getAbsoluteValue(first, bounds.width);
        }
        else if (isLengthPercentage(second)) {
            height_3 = getAbsoluteValue(second, bounds.height);
        }
        if (isAuto(first)) {
            width_3 = height_3 * intrinsicProportion;
        }
        else if (!second || isAuto(second)) {
            height_3 = width_3 / intrinsicProportion;
        }
        return [width_3, height_3];
    }
    // If the image has no intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
    // if there is one. If there is no such intrinsic dimension,
    // it becomes the corresponding dimension of the background positioning area.
    var width = null;
    var height = null;
    if (isLengthPercentage(first)) {
        width = getAbsoluteValue(first, bounds.width);
    }
    else if (second && isLengthPercentage(second)) {
        height = getAbsoluteValue(second, bounds.height);
    }
    if (width !== null && (!second || isAuto(second))) {
        height =
            hasIntrinsicWidth && hasIntrinsicHeight
                ? (width / intrinsicWidth) * intrinsicHeight
                : bounds.height;
    }
    if (height !== null && isAuto(first)) {
        width =
            hasIntrinsicWidth && hasIntrinsicHeight
                ? (height / intrinsicHeight) * intrinsicWidth
                : bounds.width;
    }
    if (width !== null && height !== null) {
        return [width, height];
    }
    throw new Error("Unable to calculate background-size for element");
};
var getBackgroundValueForIndex = function (values, index) {
    var value = values[index];
    if (typeof value === 'undefined') {
        return values[0];
    }
    return value;
};
var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
    var x = _a[0], y = _a[1];
    var width = _b[0], height = _b[1];
    switch (repeat) {
        case 2 /* REPEAT_X */:
            return [
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
            ];
        case 3 /* REPEAT_Y */:
            return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
            ];
        case 1 /* NO_REPEAT */:
            return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
            ];
        default:
            return [
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
            ];
    }
};

var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

var SAMPLE_TEXT = 'Hidden Text';
var FontMetrics = /** @class */ (function () {
    function FontMetrics(document) {
        this._data = {};
        this._document = document;
    }
    FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
        var container = this._document.createElement('div');
        var img = this._document.createElement('img');
        var span = this._document.createElement('span');
        var body = this._document.body;
        container.style.visibility = 'hidden';
        container.style.fontFamily = fontFamily;
        container.style.fontSize = fontSize;
        container.style.margin = '0';
        container.style.padding = '0';
        container.style.whiteSpace = 'nowrap';
        body.appendChild(container);
        img.src = SMALL_IMAGE;
        img.width = 1;
        img.height = 1;
        img.style.margin = '0';
        img.style.padding = '0';
        img.style.verticalAlign = 'baseline';
        span.style.fontFamily = fontFamily;
        span.style.fontSize = fontSize;
        span.style.margin = '0';
        span.style.padding = '0';
        span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
        container.appendChild(span);
        container.appendChild(img);
        var baseline = img.offsetTop - span.offsetTop + 2;
        container.removeChild(span);
        container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
        container.style.lineHeight = 'normal';
        img.style.verticalAlign = 'super';
        var middle = img.offsetTop - container.offsetTop + 2;
        body.removeChild(container);
        return { baseline: baseline, middle: middle };
    };
    FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
        var key = fontFamily + " " + fontSize;
        if (typeof this._data[key] === 'undefined') {
            this._data[key] = this.parseMetrics(fontFamily, fontSize);
        }
        return this._data[key];
    };
    return FontMetrics;
}());

var Renderer = /** @class */ (function () {
    function Renderer(context, options) {
        this.context = context;
        this.options = options;
    }
    return Renderer;
}());

var MASK_OFFSET = 10000;
var CanvasRenderer = /** @class */ (function (_super) {
    __extends(CanvasRenderer, _super);
    function CanvasRenderer(context, options) {
        var _this = _super.call(this, context, options) || this;
        _this._activeEffects = [];
        _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
        _this.ctx = _this.canvas.getContext('2d');
        if (!options.canvas) {
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
        }
        _this.fontMetrics = new FontMetrics(document);
        _this.ctx.scale(_this.options.scale, _this.options.scale);
        _this.ctx.translate(-options.x, -options.y);
        _this.ctx.textBaseline = 'bottom';
        _this._activeEffects = [];
        _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
        return _this;
    }
    CanvasRenderer.prototype.applyEffects = function (effects) {
        var _this = this;
        while (this._activeEffects.length) {
            this.popEffect();
        }
        effects.forEach(function (effect) { return _this.applyEffect(effect); });
    };
    CanvasRenderer.prototype.applyEffect = function (effect) {
        this.ctx.save();
        if (isOpacityEffect(effect)) {
            this.ctx.globalAlpha = effect.opacity;
        }
        if (isTransformEffect(effect)) {
            this.ctx.translate(effect.offsetX, effect.offsetY);
            this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
            this.ctx.translate(-effect.offsetX, -effect.offsetY);
        }
        if (isClipEffect(effect)) {
            this.path(effect.path);
            this.ctx.clip();
        }
        this._activeEffects.push(effect);
    };
    CanvasRenderer.prototype.popEffect = function () {
        this._activeEffects.pop();
        this.ctx.restore();
    };
    CanvasRenderer.prototype.renderStack = function (stack) {
        return __awaiter(this, void 0, void 0, function () {
            var styles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        styles = stack.element.container.styles;
                        if (!styles.isVisible()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.renderStackContent(stack)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderNode = function (paint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                            debugger;
                        }
                        if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.renderNodeContent(paint)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
        var _this = this;
        if (letterSpacing === 0) {
            this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
        }
        else {
            var letters = segmentGraphemes(text.text);
            letters.reduce(function (left, letter) {
                _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                return left + _this.ctx.measureText(letter).width;
            }, text.bounds.left);
        }
    };
    CanvasRenderer.prototype.createFontStyle = function (styles) {
        var fontVariant = styles.fontVariant
            .filter(function (variant) { return variant === 'normal' || variant === 'small-caps'; })
            .join('');
        var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
        var fontSize = isDimensionToken(styles.fontSize)
            ? "" + styles.fontSize.number + styles.fontSize.unit
            : styles.fontSize.number + "px";
        return [
            [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
            fontFamily,
            fontSize
        ];
    };
    CanvasRenderer.prototype.renderTextNode = function (text, styles) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
            var _this = this;
            return __generator(this, function (_c) {
                _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                this.ctx.font = font;
                this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                this.ctx.textAlign = 'left';
                this.ctx.textBaseline = 'alphabetic';
                _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                paintOrder = styles.paintOrder;
                text.textBounds.forEach(function (text) {
                    paintOrder.forEach(function (paintOrderLayer) {
                        switch (paintOrderLayer) {
                            case 0 /* FILL */:
                                _this.ctx.fillStyle = asString(styles.color);
                                _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                var textShadows = styles.textShadow;
                                if (textShadows.length && text.text.trim().length) {
                                    textShadows
                                        .slice(0)
                                        .reverse()
                                        .forEach(function (textShadow) {
                                        _this.ctx.shadowColor = asString(textShadow.color);
                                        _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                        _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                        _this.ctx.shadowBlur = textShadow.blur.number;
                                        _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                    });
                                    _this.ctx.shadowColor = '';
                                    _this.ctx.shadowOffsetX = 0;
                                    _this.ctx.shadowOffsetY = 0;
                                    _this.ctx.shadowBlur = 0;
                                }
                                if (styles.textDecorationLine.length) {
                                    _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                    styles.textDecorationLine.forEach(function (textDecorationLine) {
                                        switch (textDecorationLine) {
                                            case 1 /* UNDERLINE */:
                                                // Draws a line at the baseline of the font
                                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                // need to take that into account both in position and size
                                                _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                break;
                                            case 2 /* OVERLINE */:
                                                _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                break;
                                            case 3 /* LINE_THROUGH */:
                                                // TODO try and find exact position for line-through
                                                _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                break;
                                        }
                                    });
                                }
                                break;
                            case 1 /* STROKE */:
                                if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                    _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                    _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                                    _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                }
                                _this.ctx.strokeStyle = '';
                                _this.ctx.lineWidth = 0;
                                _this.ctx.lineJoin = 'miter';
                                break;
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
        if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
            var box = contentBox(container);
            var path = calculatePaddingBoxPath(curves);
            this.path(path);
            this.ctx.save();
            this.ctx.clip();
            this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
            this.ctx.restore();
        }
    };
    CanvasRenderer.prototype.renderNodeContent = function (paint) {
        return __awaiter(this, void 0, void 0, function () {
            var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.applyEffects(paint.getEffects(4 /* CONTENT */));
                        container = paint.container;
                        curves = paint.curves;
                        styles = container.styles;
                        _i = 0, _a = container.textNodes;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        child = _a[_i];
                        return [4 /*yield*/, this.renderTextNode(child, styles)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.context.cache.match(container.src)];
                    case 6:
                        image = _c.sent();
                        this.renderReplacedElement(container, curves, image);
                        return [3 /*break*/, 8];
                    case 7:
                        _c.sent();
                        this.context.logger.error("Error loading image " + container.src);
                        return [3 /*break*/, 8];
                    case 8:
                        if (container instanceof CanvasElementContainer) {
                            this.renderReplacedElement(container, curves, container.canvas);
                        }
                        if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, this.context.cache.match(container.svg)];
                    case 10:
                        image = _c.sent();
                        this.renderReplacedElement(container, curves, image);
                        return [3 /*break*/, 12];
                    case 11:
                        _c.sent();
                        this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                        return [3 /*break*/, 12];
                    case 12:
                        if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
                        iframeRenderer = new CanvasRenderer(this.context, {
                            scale: this.options.scale,
                            backgroundColor: container.backgroundColor,
                            x: 0,
                            y: 0,
                            width: container.width,
                            height: container.height
                        });
                        return [4 /*yield*/, iframeRenderer.render(container.tree)];
                    case 13:
                        canvas = _c.sent();
                        if (container.width && container.height) {
                            this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                        }
                        _c.label = 14;
                    case 14:
                        if (container instanceof InputElementContainer) {
                            size = Math.min(container.bounds.width, container.bounds.height);
                            if (container.type === CHECKBOX) {
                                if (container.checked) {
                                    this.ctx.save();
                                    this.path([
                                        new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                        new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                        new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                        new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                        new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                        new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                        new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                    ]);
                                    this.ctx.fillStyle = asString(INPUT_COLOR);
                                    this.ctx.fill();
                                    this.ctx.restore();
                                }
                            }
                            else if (container.type === RADIO) {
                                if (container.checked) {
                                    this.ctx.save();
                                    this.ctx.beginPath();
                                    this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                    this.ctx.fillStyle = asString(INPUT_COLOR);
                                    this.ctx.fill();
                                    this.ctx.restore();
                                }
                            }
                        }
                        if (isTextInputElement(container) && container.value.length) {
                            _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                            baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                            this.ctx.font = fontFamily;
                            this.ctx.fillStyle = asString(styles.color);
                            this.ctx.textBaseline = 'alphabetic';
                            this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                            bounds = contentBox(container);
                            x = 0;
                            switch (container.styles.textAlign) {
                                case 1 /* CENTER */:
                                    x += bounds.width / 2;
                                    break;
                                case 2 /* RIGHT */:
                                    x += bounds.width;
                                    break;
                            }
                            textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                            this.ctx.save();
                            this.path([
                                new Vector(bounds.left, bounds.top),
                                new Vector(bounds.left + bounds.width, bounds.top),
                                new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                new Vector(bounds.left, bounds.top + bounds.height)
                            ]);
                            this.ctx.clip();
                            this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                            this.ctx.restore();
                            this.ctx.textBaseline = 'alphabetic';
                            this.ctx.textAlign = 'left';
                        }
                        if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
                        if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
                        img = container.styles.listStyleImage;
                        if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
                        image = void 0;
                        url = img.url;
                        _c.label = 15;
                    case 15:
                        _c.trys.push([15, 17, , 18]);
                        return [4 /*yield*/, this.context.cache.match(url)];
                    case 16:
                        image = _c.sent();
                        this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                        return [3 /*break*/, 18];
                    case 17:
                        _c.sent();
                        this.context.logger.error("Error loading list-style-image " + url);
                        return [3 /*break*/, 18];
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
                            fontFamily = this.createFontStyle(styles)[0];
                            this.ctx.font = fontFamily;
                            this.ctx.fillStyle = asString(styles.color);
                            this.ctx.textBaseline = 'middle';
                            this.ctx.textAlign = 'right';
                            bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                            this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                            this.ctx.textBaseline = 'bottom';
                            this.ctx.textAlign = 'left';
                        }
                        _c.label = 20;
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderStackContent = function (stack) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                            debugger;
                        }
                        // https://www.w3.org/TR/css-position-3/#painting-order
                        // 1. the background and borders of the element forming the stacking context.
                        return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
                    case 1:
                        // https://www.w3.org/TR/css-position-3/#painting-order
                        // 1. the background and borders of the element forming the stacking context.
                        _p.sent();
                        _i = 0, _a = stack.negativeZIndex;
                        _p.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        child = _a[_i];
                        return [4 /*yield*/, this.renderStack(child)];
                    case 3:
                        _p.sent();
                        _p.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: 
                    // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                    return [4 /*yield*/, this.renderNodeContent(stack.element)];
                    case 6:
                        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                        _p.sent();
                        _b = 0, _c = stack.nonInlineLevel;
                        _p.label = 7;
                    case 7:
                        if (!(_b < _c.length)) return [3 /*break*/, 10];
                        child = _c[_b];
                        return [4 /*yield*/, this.renderNode(child)];
                    case 8:
                        _p.sent();
                        _p.label = 9;
                    case 9:
                        _b++;
                        return [3 /*break*/, 7];
                    case 10:
                        _d = 0, _e = stack.nonPositionedFloats;
                        _p.label = 11;
                    case 11:
                        if (!(_d < _e.length)) return [3 /*break*/, 14];
                        child = _e[_d];
                        return [4 /*yield*/, this.renderStack(child)];
                    case 12:
                        _p.sent();
                        _p.label = 13;
                    case 13:
                        _d++;
                        return [3 /*break*/, 11];
                    case 14:
                        _f = 0, _g = stack.nonPositionedInlineLevel;
                        _p.label = 15;
                    case 15:
                        if (!(_f < _g.length)) return [3 /*break*/, 18];
                        child = _g[_f];
                        return [4 /*yield*/, this.renderStack(child)];
                    case 16:
                        _p.sent();
                        _p.label = 17;
                    case 17:
                        _f++;
                        return [3 /*break*/, 15];
                    case 18:
                        _h = 0, _j = stack.inlineLevel;
                        _p.label = 19;
                    case 19:
                        if (!(_h < _j.length)) return [3 /*break*/, 22];
                        child = _j[_h];
                        return [4 /*yield*/, this.renderNode(child)];
                    case 20:
                        _p.sent();
                        _p.label = 21;
                    case 21:
                        _h++;
                        return [3 /*break*/, 19];
                    case 22:
                        _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                        _p.label = 23;
                    case 23:
                        if (!(_k < _l.length)) return [3 /*break*/, 26];
                        child = _l[_k];
                        return [4 /*yield*/, this.renderStack(child)];
                    case 24:
                        _p.sent();
                        _p.label = 25;
                    case 25:
                        _k++;
                        return [3 /*break*/, 23];
                    case 26:
                        _m = 0, _o = stack.positiveZIndex;
                        _p.label = 27;
                    case 27:
                        if (!(_m < _o.length)) return [3 /*break*/, 30];
                        child = _o[_m];
                        return [4 /*yield*/, this.renderStack(child)];
                    case 28:
                        _p.sent();
                        _p.label = 29;
                    case 29:
                        _m++;
                        return [3 /*break*/, 27];
                    case 30: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.mask = function (paths) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.lineTo(0, 0);
        this.formatPath(paths.slice(0).reverse());
        this.ctx.closePath();
    };
    CanvasRenderer.prototype.path = function (paths) {
        this.ctx.beginPath();
        this.formatPath(paths);
        this.ctx.closePath();
    };
    CanvasRenderer.prototype.formatPath = function (paths) {
        var _this = this;
        paths.forEach(function (point, index) {
            var start = isBezierCurve(point) ? point.start : point;
            if (index === 0) {
                _this.ctx.moveTo(start.x, start.y);
            }
            else {
                _this.ctx.lineTo(start.x, start.y);
            }
            if (isBezierCurve(point)) {
                _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
            }
        });
    };
    CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
        this.path(path);
        this.ctx.fillStyle = pattern;
        this.ctx.translate(offsetX, offsetY);
        this.ctx.fill();
        this.ctx.translate(-offsetX, -offsetY);
    };
    CanvasRenderer.prototype.resizeImage = function (image, width, height) {
        var _a;
        if (image.width === width && image.height === height) {
            return image;
        }
        var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
        var canvas = ownerDocument.createElement('canvas');
        canvas.width = Math.max(1, width);
        canvas.height = Math.max(1, height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
        return canvas;
    };
    CanvasRenderer.prototype.renderBackgroundImage = function (container) {
        return __awaiter(this, void 0, void 0, function () {
            var index, _loop_1, this_1, _i, _a, backgroundImage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        index = container.styles.backgroundImage.length - 1;
                        _loop_1 = function (backgroundImage) {
                            var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0:
                                        if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                                        image = void 0;
                                        url = backgroundImage.url;
                                        _h.label = 1;
                                    case 1:
                                        _h.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_1.context.cache.match(url)];
                                    case 2:
                                        image = _h.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        _h.sent();
                                        this_1.context.logger.error("Error loading background-image " + url);
                                        return [3 /*break*/, 4];
                                    case 4:
                                        if (image) {
                                            _c = calculateBackgroundRendering(container, index, [
                                                image.width,
                                                image.height,
                                                image.width / image.height
                                            ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                            pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                            this_1.renderRepeat(path, pattern, x, y);
                                        }
                                        return [3 /*break*/, 6];
                                    case 5:
                                        if (isLinearGradient(backgroundImage)) {
                                            _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                            _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                            canvas = document.createElement('canvas');
                                            canvas.width = width;
                                            canvas.height = height;
                                            ctx = canvas.getContext('2d');
                                            gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                            processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                            });
                                            ctx.fillStyle = gradient_1;
                                            ctx.fillRect(0, 0, width, height);
                                            if (width > 0 && height > 0) {
                                                pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                this_1.renderRepeat(path, pattern, x, y);
                                            }
                                        }
                                        else if (isRadialGradient(backgroundImage)) {
                                            _f = calculateBackgroundRendering(container, index, [
                                                null,
                                                null,
                                                null
                                            ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                            position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                            x = getAbsoluteValue(position[0], width);
                                            y = getAbsoluteValue(position[position.length - 1], height);
                                            _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                            if (rx > 0 && ry > 0) {
                                                radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                    return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                this_1.path(path);
                                                this_1.ctx.fillStyle = radialGradient_1;
                                                if (rx !== ry) {
                                                    midX = container.bounds.left + 0.5 * container.bounds.width;
                                                    midY = container.bounds.top + 0.5 * container.bounds.height;
                                                    f = ry / rx;
                                                    invF = 1 / f;
                                                    this_1.ctx.save();
                                                    this_1.ctx.translate(midX, midY);
                                                    this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                    this_1.ctx.translate(-midX, -midY);
                                                    this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                    this_1.ctx.restore();
                                                }
                                                else {
                                                    this_1.ctx.fill();
                                                }
                                            }
                                        }
                                        _h.label = 6;
                                    case 6:
                                        index--;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        backgroundImage = _a[_i];
                        return [5 /*yield**/, _loop_1(backgroundImage)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.path(parsePathForBorder(curvePoints, side));
                this.ctx.fillStyle = asString(color);
                this.ctx.fill();
                return [2 /*return*/];
            });
        });
    };
    CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
        return __awaiter(this, void 0, void 0, function () {
            var outerPaths, innerPaths;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(width < 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                        this.path(outerPaths);
                        this.ctx.fillStyle = asString(color);
                        this.ctx.fill();
                        innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                        this.path(innerPaths);
                        this.ctx.fill();
                        return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
        return __awaiter(this, void 0, void 0, function () {
            var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
                        styles = paint.container.styles;
                        hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                        borders = [
                            { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                            { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                            { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                            { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                        ];
                        backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                        if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
                        this.ctx.save();
                        this.path(backgroundPaintingArea);
                        this.ctx.clip();
                        if (!isTransparent(styles.backgroundColor)) {
                            this.ctx.fillStyle = asString(styles.backgroundColor);
                            this.ctx.fill();
                        }
                        return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
                    case 1:
                        _a.sent();
                        this.ctx.restore();
                        styles.boxShadow
                            .slice(0)
                            .reverse()
                            .forEach(function (shadow) {
                            _this.ctx.save();
                            var borderBoxArea = calculateBorderBoxPath(paint.curves);
                            var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                            var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                            if (shadow.inset) {
                                _this.path(borderBoxArea);
                                _this.ctx.clip();
                                _this.mask(shadowPaintingArea);
                            }
                            else {
                                _this.mask(borderBoxArea);
                                _this.ctx.clip();
                                _this.path(shadowPaintingArea);
                            }
                            _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                            _this.ctx.shadowOffsetY = shadow.offsetY.number;
                            _this.ctx.shadowColor = asString(shadow.color);
                            _this.ctx.shadowBlur = shadow.blur.number;
                            _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                            _this.ctx.fill();
                            _this.ctx.restore();
                        });
                        _a.label = 2;
                    case 2:
                        side = 0;
                        _i = 0, borders_1 = borders;
                        _a.label = 3;
                    case 3:
                        if (!(_i < borders_1.length)) return [3 /*break*/, 13];
                        border = borders_1[_i];
                        if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
                        if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 5:
                        if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        side++;
                        _a.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 3];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
        return __awaiter(this, void 0, void 0, function () {
            var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
            return __generator(this, function (_a) {
                this.ctx.save();
                strokePaths = parsePathForBorderStroke(curvePoints, side);
                boxPaths = parsePathForBorder(curvePoints, side);
                if (style === 2 /* DASHED */) {
                    this.path(boxPaths);
                    this.ctx.clip();
                }
                if (isBezierCurve(boxPaths[0])) {
                    startX = boxPaths[0].start.x;
                    startY = boxPaths[0].start.y;
                }
                else {
                    startX = boxPaths[0].x;
                    startY = boxPaths[0].y;
                }
                if (isBezierCurve(boxPaths[1])) {
                    endX = boxPaths[1].end.x;
                    endY = boxPaths[1].end.y;
                }
                else {
                    endX = boxPaths[1].x;
                    endY = boxPaths[1].y;
                }
                if (side === 0 || side === 2) {
                    length = Math.abs(startX - endX);
                }
                else {
                    length = Math.abs(startY - endY);
                }
                this.ctx.beginPath();
                if (style === 3 /* DOTTED */) {
                    this.formatPath(strokePaths);
                }
                else {
                    this.formatPath(boxPaths.slice(0, 2));
                }
                dashLength = width < 3 ? width * 3 : width * 2;
                spaceLength = width < 3 ? width * 2 : width;
                if (style === 3 /* DOTTED */) {
                    dashLength = width;
                    spaceLength = width;
                }
                useLineDash = true;
                if (length <= dashLength * 2) {
                    useLineDash = false;
                }
                else if (length <= dashLength * 2 + spaceLength) {
                    multiplier = length / (2 * dashLength + spaceLength);
                    dashLength *= multiplier;
                    spaceLength *= multiplier;
                }
                else {
                    numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                    minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                    maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                    spaceLength =
                        maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace)
                            ? minSpace
                            : maxSpace;
                }
                if (useLineDash) {
                    if (style === 3 /* DOTTED */) {
                        this.ctx.setLineDash([0, dashLength + spaceLength]);
                    }
                    else {
                        this.ctx.setLineDash([dashLength, spaceLength]);
                    }
                }
                if (style === 3 /* DOTTED */) {
                    this.ctx.lineCap = 'round';
                    this.ctx.lineWidth = width;
                }
                else {
                    this.ctx.lineWidth = width * 2 + 1.1;
                }
                this.ctx.strokeStyle = asString(color);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                // dashed round edge gap
                if (style === 2 /* DASHED */) {
                    if (isBezierCurve(boxPaths[0])) {
                        path1 = boxPaths[3];
                        path2 = boxPaths[0];
                        this.ctx.beginPath();
                        this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                        this.ctx.stroke();
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        path1 = boxPaths[1];
                        path2 = boxPaths[2];
                        this.ctx.beginPath();
                        this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                        this.ctx.stroke();
                    }
                }
                this.ctx.restore();
                return [2 /*return*/];
            });
        });
    };
    CanvasRenderer.prototype.render = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.options.backgroundColor) {
                            this.ctx.fillStyle = asString(this.options.backgroundColor);
                            this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                        }
                        stack = parseStackingContexts(element);
                        return [4 /*yield*/, this.renderStack(stack)];
                    case 1:
                        _a.sent();
                        this.applyEffects([]);
                        return [2 /*return*/, this.canvas];
                }
            });
        });
    };
    return CanvasRenderer;
}(Renderer));
var isTextInputElement = function (container) {
    if (container instanceof TextareaElementContainer) {
        return true;
    }
    else if (container instanceof SelectElementContainer) {
        return true;
    }
    else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
        return true;
    }
    return false;
};
var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
    switch (clip) {
        case 0 /* BORDER_BOX */:
            return calculateBorderBoxPath(curves);
        case 2 /* CONTENT_BOX */:
            return calculateContentBoxPath(curves);
        case 1 /* PADDING_BOX */:
        default:
            return calculatePaddingBoxPath(curves);
    }
};
var canvasTextAlign = function (textAlign) {
    switch (textAlign) {
        case 1 /* CENTER */:
            return 'center';
        case 2 /* RIGHT */:
            return 'right';
        case 0 /* LEFT */:
        default:
            return 'left';
    }
};
// see https://github.com/niklasvh/html2canvas/pull/2645
var iOSBrokenFonts = ['-apple-system', 'system-ui'];
var fixIOSSystemFonts = function (fontFamilies) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
        ? fontFamilies.filter(function (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
        : fontFamilies;
};

var ForeignObjectRenderer = /** @class */ (function (_super) {
    __extends(ForeignObjectRenderer, _super);
    function ForeignObjectRenderer(context, options) {
        var _this = _super.call(this, context, options) || this;
        _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
        _this.ctx = _this.canvas.getContext('2d');
        _this.options = options;
        _this.canvas.width = Math.floor(options.width * options.scale);
        _this.canvas.height = Math.floor(options.height * options.scale);
        _this.canvas.style.width = options.width + "px";
        _this.canvas.style.height = options.height + "px";
        _this.ctx.scale(_this.options.scale, _this.options.scale);
        _this.ctx.translate(-options.x, -options.y);
        _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
        return _this;
    }
    ForeignObjectRenderer.prototype.render = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var svg, img;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                        return [4 /*yield*/, loadSerializedSVG(svg)];
                    case 1:
                        img = _a.sent();
                        if (this.options.backgroundColor) {
                            this.ctx.fillStyle = asString(this.options.backgroundColor);
                            this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                        }
                        this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                        return [2 /*return*/, this.canvas];
                }
            });
        });
    };
    return ForeignObjectRenderer;
}(Renderer));
var loadSerializedSVG = function (svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        };
        img.onerror = reject;
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

var Logger = /** @class */ (function () {
    function Logger(_a) {
        var id = _a.id, enabled = _a.enabled;
        this.id = id;
        this.enabled = enabled;
        this.start = Date.now();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.enabled) {
            // eslint-disable-next-line no-console
            if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                // eslint-disable-next-line no-console
                console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
            }
            else {
                this.info.apply(this, args);
            }
        }
    };
    Logger.prototype.getTime = function () {
        return Date.now() - this.start;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.enabled) {
            // eslint-disable-next-line no-console
            if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                // eslint-disable-next-line no-console
                console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
            }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.enabled) {
            // eslint-disable-next-line no-console
            if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                // eslint-disable-next-line no-console
                console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
            }
            else {
                this.info.apply(this, args);
            }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.enabled) {
            // eslint-disable-next-line no-console
            if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                // eslint-disable-next-line no-console
                console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
            }
            else {
                this.info.apply(this, args);
            }
        }
    };
    Logger.instances = {};
    return Logger;
}());

var Context = /** @class */ (function () {
    function Context(options, windowBounds) {
        var _a;
        this.windowBounds = windowBounds;
        this.instanceName = "#" + Context.instanceCount++;
        this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
        this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
    }
    Context.instanceCount = 1;
    return Context;
}());

var html2canvas = function (element, options) {
    if (options === void 0) { options = {}; }
    return renderElement(element, options);
};
if (typeof window !== 'undefined') {
    CacheStorage.setContext(window);
}
var renderElement = function (element, opts) { return __awaiter(void 0, void 0, void 0, function () {
    var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                if (!element || typeof element !== 'object') {
                    return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
                }
                ownerDocument = element.ownerDocument;
                if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                }
                defaultView = ownerDocument.defaultView;
                if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                }
                resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                };
                contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                };
                windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                context = new Context(contextOptions, windowBounds);
                foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                };
                context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                documentCloner = new DocumentCloner(context, element, cloneOptions);
                clonedElement = documentCloner.clonedReferenceElement;
                if (!clonedElement) {
                    return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
                }
                return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
            case 1:
                container = _u.sent();
                _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement)
                    ? parseDocumentSize(clonedElement.ownerDocument)
                    : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                };
                if (!foreignObjectRendering) return [3 /*break*/, 3];
                context.logger.debug("Document cloned, using foreign object rendering");
                renderer = new ForeignObjectRenderer(context, renderOptions);
                return [4 /*yield*/, renderer.render(clonedElement)];
            case 2:
                canvas = _u.sent();
                return [3 /*break*/, 5];
            case 3:
                context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                context.logger.debug("Starting DOM parsing");
                root = parseTree(context, clonedElement);
                if (backgroundColor === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                }
                context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                renderer = new CanvasRenderer(context, renderOptions);
                return [4 /*yield*/, renderer.render(root)];
            case 4:
                canvas = _u.sent();
                _u.label = 5;
            case 5:
                if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                        context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                }
                context.logger.debug("Finished rendering");
                return [2 /*return*/, canvas];
        }
    });
}); };
var parseBackgroundColor = function (context, element, backgroundColorOverride) {
    var ownerDocument = element.ownerDocument;
    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement
        ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor)
        : COLORS.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body
        ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor)
        : COLORS.TRANSPARENT;
    var defaultBackgroundColor = typeof backgroundColorOverride === 'string'
        ? parseColor(context, backgroundColorOverride)
        : backgroundColorOverride === null
            ? COLORS.TRANSPARENT
            : 0xffffffff;
    return element === ownerDocument.documentElement
        ? isTransparent(documentBackgroundColor)
            ? isTransparent(bodyBackgroundColor)
                ? defaultBackgroundColor
                : bodyBackgroundColor
            : documentBackgroundColor
        : defaultBackgroundColor;
};

const useHandler$1 = (props, emit) => {
    const screenshotRef = ref();
    const onClick = (e) => {
        emit('on-click', e);
    };
    const downImg = (imgData) => {
        const aDom = document.createElement('a');
        aDom.href = imgData;
        aDom.download = `${props.imageName}.png`;
        aDom.click();
    };
    const startScreenshot = () => {
        html2canvas(screenshotRef.value).then(canvas => {
            const img = canvas.toDataURL();
            props.allowDown && downImg(img);
            emit('on-end', img, canvas);
        });
    };
    watch(() => props.start, value => {
        value && startScreenshot();
    }, { immediate: true });
    return {
        screenshotRef,
        onClick
    };
};

var script$2 = defineComponent({
    name: 'MeScreenshot',
    emits: ['on-click', 'on-end'],
    props: {
        start: {
            type: Boolean,
            default: false
        },
        allowDown: {
            type: Boolean,
            default: false
        },
        imageName: {
            type: String,
            default: 'screenshot'
        }
    },
    setup(props, { emit }) {
        const { screenshotRef, onClick } = useHandler$1(props, emit);
        return { screenshotRef, onClick };
    }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 截长图 "),
    createElementVNode("div", {
      class: "me-screenshot",
      ref: "screenshotRef",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$2.render = render$2;
script$2.__file = "packages/MeScreenshot/index.vue";

script$2.install = (app) => {
    app.component(script$2.name, script$2);
};
const InMeRate = script$2;

const MeStepKey = 'MeStep';

const useInitSlots = (props) => {
    const parentProps = computed(() => props);
    provide(MeStepKey, { parentProps });
    return {};
};

var script$1 = defineComponent({
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签页 "),
    createElementVNode("div", {
      class: normalizeClass(["me-step", _ctx.direction])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1.render = render$1;
script$1.__file = "packages/MeStep/index.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const InMeStep = script$1;

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

var MeAPI = { ...API$1, ...BindEvent, Validator };

const components = [
    InMeButton,
    InMeIcon,
    InMeImg,
    InMePopup,
    InMeInput,
    InMeRadio,
    InMeRadioGroup,
    InMeCheckbox,
    InMeCheckboxGroup,
    InMeSwitch,
    InMeKeyboard,
    InMePassword,
    InMeSearch,
    InMeRate$1,
    InMeSlider,
    InMeDatetimePicker,
    InMeAddressPicker,
    InMeUpload,
    InMeForm,
    InMeActionSheet,
    InMeLoading,
    InMeMask,
    InMeDialog,
    InMeShareSheet,
    InMeSwiperCell,
    InMeGrid,
    InMeGridItem,
    InMeIndexBar,
    InMeNavBar,
    InMeTab,
    InMeTabItem,
    InMeTabBar,
    InMePullRefresh,
    InMeProgressBar,
    InMeAccordion,
    InMeAccordionItem,
    InMeCountDown,
    InMeDivider,
    InMeEmpty,
    InMeNoticeBar,
    InMeSwiper,
    InMeSwiperItem,
    InMeTag,
    InMeCountTo,
    InMeVirtualList,
    InMeRate,
    InMeStep,
    InMeStepItem
];
const API = { ...MeAPI, MeToast: InMeToast, MeMessageBox: InMeMessageBox, MePreview: InMePreview };
const install = (app) => {
    components.forEach(component => app.component(component.name, component));
    Object.keys(API).forEach(key => {
        app.config.globalProperties[`$${key}`] = API[key];
    });
};
var index = {
    install,
    ...components
};

export { MeAPI, InMeAccordion as MeAccordion, InMeAccordionItem as MeAccordionItem, InMeActionSheet as MeActionSheet, InMeAddressPicker as MeAddressPicker, InMeButton as MeButton, InMeCheckbox as MeCheckbox, InMeCheckboxGroup as MeCheckboxGroup, InMeCountDown as MeCountDown, InMeCountTo as MeCountTo, InMeDatetimePicker as MeDatetimePicker, InMeDialog as MeDialog, InMeDivider as MeDivider, InMeEmpty as MeEmpty, InMeForm as MeForm, InMeGrid as MeGrid, InMeGridItem as MeGridItem, InMeIcon as MeIcon, InMeImg as MeImg, InMeIndexBar as MeIndexBar, InMeInput as MeInput, InMeKeyboard as MeKeyboard, InMeLoading as MeLoading, InMeMask as MeMask, InMeMessageBox as MeMessageBox, InMeNavBar as MeNavBar, InMeNoticeBar as MeNoticeBar, InMePassword as MePassword, InMePopup as MePopup, InMePreview as MePreview, InMeProgressBar as MeProgressBar, InMePullRefresh as MePullRefresh, InMeRadio as MeRadio, InMeRadioGroup as MeRadioGroup, InMeRate$1 as MeRate, InMeRate as MeScreenshot, InMeSearch as MeSearch, InMeShareSheet as MeShareSheet, InMeSlider as MeSlider, InMeStep as MeStep, InMeStepItem as MeStepItem, InMeSwiper as MeSwiper, InMeSwiperCell as MeSwiperCell, InMeSwiperItem as MeSwiperItem, InMeSwitch as MeSwitch, InMeTab as MeTab, InMeTabBar as MeTabBar, InMeTabItem as MeTabItem, InMeTag as MeTag, InMeToast as MeToast, InMeUpload as MeUpload, InMeVirtualList as MeVirtualList, index as default };
