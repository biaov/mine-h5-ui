<style scoped lang="less">
@import './index.less';
</style>
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
        <me-checkbox v-for="it in item.list" :key="it.id" v-model="item.value" @on-click="onClick(item.value as boolean)">{{ it.label }}</me-checkbox>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onChange, onClick } = useHandlerClick()
    return { listData, onChange, onClick }
  }
})
</script>
