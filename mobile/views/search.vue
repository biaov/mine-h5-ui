<template>
  <!-- 搜索 -->
  <ul class="m-search">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-search v-model="item.value" :placeholder="item.placeholder" :btn-text="item.btnText" :align="item.align" :radius="item.radius" :background="item.background" :color="item.color" :disabled="item.disabled" @on-search="onSearch" @on-click="onClick"></me-search>
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
          value: ''
        },
        {
          id: 2,
          label: '占位符内容',
          placeholder: '请输入搜索内容',
          value: ''
        },
        {
          id: 3,
          label: '自定义右侧按钮内容',
          btnText: '取消',
          value: ''
        },
        {
          id: 4,
          label: '对齐方式',
          align: 'center',
          value: ''
        },
        {
          id: 5,
          label: '设置倒角',
          radius: '20px',
          value: ''
        },
        {
          id: 6,
          label: '自定义样式',
          background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)',
          color: '#fff',
          value: ''
        },
        {
          id: 7,
          label: '禁用搜索框',
          disabled: true,
          value: ''
        }
      ]
    }
  },
  methods: {
    // 点击键盘搜索或者回车按钮
    onSearch() {
      this.$MeToast('搜索中...')
    },
    // 点击右侧按钮
    onClick() {
      this.$MeToast('点击了取消按钮')
    }
  }
}
</script>
<style scoped lang="less">
.m-search {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-search {
      /deep/ .u-input[disabled='disabled'] {
        cursor: not-allowed;
      }
    }
  }
}
</style>
