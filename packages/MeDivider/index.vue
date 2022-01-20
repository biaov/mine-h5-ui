<template>
  <!-- 分割线 -->
  <div class="me-divider" :style="`width:${width}px;height:${height}px;`">
    <template v-if="fieldsetList.length > 0">
      <fieldset
        class="u-fieldset"
        v-for="(item, index) in fieldsetList"
        :key="index"
        :style="`transform-origin:center ${origin}px;transform:translate(-50%, -50%) rotate(${item.deg}deg);border-top-width:${curLine.size}px;border-top-color:${curLine.color};border-radius: ${curLine.radius}px;`"
        role="presentation"
      >
        <legend class="u-legend" :style="`margin-left:${left}px;margin-right:${right}px;color:${text.color};font-size:${text.size}px`">
          {{ item.text }}
        </legend>
      </fieldset>
    </template>
    <template v-else>
      <fieldset
        class="u-fieldset"
        :style="`transform-origin:center ${origin}px;border-top-width:${curLine.size}px;border-top-color:${curLine.color};border-radius: ${curLine.radius}px;`"
        role="presentation"
      ></fieldset>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useHandler } from './hooks'
import { Line, Text } from './interfaces'

export default defineComponent({
  name: 'MeDivider',
  props: {
    // 线条数和文本
    list: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    // 距离左边的距离
    left: {
      type: Number
    },
    // 距离右边的距离
    right: {
      type: Number
    },
    // 宽度
    width: {
      type: Number
    },
    // 高度
    height: {
      type: Number
    },
    // 旋转元素Y轴的基点位置
    origin: {
      type: Number
    },
    // 线条样式
    line: {
      type: Object as PropType<Line>,
      default: () => ({
        radius: 0, // 线条倒角
        color: '#dcdfe6', // 线条颜色
        size: 1 // 线条大小
      })
    },
    // 文本样式
    text: {
      type: Object as PropType<Text>,
      default: () => ({
        color: '#494949', // 文本颜色
        size: 14 // 文本大小
      })
    }
  },
  setup(props) {
    const { fieldsetList, curLine } = useHandler(props)
    return { fieldsetList, curLine }
  }
})
</script>
