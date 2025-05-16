<script lang="ts" setup generic="T">
import { useTurnPage, useStyle } from './hooks'
import type { Props, Emits, Slots } from './types'
import { name } from './config'

defineOptions({ name })


const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props<T>>(), {
  width: 300,
  height: 400
})

const current = defineModel<number>('current', { default: 0 })

defineSlots<Slots<T>>()

const { getStyle } = useStyle(props)
const { getItemStyle, wrapStyle, fwrapStyle, itemStyle, shadowStyle, turnItemStyle, turnShadowStyle, showValue } = useTurnPage(props, current)
</script>

<template>
  <!-- 倒计时 -->
  <div :class="name" :style="getStyle" ref="turnPage">
    <div class="turn" :style="fwrapStyle" v-if="list.length > 1">
      <div class="turn-item" :style="turnItemStyle">
        <div class="turn-item-shadow" :style="turnShadowStyle">
        </div>
      </div>
    </div>
    <div class="item" v-for="(item, index) in list" :key="index" :class="{ active: index === current }"
      :style="getItemStyle(index)">
      <div class="item-rotate" :style="showValue(index, wrapStyle)">
        <div class="item-content" :style="showValue(index, itemStyle)">
          <slot :item="item" :index="index"></slot>
        </div>
      </div>
      <div class="item-shadow" :style="showValue(index, shadowStyle)"></div>
    </div>
  </div>
</template>
