<template>
  <!-- 图片预览 -->
  <ul class="m-preview">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-img" @click="onPreview(item)">
        <img :src="item.url" alt="img" width="100%" />
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 列表数据
       */
      listData: [
        {
          label: '基础用法',
          url: require('../assets/empty.png')
        },
        {
          label: '自定义样式',
          url: require('../assets/empty.png'),
          background: '#fff'
        }
      ]
    }
  },
  methods: {
    /**
     * 点击图片预览
     */
    onPreview(item) {
      this.$MePreview(item)
    }
  }
}
</script>
<style scoped lang="less">
.m-preview {
  > li {
    margin-bottom: 15px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-img {
      width: 100px;
      margin: 0 auto;
    }
  }
}
</style>
