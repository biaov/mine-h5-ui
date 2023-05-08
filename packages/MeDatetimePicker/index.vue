<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div class="me-datetime-picker" v-if="visible">
      <!-- 头部按钮 -->
      <div class="hd">
        <button type="button" class="cancel" @click="onCancel">取消</button>
        <span class="line"></span>
        <button type="button" class="sure" @click="onSure">确定</button>
      </div>
      <!-- 主体内容 -->
      <ul class="bd">
        <template v-for="item in listData">
          <li
            :key="item.id"
            v-if="show.includes(item.id)"
            @touchstart.prevent="onTouchstart($event, item.id)"
            @touchmove="onTouchmove($event, item.id)"
            @touchend="onTouchend($event, item.id)"
            @mousedown.prevent="onMousedown($event, item.id)"
          >
            <!-- 移动的区域 -->
            <ol
              :style="`transform:translateY(${distance[show.indexOf(item.id)]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`"
              v-if="Array.isArray(item.list)"
            >
              <li v-for="(num, i) in item.list" :key="i">{{ filterNumber(getCurNum(item.id, num)) }}</li>
            </ol>
          </li>
        </template>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { useHandMove, useBtns } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', str: string): void
  (event: 'cancel'): void
  (event: 'sure', arr: number[]): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: string // v-model 绑定值
    type?: string // 时间类型, date | year-month | month-day | time | datetime
    visible?: boolean // 是否显示时间选择器
    minDate?: Date // 最小值
    maxDate?: Date // 最大值
  }>(),
  {
    modelValue: '',
    type: 'datetime',
    visible: false,
    minDate: () => {
      const now = new Date() // 获取当前数据
      now.setFullYear(now.getFullYear() - 10) // 设置新数据
      return now
    },
    maxDate: () => {
      const now = new Date() // 获取当前数据
      now.setFullYear(now.getFullYear() + 10) // 设置新数据
      return now
    }
  }
)

const { show, currentValue, listData, distance, duration, filterNumber, getCurNum, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props)
const { onCancel, onSure } = useBtns(props, emit, currentValue)
</script>
