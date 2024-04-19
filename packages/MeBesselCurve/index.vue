<script setup lang="ts">
import { useHandler, useMarker, defaultProps } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeBesselCurve'
})
const props = withDefaults(defineProps<Props>(), defaultProps)
const { marker, triangleId } = useMarker(props)
const { lines, besselCurveRef } = useHandler(props)
</script>

<template>
  <div ref="besselCurveRef" class="me-bessel-curve me-absolute-top-left me-w-fill me-h-fill">
    <svg v-if="lines.length" width="100%" height="100%">
      <defs>
        <marker :id="triangleId" markerUnits="strokeWidth" refX="0" orient="auto" v-bind="marker">
          <path :d="`M 0 0 L ${marker.markerWidth} ${marker.refY} L 0 ${marker.markerHeight} z`" :fill="color" />
        </marker>
      </defs>
      <path v-for="(line, index) in lines" :key="index" :d="line" :stroke="color" :stroke-width="strokeWidth" fill="none" :marker-end="arrow ? `url(#${triangleId})` : ''" />
    </svg>
  </div>
</template>
