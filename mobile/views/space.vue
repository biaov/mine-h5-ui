<template>
  <!-- 间距 -->
  <ul class="space">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-space v-bind="{ size: item.size, direction: item.direction }">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </me-space>
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
          size: '10px',
          direction: 'horizontal'
        },
        {
          id: 2,
          label: '垂直间距',
          size: '10px',
          direction: 'vertical'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.space {
  > li {
    margin-bottom: 20px;
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      background: @color-danger;
      color: #fff;
      font-size: @font-size*2;
      &:nth-child(2) {
        background: @color-success;
      }
      &:nth-child(3) {
        background: @color-primary;
      }
    }
  }
}
</style>
