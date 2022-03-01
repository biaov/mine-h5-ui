<template>
  <!-- 截长图 -->
  <ul class="m-screenshot">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-screenshot :allow-down="list.allowDown" :image-name="list.imageName" :start="list.start" @on-click="onClick(list)" @on-end="onEnd">
        <div class="u-desc-cell">
          <span>{{ list.text }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
        </div>
      </me-screenshot>
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
          label: '基础用法',
          start: false,
          allowDown: false,
          text: '点击开始截基础用法屏内容'
        },
        {
          id: 2,
          label: '允许下载',
          start: false,
          allowDown: true,
          text: '点击开始截取允许下载屏内容'
        },
        {
          id: 3,
          label: '自定义下载文件名',
          start: false,
          allowDown: true,
          imageName: '自定义图片名称',
          text: '点击开始截取自定义下载文件名屏内容'
        }
      ]
    }
  },
  methods: {
    // 生成图时
    onEnd(data) {
      console.log(data)
      this.$MeMessageBox.alert({
        message: '截图成功，F12可调出控制台查看截图数据'
      })
    },
    // 点击 cell
    onClick(item) {
      item.start = true
    }
  }
}
</script>
<style scoped lang="less">
.m-screenshot {
  > li {
    margin-bottom: 20px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-desc-cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid darken(@bg-color, 5%);
      cursor: pointer;
      > span {
        color: @font-color;
        font-size: @font-size;
      }
    }
  }
}
</style>
