<template>
  <!-- 动作面板 -->
  <div class="me-action-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <ul class="m-list-li" :class="{ on: isShow }" @click.stop>
      <li v-for="item in list" :key="item[index]" @click.stop="onLi(item)">{{ item[label] }}</li>
      <li @click.stop="onCancel">取消</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useShowSheet, useBtns } from './hooks'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'MeActionSheet',
  emits: ['update:visible', 'on-change', 'on-cancel'],
  props: {
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
  },
  setup(props, { emit }) {
    const { isShowMask, isShow, hideMask } = useShowSheet(props, emit)
    const { onLi, onCancel } = useBtns(emit)
    return { isShowMask, isShow, hideMask, onLi, onCancel }
  }
})
</script>
