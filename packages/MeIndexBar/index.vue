<script lang="ts" setup>
import CountryData from './countryData'
import { useScroll, useBtns } from './hooks'
import type { Props, Emits } from './types'
import { name } from './config'

defineOptions({ name })

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  list: () => CountryData,
  range: 10
})

const { curLetter, listCont, filterShow, onClickBadge } = useScroll(props)
const { handleLi } = useBtns(emit)
</script>

<template>
  <!-- 索引栏 -->
  <div :class="name" ref="indexBarNode">
    <!-- 右侧列表值 -->
    <ul class="list-rt">
      <template v-for="(item, index) in list" :key="item.name">
        <li :class="{ on: item.name === curLetter }" @click="onClickBadge(item, index)" v-show="filterShow(index)">{{ item.name }}</li>
      </template>
    </ul>
    <!-- 内容列表 -->
    <ul class="list-cont" ref="listCont">
      <li v-for="item in list" :key="item.name">
        <dl class="list-item">
          <dt>{{ item.name }}</dt>
          <dd v-for="city in item.cities" :key="city.code" @click="handleLi(city)">{{ city.code }}（{{ city.cn }}）</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
