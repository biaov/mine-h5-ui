<template>
  <!-- 加载 -->
  <div class="me-loading">
    <svg class="icon svg-icon" aria-hidden="true" :style="`color:${color};font-size:${size};`">
      <use :xlink:href="`#${icon||iconName}`"></use>
    </svg>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MeLoading",
  props: {
    // 类型
    type: {
      type: String,
      default: "circle" // circle|circle2|circle3|circle4|circle5|circle6
    },
    // 图标大小
    size: {
      type: String,
      default: "30px"
    },
    // 图标颜色
    color: {
      type: String,
      default: "#949494" // #494949
    },
    // 自定义图标名称
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      iconName: "", // 自定义图标名称
      // 默认图标名称
      typeName: {
        circle: "icon-loading",
        circle2: "icon-Loading",
        circle3: "icon-loading_flat",
        circle4: "icon-loading04",
        circle5: "icon-financial_loading",
        circle6: "icon-loading_ico"
      }
    };
  },
  created() {
    const { typeName, type } = this;
    this.iconName = typeName[type] || "icon-loading"; // 设置名称
  },
  mounted() {
    require("~/theme-default/fonts/iconfont.js");
  }
};
</script>
