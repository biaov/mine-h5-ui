<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-virtual-list height="300px" :list="listData" @on-load-more="onLoadMore(list)">
      <template #default="{item}">
        <div class="item">
          <p><span>#{{item.virtualId}}.</span> {{item.text}}</p>
        </div>
      </template>
      <template #more>
        <div class="u-more">{{loadMoreText[list.loadStatus]}}</div>
      </template>
    </me-virtual-list>
  </div>
</template>
<script>
import { Random } from "mockjs";

export default {
  data() {
    return {
      listData: Array.from({ length: 100 }, () => ({ text: Random.cword(16, 50) })) // 列表数据
    };
  }
};
</script>
<style lang="less" scoped>
.m-demo {
  .item {
    width: 100%;
    min-height: 50px;
    border-bottom: 1px dotted #ececec;
    p {
      width: 100%;
      height: 100%;
      line-height: 30px;
      padding: 0 15px;
      background: #fff;
      color: #949494;
      font-size: 16px;
      span {
        color: #f56c6c;
      }
    }
  }
}
</style>
