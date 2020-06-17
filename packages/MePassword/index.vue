<template>
  <!-- 密码/数字输入框 -->
  <ul class="me-password" :class="`me-password-${skinType}${type==='number'?' me-password-number':''}`" v-if="listData.length>0" @click.stop="handleClick">
    <li v-for="item in listData" :key="item.id" :class="{active:item.state}">
      <span v-if="type==='number'">{{item.value}}</span>
      <i class="iconfont icon-dian" v-else-if="item.value!==''"></i>
    </li>
  </ul>
</template>
<script>
import Bind from "~/MeAPI/event";
export default {
  name: "MePassword",
  props: {
    // v-model的值
    value: {
      type: String,
      default: ""
    },
    // 输入框模式
    type: {
      type: String,
      default: "password" // number|password
    },
    // 输入框数量
    num: {
      type: Number,
      default: 6
    },
    // 系统皮肤样式
    skinType: {
      type: String,
      default: "white" // white|dark
    },
    // 聚焦状态
    isFocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      listData: [] // 列表数据
    };
  },
  methods: {
    // 点击按钮
    handleClick() {
      const { listData } = this;
      let flag = true;
      // 循环遍历列表数据
      for (const elem of listData) {
        // 判断是否存在已激活选项
        if (elem.state) {
          flag = false;
          elem.state = false;
          break;
        }
      }
      // 判断是否所有的选项都未激活
      if (flag) {
        // 循环遍历列表数据
        for (const elem of listData) {
          if (elem.value === "") {
            elem.state = true;
            break;
          }
        }
        this.$emit("on-focus");
      } else {
        this.$emit("on-blur");
      }
    },
    // 设置数组变化
    setList() {
      const { num, value } = this;
      const valueArr = value.split("").slice(0, num); // 传入数据转化为数组
      // 生成对象
      this.listData = Array.from({ length: num }, (v, k) => ({ id: k + 1, value: valueArr[k] || "", state: false }));
    },
    // 设置数组变化
    updateList() {
      const { num, value, listData } = this;
      const valueArr = value.split("").slice(0, num); // 传入数据转化为数组
      // 遍历迭代设置值
      listData.forEach((elem, i) => {
        elem.value = valueArr[i] || "";
      });
      const len = valueArr.length; // 传入数据长度
      len !== num && (listData[len].state = true);
      len > 0 && (listData[len - 1].state = false);
      len < num - 1 && (listData[len + 1].state = false);
    },
    // 清理聚焦
    closeFocus() {
      // 循环遍历清理聚焦
      this.listData.forEach(elem => {
        elem.state = false;
      });
    }
  },
  created() {
    this.setList();
  },
  mounted() {
    // document绑定点击事件
    Bind(document, "click", () => {
      this.listData.forEach(elem => {
        elem.state = false;
      });
    });
  },
  watch: {
    // 监听value的变化
    value() {
      this.updateList();
    },
    // 监听是否聚焦状态
    isFocus(value) {
      // 是否清理聚焦状态
      if (!value) {
        this.closeFocus();
      }
    }
  }
};
</script>