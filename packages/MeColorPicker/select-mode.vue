<script setup lang="ts">
import { ref, watch } from 'vue'
import { useColorTransform } from '../MeComposable'
import ComInput from './input.vue'
import { colorType } from './enums'
import type { ColorTypeOptionItem, DefineModelOption } from './types'
import { rgbExtractNum, setModelValue } from './utils'
import { getDefaultValue } from './config'

const modelValue = defineModel<DefineModelOption.ModelValue>({ default: getDefaultValue() })

const parseValue = ref([0, 0, 0])
const modeSelect = ref('')
const visibleDropdown = ref(false)
const onSetVisibleDropdown = (value: boolean) => {
  visibleDropdown.value = value
}
const onSelect = ({ value }: ColorTypeOptionItem) => {
  if (modelValue.value.type === value) return
  const newValue = useColorTransform(modelValue.value.value, [modelValue.value.type, value])
  setModelValue(modelValue, { value: newValue, type: value })
  onSetVisibleDropdown(false)
}

const onUpdateAlpha = (alpha: string | number) => {
  setModelValue(modelValue, { alpha: Math.round(+alpha) })
}

const onUpdateModeSelect = () => {
  const { value: oldValue } = modelValue.value
  const { value } = modeSelect
  if (value.length !== 6 || oldValue.slice(1) === modeSelect.value) return
  setModelValue(modelValue, { value: `#${value}` })
}

watch(
  parseValue,
  ([one, two, three]) => {
    const { type, value: oldValue } = modelValue.value
    let value: string | null = null
    switch (type) {
      case colorType.rgb:
        value = `${type}(${one},${two},${three})`
        break
      case colorType.hsb:
        value = `${type}(${one},${two}%,${three}%)`
        break
    }
    value && oldValue !== value && setModelValue(modelValue, { value })
  },
  {
    deep: true,
    immediate: true
  }
)

watch(
  modelValue,
  newValue => {
    if (newValue.type === colorType.hex) {
      modeSelect.value = `${newValue.value}`.replace('#', '')
    } else {
      parseValue.value = rgbExtractNum(newValue.value)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
</script>
<template>
  <div class="color-mode">
    <div class="color-mode__select">
      <div class="item-wrap" @click="onSetVisibleDropdown(true)">
        <span class="text" :class="{ disabled: visibleDropdown }" :title="modelValue.type">{{ modelValue.type }}</span>
        <span class="iconfont icon-right1"></span>
      </div>
      <transition name="fade">
        <div v-if="visibleDropdown">
          <div class="child-dropdown--mask" @click="onSetVisibleDropdown(false)"></div>
          <ul class="child-dropdown">
            <li v-for="(item, index) in colorType.options()" :key="index" class="item" :class="{ active: modelValue.type === item.value }" @click="onSelect(item)">{{ item.value }}</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="color-mode__input" :class="{ group: modelValue.type !== colorType.hex }">
      <ComInput v-model="modeSelect" prefix="#" v-if="modelValue.type === colorType.hex" @update:modelValue="onUpdateModeSelect" />
      <template v-else-if="modelValue.type === colorType.hsb">
        <ComInput v-model="parseValue[0]" :range="[0, 359]" />
        <ComInput v-model="parseValue[1]" suffix="%" :range="[0, 100]" />
        <ComInput v-model="parseValue[2]" suffix="%" :range="[0, 100]" />
      </template>
      <template v-else>
        <ComInput v-model="parseValue[0]" :range="[0, 255]" />
        <ComInput v-model="parseValue[1]" :range="[0, 255]" />
        <ComInput v-model="parseValue[2]" :range="[0, 255]" />
      </template>
    </div>
    <div class="color-mode__input-number">
      <ComInput v-model="modelValue.alpha" :range="[0, 100]" suffix="%" @update:modelValue="onUpdateAlpha" />
    </div>
  </div>
</template>
