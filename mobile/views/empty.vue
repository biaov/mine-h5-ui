<template>
  <!-- 空状态 -->
  <ul class="m-empty">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-empty v-bind="item"></me-empty>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 列表
       */
      listData: [
        {
          label: '基础用法',
          text: '暂无数据'
        },
        {
          label: '错误类型',
          type: 'network',
          text: '一帘清雨，垂下了一汪泪，一份缠绵，揉断了心碎。'
        },
        {
          label: '自定义图标',
          iconName: 'Loading',
          text: '快乐很简单，就是春天的鲜花，夏天的绿荫，秋天的野果，冬天的漫天飞雪。'
        },
        {
          label: '自定义图片',
          url: require('../assets/empty.png'),
          text: '用心聆听，深深呼吸，烟花雨，梨花月，寄一缕风的香魂，远离喧嚣。'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.m-empty {
  > li {
    margin-bottom: 15px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
  }
}
</style>
