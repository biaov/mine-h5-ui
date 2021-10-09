<template>
  <!-- 单选框 -->
  <ul class="m-radio">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-radio-group v-model="item.value" @on-change="onChange" :direction="item.direction" v-if="item.list.length > 1">
        <me-radio
          v-for="it in item.list"
          :key="it.id"
          :name="it.id"
          :shape="it.shape"
          :icon="it.icon"
          :icon-size="it.iconSize"
          :icon-select="it.iconSelect"
          :checked-color="it.checkedColor"
          :disabled="it.disabled"
        >
          {{ it.label }}
        </me-radio>
      </me-radio-group>
      <template v-else>
        <me-radio v-for="it in item.list" :key="it.id" v-model="item.value" @on-click="onClick(item.value)">{{ it.label }}</me-radio>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onChange, onClick } = useHandlerClick();
    return { listData, onChange, onClick };
  }
});
</script>
<style scoped lang="less">
.m-radio {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .same-margin {
      margin-bottom: 20px;
    }
    > :deep(.me-radio) {
      .same-margin;
    }
    :deep(.me-radio-group) {
      .same-margin;
      .me-radio[aria-disabled="true"] {
        cursor: not-allowed;
      }
    }
  }
}
</style>
