<template>
  <!-- 时间选择器 -->
  <ul class="m-datetime-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <div class="u-li" @click="item.visible=true">
        <span>{{item.title}}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
      <me-datetime-picker :type="item.type" v-model="item.value" :visible="item.visible" :min-date="item.minDate" :max-date="item.maxDate" @on-cancel="item.visible=false" @on-sure="onSure(item)"></me-datetime-picker>
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
          title: "单击选择年月日",
          type: "data",
          value: "",
          visible: false
        },
        {
          id: 2,
          label: "选择年月",
          title: "单击选择年月",
          type: "year-month",
          value: "",
          visible: false
        },
        {
          id: 3,
          label: "选择月日",
          title: "单击选择月日",
          type: "month-day",
          value: "",
          visible: false
        },
        {
          id: 4,
          label: "选择时间",
          title: "单击选择时间",
          type: "time",
          value: "",
          visible: false
        },
        {
          id: 5,
          label: "选择完整时间",
          title: "单击选择完整时间",
          type: "datetime",
          value: "",
          visible: false
        },
        {
          id: 6,
          label: "自定义时间区间",
          title: "单击选择完整时间",
          value: "datetime",
          visible: false,
          minDate: new Date("1990-08-08 08:08"),
          maxDate: new Date("2040-08-08 08:08")
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
.m-datetime-picker {
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
    .me-datetime-picker {
      /deep/ .m-bd > li {
        cursor: grab;
      }
    }
  }
}
</style>