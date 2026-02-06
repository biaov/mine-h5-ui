<script lang="ts" setup>
import { usePagination } from './hooks'
import { name } from './config'
import type { Props, Slots } from './types'

defineOptions({ name })

const props = withDefaults(defineProps<Props>(), {
  total: 0,
  pageSize: 10,
  mode: 'default',
  ellipsis: false,
  prevText: '上一页',
  nextText: '下一页',
  disabled: false
})

/**
 * 输入框值
 */
const current = defineModel<number>({ default: 1 })
const slot = defineSlots<Slots>()
const { totalSize, filterItems, onClickItem } = usePagination(props, current)
</script>

<template>
  <!-- 分页器 -->
  <ul :class="{ [name]: true, [`${name}--disabled`]: disabled }">
    <li v-if="prevText" :class="`${name}__item ${name}__item--prev ${current === 1 ? name + '__item--disabled' : ''}`" @click="onClickItem('prev')">
      <slot v-if="slot.prev" name="prev"></slot>
      <template v-else>{{ prevText }}</template>
    </li>
    <li v-if="mode === 'simple'" :class="`${name}__item ${name}__item--simple`">{{ current }}/{{ totalSize }}</li>
    <template v-else>
      <li v-for="(item, index) in filterItems" :key="index" :class="`${name}__item ${current === item ? name + '__item--active' : ''}`" @click="onClickItem(item, index)">{{ item }}</li>
    </template>
    <li v-if="nextText" :class="`${name}__item ${name}__item--next ${current === totalSize ? name + '__item--disabled' : ''}`" @click="onClickItem('next')">
      <slot v-if="slot.next" name="next"></slot>
      <template v-else>{{ nextText }}</template>
    </li>
  </ul>
</template>
