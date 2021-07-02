<template>
  <!-- 地址选择器 -->
  <ul class="m-address-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <div class="u-li" @click="item.visible=true">
        <span>{{item.title}}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
      <me-address-picker v-model="item.value" :visible="item.visible" :separator="item.separator" @on-cancel="item.visible=false" @on-sure="onSure(item)"></me-address-picker>
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
          title: "单击选择省市区",
          value: "",
          separator: "-",
          visible: false
        },
        {
          id: 2,
          label: "自定义分隔符",
          title: "单击选择省市区",
          value: "",
          separator: " ",
          visible: false
        }
      ]
    };
  },
  methods: {
    // 点击确定按钮
    onSure(item) {
      item.title = item.value;
      item.visible = false;
    }
  }
};
</script>
<style scoped lang="less">
.m-address-picker {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-li {
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
    .me-address-picker {
      /deep/ .m-bd > li {
        cursor: grab;
      }
    }
  }
}
</style>