<template>
  <!-- 数字滚动 -->
  <ul class="m-count-to">
    <li v-for="(item,index) in listData" :key="index">
      <div class="u-label">{{item.label}}</div>
      <me-count-to v-bind="item"></me-count-to>
    </li>
    <li>
      <div class="u-label">手动控制</div>
      <me-count-to v-bind="manual" v-model="manual.value"></me-count-to>
      <me-button type="danger" plain @on-click="manual.value=true">重新开始</me-button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          label: "基础用法",
          endValue: 6666
        },
        {
          label: "起始值&时间",
          startValue: 100,
          duration: 5000,
          endValue: 6666
        },
        {
          label: "添加千分符",
          endValue: 6666.66,
          thousand: true
        }
      ],
      // 手动控制值
      manual: {
        thousand: true,
        endValue: 6666.66,
        value: true
      }
    };
  }
};
</script>
<style scoped lang="less">
.m-count-to {
  > li {
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-count-to {
      margin-bottom: 15px;
    }
    .me-button {
      cursor: pointer;
    }
  }
}
</style>