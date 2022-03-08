import { ref, watch, computed, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, resolveComponent, withDirectives, withModifiers, createBlock, renderSlot, vShow } from 'vue';

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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "packages/MePopup/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMePopup = script;

export { InMePopup as default };
