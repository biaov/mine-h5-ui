<template>
  <!-- 导航 -->
  <ul class="m-navbar">
    <li v-for="item in list" :key="item.id">
      <!-- 外部链接 -->
      <a :href="item.link" target="_blank" v-if="item.link">
        <template v-if="item.icon">
          <me-icon :name="item.icon" :title="item.value"></me-icon>
        </template>
        <template v-else>{{ item.value }}</template>
      </a>
      <!-- 内部路由 -->
      <router-link :to="{ name: item.name }" v-else>{{ item.value }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    /**
     * 列表数据
     */
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="less">
.m-navbar {
  display: flex;
  align-items: center;
  > li > a {
    padding: 0 20px;
    color: #515a6e;
    font-size: 14px;
    transition: color 0.4s;
    .me-icon {
      display: block;
      transition: transform 0.4s;
      transform: scale(0.9);
    }
    &:hover {
      color: #2d8cf0;
      .me-icon {
        transform: scale(1.1);
      }
    }
  }
}
</style>
