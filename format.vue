<template>
  <screenshot v-bind="{start}">
    <p @click="onClick">点击截图</p>
  </screenshot>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const start = ref(false); // 截图状态
    // 点击截图
    const onClick = () => {
      start.value = true;
    };
    return { start, onClick };
  }
});
</script>
