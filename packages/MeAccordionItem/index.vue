<template>
  <!-- 手风琴选项 -->
  <div class="me-accordion-item">
    <!-- 头部区域 -->
    <div class="m-hd" @click="onClick" :style="`border-bottom-color:${borderColor};`">
      <h3>{{title}}</h3>
      <i class="iconfont icon-right1" :class="{open:isShow}"></i>
    </div>
    <!-- 内容区域 -->
    <div class="m-bd" :style="`height:${curHeight}px;`">
      <div ref="cont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeAccordionItem",
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // index值
    index: {
      type: [Number, String]
    },
    // 下边框颜色
    borderColor: {
      type: String,
      default: "#dcdfe6"
    }
  },
  data() {
    return {
      isShow: false, // 显示状态
      curHeight: 0, // 当前组件高度
      curVal: "" // 当前value值
    };
  },
  methods: {
    // 设置下标数据
    setData(index, activeVal) {
      this.curVal = this.index || index;
      this.isShow = activeVal === this.curVal;
    },
    // 点击标题
    onClick() {
      const {
        $parent: { $options, onChange },
        curVal,
        isShow
      } = this;
      $options._componentTag === "me-accordion" && onChange(isShow ? "" : curVal); // 向父组件传递数据
      this.$emit("on-click");
    }
  },
  watch: {
    // 监听组件状态值的变化
    isShow(value) {
      this.curHeight = value ? this.$refs.cont.offsetHeight : 0;
    }
  }
};
</script>