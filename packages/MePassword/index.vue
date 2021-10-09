<template>
  <!-- 密码/数字输入框 -->
  <ul class="me-password" :class="`me-password-${skinType}${type === 'number' ? ' me-password-number' : ''}`" v-show="listData.length > 0" @click.stop="handleClick">
    <li v-for="item in listData" :key="item.id" :class="{ active: item.state }">
      <span v-if="type === 'number'">{{ item.value }}</span>
      <i class="iconfont icon-dian" v-else-if="item.value !== ''"></i>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MePassword",
  props: {
    // v-model的值
    modelValue: {
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
  setup(props) {
    const { listData, handleClick } = useHandler(props);
    return { listData, handleClick };
  }
});
</script>
