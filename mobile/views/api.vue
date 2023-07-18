<template>
  <!-- API -->
  <ul class="m-api">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-li" @click="item.visible = true">
        <span>{{ item.title }}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
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
      listData: []
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.m-api {
}
</style>
