<template>
  <!-- 步进器 -->
  <div class="me-stepper" :class="{ 'me-disabled': disabled }" :style="getStyle">
    <div class="button" :class="{ 'me-disabled': +modelValue <= props.min }" @click="onClickBtn(-props.step)">
      <svg focusable="false" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
      </svg>
    </div>
    <input type="text" v-model="modelValue" class="input" :class="{ 'me-disabled': disabled }" :maxlength="maxlength" @blur="onBlur" />
    <div class="button" :class="{ 'me-disabled': +modelValue >= props.max }" @click="onClickBtn(props.step)">
      <svg focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
        <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"></path>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeStepper'
})

const props = withDefaults(defineProps<Props>(), {
  max: 999,
  min: 1,
  step: 1,
  maxlength: 3,
  height: 36,
  disabled: false,
  inputWidth: 60,
  fontSize: 14
})
const modelValue = defineModel<string | number>({ default: 1 })
const { onClickBtn, onBlur, getStyle } = useHandle(props, modelValue)
</script>
