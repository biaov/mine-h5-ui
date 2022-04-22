<template>
  <!-- 标签选项 -->
  <div class="me-tab-item" v-show="isShow">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  name: 'MeTabItem',
  props: {
    // 标签内容
    label: {
      type: String,
      required: true
    },
    // 名称
    name: {
      type: [String, Number],
      required: true
    }
  },
  setup(prop) {
    const { isShow } = useHandler(prop)
    return { isShow }
  }
})
</script>
