<template>
  <!-- 倒计时 -->
  <div class="me-count-down">
    <slot :DD="formatAfter.DD" :hh="formatAfter.hh" :mm="formatAfter.mm" :ss="formatAfter.ss" :ms="formatAfter.ms">
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
import type { Props, Emits, Slots } from './types'

defineOptions({
  name: 'MeCountDown'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  time: 0,
  format: 'hh:mm:ss',
  isStart: true,
  isSuspend: false,
  isReset: false
})

const { formatAfter } = useCountdown(props, emit)
</script>
