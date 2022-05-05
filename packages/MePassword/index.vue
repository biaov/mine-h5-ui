<template>
  <!-- 密码/数字输入框 -->
  <ul class="me-password" :class="`me-password-${skinType}${type === 'number' ? ' me-password-number' : ''}`" v-show="listData.length > 0" @click.stop="handleClick">
    <li v-for="item in listData" :key="item.id" :class="{ active: item.state }">
      <span v-if="type === 'number'">{{ item.value }}</span>
      <i class="iconfont icon-dian" v-else-if="item.value !== ''"></i>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', str: string): void
  (event: 'on-focus', e: MouseEvent): void
  (event: 'on-blur', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: string // v-model 的值
    type?: string // 输入框模式, number | password
    num?: number // 输入框数量
    skinType?: string // 系统皮肤样式, white | dark
    isFocus?: boolean // 聚焦状态
  }>(),
  {
    modelValue: '',
    type: 'password',
    num: 6,
    skinType: 'white',
    isFocus: false
  }
)

const { listData, handleClick } = useHandler(props, emit)
</script>
