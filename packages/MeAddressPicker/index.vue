<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div class="me-address-picker" v-if="visible">
      <!-- 头部按钮 -->
      <div class="m-hd">
        <button type="button" class="u-cancel" @click="onCancel">取消</button>
        <span class="u-line"></span>
        <button type="button" class="u-sure" @click="onSure">确定</button>
      </div>
      <!-- 主体内容 -->
      <ul class="m-bd">
        <li
          v-for="(item, index) in listData"
          :key="index"
          v-on="{
            touchmove: $event => onTouchmove($event, index),
            touchend: $event => onTouchend($event, index)
          }"
          @touchstart.prevent="onTouchstart($event, index)"
          @mousedown.prevent="onMousedown($event, index)"
        >
          <!-- 移动的区域 -->
          <ol :style="`transform:translateY(${distance[index]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`">
            <li v-for="(value, i) in item" :key="i">{{ value }}</li>
          </ol>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandMove, useBtns } from "./hooks";

export default defineComponent({
  name: "MeAddressPicker",
  props: {
    // v-model绑定值
    modelValue: {
      type: String,
      default: ""
    },
    // 是否显示时间选择器
    visible: {
      type: Boolean,
      default: false
    },
    // 分割符
    separator: {
      type: String,
      default: "-"
    }
  },
  setup(props) {
    const { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove();
    const { onCancel, onSure } = useBtns(props, currentValue);
    return { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown, onCancel, onSure };
  }
});
</script>
