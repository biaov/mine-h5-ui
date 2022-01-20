<template>
  <!-- 滑块 -->
  <ul class="m-slider">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <me-slider v-model="item.value" :max="item.max" :min="item.min" :styles="item.styles" :is-btn="item.isBtn" :disabled="item.disabled">
        <div class="u-btn" v-if="item.isBtn">{{item.value}}</div>
      </me-slider>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          label: "基础用法",
          value: 30
        },
        {
          id: 2,
          label: "自定义范围",
          value: 0,
          max: 50,
          min: -50
        },
        {
          id: 3,
          label: "自定义样式",
          value: 30,
          styles: {
            height: "10px", // 高度
            radius: "6px", // 倒角
            lineBgc: "linear-gradient(135deg, #8af2ba, #4ccce7, #4fabf9, #46a5f8, #1e57f5)" // 线背景色
          }
        },
        {
          id: 4,
          label: "自定义按钮",
          value: 30,
          isBtn: true
        },
        {
          id: 5,
          label: "禁用状态",
          value: 30,
          disabled: true
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.m-slider {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-slider {
      /deep/ .m-drag {
        cursor: grab;
      }
      &[aria-disabled="true"] /deep/ .m-drag {
        cursor: not-allowed;
      }
      .u-btn {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        background: #f60;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>