<template>
  <!-- 标签栏 -->
  <ul class="m-tab-bar">
    <li v-for="(item,index) in listData" :key="index">
      <div class="u-label">{{item.label}}</div>
      <me-tab-bar v-bind="item" @on-change="onChange($event,item)"></me-tab-bar>
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
          list: [
            {
              id: 1,
              icon: "icon-home",
              text: "首页",
              state: true
            },
            {
              id: 2,
              icon: "icon-tupian",
              text: "图片",
              state: false
            },
            {
              id: 3,
              icon: "icon-gongnengguanli",
              text: "功能",
              state: false
            },
            {
              id: 4,
              icon: "icon-user1",
              text: "用户",
              state: false
            }
          ]
        },
        {
          label: "徽标提示",
          list: [
            {
              id: 1,
              icon: "icon-home",
              text: "首页",
              state: true
            },
            {
              id: 2,
              icon: "icon-tupian",
              text: "图片",
              badge: "6",
              state: false
            },
            {
              id: 3,
              icon: "icon-gongnengguanli",
              text: "功能",
              badge: "A",
              state: false
            },
            {
              id: 4,
              icon: "icon-user1",
              text: "用户",
              dot: true,
              state: false
            }
          ]
        },
        {
          label: "自定义图标",
          list: [
            {
              id: 1,
              text: "安全",
              state: true,
              img: require("../assets/verify.png"),
              imgSelected: require("../assets/verify_selected.png")
            },
            {
              id: 2,
              icon: "icon-tupian",
              text: "图片",
              state: false
            },
            {
              id: 3,
              icon: "icon-gongnengguanli",
              text: "功能",
              state: false
            },
            {
              id: 4,
              icon: "icon-user1",
              text: "用户",
              state: false
            }
          ]
        },
        {
          label: "自定义颜色",
          color: "#f60",
          colorSelected: "#fff",
          background: "linear-gradient(-45deg, #4bb0ff, #6149f6)",
          borderColor: "#f60",
          list: [
            {
              id: 1,
              icon: "icon-home",
              text: "首页",
              state: true
            },
            {
              id: 2,
              icon: "icon-tupian",
              text: "图片",
              state: false
            },
            {
              id: 3,
              icon: "icon-gongnengguanli",
              text: "功能",
              state: false
            },
            {
              id: 4,
              icon: "icon-user1",
              text: "用户",
              state: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 点击标签栏项
    onChange({ id }, item) {
      // 遍历设置每一项的数据
      item.list.forEach(elem => {
        elem.state = elem.id === id;
      });
    }
  }
};
</script>
<style scoped lang="less">
.m-tab-bar {
  min-height: calc(100vh - 75px);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background: @bg-color;
  .u-label {
    width: 100%;
    line-height: 40px;
    padding-left: 15px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-tab-bar {
    margin-bottom: 10px;
  }
}
</style>