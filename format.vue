<template>
  <me-step :active="active">
    <me-step-item name="first">步骤一</me-step-item>
    <me-step-item name="second">步骤二</me-step-item>
  </me-step>
</template>
<script>
export default {
  data() {
    return {
      active: ["first"] // 活动项
    };
  }
};
</script>
