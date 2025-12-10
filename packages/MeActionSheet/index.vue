<script lang="ts" setup>
import { useShowSheet, useBtns } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeActionSheet'
})

const emit = defineEmits<Emits>()
withDefaults(defineProps<Props>(), {
  index: 'id',
  label: 'value'
})

/**
 * 是否显示
 */
const visibleModel = defineModel<boolean>('visible', { default: false })

const { isShowMask, isShow, hideMask, animationDuration } = useShowSheet({ visibleModel })
const { onLi, onCancel } = useBtns({ emit, visibleModel })
</script>

<template>
  <!-- 动作面板 -->
  <div v-show="isShowMask" class="me-action-sheet" :class="{ show: isShow }" :style="`--animation-duration:${animationDuration}ms;`" @click="hideMask">
    <ul class="list-li" :class="{ on: isShow }" @click.stop>
      <li v-for="item in list" :key="item[index]" @click.stop="onLi(item)">{{ item[label] }}</li>
      <li @click.stop="onCancel">取消</li>
    </ul>
  </div>
</template>
