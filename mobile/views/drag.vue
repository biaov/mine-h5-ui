<template>
  <!-- 索引栏 -->
  <div class="m-drag">
    <div class="u-label">基础使用</div>
    <me-drag :list.sync="list" :current.sync="current" @on-change="onChange">
      <template #default="{item}">
        <img :src="item.url" alt="img" mode="fill" />
      </template>
    </me-drag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      list: [
        {
          rect: {
            w: 100,
            h: 100,
            x: 0,
            y: 0,
            r: 0
          },
          url: 'https://dummyimage.com/100x100/67c23a/fff&text=1'
        },
        {
          rect: {
            w: 80,
            h: 80,
            x: 110,
            y: 110,
            r: 0
          },
          url: 'https://dummyimage.com/80x80/409eff/fff&text=2'
        }
      ],
      current: 0 // 当前选中项
    }
  },
  methods: {
    // 状态改变
    onChange(type, name) {
      console.log(name)
    }
  }
}
</script>
<style scoped lang="less">
.m-drag {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-drag {
    border: 1px dashed @color-warning;
  }
}
</style>
