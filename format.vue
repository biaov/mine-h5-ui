<template>
  <me-step :active="active" direction="vertical">
    <me-step-item name="first">
      <h3>状态一</h3>
      <p>2021-12-18 17:51:01</p>
    </me-step-item>
    <me-step-item name="second">
      <h3>状态二</h3>
      <p>2021-12-18 17:51:02</p>
    </me-step-item>
  </me-step>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const active = ref(['first']) // 活动项
    return { active }
  }
})
</script>
