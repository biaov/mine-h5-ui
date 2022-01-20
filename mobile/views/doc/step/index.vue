<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 标签页 -->
  <ul class="m-step">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-step :active="list.active" :direction="list.direction" :type="list.type" :color="list.color" :activeColor="list.activeColor" :icon="list.icon" :activeIcon="list.activeIcon">
        <me-step-item v-for="item in list.children" :key="item.name" :name="item.name">
          <template v-if="item.time">
            <h3 class="u-tit">{{ item.label }}</h3>
            <p class="u-time">{{ item.time }}</p>
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </me-step-item>
      </me-step>
      <me-button type="primary" class="u-btn-next" width="100%" @on-click="onClickNext(list)">下一步</me-button>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onClickNext } = useHandlerClick()
    return { listData, onClickNext }
  }
})
</script>
