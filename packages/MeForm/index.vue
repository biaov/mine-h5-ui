<template>
  <!-- 表单 -->
  <form class="me-form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useHandler } from "./hooks";
import { Model, RuleItem } from "./interfaces";

export default defineComponent({
  name: "MeForm",
  props: {
    // 验证数据
    model: {
      type: Object as PropType<Model>,
      default: () => ({})
    },
    // 验证规则
    rules: {
      type: Array as PropType<RuleItem[]>,
      default: () => []
    }
  },
  setup(props) {
    const { onSubmit } = useHandler(props);
    return { onSubmit };
  }
});
</script>
