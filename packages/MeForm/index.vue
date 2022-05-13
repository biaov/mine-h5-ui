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
  (event: 'submit', option: Option): void
}>()

const props = withDefaults(
  defineProps<{
    model?: Model // 校验数据
    rules?: RuleItem[] // 校验规则
  }>(),
  {
    model: () => ({}),
    rules: () => []
  }
)

const { onSubmit } = useHandler(props, emit)
</script>
