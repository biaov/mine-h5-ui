import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, normalizeClass, withModifiers, toDisplayString, renderList, normalizeStyle, vShow } from 'vue';

const useShow = (props, emit) => {
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
const useBtns = (emit) => {
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

var script = defineComponent({
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
        const { isShowMask, isShow, hideMask } = useShow(props, emit);
        const { onLi, onCancel } = useBtns(emit);
        return { isShowMask, isShow, hideMask, onLi, onCancel };
    }
});

const _hoisted_1 = { class: "u-tips" };
const _hoisted_2 = { class: "m-list-li" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "u-desc" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
        createElementVNode("h3", _hoisted_1, toDisplayString(_ctx.tips), 1 /* TEXT */),
        createCommentVNode(" 分享列表 "),
        createElementVNode("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
            return (openBlock(), createElementBlock("li", {
              key: index,
              onClick: $event => (_ctx.onLi(item))
            }, [
              createElementVNode("i", {
                class: normalizeClass(["iconfont u-icon", item.icon]),
                style: normalizeStyle(`color:${item.color};`)
              }, null, 6 /* CLASS, STYLE */),
              createElementVNode("span", _hoisted_4, toDisplayString(item.value), 1 /* TEXT */)
            ], 8 /* PROPS */, _hoisted_3))
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

script.render = render;
script.__file = "packages/MeShareSheet/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeShareSheet = script;

export { InMeShareSheet as default };
