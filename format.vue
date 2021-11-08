<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <screenshot v-bind="{start}">
      <p @click="onClick">点击截图</p>
    </screenshot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      start: false // 截图状态
    };
  },
  methods: {
    // 点击截图
    onClick() {
      this.start = true;
    }
  }
};
</script>
<style lang="less" scoped>
.m-demo {
}
</style>
