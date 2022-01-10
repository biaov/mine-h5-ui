<template>
  <!-- 开关 -->
  <div class="me-switch" :class="{ 'me-switch-on': isActived }" :data-disabled="disabled" @click="handleClick" :style="`font-size:${size};background:${background};`">
    <span class="u-round"></span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  name: 'MeSwitch',
  emits: ['update:modelValue', 'on-click'],
  props: {
    // v-model绑定值
    modelValue: {
      type: Boolean,
      default: false
    },
    // 自定义大小
    size: {
      type: String,
      default: '' // 30px
    },
    // 自定义激活颜色
    activeColor: {
      type: String,
      default: ''
    },
    // 自定义未激活颜色
    inactiveColor: {
      type: String,
      default: ''
    },
    // 异步状态
    async: {
      type: Boolean,
      default: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { isActived, background, handleClick } = useHandler(props, emit)
    return { isActived, background, handleClick }
  }
})
</script>
