<template>
  <!-- 开关 -->
  <div class="me-switch" :class="{ 'me-switch-on': isActived }" :data-disabled="disabled" @click="handleClick" :style="`font-size:${size};background:${background};`">
    <span class="round"></span>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
  (event: 'update:modelValue', bool: boolean): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: boolean // v-model 绑定值
    size?: string // 自定义大小
    activeColor?: string // 自定义激活颜色
    inactiveColor?: string // 自定义未激活颜色
    async?: boolean // 异步状态
    disabled?: boolean // 禁用状态
  }>(),
  {
    modelValue: false,
    size: '',
    activeColor: '',
    inactiveColor: '',
    async: false,
    disabled: false
  }
)

const { isActived, background, handleClick } = useHandler(props, emit)
</script>
