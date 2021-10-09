<template>
  <!-- 复选框 -->
  <ul class="m-checkbox">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-checkbox-group v-model="item.value" @on-change="onChange" :direction="item.direction" v-if="item.list.length > 1">
        <me-checkbox
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
        </me-checkbox>
      </me-checkbox-group>
      <template v-else>
        <me-checkbox v-for="it in item.list" :key="it.id" v-model="item.value" @on-click="onClick(item.value)">{{ it.label }}</me-checkbox>
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
.m-checkbox {
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
    > :deep(.me-checkbox) {
      .same-margin;
    }
    :deep(.me-checkbox-group) {
      .same-margin;
      .me-checkbox[aria-disabled="true"] {
        cursor: not-allowed;
      }
    }
  }
}
</style>
