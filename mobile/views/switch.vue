<template>
  <!-- 开关 -->
  <ul class="m-switch">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-switch v-model="item.value" :size="item.size" :active-color="item.activeColor" :inactive-color="item.inactiveColor" :disabled="item.disabled" :async="item.async" @on-click="onClick(item)"></me-switch>
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
          label: '基础用法',
          value: false
        },
        {
          id: 2,
          label: '自定义大小',
          size: '24px',
          value: false
        },
        {
          id: 3,
          label: '自定义颜色',
          value: false,
          inactiveColor: '#f60',
          activeColor: '#e4393c'
        },
        {
          id: 4,
          label: '异步状态',
          value: false,
          async: true
        },
        {
          id: 5,
          label: '禁用状态',
          value: true,
          disabled: true
        }
      ]
    }
  },
  methods: {
    // 点击 Switch 开关
    onClick({ async, value }) {
      // 判断是否为异步
      if (async) {
        this.$MeToast('当前为异步状态，可自行控制开关的打开和关闭')
      } else {
        this.$MeToast(value ? '打开' : '关闭')
      }
    }
  }
}
</script>
<style scoped lang="less">
.m-switch {
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-switch {
      margin-bottom: 20px;
    }
  }
}
</style>
