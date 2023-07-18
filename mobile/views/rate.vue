<template>
  <!-- 评分 -->
  <ul class="m-rate">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-rate v-model="item.value" :icon="item.icon" :icon-select="item.iconSelect" :color="item.color" :count="item.count" :readonly="item.readonly" :disabled="item.disabled" :tips="item.tips" :tips-color="item.tipsColor" :size="item.size" @on-change="onChange(item)"></me-rate>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 列表数据
       */
      listData: [
        {
          id: 1,
          label: '基础用法',
          value: 3
        },
        {
          id: 2,
          label: '自定义图标',
          value: 1,
          icon: 'icon-aixinD',
          iconSelect: 'icon-love'
        },
        {
          id: 3,
          label: '自定义图标颜色',
          value: 2,
          color: '#f66'
        },
        {
          id: 4,
          label: '自定义数量',
          value: 4,
          count: 6,
          tips: ['青铜', '白银', '黄金', '钻石', '王者', '无敌']
        },
        {
          id: 5,
          label: '只读状态',
          value: 3,
          readonly: true
        },
        {
          id: 6,
          label: '禁用状态',
          value: 2,
          disabled: true
        },
        {
          id: 7,
          label: '自定义提示语',
          value: 1,
          tips: ['一级', '二级', '三级', '四级', '五级'],
          tipsColor: '#f60'
        },
        {
          id: 8,
          label: '评分大小',
          value: 3,
          size: '28px'
        }
      ]
    }
  },
  methods: {
    /**
     * 改变状态
     */
    onChange({ value }) {}
  }
}
</script>
<style scoped lang="less">
.m-rate {
  cursor: pointer;
  > li {
    margin-bottom: 20px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-rate[aria-disabled='true'] {
      cursor: not-allowed;
    }
  }
}
</style>
