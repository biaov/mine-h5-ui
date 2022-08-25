<template>
  <!-- 上传图片 -->
  <div class="me-upload" :data-disabled="disabled">
    <!-- 展示图片 -->
    <div class="imgs" v-for="item in listData" :key="item.id" @click="onPreview(item)">
      <img :src="item.url" class="img" alt="图片" />
      <me-icon name="icon-close" color="#dcdee0" size="16px" @click="onDelete($event, item)" v-if="deletable"></me-icon>
    </div>
    <!-- 上传按钮 -->
    <div class="upload" v-if="listData.length < maxCount">
      <me-icon name="icon-xiangji" color="#dcdee0" size="20px"></me-icon>
      <input type="file" class="file" :multiple="multiple" @change="onChange" :disabled="disabled" />
    </div>
    <!-- 图片预览 -->
    <div class="preview" v-if="isPreview" @click="closePreview">
      <div class="num">{{ curNum }} / {{ listData.length }}</div>
      <transition-group tag="ul" name="slider" class="slider">
        <li v-for="item in listData" :key="item.id" v-show="curNum === item.id"><img :src="item.url" alt="图片" /></li>
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon'
import { useHandler } from './hooks'
import { BeforeRead, BfterRead, BeforeDelete, ListDataItem } from './types'

const emit = defineEmits<{
  (event: 'update:fileList', list: ListDataItem[]): void
  (event: 'update:file-list', list: ListDataItem[]): void
  (event: 'change', list: ListDataItem[]): void
}>()

const props = withDefaults(
  defineProps<{
    fileList?: ListDataItem[] // v-model:fileList 绑定值
    preview?: boolean // 图片是否可预览
    maxCount?: number // 最大上传数量
    maxSize?: number // 文件大小设置
    multiple?: boolean // 是否多选
    deletable?: boolean // 是否展示删除按钮
    disabled?: boolean // 禁止状态
    beforeRead?: BeforeRead // 文件读取前钩子函数
    afterRead?: BfterRead // 文件读取完钩子函数
    beforeDelete?: BeforeDelete // 文件删除前钩子函数
  }>(),
  {
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
  }
)

const { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview } = useHandler(props, emit)
</script>
