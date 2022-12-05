<template>
  <!-- 画图 -->
  <ul class="mspaint">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-mspaint v-bind="item"></me-mspaint>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          id: 1,
          label: '基础用法',
          borderStyle: true
        },
        {
          id: 2,
          label: '自定义样式',
          width: '260px',
          height: '200px',
          background: '#000',
          borderStyle: '5px dashed #f60',
          strokeStyle: '#fff',
          lineWidth: 3
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.mspaint {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-mspaint) {
      margin-bottom: 20px;
    }
  }
}
</style>
