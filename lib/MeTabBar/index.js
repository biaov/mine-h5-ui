import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderList, normalizeClass, toDisplayString } from 'vue';

const useHandler = (emit) => {
    const onClick = (item) => {
        !item.state && emit('on-change', { ...item });
    };
    return { onClick };
};

var script = defineComponent({
    name: 'MeTabBar',
    emits: ['on-change'],
    props: {
        list: {
            type: Array,
            required: true
        },
        borderColor: {
            type: String,
            default: '#dcdfe6'
        },
        background: {
            type: String,
            default: '#fff'
        },
        color: {
            type: String,
            default: '#949494'
        },
        colorSelected: {
            type: String,
            default: '#409eff'
        }
    },
    setup(props, { emit }) {
        const { onClick } = useHandler(emit);
        return { onClick };
    }
});

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "u-txt" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 标签栏 "),
    createElementVNode("ul", {
      class: "me-tab-bar",
      style: normalizeStyle(`border-top-color:${_ctx.borderColor};background:${_ctx.background};`)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index) => {
        return (openBlock(), createElementBlock("li", {
          key: index,
          onClick: $event => (_ctx.onClick(item)),
          class: normalizeClass({ selected: item.state }),
          style: normalizeStyle(`color:${item.state ? _ctx.colorSelected : _ctx.color};`)
        }, [
          (item.icon)
            ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["iconfont u-icon", [item.icon, item.dot && 'dot']])
              }, [
                (item.badge && !item.dot)
                  ? (openBlock(), createElementBlock("em", _hoisted_2, toDisplayString(item.badge), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 2 /* CLASS */))
            : (openBlock(), createElementBlock("img", {
                key: 1,
                src: item.state ? item.imgSelected : item.img,
                alt: "图标",
                class: "u-img"
              }, null, 8 /* PROPS */, _hoisted_3)),
          createElementVNode("span", _hoisted_4, toDisplayString(item.text), 1 /* TEXT */)
        ], 14 /* CLASS, STYLE, PROPS */, _hoisted_1))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeTabBar/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeTabBar = script;

export { InMeTabBar as default };
