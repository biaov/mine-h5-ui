<template>
  <!-- 标签 -->
  <ul class="m-tag">
    <li v-for="(item,index) in listData" :key="index">
      <div class="u-label">{{item.label}}</div>
      <me-tag v-for="(it,i) in item.children" :key="i" v-bind="it" @on-close="onClose"></me-tag>
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
          label: "基础用法",
          children: [
            {
              type: "primary"
            },
            {
              type: "success"
            },
            {
              type: "info"
            },
            {
              type: "warning"
            },
            {
              type: "danger"
            }
          ]
        },
        {
          label: "空心设置",
          children: [
            {
              type: "primary",
              plain: true
            },
            {
              type: "success",
              plain: true
            },
            {
              type: "info",
              plain: true
            },
            {
              type: "warning",
              plain: true
            },
            {
              type: "danger",
              plain: true
            }
          ]
        },
        {
          label: "自定义样式",
          children: [
            { color: "#6DA1F0", radius: 20, width: 100, height: 40 },
            { color: "#F060F0", radius: 20, width: 100, height: 40 }
          ]
        },
        {
          label: "自定义内容",
          children: [
            {
              text: "注意",
              textColor: "rgba(255,255,255,0.6)",
              type: "warning"
            },
            {
              text: "警告",
              type: "danger"
            },
            {
              text: "置顶",
              color: "#e4393c"
            },
            {
              text: "作者",
              color: "#4359A8"
            },
            {
              text: "新消息",
              color: "#f00"
            }
          ]
        },
        {
          label: "关闭状态",
          children: [{ type: "danger", closeable: true }]
        }
      ]
    };
  },
  methods: {
    // 点击关闭按钮
    onClose() {
      this.$MeToast("点击关闭按钮");
    }
  }
};
</script>
<style scoped lang="less">
.m-tag {
  > li {
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-tag {
      margin: 0 10px 15px 0;
      /deep/ .u-txt i {
        cursor: pointer;
      }
    }
  }
}
</style>