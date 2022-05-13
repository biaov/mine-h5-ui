<template>
  <!-- 对话框 -->
  <div class="me-dialog" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- 内容 -->
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useShow } from './hooks'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
}>()

const props = withDefaults(
  defineProps<{
    visible?: boolean // v-model 绑定值
    tips?: string // 提示文本
  }>(),
  {
    visible: false,
    tips: '提示'
  }
)

const { isShowMask, isShow, hideMask } = useShow(props, emit)
</script>
