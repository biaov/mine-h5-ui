<script lang="ts" setup>
import { name, assets } from './config'
import { useSlide } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name
})

const emit = defineEmits<Emits>()

const props = defineProps<Props>()

const visible = defineModel<boolean>('visible', { default: false })
const statusCode = defineModel<number>('statusCode', { default: 0 })

const { moveX, imgRect, rectAni, onClose, onRefresh } = useSlide(props, emit, { visible, statusCode })
</script>

<template>
  <!-- 图片验证器 -->
  <transition name="fade">
    <div :class="name" v-if="visible">
      <div :class="`${name}-content`">
        <div class="captcha-tips">安全验证</div>
        <div class="captcha-title">拖动下方滑块完成拼图</div>
        <img :src="assets.close" class="captcha-close" @click="onClose" />
        <div class="captcha-rect" :class="{ animation: rectAni }">
          <div class="captcha-img-rect" v-if="imgRect">
            <img :src="item?.elem?.url" class="img-start"
              :style="`width: ${imgRect.w}px; height: ${imgRect.h}rpx;top: ${imgRect.y}px;left: ${moveX}px;`" />
            <img :src="item?.bgElem?.url" class="img-end" />
            <div class="captcha-success" v-if="statusCode === 1">
              <img :src="assets.success" class="captcha-success-img" />
              <div class="captcha-success-text">验证成功!</div>
            </div>
          </div>
          <div class="captcha-slide">
            <div class="captcha-slide-move" :style="`left: ${moveX}px;`" ref="captchaSlideMoveNode">
              <img :src="assets.lines" class="line" />
            </div>
          </div>
        </div>
        <div class="captcha-footer">
          <div class="captcha-footer__left">{{ [2, 3].includes(statusCode) ? '验证错误，请重试' : '' }}</div>
          <img :src="assets.refresh" class="captcha-footer__right" @click="onRefresh" />
        </div>
      </div>
    </div>
  </transition>

</template>
