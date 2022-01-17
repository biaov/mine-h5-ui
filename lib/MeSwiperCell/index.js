import { ref, onMounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, withModifiers, renderSlot } from 'vue';

const useHandMove = () => {
    const hidden = ref();
    const maxDistance = ref(0);
    const currentValue = ref(0);
    const isActive = ref(false);
    let initialValue = 0;
    let startX = 0;
    let minDistance = 0;
    const onTouchstart = (e) => {
        initialValue = currentValue.value;
        isActive.value = false;
        startX = e.changedTouches[0].clientX;
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = initialValue + currentX - startX;
        currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX;
    };
    const onTouchend = (e) => {
        isActive.value = true;
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            currentValue.value = diffX > minDistance ? 0 : -maxDistance.value;
        }
        else if (diffX < 0) {
            currentValue.value = diffX < -minDistance ? -maxDistance.value : 0;
        }
    };
    const onMousemove = (e) => {
        isActive.value = false;
        const currentX = e.clientX;
        const diffX = initialValue + currentX - startX;
        currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX;
    };
    const onMouseup = (e) => {
        const currentX = e.clientX;
        const diffX = currentX - startX;
        isActive.value = true;
        if (diffX > 0) {
            currentValue.value = diffX > minDistance ? 0 : -maxDistance.value;
        }
        else if (diffX < 0) {
            currentValue.value = diffX < -minDistance ? -maxDistance.value : 0;
        }
        document.onmousemove = null;
        document.onmouseup = null;
    };
    const onMousedown = (e) => {
        initialValue = currentValue.value;
        startX = e.clientX;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
    };
    onMounted(() => {
        const { offsetWidth } = hidden.value;
        maxDistance.value = offsetWidth;
        minDistance = offsetWidth / 4;
    });
    return { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script = defineComponent({
    name: 'MeSwiperCell',
    setup() {
        const { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove();
        return { hidden, maxDistance, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1 = { class: "me-swiper-cell" };
const _hoisted_2 = { class: "u-content" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 滑动单元格 "),
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", {
        class: normalizeClass(["m-swiper", { active: _ctx.isActive }]),
        style: normalizeStyle(`transform:translateX(${_ctx.currentValue}px);`),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent","stop"])),
        onTouchstart: _cache[1] || (_cache[1] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
        onTouchend: _cache[3] || (_cache[3] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
        onMousedown: _cache[4] || (_cache[4] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
      }, [
        createCommentVNode(" 内容 "),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "content")
        ]),
        createCommentVNode(" 右侧隐藏部分 "),
        createElementVNode("div", {
          class: "u-hidden",
          ref: "hidden",
          style: normalizeStyle(`right:-${_ctx.maxDistance}px;`)
        }, [
          renderSlot(_ctx.$slots, "hidden")
        ], 4 /* STYLE */)
      ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */)
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeSwiperCell/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSwiperCell = script;

export { InMeSwiperCell as default };
