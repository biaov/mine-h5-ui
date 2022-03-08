import { ref, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeStyle, renderList, toDisplayString } from 'vue';

const useHandler = (props) => {
    const fieldsetList = ref([]);
    const len = props.list.length;
    const flagBool = len < 3;
    const curLine = ref(props.line);
    if (flagBool) {
        curLine.value.radius = curLine.value.radius ?? 0;
        curLine.value.size = curLine.value.size ?? 1;
    }
    fieldsetList.value = props.list.map((item, index) => {
        let deg = (360 / len) * index;
        deg = flagBool ? 0 : deg;
        return {
            text: item,
            deg
        };
    });
    return { fieldsetList, curLine };
};

var script = defineComponent({
    name: 'MeDivider',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        left: {
            type: Number
        },
        right: {
            type: Number
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        origin: {
            type: Number
        },
        line: {
            type: Object,
            default: () => ({
                radius: 0,
                color: '#dcdfe6',
                size: 1
            })
        },
        text: {
            type: Object,
            default: () => ({
                color: '#494949',
                size: 14
            })
        }
    },
    setup(props) {
        const { fieldsetList, curLine } = useHandler(props);
        return { fieldsetList, curLine };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 分割线 "),
    createElementVNode("div", {
      class: "me-divider",
      style: normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px;`)
    }, [
      (_ctx.fieldsetList.length > 0)
        ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fieldsetList, (item, index) => {
            return (openBlock(), createElementBlock("fieldset", {
              class: "u-fieldset",
              key: index,
              style: normalizeStyle(`transform-origin:center ${_ctx.origin}px;transform:translate(-50%, -50%) rotate(${item.deg}deg);border-top-width:${_ctx.curLine.size}px;border-top-color:${_ctx.curLine.color};border-radius: ${_ctx.curLine.radius}px;`),
              role: "presentation"
            }, [
              createElementVNode("legend", {
                class: "u-legend",
                style: normalizeStyle(`margin-left:${_ctx.left}px;margin-right:${_ctx.right}px;color:${_ctx.text.color};font-size:${_ctx.text.size}px`)
              }, toDisplayString(item.text), 5 /* TEXT, STYLE */)
            ], 4 /* STYLE */))
          }), 128 /* KEYED_FRAGMENT */))
        : (openBlock(), createElementBlock("fieldset", {
            key: 1,
            class: "u-fieldset",
            style: normalizeStyle(`transform-origin:center ${_ctx.origin}px;border-top-width:${_ctx.curLine.size}px;border-top-color:${_ctx.curLine.color};border-radius: ${_ctx.curLine.radius}px;`),
            role: "presentation"
          }, null, 4 /* STYLE */))
    ], 4 /* STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeDivider/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeDivider = script;

export { InMeDivider as default };
