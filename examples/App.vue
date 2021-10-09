<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {
      globalThis.innerWidth < 1200 && (globalThis.location.href = `${globalThis.location.origin}/mobile.html`);
    });
  }
});
</script>

<style lang="less">
@import "./styles/index.less";
</style>
