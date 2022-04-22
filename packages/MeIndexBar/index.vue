<template>
  <!-- 索引栏 -->
  <div class="me-index-bar">
    <!-- 顶部固定项 -->
    <div class="m-top" v-show="curLetter" :style="`height:${topHeight};line-height:${topHeight};`">{{ curLetter }}</div>
    <!-- 右侧列表值 -->
    <ul class="m-list-rt">
      <li v-for="item in list" :key="item.name" :class="{ on: item.name === curLetter }">{{ item.name }}</li>
    </ul>
    <!-- 内容列表 -->
    <ul class="m-list-cont" ref="listCont">
      <li v-for="item in list" :key="item.name">
        <dl class="m-list-item">
          <dt>{{ item.name }}</dt>
          <dd v-for="city in item.cities" :key="city.code" @click="handleLi(city)">{{ city.code }}（{{ city.cn }}）</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CountryData from './countryData'
import { useScroll, useBtns } from './hooks'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'MeIndexBar',
  emits: ['on-click'],
  props: {
    // 自定义国家数据
    list: {
      type: Array as PropType<ListItem[]>,
      default: () => CountryData
    },
    // 自定义顶部定位高度
    topHeight: {
      type: String,
      default: '50px'
    }
  },
  setup(props, { emit }) {
    const { curLetter, listCont } = useScroll()
    const { handleLi } = useBtns(emit)
    return { curLetter, listCont, handleLi }
  }
})
</script>
