<script lang="ts" setup>
import { useShowAction } from './hooks'
import type { Props } from './types'

const props = defineProps<Props>()
const { isShow, onClickFrame, onClickItem } = useShowAction(props)
</script>

<template>
  <!-- 下拉框 -->
  <div class="combo-box" @click.stop="onClickFrame">
    <div class="txt">
      <span>{{ list[1].version }}</span>
      <img src="../../assets/icon-right.png" alt="icon-right.png" :class="{ rotate: isShow }" />
    </div>
    <!-- 列表 -->
    <transition name="translate">
      <ul v-if="isShow" class="dropdown">
        <li v-for="(item, index) in list" :key="index" @click="onClickItem(item)">{{ item.version }}</li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
