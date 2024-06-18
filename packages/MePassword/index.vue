<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MePassword'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  type: 'password',
  num: 6,
  skinType: 'white',
  isFocus: false
})

/**
 * 输入的值
 */
const modelValue = defineModel<string>({ default: '' })
const { listData, handleClick } = useHandler({ props, emit, modelValue })
</script>

<template>
  <!-- 密码/数字输入框 -->
  <ul class="me-password" :class="`me-password-${skinType}${type === 'number' ? ' me-password-number' : ''}`" v-show="listData.length > 0" @click.stop="handleClick">
    <li v-for="item in listData" :key="item.id" :class="{ active: item.state }">
      <span v-if="type === 'number'">{{ item.value }}</span>
      <i class="iconfont icon-dian" v-else-if="item.value !== ''"></i>
    </li>
  </ul>
</template>
