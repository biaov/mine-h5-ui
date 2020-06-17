<template>
  <!-- 评分机制 -->
  <div class="me-rate" :style="`font-size:${size};`" :aria-disabled="disabled">
    <me-icon v-for="item in listData" :key="item.id" :name="item.state?iconSelect:icon" size="inherit" :color="item.state?color:'#949494'" @on-click="onClick(item)"></me-icon>
    <span class="u-tips" v-if="tips.length>0&&value>0" :style="`color:${tipsColor};`">{{tips[value-1]}}</span>
  </div>
</template>
<script>
import MeIcon from "~/MeIcon";
export default {
  name: "MeRate",
  components: {
    MeIcon
  },
  props: {
    // v-model绑定值
    value: {
      type: Number,
      validator: value => !String(value).includes("."),
      default: 0
    },
    // 自定义未选中图标
    icon: {
      type: String,
      default: "icon-star4"
    },
    // 自定义选中图标
    iconSelect: {
      type: String,
      default: "icon-star3"
    },
    // 自定义图标颜色
    color: {
      type: String,
      default: "#fed835"
    },
    // 自定义数量
    count: {
      type: Number,
      default: 5
    },
    // 只读状态
    readonly: {
      type: Boolean,
      default: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 自定义提示语
    tips: {
      type: Array,
      default: () => ["非常不满意", "不满意", "一般", "满意", "非常满意"]
    },
    // 自定义提示语颜色
    tipsColor: {
      type: String,
      default: ""
    },
    // 评分大小
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 列表样式
      listData: [
        {
          id: 1,
          state: false
        }
      ]
    };
  },
  methods: {
    // 点击按钮
    onClick({ id, state }) {
      const { disabled, readonly, listData } = this;
      if ((state && !listData[id].state) || disabled || readonly) return; // 判断是否为只读/禁用/选中状态
      this.$emit("input", id);
      this.$emit("on-change");
      // 循环遍历设置状态值的改变
      listData.forEach(elem => {
        elem.state = elem.id <= id;
      });
    },
    // 设置页面状态
    setStatus() {
      const { value, listData } = this;
      // 循环遍历设置状态值的改变
      listData.forEach(elem => {
        elem.state = elem.id <= value;
      });
    }
  },
  watch: {
    // 监听value值变化
    value() {
      this.setStatus();
    }
  },
  created() {
    const { count, setStatus } = this;
    // 生成数组
    this.listData = Array.from({ length: count }, (k, v) => ({ id: v + 1, state: false }));
    setStatus(); // 设置状态
  }
};
</script>