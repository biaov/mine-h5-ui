<template>
  <!-- 滑动单元格 -->
  <ul class="m-swiper-cell">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <me-swiper-cell>
        <h3 class="u-tit" slot="content">{{item.liText}}</h3>
        <div class="m-btns" slot="hidden" :style="`width:${item.width}px;`">
          <me-button type="danger" icon="icon-delete1" @on-click="onDelete">删除</me-button>
          <me-button type="success" icon="icon-aixinD" @on-click="onCollect" v-if="item.width>100">收藏</me-button>
        </div>
      </me-swiper-cell>
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
          label: "基础用法",
          liText: "向左滑动显示删除按钮",
          width: 81
        },
        {
          id: 2,
          label: "隐藏多按钮",
          liText: "向左滑动显示多按钮",
          width: 162
        }
      ]
    };
  },
  methods: {
    // 删除按钮
    onDelete() {
      const that = this;
      that.$MeMessageBox.confirm({
        tips: "警告",
        message: "你确定要删除此项吗？",
        onOk() {
          that.$MeToast("删除成功");
        }
      });
    },
    // 点击收藏按钮
    onCollect() {
      this.$MeToast("收藏成功");
    }
  }
};
</script>
<style scoped lang="less">
.m-swiper-cell {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-tit {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      background: @bg-color;
      color: @font-color;
      font-size: @font-size;
    }
    .m-btns {
      display: flex;
      justify-content: space-between;
      width: 100px;
      height: 40px;
      line-height: 40px;
      background: @color-danger;
      text-align: center;
      color: @color-default;
      font-size: @font-size;
    }
    cursor: grab;
  }
}
</style>