<template>
  <!-- 分割线 -->
  <div class="me-divider" :style="`width:${width}px;height:${height}px;`">
    <template v-if="fieldsetList.length>0">
      <fieldset class="u-fieldset" v-for="(item,index) in fieldsetList" :key="index" :style="`transform-origin:center ${origin}px;transform:translate(-50%, -50%) rotate(${item.deg}deg);border-top-width:${line.size}px;border-top-color:${line.color};border-radius: ${line.radius}px;`" role="presentation">
        <legend class="u-legend" :style="`margin-left:${left}px;margin-right:${right}px;color:${text.color};font-size:${text.size}px`">
          {{item.text}}
        </legend>
      </fieldset>
    </template>
    <template v-else>
      <fieldset class="u-fieldset" :style="`transform-origin:center ${origin}px;border-top-width:${line.size}px;border-top-color:${line.color};border-radius: ${line.radius}px;`" role="presentation">
      </fieldset>
    </template>
  </div>
</template>
<script>
export default {
  name: "MeDivider",
  props: {
    // 线条数和文本
    list: {
      type: Array,
      default: () => []
    },
    // 距离左边的距离
    left: {
      type: Number
    },
    // 距离右边的距离
    right: {
      type: Number
    },
    // 宽度
    width: {
      type: Number
    },
    // 高度
    height: {
      type: Number
    },
    // 旋转元素Y轴的基点位置
    origin: {
      type: Number
    },
    // 线条样式
    line: {
      type: Object,
      default: () => ({
        radius: undefined, // 线条倒角
        color: "#dcdfe6", // 线条颜色
        size: undefined // 线条大小
      })
    },
    // 文本样式
    text: {
      type: Object,
      default: () => ({
        color: "#494949", // 文本颜色
        size: 14 // 文本大小
      })
    }
  },
  data() {
    return {
      fieldsetList: [] // 分割线
    };
  },
  methods: {},
  created() {
    const list = this.list;
    const len = list.length; // 数组长度
    const flagBool = len < 3; // 是否小于3
    // 设置默认值
    if (flagBool) {
      this.line.radius === undefined && (this.line.radius = 0);
      this.line.size === undefined && (this.line.size = 1);
    }
    // 循环遍历
    this.fieldsetList = list.map((item, index) => {
      let deg = (360 / len) * index; // 旋转角度
      deg = flagBool ? 0 : deg;
      return {
        text: item,
        deg
      };
    });
  }
};
</script>