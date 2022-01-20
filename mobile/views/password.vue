<template>
  <!-- 密码输入框/短信输入框 -->
  <ul class="m-password">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <div class="m-con-li" v-for="it in item.list" :key="it.id">
        <me-password v-model="it.value" :num="it.num" :type="it.type" :skin-type="it.skinType" :skin-style="it.skinStyle" :is-focus="it.isFocus" @on-focus="onFocus(it)" @on-blur="onBlur(it)"></me-password>
        <me-keyboard v-model="it.keyboardValue" @on-complate="onComplate(it)" @on-click="handleNum($event,it)" @on-delete="onDelete(it)" :skin-type="it.keyboardskinType" :skin-style="it.keyboardSkinStyle"></me-keyboard>
      </div>
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
              value: "",
              isFocus: false,
              keyboardValue: false
            }
          ]
        },
        {
          id: 2,
          label: "选择主题样式",
          list: [
            {
              id: 1,
              value: "",
              skinType: "white",
              isFocus: false,
              keyboardValue: false
            },
            {
              id: 2,
              value: "",
              skinType: "dark",
              isFocus: false,
              keyboardValue: false,
              keyboardskinType: "dark"
            }
          ]
        },
        {
          id: 3,
          label: "自定义输入框数量",
          list: [
            {
              id: 1,
              value: "",
              num: 4,
              isFocus: false,
              keyboardValue: false
            }
          ]
        },
        {
          id: 4,
          label: "自定义输入框模式",
          list: [
            {
              id: 1,
              value: "",
              type: "number",
              isFocus: false,
              keyboardValue: false
            },
            {
              id: 2,
              value: "",
              type: "password",
              isFocus: false,
              keyboardValue: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 点击数字
    handleNum(e, item) {
      // this.$MeToast(e);
      item.value += String(e);
    },
    // 点击删除按钮
    onDelete(item) {
      // 判断是否为空
      if (!!item.value) {
        item.value = item.value
          .split("")
          .slice(0, -1)
          .join("");
      }
    },
    // 点击完成
    onComplate(item) {
      item.isFocus = false;
      // this.$MeToast("点击了完成");
    },
    // 聚焦输入框
    onFocus(item) {
      item.isFocus = true;
      item.keyboardValue = true;
    },
    // 失焦输入框
    onBlur(item) {
      item.keyboardValue = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-password {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-con-li {
      padding-bottom: 10px;
    }
    &:nth-child(2) {
      .m-con-li:nth-child(3) {
        padding-top: 10px;
        background: #343434;
      }
    }
  }
}
</style>