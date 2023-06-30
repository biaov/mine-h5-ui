<template>
  <!-- 评分机制 -->
  <div class="me-rate" :style="`font-size:${size};`" :data-disabled="disabled">
    <me-icon v-for="item in listData" :key="item.id" :name="item.state ? iconSelect : icon" size="inherit" :color="item.state ? color : '#949494'" @click="onClick(item)"></me-icon>
    <span class="tips" v-if="tips.length > 0 && modelValue > 0" :style="`color:${tipsColor};`">{{ tips[modelValue - 1] }}</span>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeRate'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  icon: 'icon-star4',
  iconSelect: 'icon-star3',
  color: '#fed835',
  count: 5,
  readonly: false,
  disabled: false,
  tips: () => ['非常不满意', '不满意', '一般', '满意', '非常满意'],
  tipsColor: '',
  size: ''
})

const { listData, onClick } = useHandler(props, emit)
</script>
