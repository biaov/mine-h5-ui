import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, resolveComponent, createVNode, withDirectives, vModelText, Transition, withCtx, createBlock, toDisplayString } from 'vue';

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
const useBtns = (emit) => {
    const onClean = () => {
        emit('update:modelValue', '');
    };
    const handleBtn = () => {
        emit('on-click');
    };
    return { onClean, handleBtn };
};

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

var script = defineComponent({
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
        const { onClean, handleBtn } = useBtns(emit);
        return { inputVal, onKeypress, onFocus, onBlur, onInput, onChange, onClean, handleBtn };
    }
});

const _hoisted_1 = ["placeholder", "disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
      }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_1), [
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

script.render = render;
script.__file = "packages/MeSearch/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSearch = script;

export { InMeSearch as default };
