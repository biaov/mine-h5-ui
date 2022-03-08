import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, ref, onMounted, resolveComponent, createBlock, toDisplayString, createVNode, render as render$3, renderSlot } from 'vue';

const useClick = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script$2 = defineComponent({
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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图标 "),
    createElementVNode("i", {
      class: normalizeClass(["iconfont me-icon", _ctx.name]),
      style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$2.render = render$2;
script$2.__file = "packages/MeIcon/index.vue";

script$2.install = (app) => {
    app.component(script$2.name, script$2);
};
const InMeIcon = script$2;

const useShow = (props) => {
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

var script$1 = defineComponent({
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
        const { isShow, isDestroy } = useShow(props);
        return { isShow, isDestroy };
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "packages/MeToast/index.vue";

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;

const Toast = (arg) => {
    const options = IsType('String', arg) || IsType('Number', arg) ? { message: arg } : IsType('Object', arg) ? { ...arg } : {};
    const vm = createVNode(script$1, options);
    const container = document.createElement('div');
    render$3(vm, container);
    document.body.appendChild(container.firstElementChild);
};

const InMeToast = Toast;
InMeToast.install = (app) => {
    app.config.globalProperties.$MeToast = Toast;
};

const useHandler = (props, emit) => {
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

var script = defineComponent({
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
        const { onSubmit } = useHandler(props, emit);
        return { onSubmit };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "packages/MeForm/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeForm = script;

export { InMeForm as default };
