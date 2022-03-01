<template>
  <!-- 上传图片 -->
  <ul class="m-upload">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-upload :max-count="item.maxCount" :max-size="item.maxSize" :preview="item.preview" :multiple="item.multiple" :deletable="item.deletable" :disabled="item.disabled" v-model="item.fileList"></me-upload>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          label: '基础用法'
        },
        {
          id: 2,
          label: '展示图片并预览',
          fileList: [
            { id: 1, url: 'https://app.biaov.cn/mineapp/images/avatar/1.png' },
            { id: 2, url: 'https://app.biaov.cn/mineapp/images/avatar/2.png' },
            { id: 3, url: 'https://app.biaov.cn/mineapp/images/avatar/5.png' }
          ]
        },
        {
          id: 3,
          label: '限制上传数量',
          maxCount: 3
        },
        {
          id: 4,
          label: '限制上传大小 4M',
          maxSize: 4 * 1024 * 1024
        },
        {
          id: 5,
          label: '是否允许多选',
          multiple: true
        },
        {
          id: 6,
          label: '删除图片按钮的显示状态',
          deletable: false
        },
        {
          id: 7,
          label: '禁用状态',
          disabled: true
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.m-upload {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-upload[aria-disabled='true'] {
      cursor: not-allowed;
    }
  }
}
</style>
