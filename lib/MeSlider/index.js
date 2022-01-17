import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, mergeProps, toHandlers, withModifiers, renderSlot } from 'vue';

const useHandler = (props, emit) => {
    const currentValue = ref(100);
    let startX = 0;
    let changeValue = 0;
    let screenW = 0;
    const handleCurrent = () => {
        currentValue.value = 100 + props.min - props.modelValue;
    };
    const onTouchstart = (e) => {
        startX = e.changedTouches[0].clientX;
        changeValue = props.modelValue;
        screenW = document.body.offsetWidth;
        emit('on-start', e);
    };
    const onTouchmove = (e) => {
        const currentX = e.changedTouches[0].clientX;
        const diffX = Math.ceil(((currentX - startX) * 100) / screenW);
        let afterVal = changeValue + diffX;
        afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal;
        emit('update:modelValue', afterVal);
        emit('on-move', e);
    };
    const onTouchend = (e) => {
        emit('on-end', e);
    };
    const onMousemove = (e) => {
        const currentX = e.clientX;
        const diffX = Math.ceil(((currentX - startX) * 100) / screenW);
        let afterVal = changeValue + diffX;
        afterVal = diffX > 0 ? (afterVal > props.max ? props.max : afterVal) : afterVal < props.min ? props.min : afterVal;
        emit('update:modelValue', afterVal);
        emit('on-move', e);
    };
    const onMouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
        emit('on-end', e);
    };
    const onMousedown = (e) => {
        startX = e.clientX;
        changeValue = props.modelValue;
        screenW = document.body.offsetWidth;
        document.onmousemove = onMousemove;
        document.onmouseup = onMouseup;
        emit('on-start', e);
    };
    watch(() => props.modelValue, () => {
        !props.disabled && handleCurrent();
    });
    handleCurrent();
    return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown };
};

var script = defineComponent({
    name: 'MeSlider',
    emits: ['update:modelValue', 'on-start', 'on-move', 'on-end'],
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 0
        },
        styles: {
            type: Object,
            default: () => ({
                height: '',
                radius: '',
                lineBgc: ''
            })
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isBtn: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandler(props, emit);
        return { currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown };
    }
});

const _hoisted_1 = ["data-disabled"];
const _hoisted_2 = {
  key: 0,
  class: "u-round"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 滑块 "),
    createElementVNode("div", {
      class: "me-slider",
      "data-disabled": _ctx.disabled
    }, [
      createCommentVNode(" 颜色线条 "),
      createElementVNode("p", {
        class: "u-line",
        style: normalizeStyle(`height:${_ctx.styles.height};border-radius:${_ctx.styles.radius};`)
      }, [
        createElementVNode("span", {
          style: normalizeStyle(`background:${_ctx.styles.lineBgc};transform:translateX(-${_ctx.currentValue}%);`)
        }, null, 4 /* STYLE */)
      ], 4 /* STYLE */),
      createCommentVNode(" 拖拽div "),
      createElementVNode("div", mergeProps({
        class: "m-drag",
        style: `left:${100 - _ctx.currentValue}%;`
      }, toHandlers({
        touchmove: _ctx.onTouchmove,
        touchend: _ctx.onTouchend
      }), {
        onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.onTouchstart && _ctx.onTouchstart(...args)), ["prevent"])),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => (_ctx.onTouchmove && _ctx.onTouchmove(...args))),
        onTouchend: _cache[2] || (_cache[2] = (...args) => (_ctx.onTouchend && _ctx.onTouchend(...args))),
        onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => (_ctx.onMousedown && _ctx.onMousedown(...args)), ["prevent"]))
      }), [
        createCommentVNode(" 圆点 "),
        (!_ctx.isBtn)
          ? (openBlock(), createElementBlock("span", _hoisted_2))
          : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" 自定义按钮 "),
              renderSlot(_ctx.$slots, "default")
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ], 16 /* FULL_PROPS */)
    ], 8 /* PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeSlider/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSlider = script;

export { InMeSlider as default };
