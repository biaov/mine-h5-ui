<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-swiper>
      <me-swiper-item v-for="(item,index) in listData" :key="index" v-bind="item"></me-swiper-item>
    </me-swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          background: "#4BC7F5"
        },
        {
          background: "#7A51F5"
        },
        {
          background: "#FFB808"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.m-demo {
}
</style>