<template>
  <!-- 标签选项 -->
  <div class="me-tab-item" v-show="isShow">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const props = defineProps<{
  label: string // 标签内容
  name: string | number // 名称
}>()

const { isShow } = useHandler(props)
</script>
