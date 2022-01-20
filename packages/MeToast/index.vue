<template>
  <!-- 消息提示 -->
  <div class="me-toast" :class="{ show: isShow }" :style="`background:${bgColor};`" v-if="!isDestroy">
    <me-icon :name="icon" color="#fff" v-if="icon"></me-icon>
    <span>{{ message }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MeIcon from '../MeIcon'
import { useShow } from './hooks'

export default defineComponent({
  name: 'MeToast',
  props: {
    // 提示语
    message: {
      type: [String, Number],
      default: ''
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: ''
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 延迟时间
    durction: {
      type: Number,
      default: 1000
    }
  },
  components: {
    MeIcon
  },
  setup(props) {
    const { isShow, isDestroy } = useShow(props)
    return { isShow, isDestroy }
  }
})
</script>
