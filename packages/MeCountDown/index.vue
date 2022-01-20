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
<script lang="ts">
import { defineComponent } from 'vue'
import { useCountdown } from './hooks'

export default defineComponent({
  name: 'MeCountDown',
  emits: ['on-end', 'on-progress'],
  props: {
    // 需要倒计的时间
    time: {
      type: Number,
      required: true
    },
    // 时间格式化
    format: {
      type: String,
      default: 'hh:mm:ss' // DD:hh:mm:ss:ms
    },
    // 是否开始
    isStart: {
      type: Boolean,
      default: true
    },
    // 是否暂停
    isSuspend: {
      type: Boolean,
      default: false
    },
    // 是否重置
    isReset: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { formatAfter } = useCountdown(props, emit)
    return { formatAfter }
  }
})
</script>
