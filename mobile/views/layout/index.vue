<script lang="ts" setup>
import { ref } from 'vue'
import ReloadPrompt from '@/components/ReloadPrompt'
import useGlobalVars from '@/config/variables'
import { useWebData } from './hook'

const { listData, accordionActive } = useWebData()
const { libraryInfo } = useGlobalVars()

/**
 * 列表展示方式
 */
const showMode = ref('iframe')
</script>

<template>
  <!-- layout -->
  <div class="layout">
    <div class="hd">
      <h3 class="tit">
        <img src="../../../examples/assets/logo.svg" alt="mine-h5-ui logo" />
        <span>{{ libraryInfo.name }}</span>
      </h3>
      <p class="desc">{{ libraryInfo.description }}</p>
    </div>
    <!-- 列表 -->
    <ul class="list-out" v-if="showMode === 'default'">
      <li v-for="(item, index) in listData" :key="index">
        <h3 class="tit">{{ item.meta.title }}</h3>
        <ul class="list-in">
          <li v-for="(it, i) in item.items" :key="i">
            <router-link :to="{ name: it.name }">
              <span>{{ it.meta.title }}</span>
              <me-icon name="icon-right1" size="20px" color="rgba(34,34,34,0.2)" />
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-out" v-else-if="showMode === 'iframe'">
      <me-accordion v-model="accordionActive">
        <me-accordion-item v-for="(item, index) in listData" :key="index" :label="item.meta.title" :name="index">
          <ul class="list-in">
            <li v-for="(it, i) in item.items" :key="i">
              <router-link :to="{ name: it.name }">
                <span>{{ it.meta.title }}</span>
                <me-icon name="icon-right1" size="20px" color="rgba(34,34,34,0.2)" />
              </router-link>
            </li>
          </ul>
        </me-accordion-item>
      </me-accordion>
    </div>
  </div>
  <reload-prompt />
</template>

<style scoped lang="less">
@import './index.less';
</style>
