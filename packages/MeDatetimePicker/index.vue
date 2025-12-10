<script lang="ts" setup>
import { useHandMove, useBtns } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeDatetimePicker'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  type: 'datetime',
  visible: false,
  minDate: () => {
    /**
     * 获取当前数据
     */
    const now = new Date()
    /**
     * 设置新数据
     */
    now.setFullYear(now.getFullYear() - 10)
    return now
  },
  maxDate: () => {
    /**
     * 获取当前数据
     */
    const now = new Date()
    /**
     * 设置新数据
     */
    now.setFullYear(now.getFullYear() + 10)
    return now
  }
})

/**
 * 拼接的地址
 */
const modelValue = defineModel<string>({ default: '' })

const { show, currentValue, listData, distance, duration, filterNumber, getCurNum, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props)
const { onCancel, onSure } = useBtns({ props, emit, currentValue, modelValue })
</script>

<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div v-if="visible" class="me-datetime-picker">
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
            v-if="show.includes(item.id)"
            :key="item.id"
            @touchstart.prevent="onTouchstart($event, item.id)"
            @touchmove="onTouchmove($event, item.id)"
            @touchend="onTouchend($event, item.id)"
            @mousedown.prevent="onMousedown($event, item.id)"
          >
            <!-- 移动的区域 -->
            <ol :style="`transform:translateY(${distance[show.indexOf(item.id)]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`">
              <template v-if="Array.isArray(item.list)">
                <li v-for="(num, i) in item.list" :key="i">{{ filterNumber(getCurNum(item.id, num)) }}</li>
              </template>
              <template v-else>
                <li v-for="(num, i) in item.list" :key="i">{{ filterNumber(getCurNum(item.id, num)) }}</li>
              </template>
            </ol>
          </li>
        </template>
      </ul>
    </div>
  </transition>
</template>
