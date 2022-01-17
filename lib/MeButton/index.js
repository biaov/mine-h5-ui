import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, resolveComponent, createBlock, renderSlot } from 'vue';

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

const useHandler = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script = defineComponent({
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
        const { onClick } = useHandler(emit);
        return { onClick };
    }
});

const _hoisted_1 = ["type"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
    ], 14 /* CLASS, STYLE, PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeButton/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeButton = script;

export { InMeButton as default };
