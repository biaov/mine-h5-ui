import { computed, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, toDisplayString } from 'vue';

const useCounts = (props) => {
    const curText = computed(() => {
        const defaultText = `${props.modelValue}%`;
        return props.text ? props.text.replace(/\$default/g, defaultText) : defaultText;
    });
    const curPosi = computed(() => 5 * props.size + 500);
    return { curText, curPosi };
};

var script = defineComponent({
    name: 'MeProgressBar',
    props: {
        modelValue: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            default: 'line'
        },
        text: {
            type: String,
            default: ''
        },
        textShow: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: '100px'
        },
        borderRadius: {
            type: String,
            default: '8px'
        },
        size: {
            type: Number,
            default: 4
        },
        textColor: {
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: '#409eff'
        },
        backgorund: {
            type: String,
            default: '#ccc'
        },
        padding: {
            type: String,
            default: '0 10px'
        }
    },
    setup(props) {
        const { curText, curPosi } = useCounts(props);
        return { curText, curPosi };
    }
});

const _hoisted_1 = ["viewBox"];
const _hoisted_2 = ["d", "stroke", "stroke-width"];
const _hoisted_3 = ["d", "stroke", "stroke-dasharray", "stroke-width"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 进度条 "),
    createElementVNode("div", {
      class: "me-progress-bar",
      style: normalizeStyle(`padding:${_ctx.padding};`)
    }, [
      createCommentVNode(" 线型进度条 "),
      (_ctx.type === 'line')
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "m-line",
            style: normalizeStyle(`width:${_ctx.width};`)
          }, [
            (_ctx.textShow)
              ? (openBlock(), createElementBlock("h3", {
                  key: 0,
                  class: "u-txt",
                  style: normalizeStyle(`left:${_ctx.modelValue}%;background:${_ctx.activeColor};color:${_ctx.textColor};`)
                }, toDisplayString(_ctx.curText), 5 /* TEXT, STYLE */))
              : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "u-dot",
                  style: normalizeStyle(`width:${_ctx.size + 8}px;height:${_ctx.size + 8}px;left:${_ctx.modelValue}%;background:${_ctx.activeColor};`)
                }, null, 4 /* STYLE */)),
            createElementVNode("p", {
              class: "u-line",
              style: normalizeStyle(`height:${_ctx.size}px; background:${_ctx.backgorund};`)
            }, [
              createElementVNode("span", {
                style: normalizeStyle(`background:${_ctx.activeColor}; transform:translateX(${_ctx.modelValue - 100}%)`)
              }, null, 4 /* STYLE */)
            ], 4 /* STYLE */)
          ], 4 /* STYLE */))
        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" 环形进度条 "),
            createElementVNode("div", {
              class: "m-circle",
              style: normalizeStyle(`width:${_ctx.width};height:${_ctx.width};`)
            }, [
              (openBlock(), createElementBlock("svg", {
                viewBox: `0 0 ${_ctx.curPosi * 2} ${_ctx.curPosi * 2}`
              }, [
                createElementVNode("path", {
                  d: `M ${_ctx.curPosi} ${_ctx.curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`,
                  stroke: _ctx.backgorund,
                  "stroke-width": `${10 * this.size}px`
                }, null, 8 /* PROPS */, _hoisted_2),
                createElementVNode("path", {
                  d: `M ${_ctx.curPosi} ${_ctx.curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`,
                  stroke: _ctx.activeColor,
                  "stroke-dasharray": `${Math.round(31.4 * _ctx.modelValue)}px, 3140px`,
                  "stroke-width": `${10 * this.size}px`
                }, null, 8 /* PROPS */, _hoisted_3)
              ], 8 /* PROPS */, _hoisted_1)),
              (_ctx.textShow)
                ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "u-txt",
                    style: normalizeStyle(`color:${_ctx.textColor};`)
                  }, toDisplayString(_ctx.curText), 5 /* TEXT, STYLE */))
                : createCommentVNode("v-if", true)
            ], 4 /* STYLE */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeProgressBar/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeProgressBar = script;

export { InMeProgressBar as default };
