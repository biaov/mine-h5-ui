import { inject, ref, watch, nextTick, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, toDisplayString, normalizeClass, renderSlot } from 'vue';

const MeAccordionKey = 'MeAccordion';

const useHandler = (props, emit) => {
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

var script = defineComponent({
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
        const { accordionItemCont, isShow, curHeight, onClick } = useHandler(props, emit);
        return { accordionItemCont, isShow, curHeight, onClick };
    }
});

const _hoisted_1 = { class: "me-accordion-item" };
const _hoisted_2 = { ref: "accordionItemCont" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 手风琴选项 "),
    createElementVNode("div", _hoisted_1, [
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
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */)
      ], 4 /* STYLE */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeAccordionItem/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeAccordionItem = script;

export { InMeAccordionItem as default };
