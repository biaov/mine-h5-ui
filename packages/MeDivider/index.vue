<template>
  <!-- 分割线 -->
  <div class="me-divider" :style="`width:${width}px;height:${height}px;`">
    <template v-if="fieldsetList.length > 0">
      <fieldset
        class="fieldset"
        v-for="(item, index) in fieldsetList"
        :key="index"
        :style="`transform-origin:center ${origin}px;transform:translate(-50%, -50%) rotate(${item.deg}deg);border-top-width:${curLine.size}px;border-top-color:${curLine.color};border-radius: ${curLine.radius}px;`"
        role="presentation"
      >
        <legend class="legend" :style="`margin-left:${left}px;margin-right:${right}px;color:${text.color};font-size:${text.size}px`">
          {{ item.text }}
        </legend>
      </fieldset>
    </template>
    <template v-else>
      <fieldset
        class="fieldset"
        :style="`transform-origin:center ${origin}px;border-top-width:${curLine.size}px;border-top-color:${curLine.color};border-radius: ${curLine.radius}px;`"
        role="presentation"
      ></fieldset>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import { Line, Text } from './types'

const props = withDefaults(
  defineProps<{
    list?: string[] // 线条数和文本
    left?: number // 距离左边的距离
    right?: number // 距离右边的距离
    width?: number // 宽度
    height?: number // 高度
    origin?: number // 旋转元素Y轴的基点位置
    line?: Line // 线条样式
    text?: Text // 文本样式
  }>(),
  {
    list: () => [],
    line: () => ({
      radius: 0, // 线条倒角
      color: '#dcdfe6', // 线条颜色
      size: 1 // 线条大小
    }),
    text: () => ({
      color: '#494949', // 文本颜色
      size: 14 // 文本大小
    })
  }
)

const { fieldsetList, curLine } = useHandler(props)
</script>
