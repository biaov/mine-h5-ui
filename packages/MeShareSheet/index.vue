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
<script lang="ts" setup>
import { PropType } from 'vue'
import { useShow, useBtns } from './hooks'
import { ListItem } from './types'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
  (event: 'change', e: ListItem): void
  (event: 'cancel', e: MouseEvent): void
}>()

const props = defineProps({
  // v-model:visible 绑定值
  visible: {
    type: Boolean,
    default: false
  },
  // 提示文本
  tips: {
    type: String,
    default: '立即分享给好友'
  },
  // 数据列表
  list: {
    type: Array as PropType<ListItem[]>,
    required: true,
    validator: (value: ListItem[]) => value.length > 0 && Object.keys(value[0]).length > 0
  }
})

const { isShowMask, isShow, hideMask, animationDuration } = useShow(props, emit)
const { onLi, onCancel } = useBtns(emit)
</script>
