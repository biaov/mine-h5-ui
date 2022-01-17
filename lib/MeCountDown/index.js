import { ref, watch, defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderSlot, normalizeProps, guardReactiveProps, createTextVNode, toDisplayString } from 'vue';

const IsType = (type, value) => Object.prototype.toString.call(value).slice(8, -1) === type;
const CountDown = (num, format = 'hh:mm:ss') => {
    if (!IsType('Number', num))
        throw new Error(`${num} is not number`);
    if (!'DD:hh:mm:ss:ms'.includes(format)) {
        throw new Error(`${format} form error`);
    }
    const DD = ~~(num / (1000 * 60 * 60 * 24));
    let hh = ~~((num / (1000 * 60 * 60)) % 24);
    let mm = ~~((num / (1000 * 60)) % 60);
    let ss = ~~((num / 1000) % 60);
    let ms = ~~(num % 1000);
    const formatData = {};
    const doubleDigit = (digit) => (digit < 10 ? `0${digit}` : String(digit));
    format.includes('DD') ? (formatData.DD = doubleDigit(DD)) : (hh += DD * 24);
    format.includes('hh') ? (formatData.hh = doubleDigit(hh)) : (mm += hh * 60);
    format.includes('mm') ? (formatData.mm = doubleDigit(mm)) : (ss += mm * 60);
    format.includes('ss') ? (formatData.ss = doubleDigit(ss)) : (ms += ss * 1000);
    if (format.includes('ms')) {
        const curMs = format.includes('mm') ? doubleDigit(ms) : num;
        formatData.ms = +String(curMs).slice(0, 2);
    }
    return formatData;
};

const useCountdown = (props, emit) => {
    const formatAfter = ref({});
    let timer;
    const addSubNum = props.format.includes('ms') ? 10 : 1000;
    let curTime = 0;
    const startCountdown = () => {
        if (timer)
            return;
        timer = setInterval(() => {
            if (curTime <= 0) {
                clearInterval(timer);
                timer = undefined;
                emit('on-end');
            }
            else {
                curTime -= addSubNum;
                formatAfter.value = CountDown(curTime, props.format);
                emit('on-progress', curTime);
            }
        }, addSubNum);
    };
    const suspendCountdown = () => {
        clearInterval(timer);
        timer = undefined;
    };
    const resetCountdown = () => {
        curTime = props.time;
        formatAfter.value = CountDown(curTime, props.format);
    };
    watch(() => props.isStart, value => {
        value && startCountdown();
    }, {
        immediate: true
    });
    watch(() => props.isSuspend, value => {
        value && suspendCountdown();
    });
    watch(() => props.isReset, value => {
        value && resetCountdown();
    });
    resetCountdown();
    return { formatAfter };
};

var script = defineComponent({
    name: 'MeCountDown',
    emits: ['on-end', 'on-progress'],
    props: {
        time: {
            type: Number,
            required: true
        },
        format: {
            type: String,
            default: 'hh:mm:ss'
        },
        isStart: {
            type: Boolean,
            default: true
        },
        isSuspend: {
            type: Boolean,
            default: false
        },
        isReset: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { formatAfter } = useCountdown(props, emit);
        return { formatAfter };
    }
});

const _hoisted_1 = { class: "me-count-down" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" 倒计时 "),
    createElementVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.formatAfter)), () => [
        (_ctx.formatAfter.DD !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.DD) + " 天", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.hh !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.hh) + " 时", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.mm !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.mm) + " 分", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.ss !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.ss) + " 秒", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true),
        (_ctx.formatAfter.ms !== undefined)
          ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
              createTextVNode(toDisplayString(_ctx.formatAfter.ms) + " 毫秒", 1 /* TEXT */)
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
          : createCommentVNode("v-if", true)
      ])
    ])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "packages/MeCountDown/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeCountDown = script;

export { InMeCountDown as default };
