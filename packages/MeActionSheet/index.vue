<template>
  <!-- 动作面板 -->
  <div class="me-action-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <ul class="list-li" :class="{ on: isShow }" @click.stop>
      <li v-for="item in list" :key="item[index]" @click.stop="onLi(item)">{{ item[label] }}</li>
      <li @click.stop="onCancel">取消</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { useShowSheet, useBtns } from './hooks'
import { ListItem } from './types'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
  (event: 'change', item: ListItem): void
  (event: 'cancel', item: MouseEvent): void
}>()

const props = defineProps({
  // v-model:visible 绑定值
  visible: {
    type: Boolean,
    default: false
  },
  // 数据列表
  list: {
    type: Array as PropType<ListItem[]>,
    required: true,
    validator: (value: ListItem[]) => value.length > 0 && Object.keys(value[0]).length > 0
  },
  // 索引名
  index: {
    type: String,
    default: 'id'
  },
  // 数据展示属性名
  label: {
    type: String,
    default: 'value'
  }
})

const { isShowMask, isShow, hideMask } = useShowSheet(props, emit)
const { onLi, onCancel } = useBtns(emit)
</script>
