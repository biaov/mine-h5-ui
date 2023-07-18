<template>
  <!-- 标签页 -->
  <ul class="m-tab">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-tab v-model="list.active" v-bind="{ color: list.color, activeColor: list.activeColor, lineColor: list.lineColor }" @on-change="onChange">
        <me-tab-item v-for="item in list.children" :key="item.id" :title="item.title">{{ item.content }}</me-tab-item>
      </me-tab>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 活动索引
       */
      active: 0,
      /**
       * 列表数据
       */
      listData: [
        {
          id: 1,
          active: 0,
          label: '基础用法',
          children: [
            {
              id: 1,
              title: '标签一',
              content: '内容一'
            },
            {
              id: 2,
              title: '标签二',
              content: '内容二'
            },
            {
              id: 3,
              title: '标签三',
              content: '内容三'
            },
            {
              id: 4,
              title: '标签四',
              content: '内容四'
            }
          ]
        },
        {
          id: 2,
          active: 0,
          label: '自定义样式',
          color: '#f60',
          activeColor: '#f66',
          lineColor: '#409eff',
          children: [
            {
              id: 1,
              title: '标签一',
              content: '内容一'
            },
            {
              id: 2,
              title: '标签二',
              content: '内容二'
            },
            {
              id: 3,
              title: '标签三',
              content: '内容三'
            },
            {
              id: 4,
              title: '标签四',
              content: '内容四'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * 当标签栏改变时
     */
    onChange(index) {
      console.log('活动项' + index)
    }
  }
}
</script>
<style scoped lang="less">
.m-tab {
  .u-label {
    width: 100%;
    line-height: 40px;
    padding-left: 15px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-tab {
    margin-bottom: 10px;
    /deep/ .m-tabs {
      cursor: pointer;
    }
  }
}
</style>
