import { inject, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderSlot, toDisplayString } from 'vue';

const MeSwiperKey = 'MeSwiper';

const useName = (props) => {
    const { name, getName } = inject(MeSwiperKey, {});
    name === MeSwiperKey && getName(props.name);
    return {};
};

var script = defineComponent({
    name: 'MeSwiperItem',
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        url: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        background: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        useName(props);
        return {};
    }
});

const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "u-text"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 轮播图 "),
    createElementVNode("div", {
      class: "me-swiper-item",
      style: normalizeStyle(`background:${_ctx.background};`)
    }, [
      (_ctx.url)
        ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "u-img",
            src: _ctx.url,
            alt: "banner",
            draggable: "false"
          }, null, 8 /* PROPS */, _hoisted_1))
        : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        (_ctx.text)
          ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.text), 1 /* TEXT */))
          : createCommentVNode("v-if", true)
      ])
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeSwiperItem/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeSwiperItem = script;

export { InMeSwiperItem as default };
