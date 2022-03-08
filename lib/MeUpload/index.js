import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, ref, watch, resolveComponent, renderList, createBlock, createVNode, toDisplayString, TransitionGroup, withCtx, withDirectives, vShow } from 'vue';

const useClick = (emit) => {
    const onClick = (e) => {
        emit('on-click', e);
    };
    return { onClick };
};

var script$1 = defineComponent({
    name: 'MeIcon',
    emits: ['on-click'],
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const { onClick } = useClick(emit);
        return {
            onClick
        };
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 图标 "),
    createElementVNode("i", {
      class: normalizeClass(["iconfont me-icon", _ctx.name]),
      style: normalizeStyle(`color:${_ctx.color};font-size:${_ctx.size};`),
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, null, 6 /* CLASS, STYLE */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$1.render = render$1;
script$1.__file = "packages/MeIcon/index.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const InMeIcon = script$1;

var Validator = {
    validPhone: /^1[3456789]\d{9}$/,
    validPwd: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
    validEmail: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
    validIdcard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
    validImgs: /\.(svg|gif|png|jpe?g)$/i,
    validThousand: /(\d)(?=(\d{3})+$)/g,
    validThousandFloat: /(\d)(?=(\d{3})+\.)/g
};

const useHandler = (props, emit) => {
    const listData = ref(props.fileList);
    const curNum = ref(1);
    const isPreview = ref(false);
    let timer = null;
    const onDelete = (e, item) => {
        e.stopPropagation();
        if (!props.disabled && props.beforeDelete(item) !== false) {
            const index = listData.value.findIndex(({ id }) => id === item.id) ?? 0;
            listData.value.splice(index, 1);
            emit('update:fileList', listData.value);
            emit('update:file-list', listData.value);
            emit('on-change', listData.value);
        }
    };
    const startTimer = () => {
        if (listData.value.length > 1) {
            timer = setInterval(() => {
                curNum.value++;
                if (curNum.value > listData.value.length) {
                    curNum.value = 1;
                }
            }, 3000);
        }
    };
    const closePreview = () => {
        clearInterval(timer);
        isPreview.value = false;
    };
    const onChange = (e) => {
        const files = Object.values(e.target.files).slice(0, props.maxCount);
        if (props.beforeRead(files) !== false) {
            const arr = [];
            files.forEach(elem => {
                if (elem.size <= props.maxSize && Validator.validImgs.test(elem.name)) {
                    const len = listData.value.length;
                    const id = len === 0 ? 1 : listData.value[len - 1].id + 1;
                    const url = window.URL.createObjectURL(elem);
                    listData.value.push({ id, url });
                    arr.push(elem);
                }
            });
            if (arr.length > 0) {
                props.afterRead(arr);
                emit('on-change', listData.value);
            }
        }
    };
    const onPreview = ({ id }) => {
        if (!props.disabled && props.preview) {
            curNum.value = id;
            isPreview.value = true;
            startTimer();
        }
    };
    watch(() => props.fileList, value => {
        listData.value = value;
    }, {
        deep: true
    });
    return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview };
};

var script = defineComponent({
    name: 'MeUpload',
    components: {
        MeIcon: InMeIcon
    },
    emits: ['update:fileList', 'update:file-list', 'on-change'],
    props: {
        fileList: {
            type: Array,
            default: () => []
        },
        preview: {
            type: Boolean,
            default: true
        },
        maxCount: {
            type: Number,
            default: 1000
        },
        maxSize: {
            type: Number,
            default: 2 * 1024 * 1024
        },
        multiple: {
            type: Boolean,
            default: false
        },
        deletable: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        beforeRead: {
            type: Function,
            default: () => () => true
        },
        afterRead: {
            type: Function,
            default: () => () => true
        },
        beforeDelete: {
            type: Function,
            default: () => () => true
        }
    },
    setup(props, { emit }) {
        const { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview } = useHandler(props, emit);
        return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview };
    }
});

const _hoisted_1 = ["data-disabled"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 0,
  class: "m-upload"
};
const _hoisted_5 = ["multiple", "disabled"];
const _hoisted_6 = { class: "u-num" };
const _hoisted_7 = ["src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_me_icon = resolveComponent("me-icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 上传图片 "),
    createElementVNode("div", {
      class: "me-upload",
      "data-disabled": _ctx.disabled
    }, [
      createCommentVNode(" 展示图片 "),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
        return (openBlock(), createElementBlock("div", {
          class: "m-imgs",
          key: item.id,
          onClick: $event => (_ctx.onPreview(item))
        }, [
          createElementVNode("img", {
            src: item.url,
            class: "u-img",
            alt: "图片"
          }, null, 8 /* PROPS */, _hoisted_3),
          (_ctx.deletable)
            ? (openBlock(), createBlock(_component_me_icon, {
                key: 0,
                name: "icon-close",
                color: "#dcdee0",
                size: "16px",
                onOnClick: $event => (_ctx.onDelete($event, item))
              }, null, 8 /* PROPS */, ["onOnClick"]))
            : createCommentVNode("v-if", true)
        ], 8 /* PROPS */, _hoisted_2))
      }), 128 /* KEYED_FRAGMENT */)),
      createCommentVNode(" 上传按钮 "),
      (_ctx.listData.length < _ctx.maxCount)
        ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_component_me_icon, {
              name: "icon-xiangji",
              color: "#dcdee0",
              size: "20px"
            }),
            createElementVNode("input", {
              type: "file",
              class: "u-file",
              multiple: _ctx.multiple,
              onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.onChange && _ctx.onChange(...args))),
              disabled: _ctx.disabled
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5)
          ]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" 图片预览 "),
      (_ctx.isPreview)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "m-preview",
            onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.closePreview && _ctx.closePreview(...args)))
          }, [
            createElementVNode("div", _hoisted_6, toDisplayString(_ctx.curNum) + " / " + toDisplayString(_ctx.listData.length), 1 /* TEXT */),
            createVNode(TransitionGroup, {
              tag: "ul",
              name: "slider",
              class: "m-slider"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
                  return withDirectives((openBlock(), createElementBlock("li", {
                    key: item.id
                  }, [
                    createElementVNode("img", {
                      src: item.url,
                      alt: "图片"
                    }, null, 8 /* PROPS */, _hoisted_7)
                  ])), [
                    [vShow, _ctx.curNum === item.id]
                  ])
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              _: 1 /* STABLE */
            })
          ]))
        : createCommentVNode("v-if", true)
    ], 8 /* PROPS */, _hoisted_1)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeUpload/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeUpload = script;

export { InMeUpload as default };
