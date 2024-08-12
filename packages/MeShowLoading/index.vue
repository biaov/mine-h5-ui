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
    <div class="me-show-loading" v-if="visible">
      <div class="content">
        <img src="./loading-turn.svg" alt="loading-turn" class="icon" />
        <span class="text">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>
