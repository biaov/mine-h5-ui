<template>
  <!-- 宫格选项 -->
  <div class="me-grid-item" @click="handleClick" :style="`width:${widthValue}%;border-color:${borderColor};border-top-width:${+(currentId<cols)}px;border-left-width: ${+(currentId%cols===0)}px;`">
    <i class="iconfont u-icon" :class="icon" :style="`color:${iconColor};`" v-if="icon"></i>
    <span class="u-desc" :style="`color:${textColor};`" v-if="text">{{text}}</span>
    <div class="u-custom" v-if="!icon&&!text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeGridItem",
  props: {
    // 图标
    icon: {
      type: String,
      default: ""
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: ""
    },
    // 文本
    text: {
      type: String,
      default: ""
    },
    // 文本颜色
    textColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cols: 4, // 列数
      currentId: 0, // 当前 id
      widthValue: 25, // item 宽度
      borderColor: "" // 边框颜色
    };
  },
  methods: {
    // 设置下标数据
    setData(id, cols, color) {
      this.currentId = id;
      this.cols = cols;
      this.widthValue = 100 / cols;
      this.borderColor = color;
    },
    // 点击列表项
    handleClick() {
      const {
        $parent: { $options, onChange },
        currentId
      } = this;
      $options._componentTag === "me-grid" && onChange(currentId); // 向父组件传递数据
      this.$emit("on-click");
    }
  }
};
</script>
