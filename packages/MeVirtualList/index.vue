<template>
  <!-- 虚拟列表 -->
  <div class="me-virtual-list" :style="`height:${height};`" @scroll.passive="onScroll">
    <!-- 滚动高度 -->
    <div class="u-scroll-bar" :style="`height:${scrollBarHeight}px;`"></div>
    <!-- 列表 -->
    <ul class="m-list-scroll" :style="`transform:translateY(${scrollTranslateY}px);`">
      <li v-for="item in renderData" :key="item.virtualId" :data-index="item.virtualId" ref="nodes">
        <slot :item="item"></slot>
      </li>
    </ul>
    <slot name="more"></slot>
  </div>
</template>
<script>
import { Throttle } from "~/MeAPI/function";

export default {
  name: "MeVirtualList",
  props: {
    // 列表数据
    list: {
      type: Array,
      default: () => []
    },
    // 节流时间
    interval: {
      type: Number,
      default: 100
    },
    // 虚拟列表高度
    height: {
      type: String,
      default: "100%"
    },
    // 固定选项高度
    itemHeight: {
      type: Number,
      default: 0
    },
    // 距离底部的距离
    distance: {
      type: Number,
      default: 50
    },
    // 前后各渲染几屏
    screen: {
      type: Array,
      default: () => [1, 1]
    },
    // 每屏可见的数据条数
    remain: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      scrollBarHeight: 0, // 滚动高度
      listData: [], // 列表数据
      scrollTranslateY: 0, // 纵向滚动
      startIndex: 0, // 开始数据索引
      endIndex: 0 // 结束数据索引
    };
  },
  computed: {
    // 渲染数据
    renderData() {
      return this.listData.slice(this.startIndex - this.prevCount, this.endIndex + this.nextCount);
    },
    // 前屏总显示数
    prevScreen() {
      return this.remain * this.screen[0];
    },
    // 后屏总显示数
    nextScreen() {
      return this.remain * this.screen[1];
    },
    // 前屏总数
    prevCount() {
      return Math.min(this.startIndex, this.prevScreen);
    },
    // 后屏总数
    nextCount() {
      return Math.min(this.list.length - this.endIndex, this.nextScreen);
    }
  },
  methods: {
    // 滚动条滚动
    onScroll(e) {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      if (this.itemHeight) {
        this.startIndex = ~~(scrollTop / this.itemHeight);
        this.endIndex = this.startIndex + this.remain;
        this.scrollTranslateY = (this.startIndex - this.prevCount) * this.itemHeight;
      } else {
        let prevSum = 0;
        const index = this.listData.findIndex(item => {
          prevSum += item.height;
          return prevSum > scrollTop;
        });
        this.startIndex = index;
        this.endIndex = this.startIndex + this.remain;
        let curPrevSum = 0;
        const maxindex = this.startIndex - this.prevCount;
        this.listData.find((item, i) => {
          if (i >= maxindex) {
            return true;
          } else {
            curPrevSum += item.height;
          }
        });
        this.scrollTranslateY = curPrevSum;
        this.updateHeight();
      }
      this.$nextTick(() => {
        scrollTop + clientHeight >= scrollHeight - this.distance && this.$emit("on-load-more");
      });
    },
    // 更新高度
    updateHeight() {
      this.$nextTick(() => {
        if (this.itemHeight === 0) {
          const nodesEl = this.$refs.nodes; // 节点
          nodesEl.forEach(node => {
            const { height } = node.getBoundingClientRect();
            const index = +node.dataset.index;
            const oldHeight = this.listData[index].height;
            oldHeight !== height && (this.listData[index].height = height);
          });
        }
        this.scrollBarHeight = this.listData.reduce((prev, item) => prev + item.height, 0);
      });
    }
  },
  watch: {
    // 监听 props list
    list: {
      handler(value) {
        const height = this.itemHeight || 100;
        this.listData = value.map((item, virtualId) => ({ ...item, virtualId, height }));
        this.updateHeight();
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.onScroll = Throttle(this.onScroll, this.interval); // 节流
  }
};
</script>
