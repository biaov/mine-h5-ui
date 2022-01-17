import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, ref, onMounted, onUnmounted, watch, resolveComponent, withModifiers, renderList, toDisplayString, createVNode } from 'vue';

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

const Bind = (dom, event, fn, flag = false) => {
    dom.addEventListener(event, fn, flag);
    return dom;
};
const Unbind = (dom, event, fn, flag = false) => {
    dom.removeEventListener(event, fn, flag);
    return dom;
};

const useHandler = (emit) => {
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

var script = defineComponent({
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
        const { onClick, onDelete, onComplate } = useHandler(emit);
        return { isActive, onClick, onDelete, onComplate };
    }
});

const _hoisted_1 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
        }, toDisplayString(item), 9 /* TEXT, PROPS */, _hoisted_1)
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

script.render = render;
script.__file = "packages/MeKeyboard/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeKeyboard = script;

export { InMeKeyboard as default };
