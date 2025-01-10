<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <!-- 卡片组件 -->
  <div class="mine-card hover:shadow-md w-full rounded-md border border-gray-200 transition-all cursor-pointer">
    <div class="mine-card__header font-bold text-14 h-40 px-12 text-gray-800 flex items-center border-b border-gray-200">
      {{ title }}
    </div>
    <div class="mine-card__body flex justify-center items-center p-12 h-170">
      <slot></slot>
    </div>
  </div>
</template>
