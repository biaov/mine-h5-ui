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
import type { Props } from './types'

defineOptions({
  name: 'MeDivider'
})

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  line: () => ({
    radius: 0,
    color: '#dcdfe6',
    size: 1
  }),
  text: () => ({
    color: '#494949',
    size: 14
  })
})

const { fieldsetList, curLine } = useHandler(props)
</script>
