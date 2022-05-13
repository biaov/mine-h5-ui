<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div class="me-address-picker" v-if="visible">
      <!-- 头部按钮 -->
      <div class="hd">
        <button type="button" class="cancel" @click="onCancel">取消</button>
        <span class="line"></span>
        <button type="button" class="sure" @click="onSure">确定</button>
      </div>
      <!-- 主体内容 -->
      <ul class="bd">
        <li
          v-for="(item, index) in listData"
          :key="index"
          @touchstart.prevent="onTouchstart($event, index)"
          @touchmove="onTouchmove($event, index)"
          @touchend="onTouchend($event, index)"
          @mousedown.prevent="onMousedown($event, index)"
        >
          <!-- 移动的区域 -->
          <ol :style="`transform:translateY(${distance[index]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`">
            <li v-for="(value, i) in item" :key="i">{{ value }}</li>
          </ol>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { useHandMove, useBtns } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', str: string): void
  (event: 'cancel'): void
  (event: 'sure', currentValue: string[]): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: string // v-model绑定值
    visible?: boolean // 是否显示时间选择器
    separator?: string // 分割符
  }>(),
  {
    modelValue: '',
    visible: false,
    separator: '-'
  }
)

const { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove()
const { onCancel, onSure } = useBtns(props, emit, currentValue)
</script>
