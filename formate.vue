<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-pull-refresh v-model="loading" @on-refresh="onRefresh">刷新次数{{count}}</me-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: 0, // 加载状态
      count: 0, // 刷新次数
    };
  },
  methods: {
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.count++;
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
}
</style>
