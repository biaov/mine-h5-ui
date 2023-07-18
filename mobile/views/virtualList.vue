<template>
  <!-- 上传图片 -->
  <ul class="m-virtual-list">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-virtual-list height="300px" :list="list.list" :itemHeight="list.itemHeight" :remain="16" @on-load-more="onLoadMore(list)">
        <template #default="{ item }">
          <div class="item" :class="{ auto: list.auto }">
            <p>
              <span>#{{ item.virtualId }}.</span>
              {{ item.text }}
            </p>
          </div>
        </template>
        <template #more>
          <div class="u-more" v-if="list.loadStatus">{{ loadMoreText[list.loadStatus] }}</div>
        </template>
      </me-virtual-list>
    </li>
  </ul>
</template>
<script>
import { Random } from 'mockjs'

export default {
  data() {
    const initList = this.createArr()
    const autoList = this.createArr(14, 50)
    return {
      /**
       * 列表数据
       */
      listData: [
        {
          id: 1,
          label: '基础用法',
          itemHeight: 50,
          list: initList
        },
        {
          id: 2,
          label: '加载更多',
          itemHeight: 50,
          loadStatus: 'more',
          list: initList
        },
        {
          id: 3,
          label: '自适应高度',
          itemHeight: 0,
          list: autoList,
          auto: true
        }
      ],
      /**
       * 状态文本
       */
      loadMoreText: {
        nomore: '没有更多数据了',
        more: '加载更多',
        loading: '正在加载中...'
      }
    }
  },
  methods: {
    /**
     * 生成数组
     */
    createArr(min = 6, max = 14) {
      return Array.from({ length: 100 }, () => ({ text: Random.cword(min, max) }))
    },
    /**
     * 加载更多
     */
    onLoadMore(item) {
      if (item.loadStatus !== 'more') return
      item.loadStatus = 'loading'
      setTimeout(() => {
        item.list.push(...this.createArr())
        item.loadStatus = 'nomore'
      }, 1500)
    }
  }
}
</script>
<style scoped lang="less">
.m-virtual-list {
  > li {
    margin-bottom: 20px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-virtual-list {
      border: 1px solid @border-color-pre;
    }
    .item {
      width: 100%;
      height: 50px;
      border-bottom: 1px dotted @border-color-line;
      &.auto {
        min-height: 50px;
        height: auto;
        p {
          line-height: 30px;
        }
      }
      p {
        width: 100%;
        height: 100%;
        line-height: 48px;
        padding: 0 15px;
        background: @color-default;
        color: @font-color-reduce;
        font-size: @font-size;
        span {
          color: @color-danger;
        }
      }
    }
    .u-more {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
  }
}
</style>
