<template>
  <!-- 下拉刷新 -->
  <div class="m-pull-refresh">
    <me-tab v-model="active">
      <me-tab-item v-for="item in listData" :key="item.id" :title="`${item.title}使用`">
        <me-pull-refresh v-model="item.loading" :load-text="item.loadText" :load-icon="item.loadIcon" @on-refresh="onRefresh(item)">{{ item.title }}刷新次数{{ item.count }}</me-pull-refresh>
      </me-tab-item>
    </me-tab>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0, // 活动索引
      // 数据列表
      listData: [
        {
          title: '基础',
          loading: false,
          count: 0
        },
        {
          title: '自定义',
          loading: false,
          count: 0,
          loadText: ['开始下拉...', '释放刷新...', '还在请求后台...', '成功了'],
          loadIcon: false
        }
      ]
    }
  },
  methods: {
    // 刷新
    onRefresh(item) {
      setTimeout(() => {
        item.count++
        item.loading = false
      }, 3000)
    }
  }
}
</script>
<style scoped lang="less">
.m-pull-refresh {
  .me-tab {
    /deep/ .m-tabs {
      cursor: pointer;
    }
  }
}
</style>
