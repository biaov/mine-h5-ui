<template>
  <!-- 宫格 -->
  <div class="m-grid">
    <me-grid border-color="#d9d9d9" :cols="3" @on-change="onChange">
      <me-grid-item v-for="item in grids" :key="item.icon" v-bind="item" @on-click="handleLi(item)"></me-grid-item>
      <me-grid-item>
        <div class="u-cust">
          <me-icon name="icon-love" color="#999" size="28px"></me-icon>
          <p>自定义内容</p>
        </div>
      </me-grid-item>
    </me-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 宫格列表数据
      grids: [
        {
          icon: "icon-wechat",
          text: "微信",
          iconColor: "#67c23a"
        },
        {
          icon: "icon-pengyouquan",
          text: "朋友圈",
          iconColor: "#409eff"
        },
        {
          icon: "icon-zhifubao",
          text: "支付宝",
          iconColor: "#06b4fd"
        },
        {
          icon: "icon-qq",
          text: "QQ",
          iconColor: "#ec502b"
        },
        {
          icon: "icon-weibo",
          text: "微博",
          iconColor: "#f40f3b"
        },
        {
          icon: "icon-qr-code",
          text: "二维码",
          iconColor: "#1cc09e"
        },
        {
          icon: "icon-xiangji",
          text: "相机",
          iconColor: "#4a82ff"
        },
        {
          icon: "icon-loading_ico",
          text: "加载",
          iconColor: "#f60",
          textColor: "#ff9249"
        }
      ]
    };
  },
  methods: {
    // 点击格子项
    handleLi({ text }) {
      this.$MeToast(text);
    },
    // 点击第几个
    onChange(index) {
      console.log(`你点击了第${index + 1}个`);
    }
  }
};
</script>
<style scoped lang="less">
.m-grid {
  // 自定义内容
  .u-cust {
    .me-icon {
      position: relative;
      display: block;
      margin: 0 auto 5px;
      &::after {
        content: "";
        position: absolute;
        top: -4px;
        right: 20px;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: #f66;
      }
    }
  }
}
</style>