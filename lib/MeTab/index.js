import { ref, computed, provide, onMounted, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderList, normalizeClass, normalizeStyle, toDisplayString, renderSlot } from 'vue';

const MeTabKey = 'MeTab';

const useInitSlots = (props, emit) => {
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

var script = defineComponent({
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
        const { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick } = useInitSlots(props, emit);
        return { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick };
    }
});

const _hoisted_1 = { class: "me-tab" };
const _hoisted_2 = {
  class: "m-tabs",
  ref: "tabsDom"
};
const _hoisted_3 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签页 "),
    createElementVNode("div", _hoisted_1, [
      createCommentVNode(" 标签组 "),
      createElementVNode("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabList, (item) => {
          return (openBlock(), createElementBlock("div", {
            class: normalizeClass(["m-tab-item", { active: _ctx.modelValue === item.name }]),
            key: item.name,
            onClick: $event => (_ctx.onClick(item)),
            style: normalizeStyle(`color:${_ctx.modelValue === item.name ? _ctx.activeColor : _ctx.color};`)
          }, toDisplayString(item.label), 15 /* TEXT, CLASS, STYLE, PROPS */, _hoisted_3))
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

script.render = render;
script.__file = "packages/MeTab/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeTab = script;

export { InMeTab as default };
