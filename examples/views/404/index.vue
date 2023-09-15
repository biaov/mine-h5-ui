<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- 404 -->
  <div class="not-found">
    <img src="../../assets/404.svg" class="not-found-img" alt="404" />
    <div class="not-found-text">抱歉，您访问的页面不存在</div>
    <me-button type="primary" @click="router.push('/')">返回首页</me-button>
  </div>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
