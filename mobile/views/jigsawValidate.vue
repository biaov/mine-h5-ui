<template>
  <!-- 拼图校验 -->
  <ul class="jigsaw-validate">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-jigsaw-validate v-bind="item" @change="onChange"></me-jigsaw-validate>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    const url = require('../assets/material.png')
    return {
      listData: [
        {
          id: 1,
          label: '基础用法',
          url
        },
        {
          id: 2,
          label: '自定义图片大小',
          url,
          width: '300px',
          height: '260px'
        },
        {
          id: 3,
          label: '是否开启随机位置',
          url,
          random: false
        },
        {
          id: 4,
          label: '自定义滑块位置',
          url,
          slideStyle: {
            height: '30px',
            background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
            dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
            tips: '#fff'
          }
        },
        {
          id: 5,
          label: '提示文字',
          url,
          tips: '这是一段提示文字'
        },
        {
          id: 6,
          label: '容错值',
          url,
          range: 20
        }
      ]
    }
  },
  methods: {
    onChange(e) {
      e && this.$MeToast('验证通过')
    }
  }
}
</script>
<style scoped lang="less">
.jigsaw-validate {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-jigsaw-validate) {
      margin-bottom: 20px;
    }
  }
}
</style>
