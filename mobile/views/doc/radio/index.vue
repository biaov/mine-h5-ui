<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange, onClick } = useHandle()
</script>

<template>
  <!-- 单选框 -->
  <ul class="radio">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-radio-group v-model="item.value" @change="onChange" :direction="item.direction" v-if="item.list.length > 1">
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
        <me-radio v-for="it in item.list" :key="it.id" v-model="item.value" @click="onClick(item.value as boolean)">{{ it.label }}</me-radio>
      </template>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
