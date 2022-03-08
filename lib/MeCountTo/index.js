import { ref, computed, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, toDisplayString } from 'vue';

var Validator = {
    validPhone: /^1[3456789]\d{9}$/,
    validPwd: /^(?!_+$)(?!\d+$)(?!\D+$)[A-Za-z0-9]{6,12}$/i,
    validEmail: /^(\w|-)+@(\w|-)+(\.(\w|-)+)+$/i,
    validIdcard: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/i,
    validImgs: /\.(svg|gif|png|jpe?g)$/i,
    validThousand: /(\d)(?=(\d{3})+$)/g,
    validThousandFloat: /(\d)(?=(\d{3})+\.)/g
};

const { validThousand, validThousandFloat } = Validator;
const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const FormatThousand = (num) => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    const numStr = String(num);
    return numStr.replace(numStr.includes('.') ? validThousandFloat : validThousand, '$1,');
};

const useHandler = (props, emit) => {
    const curValue = ref(props.startValue);
    const comValue = computed(() => (props.thousand ? FormatThousand(curValue.value) : curValue.value));
    const startAnimate = () => {
        let startTime;
        const startCurAnimate = (timestamp) => {
            startTime === undefined && (startTime = timestamp);
            const elapsed = timestamp - startTime;
            const virtual = ~~(((props.endValue - props.startValue) * elapsed) / props.duration + props.startValue);
            curValue.value = Math.min(virtual, props.endValue);
            if (elapsed < props.duration) {
                window.requestAnimationFrame(startCurAnimate);
            }
            else {
                emit('update:modelValue', false);
                emit('on-end');
            }
        };
        window.requestAnimationFrame(startCurAnimate);
    };
    watch(() => props.modelValue, value => {
        value && startAnimate();
    }, {
        immediate: true
    });
    return { comValue };
};

var script = defineComponent({
    name: 'MeCountTo',
    emits: ['update:modelValue', 'on-end'],
    props: {
        modelValue: {
            type: Boolean,
            default: true
        },
        startValue: {
            type: Number,
            default: 0
        },
        endValue: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            default: 1500
        },
        thousand: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { comValue } = useHandler(props, emit);
        return { comValue };
    }
});

const _hoisted_1 = { class: "me-count-to" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 数字滚动 "),
    createElementVNode("div", _hoisted_1, toDisplayString(_ctx.comValue), 1 /* TEXT */)
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeCountTo/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeCountTo = script;

export { InMeCountTo as default };
