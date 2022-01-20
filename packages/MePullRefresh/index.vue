<template>
  <!-- 下拉刷新 -->
  <div class="me-pull-refresh">
    <div class="m-cont" :style="`transform: translateY(${transY-showValue}px);transition-duration: ${duration}ms;`" v-on="{
    touchstart: onTouchstart,
    touchmove: onTouchmove,
    touchend: onTouchend,
    mousedown: onMousedown
  }">
      <div class="m-hd" :style="`transform:scale(${scale});`">
        <me-loading type="circle" v-if="loadIcon&&activeState===2"></me-loading>{{loadText[activeState]}}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MeLoading from "~/MeLoading";
export default {
  name: "MePullRefresh",
  components: {
    MeLoading
  },
  props: {
    // v-model绑定值
    value: {
      type: Boolean,
      required: true
    },
    // 自定义状态文本
    loadText: {
      type: Array,
      default: () => ["下拉即可刷新...", "释放即可刷新...", "加载中...", "刷新成功"]
    },
    // 是否要显示加载图标
    loadIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeState: 0, // 加载状态
      transY: 0, // 垂直多少像素
      scale: 0, // 放大倍数
      startY: 0, // 开始位置
      step: 0, // 步进器
      showValue: 50, // 显示值
      duration: 0 // 过渡时间
    };
  },
  methods: {
    // 触摸开始
    onTouchstart(e) {
      // 是否可触发
      if (this.value) return;
      this.startY = e.changedTouches[0].clientY; // 获取初始位置
      this.step = 0; // 初始化步进器
      this.duration = 0; // 关闭过渡器
    },
    // 接触点改变，滑动时
    onTouchmove(e) {
      const { value, startY, showValue } = this;
      // 是否可触发
      if (value) return;
      const distY = e.changedTouches[0].clientY - startY; // 计算位置
      // 是否超过显示值
      if (distY > showValue) {
        this.activeState = 1;
        this.step += 0.09;
        this.transY = showValue + (distY - showValue) / this.step;
        this.scale = 1;
      } else {
        this.transY = distY;
        this.scale = distY / showValue;
        this.activeState = 0;
      }
    },
    // 触摸结束
    onTouchend(e) {
      // 是否可触发
      if (this.value) return;
      const { startY, showValue } = this;
      const distY = e.changedTouches[0].clientY - startY;
      this.duration = 400; // 打开过渡器
      // 是否超过显示值
      if (distY > showValue) {
        this.activeState = 2;
        this.transY = showValue;
        this.scale = 1;
        this.$emit("input", true);
        this.$emit("on-refresh");
      } else {
        this.activeState = 0;
        this.transY = 0;
        this.scale = 0;
      }
    },
    // pc端鼠标按下
    onMousedown(e) {
      const { value, onMousemove, onMouseup } = this;
      // 是否可触发
      if (value) return;
      this.startY = e.clientY; // 获取初始位置
      this.step = 0; // 初始化步进器
      this.duration = 0; // 关闭过渡器
      document.onmousemove = onMousemove; // 表达式声明移动事件
      document.onmouseup = onMouseup; // 表达式声明抬起事件
    },
    // pc端鼠标按下移动
    onMousemove(e) {
      const { value, startY, showValue } = this;
      // 是否可触发
      if (value) return;
      const distY = e.clientY - startY; // 计算位置
      // 是否超过显示值
      if (distY > showValue) {
        this.activeState = 1;
        this.step += 0.09;
        this.transY = showValue + (distY - showValue) / this.step;
        this.scale = 1;
      } else {
        this.transY = distY;
        this.scale = distY / showValue;
        this.activeState = 0;
      }
    },
    // pc端鼠标抬起
    onMouseup(e) {
      // 是否可触发
      if (this.value) return;
      const { startY, showValue } = this;
      const distY = e.clientY - startY;
      this.duration = 400; // 打开过渡器
      // 是否超过显示值
      if (distY > showValue) {
        this.activeState = 2;
        this.transY = showValue;
        this.scale = 1;
        this.$emit("input", true);
        this.$emit("on-refresh");
      } else {
        this.activeState = 0;
        this.transY = 0;
        this.scale = 0;
      }
      document.onmousemove = null; // 清理上次的移动事件
      document.onmouseup = null; // 清理上次的抬起事件
    }
  },
  watch: {
    // 监听value变化
    value(value) {
      // 是否可滑动
      if (!value) {
        this.activeState = 3;
        // 延迟关闭
        setTimeout(() => {
          this.transY = 0;
          this.scale = 0;
        }, 600);
      }
    }
  }
};
</script>