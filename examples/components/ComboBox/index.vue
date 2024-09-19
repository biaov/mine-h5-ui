<script lang="ts" setup>
import { useShowAction } from './hooks'
import type { Props } from './types'

const props = defineProps<Props>()
const { isShow, onClickFrame, onClickItem } = useShowAction(props)
</script>

<template>
  <!-- 下拉框 -->
  <div class="combo-box relative cursor-pointer" @click.stop="onClickFrame">
    <div class="txt w-100 py-5 pr-4 pl-10 flex justify-between items-center transition">
      <span>{{ list[1].version }}</span>
      <img src="../../assets/icon-right.png" alt="icon-right.png" :class="{ 'rotate-90': isShow }" class="w-16 opacity-40 transition" />
    </div>
    <!-- 列表 -->
    <transition name="translate">
      <ul v-if="isShow" class="dropdown absolute w-100 top-36 left-0 py-6 px-0">
        <li v-for="(item, index) in list" :key="index" class="w-full h-30 leading-30 px-10 py-0" @click="onClickItem(item)">{{ item.version }}</li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
