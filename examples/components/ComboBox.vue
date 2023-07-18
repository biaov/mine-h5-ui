<template>
  <!-- 下拉框 -->
  <div class="m-select">
    <h3 class="u-tit" @click="handleTitle">
      {{ title }}
      <me-icon name="icon-down2" size="14px" color="#ccc" :class="{ show: isShowDropdown }"></me-icon>
    </h3>
    <ul class="m-list" :style="`max-height:${isShowDropdown ? list.length * 200 : 0}%;`">
      <li v-for="(item, index) in list" :key="index" @click="handleLi(item)">{{ item.value }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ComboBox',
  props: {
    /**
     * 列表
     */
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      /**
       * 内容
       */
      title: '',
      /**
       * 是否显示下拉框
       */
      isShowDropdown: false
    }
  },
  methods: {
    /**
     * 点击标题
     */
    handleTitle(e) {
      e.stopPropagation()
      this.isShowDropdown = !this.isShowDropdown
    },
    /**
     * 点击列表
     */
    handleLi({ value, href }) {
      value !== this.list[0].value && (location.href = href)
    }
  },
  created() {
    this.title = this.list[0].value
  },
  mounted() {
    document.onclick = e => {
      this.isShowDropdown = false
    }
  }
}
</script>
<style scoped lang="less">
.m-select {
  position: relative;
  .u-tit {
    display: flex;
    justify-content: space-between;
    width: 70px;
    padding-left: 20px;
    text-align: center;
    color: @font-color;
    font-size: @font-size-min;
    cursor: pointer;
    &:hover {
      color: #2d8cf0;
    }
    .me-icon {
      padding: 0 5px;
      transform: translateY(2px) rotate(0deg);
      transition: all 0.4s;
    }
    .me-icon.show {
      transform: translateY(0px) rotate(-180deg);
    }
  }
  .m-list {
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 99;
    width: 70px;
    max-height: 0;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px #ccc;
    transition: all 0.4s;
    overflow: hidden;
    &::after {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 5px solid transparent;
      border-bottom: 5px solid #f00;
      border-left: 5px solid transparent;
    }
    > li {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      color: @font-color;
      font-size: @font-size;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background: #ecf5ff;
        color: #2d8cf0;
      }
    }
  }
}
</style>
