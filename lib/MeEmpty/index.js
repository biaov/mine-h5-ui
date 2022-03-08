import { ref, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, normalizeClass, toDisplayString, renderSlot } from 'vue';

const useIconName = (props) => {
    const names = {
        default: 'jigou_wushuju',
        network: 'wangluocuowu',
        search: 'wushuju'
    };
    const icon = ref(props.iconName || names[props.type]);
    return { icon };
};

var script = defineComponent({
    name: 'MeEmpty',
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'default'
        },
        height: {
            type: Number,
            default: 200
        },
        iconName: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { icon } = useIconName(props);
        return { icon };
    }
});

const _hoisted_1 = { class: "u-img" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "u-txt" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 空状态 "),
    createElementVNode("div", {
      class: "me-empty",
      style: normalizeStyle(`min-height:${_ctx.height}px;`)
    }, [
      createCommentVNode(" 图片 "),
      createElementVNode("div", _hoisted_1, [
        (_ctx.url)
          ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.url,
              alt: "empty"
            }, null, 8 /* PROPS */, _hoisted_2))
          : (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(`iconfont icon-${_ctx.icon}`)
            }, null, 2 /* CLASS */))
      ]),
      createCommentVNode(" 文本 "),
      createElementVNode("div", _hoisted_3, toDisplayString(_ctx.text), 1 /* TEXT */),
      renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeEmpty/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeEmpty = script;

export { InMeEmpty as default };
