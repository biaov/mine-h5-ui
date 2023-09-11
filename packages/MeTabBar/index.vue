<template>
  <!-- 标签栏 -->
  <ul class="me-tab-bar" :style="`border-top-color:${borderColor};background:${background};`">
    <li v-for="(item, index) in list" :key="index" @click="onClick(item)" :class="{ selected: item.state }" :style="`color:${item.state ? colorSelected : color};`">
      <i class="iconfont icon" :class="[item.icon, item.dot && 'dot']" v-if="item.icon">
        <em v-if="item.badge && !item.dot">{{ item.badge }}</em>
      </i>
      <img :src="item.state ? item.imgSelected : item.img" alt="图标" class="img" v-else />
      <span class="txt">{{ item.text }}</span>
    </li>
  </ul>
</template>
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
