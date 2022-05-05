<template>
  <!-- 表单 -->
  <form class="me-form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import { Model, RuleItem, Option } from './interfaces'

const emit = defineEmits<{
  (event: 'on-submit', option: Option): void
}>()

const props = withDefaults(
  defineProps<{
    model?: Model // 验证数据
    rules?: RuleItem[] // 验证规则
  }>(),
  {
    model: () => ({}),
    rules: () => []
  }
)

const { onSubmit } = useHandler(props, emit)
</script>
