<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useGlobalVars } from "@/utils/variables";

export default defineComponent({
  setup() {
    const { BaseRouter } = useGlobalVars();
    onMounted(() => {
      globalThis.innerWidth < 1200 && (globalThis.location.href = `${globalThis.location.origin}${BaseRouter}mobile.html`);
    });
  }
});
</script>

<style lang="less">
@import "./styles/index.less";
</style>
