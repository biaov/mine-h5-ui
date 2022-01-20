<template>
  <!-- 分享面板 -->
  <div class="me-share-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <div class="m-picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{ tips }}</h3>
      <!-- 分享列表 -->
      <ul class="m-list-li">
        <li v-for="(item, index) in list" :key="index" @click="onLi(item)">
          <i class="iconfont u-icon" :class="item.icon" :style="`color:${item.color};`"></i>
          <span class="u-desc">{{ item.value }}</span>
        </li>
      </ul>
      <!-- 取消按钮 -->
      <button type="button" class="u-btn-cancel" @click="onCancel">取消</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useShow, useBtns } from './hooks'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'MeShareSheet',
  emits: ['update:visible', 'on-change', 'on-cancel'],
  props: {
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
  },
  setup(props, { emit }) {
    const { isShowMask, isShow, hideMask } = useShow(props, emit)
    const { onLi, onCancel } = useBtns(emit)
    return { isShowMask, isShow, hideMask, onLi, onCancel }
  }
})
</script>
