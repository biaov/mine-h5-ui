<template>
  <!-- 倒计时 -->
  <div class="me-count-down">
    <slot v-bind="formatAfter">
      <template v-if="formatAfter.DD !== undefined">{{ formatAfter.DD }} 天</template>
      <template v-if="formatAfter.hh !== undefined">{{ formatAfter.hh }} 时</template>
      <template v-if="formatAfter.mm !== undefined">{{ formatAfter.mm }} 分</template>
      <template v-if="formatAfter.ss !== undefined">{{ formatAfter.ss }} 秒</template>
      <template v-if="formatAfter.ms !== undefined">{{ formatAfter.ms }} 毫秒</template>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { useCountdown } from './hooks'

const emit = defineEmits<{
  (event: 'end'): void
  (event: 'progress', time: number): void
}>()

const props = withDefaults(
  defineProps<{
    time?: number // 需要倒计的时间
    format?: string // 时间格式化, DD:hh:mm:ss:ms
    isStart?: boolean // 是否开始
    isSuspend?: boolean // 是否暂停
    isReset?: boolean // 是否重置
  }>(),
  {
    time: 0,
    format: 'hh:mm:ss',
    isStart: true,
    isSuspend: false,
    isReset: false
  }
)

const { formatAfter } = useCountdown(props, emit)
</script>
