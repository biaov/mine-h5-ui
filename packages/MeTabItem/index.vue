<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeTabItem'
})

defineSlots<DefaultSlots>()

const props = defineProps<Props>()

const { isShow } = useHandler(props)
</script>

<template>
  <!-- 标签选项 -->
  <div v-show="isShow" class="me-tab-item">
    <slot></slot>
  </div>
</template>
