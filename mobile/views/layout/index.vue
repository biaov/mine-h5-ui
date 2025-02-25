<script lang="ts" setup>
import { ref } from 'vue'
import ReloadPrompt from '@/components/ReloadPrompt'
import { libraryInfo } from '@/config/package'
import { useWebData } from './hook'

const { listData, accordionActive } = useWebData()

/**
 * 列表展示方式
 */
const showMode = ref('default')
</script>

<template>
  <!-- layout -->
  <div>
    <div class="layout h-screen overflow-y-auto">
      <div class="hd mb-30">
        <h3 class="tit flex items-center w-full h-60">
          <img src="../../../examples/assets/logo.svg" alt="mine-h5-ui" class="logo w-50 mr-15" />
          <span class="text-[26px] font-medium">{{ libraryInfo.name }}</span>
        </h3>
        <p class="desc">{{ libraryInfo.description }}</p>
      </div>
      <!-- 列表 -->
      <ul class="list-out" v-if="showMode === 'default'">
        <li v-for="(item, index) in listData" :key="index">
          <h3 class="tit h-30 leading-[30px]">{{ item.meta.title }}</h3>
          <ul class="list-in">
            <li v-for="(it, i) in item.items" :key="i" class="mb-10">
              <router-link :to="{ name: it.name }" class="flex justify-between w-full h-40 leading-[40px] rounded-full hover:flex hover:!bg-sky-50 transition-all">
                <span>{{ it.meta.title }}</span>
                <me-icon name="icon-right1" size="20px" color="rgba(34,34,34,0.2)" />
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-out" v-else-if="showMode === 'iframe'">
        <me-accordion v-model="accordionActive" class="cursor-pointer">
          <me-accordion-item v-for="(item, index) in listData" :key="index" :label="item.meta.title" :name="index">
            <ul class="list-in">
              <li v-for="(it, i) in item.items" :key="i" class="mb-10">
                <router-link :to="{ name: it.name }" class="flex justify-between w-full h-40 leading-[40px] rounded-full hover:flex hover:!bg-sky-50 transition-all">
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
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
