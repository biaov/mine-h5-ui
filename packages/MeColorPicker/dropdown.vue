<script setup lang="ts">
import { ref, computed, useTemplateRef, watch } from 'vue'
import { useColorTransform, useSameTarget } from '../MeComposable'
import CompSlide from './slide.vue'
import SelectMode from './select-mode.vue'
import { name, getDefaultValue } from './config'
import type { DropDown, ColorPanel as ColorPanelType, DefineModelOption } from './types'
import { colorType, hsbKey } from './enums'
import { hsbToRect, rgbToRgba, rgbExtractNum, setModelValue } from './utils'
import ColorPanel from './color-panel.vue'

const emit = defineEmits<DropDown.Emits>()
const props = withDefaults(defineProps<DropDown.Props>(), {
  duration: 400,
  rect: () => ({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })
})
const visible = defineModel('visible', { default: false })
const modelValue = defineModel<DefineModelOption.ModelValue>({ default: getDefaultValue() })

/**
 * 下拉区域数据
 */
const dropdownRect = { width: 260, height: 260 }
/**
 * 最大屏幕宽度
 */
const screenMaxW = screen.width - dropdownRect.width
/**
 * 箭头大小
 */
const arrowSize = 10
/**
 * 间隔
 */
const gap = 10
const getStyle = computed(() => {
  const { width, height, x: screenX, y: screenY } = props.rect
  let x = screenX
  let y = screenY + height + gap
  const minX = 0
  const maxX = screen.width - width
  const maxY = screen.height - dropdownRect.height
  let arrowDeg = 45
  if (x < minX) {
    x = minX
  } else if (x > maxX) {
    x = maxX
  }

  x > screenMaxW && (x = screenMaxW)
  let arrowX = ~~((width - arrowSize) / 2 + (screenX - x))
  let arrowY = -5
  arrowX += arrowSize / 2
  if (y > maxY) {
    y -= dropdownRect.height + height + gap * 2
    arrowY = dropdownRect.height + 5
    arrowDeg = 225
  }

  if (arrowX < 0) {
    arrowX = 0
  } else if (arrowX > dropdownRect.width) {
    arrowX = dropdownRect.width
  }

  return `left:${x}px;top:${y}px;width:${dropdownRect.width}px;height:${dropdownRect.height}px;--arrow-x:${arrowX}px;--arrow-y:${arrowY}px;--arrow-size:${arrowSize}px;--arrow-deg:rotate(${arrowDeg}deg);`
})

const onClose = () => {
  visible.value = false
}

const { onClick, onMousedown, onMouseup } = useSameTarget(onClose)

const progress = ref({
  entity: {
    value: 0,
    bg: 'linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)',
    dotBg: ''
  },
  opacity: {
    value: 100,
    bg: '',
    dotBg: ''
  }
})
const bgBox = ref('')

const colorPanel = ref<ColorPanelType.ModelValue>({
  x: 0,
  y: 0
})

const onUpdateColorPanel = () => {
  const { x, y } = colorPanel.value
  const h = hsbToRect({ value: progress.value.entity.value, type: hsbKey.h })
  const s = hsbToRect({ value: x, type: hsbKey.s })
  const b = hsbToRect({ value: y, type: hsbKey.b })
  const value = useColorTransform(`hsb(${h},${s}%,${b}%)`, [colorType.hsb, modelValue.value.type])
  setModelValue(modelValue, { value })
}
watch(
  modelValue,
  newValue => {
    const rgb = useColorTransform(newValue.value, [newValue.type, colorType.rgb])
    const hsb = useColorTransform(newValue.value, [newValue.type, colorType.hsb])
    const [h, s, b] = rgbExtractNum<number>(hsb, true)
    const x = hsbToRect({ value: s, type: hsbKey.s, reverse: true })
    const y = hsbToRect({ value: b, type: hsbKey.b, reverse: true })
    colorPanel.value = { x, y }
    progress.value.entity.value = hsbToRect({ value: h, type: hsbKey.h, reverse: true })
    progress.value.entity.dotBg = `hsl(${h},100%,50%)`
    progress.value.opacity.value = newValue.alpha
    progress.value.opacity.dotBg = rgbToRgba(rgb, progress.value.opacity.value)
    progress.value.opacity.bg = `linear-gradient(90deg, transparent 0%, ${rgb} 100%)`
    bgBox.value = rgb.replace(')', `,${newValue.alpha / 100}`)
  },
  { immediate: true, deep: true }
)

const onUpdateAlpha = (alpha: number) => setModelValue(modelValue, { alpha: Math.round(+alpha) })
</script>
<template>
  <transition name="fade">
    <div :class="`${name}-mask`" @click="onClick" @mousedown="onMousedown" @mouseup="onMouseup" v-if="visible">
      <div :class="`${name}-dropdown`" :style="getStyle" @click.stop>
        <ColorPanel v-model="colorPanel" @update:modelValue="onUpdateColorPanel" :background="progress.entity.dotBg" />
        <div class="progress-box">
          <div class="progress-box__group">
            <CompSlide v-model="progress.entity.value" :color="progress.entity.dotBg" opacity :background="progress.entity.bg" @update:modelValue="onUpdateColorPanel" />
            <CompSlide v-model="modelValue.alpha" :color="progress.opacity.dotBg" opacity :background="progress.opacity.bg" @update:modelValue="onUpdateAlpha" />
          </div>
          <div class="progress-box__block" :style="{ backgroundColor: bgBox }"></div>
        </div>
        <SelectMode v-model="modelValue" />
      </div>
    </div>
  </transition>
</template>
