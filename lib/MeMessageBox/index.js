import { ref, onMounted, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, normalizeClass, createElementVNode, withModifiers, toDisplayString, withDirectives, vModelText, createVNode, render as render$1 } from 'vue';

const useShow = (props, emit) => {
    const isDestroy = ref(false);
    const isShow = ref(false);
    const inputValue = ref('');
    const closeShow = (cusEventName, value) => {
        isShow.value = false;
        emit('action', cusEventName, value);
        setTimeout(() => {
            isDestroy.value = true;
        }, 400);
    };
    const onCancel = () => {
        closeShow('onOff');
    };
    const onConfirm = () => {
        closeShow('onOk', props.type === 'prompt' ? inputValue.value : undefined);
    };
    onMounted(() => {
        setTimeout(() => {
            isShow.value = true;
        }, 100);
    });
    return { isShow, isDestroy, inputValue, onCancel, onConfirm };
};

var script = defineComponent({
    name: 'MeMessageBox',
    emits: ['action'],
    props: {
        tips: {
            type: String,
            default: '提示'
        },
        type: {
            type: String,
            default: 'confirm'
        },
        message: {
            type: String,
            default: ''
        },
        html: {
            type: String,
            default: ''
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        confirmButtonText: {
            type: String,
            default: '确认'
        },
        onOk: {
            type: Function,
            default: () => () => { }
        },
        onOff: {
            type: Function,
            default: () => () => { }
        }
    },
    setup(props, { emit }) {
        const { isShow, isDestroy, inputValue, onCancel, onConfirm } = useShow(props, emit);
        return { isShow, isDestroy, inputValue, onCancel, onConfirm };
    }
});

const _hoisted_1 = { class: "u-tips" };
const _hoisted_2 = {
  key: 0,
  class: "m-text"
};
const _hoisted_3 = {
  key: 1,
  class: "u-prompt"
};
const _hoisted_4 = { class: "u-label" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "m-btn" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 弹出框 "),
    (!_ctx.isDestroy)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["me-message-box", { show: _ctx.isShow }]),
          onClick: _cache[4] || (_cache[4] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
        }, [
          createElementVNode("div", {
            class: normalizeClass(["m-picker", { show: _ctx.isShow }]),
            onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
          }, [
            createCommentVNode(" 提示语 "),
            createElementVNode("h3", _hoisted_1, toDisplayString(_ctx.tips), 1 /* TEXT */),
            createCommentVNode(" Alert 弹出框 / Confirm 确认框 "),
            (['alert', 'confirm'].includes(_ctx.type))
              ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.message), 1 /* TEXT */))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Prompt 输入框 "),
            (_ctx.type === 'prompt')
              ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createElementVNode("label", _hoisted_4, toDisplayString(_ctx.message), 1 /* TEXT */),
                  withDirectives(createElementVNode("input", {
                    type: "text",
                    class: "u-input",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event))
                  }, null, 512 /* NEED_PATCH */), [
                    [vModelText, _ctx.inputValue]
                  ])
                ]))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Custom 自定义框 "),
            (_ctx.type === 'custom')
              ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  innerHTML: _ctx.html
                }, null, 8 /* PROPS */, _hoisted_5))
              : createCommentVNode("v-if", true),
            createCommentVNode(" 操作按钮 "),
            createElementVNode("div", _hoisted_6, [
              createCommentVNode(" 取消按钮 "),
              (_ctx.type !== 'alert')
                ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    type: "button",
                    class: "u-btn-cancel",
                    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onCancel && _ctx.onCancel(...args)))
                  }, toDisplayString(_ctx.cancelButtonText), 1 /* TEXT */))
                : createCommentVNode("v-if", true),
              createCommentVNode(" 确认按钮 "),
              createElementVNode("button", {
                type: "button",
                class: "u-btn-confirm",
                onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onConfirm && _ctx.onConfirm(...args)))
              }, toDisplayString(_ctx.confirmButtonText), 1 /* TEXT */)
            ])
          ], 2 /* CLASS */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeMessageBox/index.vue";

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;

const MessageBox = (option, type) => {
    if (!IsType('Object', option)) {
        throw new Error(`${option} is not Object`);
    }
    else if (option.html && option.html.includes('script')) {
        throw new Error('Your HTML may be attacked by XSS');
    }
    else {
        return new Promise((resolve, reject) => {
            const curOption = { ...option };
            type && (curOption.type = type);
            curOption.onAction = (action, value) => {
                switch (action) {
                    case 'onOk':
                        curOption.onOk ? curOption.onOk(value) : resolve(value);
                        break;
                    case 'onOff':
                        curOption.onOff ? curOption.onOff() : reject();
                        break;
                }
            };
            const vm = createVNode(script, curOption);
            const container = document.createElement('div');
            render$1(vm, container);
            document.body.appendChild(container.firstElementChild);
        });
    }
};
const types = ['alert', 'confirm', 'prompt', 'custom'];
types.forEach(type => {
    MessageBox[type] = (option) => MessageBox(option, type);
});
const alert = (option) => MessageBox(option, 'alert');
const confirm = (option) => MessageBox(option, 'confirm');
const prompt = (option) => MessageBox(option, 'prompt');
const custom = (option) => MessageBox(option, 'custom');

const InMeMessageBox = MessageBox;
InMeMessageBox.install = (app) => {
    app.config.globalProperties.$MeMessageBox = MessageBox;
    app.config.globalProperties.$MeAlert = alert;
    app.config.globalProperties.$MeConfirm = confirm;
    app.config.globalProperties.$MePrompt = prompt;
    app.config.globalProperties.$MeCustom = custom;
};

export { InMeMessageBox as default };
