<template>
  <!-- 标签选项 -->
  <div class="me-tab-item" v-show="isShow">
    <slot></slot>
  </div>
</template>
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
