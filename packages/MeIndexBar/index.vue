<template>
  <!-- 索引栏 -->
  <div class="me-index-bar">
    <!-- 顶部固定项 -->
    <div class="m-top" v-show="curLetter" :style="`height:${topHeight};line-height:${topHeight};`">{{ curLetter }}</div>
    <!-- 右侧列表值 -->
    <ul class="m-list-rt">
      <li v-for="item in list" :key="item.name" :class="{ on: item.name === curLetter }">{{ item.name }}</li>
    </ul>
    <!-- 内容列表 -->
    <ul class="m-list-cont" ref="listCont">
      <li v-for="item in list" :key="item.name">
        <dl class="m-list-item">
          <dt>{{ item.name }}</dt>
          <dd v-for="city in item.cities" :key="city.code" @click="handleLi(city)">{{ city.code }}（{{ city.cn }}）</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
import CountryData from './CountryData'
export default {
  name: 'MeIndexBar',
  props: {
    /**
     * 自定义国家数据
     */
    list: {
      type: Array,
      default() {
        return CountryData
      }
    },
    /**
     * 自定义顶部定位高度
     */
    topHeight: {
      type: String,
      default: '50px'
    }
  },
  data() {
    return {
      /**
       * 当前字母
       */
      curLetter: ''
    }
  },
  methods: {
    /**
     * 点击内容列表
     */
    handleLi(item) {
      this.$emit('on-click', { ...item })
    }
  },
  mounted() {
    const arrLi = this.$refs.listCont.children
    document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop
      /**
       * 是否滚动
       */
      if (scrollTop >= arrLi[0].offsetTop) {
        /**
         * 遍历节点数组
         */
        for (let i = 0; i < arrLi.length; i++) {
          /**
           * 当前节点
           */
          const el = arrLi[i]
          /**
           * 判断是否可显示
           */
          if (el.nodeName === 'LI' && scrollTop > arrLi[0].offsetTop && scrollTop < el.offsetTop) {
            /**
             * 设置
             */
            this.curLetter = arrLi[i - 1].children[0].children[0].innerHTML
            break
          }
        }
      } else {
        this.curLetter = ''
      }
    }
  }
}
</script>
