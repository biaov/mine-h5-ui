<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeTabBar'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  borderColor: '#dcdfe6',
  background: '#fff',
  color: '#949494',
  colorSelected: '#409eff'
})

const { onClick } = useHandler(emit)
</script>

<template>
  <!-- 标签栏 -->
  <ul class="me-tab-bar" :style="`border-top-color:${borderColor};background:${background};`">
    <li v-for="(item, index) in list" :key="index" :class="{ selected: item.state }" :style="`color:${item.state ? colorSelected : color};`" @click="onClick(item)">
      <i v-if="item.icon" class="iconfont icon" :class="[item.icon, item.dot && 'dot']">
        <em v-if="item.badge && !item.dot">{{ item.badge }}</em>
      </i>
      <img v-else :src="item.state ? item.imgSelected : item.img" alt="图标" class="img" />
      <span class="txt">{{ item.text }}</span>
    </li>
  </ul>
</template>
