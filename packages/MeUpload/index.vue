<template>
  <!-- 上传图片 -->
  <div class="me-upload" :aria-disabled="disabled">
    <!-- 展示图片 -->
    <div class="m-imgs" v-for="item in listData" :key="item.id" @click="onPreview(item)">
      <img :src="item.url" class="u-img" alt="图片" />
      <me-icon name="icon-close" color="#dcdee0" size="16px" @on-click="onDelete($event, item)" v-if="deletable"></me-icon>
    </div>
    <!-- 上传按钮 -->
    <div class="m-upload" v-if="listData.length < maxCount">
      <me-icon name="icon-xiangji" color="#dcdee0" size="20px"></me-icon>
      <input type="file" class="u-file" :multiple="multiple" @change="onChange" :disabled="disabled" />
    </div>
    <!-- 图片预览 -->
    <div class="m-preview" v-if="isPreview" @click="closePreview">
      <div class="u-num">{{ curNum }} / {{ listData.length }}</div>
      <transition-group tag="ul" name="slider" class="m-slider">
        <li v-for="item in listData" :key="item.id" v-show="curNum === item.id"><img :src="item.url" alt="图片" /></li>
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import MeIcon from "~/MeIcon";
import { useHandler } from "./hooks";
import { BeforeRead, BfterRead, BeforeDelete } from "./types";
import { ListDataItem } from "./interfaces";

export default defineComponent({
  name: "MeUpload",
  components: {
    MeIcon
  },
  props: {
    // v-model:fileList绑定值
    fileList: {
      type: Array as PropType<ListDataItem[]>,
      default: () => []
    },
    // 图片是否可预览
    preview: {
      type: Boolean,
      default: true
    },
    // 最大上传数量
    maxCount: {
      type: Number,
      default: 1000
    },
    // 文件大小设置
    maxSize: {
      type: Number,
      default: 2 * 1024 * 1024
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: true
    },
    // 禁止状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 文件读取前钩子函数
    beforeRead: {
      type: Function as PropType<BeforeRead>,
      default: () => () => true
    },
    // 文件读取完钩子函数
    afterRead: {
      type: Function as PropType<BfterRead>,
      default: () => () => true
    },
    // 文件删除前钩子函数
    beforeDelete: {
      type: Function as PropType<BeforeDelete>,
      default: () => () => true
    }
  },
  setup(props) {
    const { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview } = useHandler(props);
    return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview };
  }
});
</script>
