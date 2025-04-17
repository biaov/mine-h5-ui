<script lang="ts" setup>
import { useTurnPage } from './hooks'
import type { Props, Emits } from './types'
import { name } from './config'

defineOptions({ name })


const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
})

</script>

<template>
  <!-- 倒计时 -->
  <div :class="name">
  </div>
</template>
