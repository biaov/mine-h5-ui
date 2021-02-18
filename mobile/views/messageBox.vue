<template>
  <!-- 弹出框 -->
  <ul class="m-message-box">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onLi(it)">
          <span>{{it.value}}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
        </li>
      </ul>
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
          list: [
            {
              id: 1,
              value: "弹出 Alert 提示框",
              type: "alert",
              tips: "警告",
              message: "你可以像猪一样的生活，但你永远都不能像猪那样快乐！"
            }
          ]
        },
        {
          id: 2,
          label: "Confirm 确认框",
          list: [
            {
              id: 1,
              value: "弹出 Confirm 确认框",
              type: "confirm",
              message: "你认为作者帅吗？",
              cancelButtonText: "看不清",
              confirmButtonText: "作者真帅"
            }
          ]
        },
        {
          id: 3,
          label: "Prompt 输入框",
          list: [
            {
              id: 1,
              value: "弹出 Prompt 输入框",
              type: "prompt",
              message: "请输入你的手机号"
            }
          ]
        },
        {
          id: 4,
          label: "Custom 自定义框",
          list: [
            {
              id: 1,
              value: "弹出 Custom 自定义框",
              type: "custom",
              html: `<div class="m-message-cont">假如生活欺骗了你，不要悲伤的哭泣，如果真的热爱生活你会自己骗自己的。</div>`
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 点击列表
    onLi({ type, tips, message, html, cancelButtonText, confirmButtonText }) {
      const that = this;
      that.$MeMessageBox({
        type,
        tips,
        message,
        html,
        cancelButtonText,
        confirmButtonText,
        onOk(value) {
          that.$MeToast(type === "prompt" ? value : "你点击了确认按钮");
        },
        onOff() {
          that.$MeToast("你点击了取消按钮");
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.m-message-box {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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
}
</style>
<style lang="less">
// 自定义模态框内容
.m-message-cont {
  line-height: 20px;
  padding: 0 15px 21px 15px;
  -webkit-line-clamp: 2;
  background: linear-gradient(90deg, #00aeff, #3369e7);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  color: @font-color;
  font-size: @font-size;
}
</style>
