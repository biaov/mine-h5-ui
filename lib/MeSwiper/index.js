import { ref, watch, provide, onMounted, onUnmounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, withModifiers, normalizeClass, renderSlot, renderList } from 'vue';

const MeSwiperKey = 'MeSwiper';

const useHandMove = (props, emit) => {
    const swiperDom = ref();
    const dots = ref(1);
    const dotIndex = ref(0);
    const currentValue = ref(0);
    const isActive = ref(false);
    let maxDistance = 0;
    let initialValue = 0;
    let startX = 0;
    let minDistance = 0;
    let timer;
    const names = [];
    const startAnimate = () => {
        timer = setInterval(() => {
            dotIndex.value = dotIndex.value < dots.value - 1 ? dotIndex.value + 1 : 0;
            isActive.value = true;
            currentValue.value = -dotIndex.value * maxDistance;
        }, props.delay);
    };
    const closeAnimate = () => {
        clearInterval(timer);
    };
    const onTouchstart = (e) => {
        initialValue = currentValue.value;
        isActive.value = false;
        startX = e.changedTouches[0].clientX;
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX;
        currentValue.value = distanceX + initialValue;
    };
    const onTouchend = (e) => {
        isActive.value = true;
        const currentX = e.changedTouches[0].clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            const distanceX = diffX > minDistance ? maxDistance : 0;
            const idealX = initialValue + distanceX;
            currentValue.value = idealX > 0 ? 0 : idealX;
        }
        else if (diffX < 0) {
            const distanceX = diffX < -minDistance ? -maxDistance : 0;
            const idealX = initialValue + distanceX;
            const maxDistanceX = (1 - dots.value) * maxDistance;
            currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX;
        }
        dotIndex.value = -currentValue.value / maxDistance;
        emit('on-change', names[dotIndex.value - 1]);
    };
    const onMousemove = (e) => {
        isActive.value = false;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX;
        currentValue.value = distanceX + initialValue;
    };
    const onMouseup = (e) => {
        isActive.value = true;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        if (diffX > 0) {
            const distanceX = diffX > minDistance ? maxDistance : 0;
            const idealX = initialValue + distanceX;
            currentValue.value = idealX > 0 ? 0 : idealX;
        }
        else if (diffX < 0) {
            const distanceX = diffX < -minDistance ? -maxDistance : 0;
            const idealX = initialValue + distanceX;
            const maxDistanceX = (1 - dots.value) * maxDistance;
            currentValue.value = idealX < maxDistanceX ? maxDistanceX : idealX;
        }
        dotIndex.value = -currentValue.value / maxDistance;
        emit('on-change', names[dotIndex.value - 1]);
        document.onmousemove = null;
        document.onmouseup = null;
    };
    const onMousedown = (e) => {
        initialValue = currentValue.value;
        startX = e.clientX;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
    };
    const updateValue = () => {
        const { offsetWidth } = swiperDom.value;
        maxDistance = offsetWidth;
        minDistance = offsetWidth / 4;
        props.loop && startAnimate();
        dots.value = names.length;
    };
    watch(() => props.loop, value => {
        value ? startAnimate() : closeAnimate();
    });
    const getName = (name) => {
        names.push(name);
    };
    provide(MeSwiperKey, { name: MeSwiperKey, getName });
    onMounted(updateValue);
    onUnmounted(closeAnimate);
    return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script = defineComponent({
    name: 'MeSwiper',
    emits: ['on-change'],
    props: {
        loop: {
            type: Boolean,
            default: false
        },
        delay: {
            type: Number,
            default: 3000
        },
        height: {
            type: Number
        },
        dot: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: 4
        }
    },
    setup(props, { emit }) {
        const { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props, emit);
        return { swiperDom, dots, dotIndex, currentValue, isActive, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1 = {
  key: 0,
  class: "m-dot"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 轮播图 "),
    createElementVNode("div", {
      class: "me-swiper",
      style: normalizeStyle(`height:${_ctx.height}px;border-radius:${_ctx.radius}px;`),
      ref: "swiperDom",
      onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
      onTouchend: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
      onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["m-imgs", { active: _ctx.isActive }]),
        style: normalizeStyle(`transform:translateX(${_ctx.currentValue}px);`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6 /* CLASS, STYLE */),
      createCommentVNode(" 指示点 "),
      (_ctx.dot)
        ? (openBlock(), createElementBlock("ul", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dots, (item, index) => {
              return (openBlock(), createElementBlock("li", {
                key: index,
                class: normalizeClass({ on: _ctx.dotIndex === index })
              }, null, 2 /* CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true)
    ], 36 /* STYLE, HYDRATE_EVENTS */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeSwiper/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSwiper = script;

export { InMeSwiper as default };
