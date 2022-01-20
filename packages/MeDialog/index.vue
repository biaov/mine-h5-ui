<template>
  <!-- 对话框 -->
  <div class="me-dialog" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <div class="m-picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{ tips }}</h3>
      <!-- 内容 -->
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useShow } from './hooks'

export default defineComponent({
  name: 'MeDialog',
  emits: ['update:visible'],
  props: {
    // v-model 绑定值
    visible: {
      type: Boolean,
      default: false
    },
    // 提示文本
    tips: {
      type: String,
      default: '提示'
    }
  },
  setup(props, { emit }) {
    const { isShowMask, isShow, hideMask } = useShow(props, emit)
    return { isShowMask, isShow, hideMask }
  }
})
</script>
