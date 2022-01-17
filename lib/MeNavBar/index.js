import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, toDisplayString, renderSlot } from 'vue';

const useHandler = (emit) => {
    const onClickLeft = (e) => {
        emit('click-left', e);
    };
    const onClickRight = (e) => {
        emit('click-right', e);
    };
    return { onClickLeft, onClickRight };
};

var script = defineComponent({
    name: 'MeNavBar',
    emits: ['click-left', 'click-right'],
    props: {
        title: {
            type: String,
            default: ''
        },
        leftArrow: {
            type: Boolean,
            default: true
        },
        leftText: {
            type: String,
            default: ''
        },
        rightText: {
            type: String,
            default: ''
        },
        styles: {
            type: Object,
            default: () => ({
                borderColor: '#dcdfe6',
                background: '#fff',
                titleColor: '#494949',
                leftColor: '#949494',
                rightColor: '#949494'
            })
        }
    },
    setup(props, { emit }) {
        const { onClickLeft, onClickRight } = useHandler(emit);
        return { onClickLeft, onClickRight };
    }
});

const _hoisted_1 = {
  key: 0,
  class: "iconfont icon-left"
};
const _hoisted_2 = { class: "u-rt" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 导航栏 "),
    createElementVNode("div", {
      class: "me-nav-bar",
      style: normalizeStyle(`background:${_ctx.styles.background};border-bottom-color:${_ctx.styles.borderColor};`)
    }, [
      createCommentVNode(" 左侧按钮 "),
      createElementVNode("div", {
        class: "u-lf",
        onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClickLeft && _ctx.onClickLeft(...args))),
        style: normalizeStyle(`color:${_ctx.styles.leftColor};`)
      }, [
        (_ctx.leftArrow)
          ? (openBlock(), createElementBlock("i", _hoisted_1))
          : createCommentVNode("v-if", true),
        createElementVNode("span", null, toDisplayString(_ctx.leftText), 1 /* TEXT */)
      ], 4 /* STYLE */),
      createCommentVNode(" 中间标题 "),
      createElementVNode("h2", {
        class: "u-tit",
        style: normalizeStyle(`color:${_ctx.styles.titleColor};`)
      }, toDisplayString(_ctx.title), 5 /* TEXT, STYLE */),
      createCommentVNode(" 右侧按钮 "),
      createElementVNode("div", _hoisted_2, [
        (_ctx.rightText)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "u-btn",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClickRight && _ctx.onClickRight(...args))),
              style: normalizeStyle(`color:${_ctx.styles.rightColor};`)
            }, toDisplayString(_ctx.rightText), 5 /* TEXT, STYLE */))
          : renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeNavBar/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeNavBar = script;

export { InMeNavBar as default };
