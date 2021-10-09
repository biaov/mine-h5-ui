<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div class="me-datetime-picker" v-if="visible">
      <!-- 头部按钮 -->
      <div class="m-hd">
        <button type="button" class="u-cancel" @click="onCancel">取消</button>
        <span class="u-line"></span>
        <button type="button" class="u-sure" @click="onSure">确定</button>
      </div>
      <!-- 主体内容 -->
      <ul class="m-bd">
        <template v-for="item in listData">
          <li
            :key="item.id"
            v-if="show.includes(item.id)"
            v-on="{
              touchmove: $event => onTouchmove($event, item.id),
              touchend: $event => onTouchend($event, item.id)
            }"
            @touchstart.prevent="onTouchstart($event, item.id)"
            @mousedown.prevent="onMousedown($event, item.id)"
          >
            <!-- 移动的区域 -->
            <ol :style="`transform:translateY(${distance[show.indexOf(item.id)]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`">
              <li v-for="(num, i) in item.list" :key="i">{{ item.id === 5 || item.id === 4 ? num - 1 : num | filterNumber }}</li>
            </ol>
          </li>
        </template>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandMove, useBtns } from "./hooks";

export default defineComponent({
  name: "MeDatetimePicker",
  props: {
    // v-model绑定值
    modelValue: {
      type: String,
      default: ""
    },
    // 时间类型
    type: {
      type: String,
      default: "datetime" // date|year-month|month-day|time|datetime
    },
    // 是否显示时间选择器
    visible: {
      type: Boolean,
      default: false
    },
    // 最小值
    minDate: {
      type: Date,
      default: () => {
        const now = new Date(); // 获取当前数据
        now.setFullYear(now.getFullYear() - 10); // 设置新数据
        return now;
      }
    },
    // 最大值
    maxDate: {
      type: Date,
      default: () => {
        const now = new Date(); // 获取当前数据
        now.setFullYear(now.getFullYear() + 10); // 设置新数据
        return now;
      }
    }
  },
  setup(props) {
    const { show, currentValue, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown } = useHandMove(props);
    const { onCancel, onSure } = useBtns(props, currentValue);
    return { show, listData, distance, duration, filterNumber, onTouchstart, onTouchmove, onTouchend, onMousedown, onCancel, onSure };
  }
});
</script>
