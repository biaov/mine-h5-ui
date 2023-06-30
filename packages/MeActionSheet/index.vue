<template>
  <!-- 动作面板 -->
  <div class="me-action-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <ul class="list-li" :class="{ on: isShow }" @click.stop>
      <li v-for="item in list" :key="item[index]" @click.stop="onLi(item)">{{ item[label] }}</li>
      <li @click.stop="onCancel">取消</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useShowSheet, useBtns } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeActionSheet'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  index: 'id',
  label: 'value'
})

const { isShowMask, isShow, hideMask, animationDuration } = useShowSheet(props, emit)
const { onLi, onCancel } = useBtns(emit)
</script>
