import { ref, provide, onMounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderSlot } from 'vue';

const MeGridKey = 'MeGrid';

const useInitSlots = (props) => {
    const grid = ref();
    const params = { cols: props.cols, borderColor: props.borderColor };
    provide(MeGridKey, { name: MeGridKey, params });
    onMounted(() => {
        const gridItems = grid.value?.querySelectorAll('.me-grid-item');
        gridItems?.forEach((elem, i) => {
            elem.style.borderTopWidth = `${+(i < props.cols)}px`;
            elem.style.borderLeftWidth = `${+(i % props.cols === 0)}px`;
        });
    });
    return { grid };
};

var script = defineComponent({
    name: 'MeGrid',
    props: {
        cols: {
            type: Number,
            default: 4
        },
        borderColor: {
            type: String,
            default: '#edeff2'
        }
    },
    setup(props) {
        const { grid } = useInitSlots(props);
        return { grid };
    }
});

const _hoisted_1 = {
  class: "me-grid",
  ref: "grid"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 宫格 "),
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeGrid/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeGrid = script;

export { InMeGrid as default };
