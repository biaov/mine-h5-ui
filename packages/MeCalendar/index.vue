<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandle, useShow } from './hooks'
import { name } from './config'
import type { Props, Emits } from './types'
import { MeIcon } from '../MeIcon'

defineOptions({ name })

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  themeColor: '#409eff',
  closable: false
})

const modelValue = defineModel<string>({ default: '' })
const visible = defineModel<boolean>('visible', { default: false })
const { days, getStyle, week, dateInfo, onDayItem, initData, onYearItem, onMonthItem } = useHandle({ props, emit, modelValue, visible })
const { showAnimation, destroy, onClose } = useShow({ visible }, initData)
</script>

<template>
  <!-- 日历 -->
  <div :class="[name, showAnimation ? 'show' : '']" :style="getStyle" ref="calendarRef" @click.stop v-if="destroy">
    <div class="calendar-year">
      <view class="icon" @click="onYearItem(-1)">
        <me-icon name="icon-left-double" size="18px" />
      </view>
      <view class="icon" @click="onMonthItem(-1)">
        <me-icon name="icon-left" size="14px" />
      </view>
      <div class="year-center">
        <div class="month">{{ dateInfo.m }}月</div>
        <div>{{ dateInfo.y }}</div>
      </div>
      <view class="icon" @click="onMonthItem(1)">
        <me-icon name="icon-right1" size="14px" />
      </view>
      <view class="icon" @click="onYearItem(1)">
        <me-icon name="icon-right-double" size="18px" />
      </view>
    </div>
    <div class="calendar-week">
      <div class="item" v-for="item in week" :key="item">
        <div class="item-box fixed">{{ item }}</div>
      </div>
    </div>
    <div class="calendar-day">
      <div class="item" v-for="(item, index) in days" :key="index" @click="onDayItem(item, index)">
        <div class="item-box" :class="{ disabled: item.disabled, selected: item.selected, today: item.today }">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
  <div :class="`${name}-mask`" @click.stop="onClose" v-if="destroy"></div>
</template>
