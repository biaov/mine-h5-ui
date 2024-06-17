<script lang="ts" setup>
import { useShow, useBtns } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeShareSheet'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  visible: false,
  tips: '立即分享给好友'
})

const visibleModel = defineModel<boolean>('visible', { default: false })
const { isShowMask, isShow, hideMask, animationDuration } = useShow(visibleModel)
const { onLi, onCancel } = useBtns({ emit, visibleModel })
</script>

<template>
  <!-- 分享面板 -->
  <div class="me-share-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- 分享列表 -->
      <ul class="list-li">
        <li v-for="(item, index) in list" :key="index" @click="onLi(item)">
          <i class="iconfont icon" :class="item.icon" :style="`color:${item.color};`"></i>
          <span class="desc">{{ item.value }}</span>
        </li>
      </ul>
      <!-- 取消按钮 -->
      <button type="button" class="btn-cancel" @click="onCancel">取消</button>
    </div>
  </div>
</template>
