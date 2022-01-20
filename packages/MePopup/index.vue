<template>
  <!-- 弹出层 -->
  <div class="me-popup" :class="{ show: isShow }" :style="`background:rgba(0,0,0,${modal ? 0.7 : 0});`" @click="hideMask" v-show="isShowMask">
    <div :class="position" :style="setRadius" @click.stop>
      <me-icon name="icon-baseline-close-px" size="20px" @on-click="hideMask" v-if="closeable"></me-icon>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useMask, useRadius } from './hooks'
import MeIcon from '../MeIcon'

export default defineComponent({
  name: 'MePopup',
  components: { MeIcon },
  emits: ['update:visible', 'on-cancel'],
  props: {
    // 是否显示弹出层
    visible: {
      type: Boolean,
      default: false
    },
    // 是否显示模态框
    modal: {
      type: Boolean,
      default: true
    },
    // 弹出位置
    position: {
      type: String,
      default: 'center'
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false
    },
    // 倒角数值
    radius: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { isShow, isShowMask, hideMask } = useMask(props, emit)
    const { setRadius } = useRadius(props)
    return {
      isShow,
      isShowMask,
      hideMask,
      setRadius
    }
  }
})
</script>
