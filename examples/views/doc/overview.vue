<script lang="ts" setup>
import { ref, computed } from 'vue'
import MineCard from '@/components/MineCard'
import { componentConfig } from '@/config/nav.config'

const assets = import.meta.glob('@/assets/component/*.svg', { eager: true })

const overviewList = componentConfig.map(item => {
  const items = item.items.map(subItem => {
    const path = ((assets[`/examples/assets/component/${subItem.name}.svg`] as { default: unknown })?.default as string) ?? 'https://dummyimage.com/300x180/f9fafb'

    return { ...subItem, path }
  })
  return { ...item, items }
})

/**
 * 搜索关键字
 */
const keyword = ref('')
const filterList = computed(() =>
  overviewList
    .map(item => {
      let { items } = item
      keyword.value !== '' && (items = item.items.filter(subItem => subItem.meta.title.toLowerCase().includes(keyword.value.toLowerCase())))
      return { ...item, items }
    })
    .filter(item => item.items.length)
)
</script>

<template>
  <!-- 组件总览 -->
  <div class="overview flex flex-col gap-y-24">
    <h2 class="text-24 font-bold border-bottom border-gray-200">Overview 组件总览</h2>
    <p class="text-14 text-gray-600">以下是 MINE-H5-UI 提供的所有组件。</p>
    <me-search v-model="keyword" placeholder="搜索组件" />
    <ul class="p-12">
      <li v-for="(item, index) in filterList" :key="index" class="mb-32">
        <div class="title flex items-center gap-8 mb-12 text-20 font-bold">
          {{ item.meta.title }}
          <me-tag :text="`${item.items.length}`" plain />
        </div>
        <div class="flex flex-wrap gap-y-24 -ml-10 -mr-10">
          <router-link v-for="(subItem, subIndex) in item.items" :key="subIndex" :to="{ name: subItem.name }" class="w-1/4 px-12">
            <mine-card :title="subItem.meta.title" class="bg-gray-50 hover:bg-white">
              <img :src="subItem.path" class="max-w-full max-h-full" />
            </mine-card>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
