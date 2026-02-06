<script lang="ts" setup>
import type { Props } from './types'

defineOptions({
  name: 'MeShowLoading'
})

defineProps<Props>()
</script>

<template>
  <!-- 加载提示框 -->
  <transition name="fade">
    <div v-if="visible" class="me-show-loading">
      <div class="content">
        <img src="./loading-turn.svg" alt="loading-turn" class="icon" />
        <span class="text">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>
