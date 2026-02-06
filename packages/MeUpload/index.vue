<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useHandler } from './hooks'
import type { Props, Emits, ListDataItem } from './types'

defineOptions({
  name: 'MeUpload'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  fileList: () => [],
  preview: true,
  maxCount: 1000,
  maxSize: 2 * 1024 * 1024,
  multiple: false,
  deletable: true,
  disabled: false,
  beforeRead: () => true,
  afterRead: () => true,
  beforeDelete: () => true
})
/**
 * 列表数据
 */
const listData = defineModel<ListDataItem[]>('fileList', { default: () => [] })
const { curNum, isPreview, onDelete, closePreview, onChange, onPreview } = useHandler({ props, emit, listData })
</script>

<template>
  <!-- 上传图片 -->
  <div class="me-upload" :data-disabled="disabled">
    <!-- 展示图片 -->
    <div v-for="item in listData" :key="item.id" class="imgs" @click="onPreview(item)">
      <img :src="item.url" class="img" alt="图片" />
      <me-icon v-if="deletable" name="icon-close" color="#dcdee0" size="16px" @click="onDelete($event, item)" />
    </div>
    <!-- 上传按钮 -->
    <div v-if="listData.length < maxCount" class="upload">
      <me-icon name="icon-xiangji" color="#dcdee0" size="20px" />
      <input type="file" class="file" :multiple="multiple" :disabled="disabled" @change="onChange" />
    </div>
    <!-- 图片预览 -->
    <div v-if="isPreview" class="preview" @click="closePreview">
      <div class="num">{{ curNum }} / {{ listData.length }}</div>
      <transition-group tag="ul" name="slider" class="slider">
        <li v-for="item in listData" v-show="curNum === item.id" :key="item.id"><img :src="item.url" alt="图片" /></li>
      </transition-group>
    </div>
  </div>
</template>
