<template>
  <!-- 倒计时 -->
  <div class="me-count-down">
    <slot v-bind="formatAfter">
      <template v-if="formatAfter.DD!==undefined">{{formatAfter.DD}} 天</template>
      <template v-if="formatAfter.hh!==undefined"> {{formatAfter.hh}} 时</template>
      <template v-if="formatAfter.mm!==undefined"> {{formatAfter.mm}} 分</template>
      <template v-if="formatAfter.ss!==undefined"> {{formatAfter.ss}} 秒</template>
      <template v-if="formatAfter.ms!==undefined"> {{formatAfter.ms}} 毫秒</template>
    </slot>
  </div>
</template>
<script>
import { CountDown } from "~/MeAPI/function";
export default {
  name: "MeCountDown",
  props: {
    // 需要倒计的时间
    time: {
      type: Number,
      required: true
    },
    // 时间格式化
    format: {
      type: String,
      default: "hh:mm:ss" // DD:hh:mm:ss:ms
    },
    // 是否开始
    isStart: {
      type: Boolean,
      default: true
    },
    // 是否暂停
    isSuspend: {
      type: Boolean,
      default: false
    },
    // 是否重置
    isReset: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null, // 定时器
      addSubNum: 1000, // 时间
      curTime: 0, // 当前 time
      formatAfter: {} // 格式化之后
    };
  },
  methods: {
    // 开启倒计时
    startCountdown() {
      if (this.timer) return; // 倒计时是否存在
      // 开启倒计时
      this.timer = setInterval(() => {
        // 是否已经倒计到0
        if (this.curTime <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.$emit("on-end");
        } else {
          this.curTime -= this.addSubNum;
          this.formatAfter = CountDown(this.curTime, this.format);
          this.$emit("on-progress", this.curTime);
        }
      }, this.addSubNum);
    },
    // 暂停倒计时
    suspendCountdown() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 重置倒计时
    resetCountdown() {
      this.curTime = this.time;
      this.formatAfter = CountDown(this.curTime, this.format);
    }
  },
  watch: {
    // 监听开始状态
    isStart(value) {
      value && this.startCountdown();
    },
    // 监听暂停状态
    isSuspend(value) {
      value && this.suspendCountdown();
    },
    // 监听重置状态
    isReset(value) {
      value && this.resetCountdown();
    }
  },
  created() {
    this.resetCountdown(); // 重置化/初始化
    this.addSubNum = this.format.includes("ms") ? 10 : 1000;
    this.isStart && this.startCountdown(); // 开启倒计时
  }
};
</script>