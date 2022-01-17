import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, ref, watch, resolveComponent, renderList, createBlock, toDisplayString } from 'vue';

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

const useHandler = (props, emit) => {
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

var script = defineComponent({
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
        const { listData, onClick } = useHandler(props, emit);
        return { listData, onClick };
    }
});

const _hoisted_1 = ["data-disabled"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
    ], 12 /* STYLE, PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeRate/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeRate = script;

export { InMeRate as default };
