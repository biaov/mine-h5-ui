import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, withDirectives, createElementVNode, normalizeClass, withModifiers, renderList, toDisplayString, vShow } from 'vue';

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
        const { onLi, onCancel } = useBtns(emit);
        return { isShowMask, isShow, hideMask, onLi, onCancel };
    }
});

const _hoisted_1 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
          }, toDisplayString(item[_ctx.label]), 9 /* TEXT, PROPS */, _hoisted_1))
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

script.render = render;
script.__file = "packages/MeActionSheet/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeActionSheet = script;

export { InMeActionSheet as default };
