import { ref, computed, nextTick, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderList, renderSlot } from 'vue';

const Throttle = (fn, time = 1000) => {
    let timer = null;
    return (e) => {
        !timer &&
            (timer = setTimeout(() => {
                fn(e);
                timer = null;
            }, time));
    };
};

const useHandler = (props, emit) => {
    const scrollBarHeight = ref(0);
    const scrollTranslateY = ref(0);
    const listData = ref([]);
    const startIndex = ref(0);
    const endIndex = ref(0);
    const nodes = [];
    const prevScreen = computed(() => props.remain * props.screen[0]);
    const nextScreen = computed(() => props.remain * props.screen[1]);
    const prevCount = computed(() => Math.min(startIndex.value, prevScreen.value));
    const nextCount = computed(() => Math.min(props.list.length - endIndex.value, nextScreen.value));
    const renderData = computed(() => listData.value.slice(startIndex.value - prevCount.value, endIndex.value + nextCount.value));
    const updateHeight = () => {
        nextTick(() => {
            if (props.itemHeight === 0) {
                nodes.forEach(node => {
                    const { height } = node.getBoundingClientRect();
                    const index = +node.dataset.index;
                    const oldHeight = listData.value[index].height;
                    height && oldHeight !== height && (listData.value[index].height = height);
                });
            }
            scrollBarHeight.value = listData.value.reduce((prev, item) => prev + item.height, 0);
        });
    };
    let onScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (props.itemHeight) {
            startIndex.value = ~~(scrollTop / props.itemHeight);
            endIndex.value = startIndex.value + props.remain;
            scrollTranslateY.value = (startIndex.value - prevCount.value) * props.itemHeight;
        }
        else {
            let prevSum = 0;
            const index = listData.value.findIndex(item => {
                prevSum += item.height;
                return prevSum > scrollTop;
            });
            startIndex.value = index;
            endIndex.value = startIndex.value + props.remain;
            let curPrevSum = 0;
            const maxindex = startIndex.value - prevCount.value;
            listData.value.find((item, i) => {
                if (i >= maxindex) {
                    return true;
                }
                curPrevSum += item.height;
                return false;
            });
            scrollTranslateY.value = curPrevSum;
            updateHeight();
        }
        nextTick(() => {
            scrollTop + clientHeight >= scrollHeight - props.distance && emit('on-load-more');
        });
    };
    onScroll = Throttle(onScroll, props.interval);
    const setItemRef = (el, index) => {
        el && (nodes[index] = el);
    };
    watch(() => props.list, value => {
        const height = props.itemHeight || 100;
        listData.value = value.map((item, virtualId) => ({ ...item, virtualId, height }));
        updateHeight();
    }, { deep: true, immediate: true });
    return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef };
};

var script = defineComponent({
    name: 'MeVirtualList',
    emits: ['on-load-more'],
    props: {
        list: {
            type: Array,
            default: () => []
        },
        interval: {
            type: Number,
            default: 100
        },
        height: {
            type: String,
            default: '100%'
        },
        itemHeight: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 50
        },
        screen: {
            type: Array,
            default: () => [1, 1]
        },
        remain: {
            type: Number,
            default: 8
        }
    },
    setup(props, { emit }) {
        const { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef } = useHandler(props, emit);
        return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef };
    }
});

const _hoisted_1 = ["data-index"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 虚拟列表 "),
    createElementVNode("div", {
      class: "me-virtual-list",
      style: normalizeStyle(`height:${_ctx.height};`),
      onScrollPassive: _cache[0] || (_cache[0] = (...args) => (_ctx.onScroll && _ctx.onScroll(...args)))
    }, [
      createCommentVNode(" 滚动高度 "),
      createElementVNode("div", {
        class: "u-scroll-bar",
        style: normalizeStyle(`height:${_ctx.scrollBarHeight}px;`)
      }, null, 4 /* STYLE */),
      createCommentVNode(" 列表 "),
      createElementVNode("ul", {
        class: "m-list-scroll",
        style: normalizeStyle(`transform:translateY(${_ctx.scrollTranslateY}px);`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.renderData, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item.virtualId,
            "data-index": item.virtualId,
            ref_for: true,
            ref: $event => _ctx.setItemRef($event, item.virtualId)
          }, [
            renderSlot(_ctx.$slots, "default", { item: item })
          ], 8 /* PROPS */, _hoisted_1))
        }), 128 /* KEYED_FRAGMENT */))
      ], 4 /* STYLE */),
      renderSlot(_ctx.$slots, "more")
    ], 36 /* STYLE, HYDRATE_EVENTS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeVirtualList/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeVirtualList = script;

export { InMeVirtualList as default };
