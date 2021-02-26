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
        <li v-for="item in listData" :key="item.id" v-if="show.includes(item.id)" v-on="{
          touchstart: $event => onTouchstart($event,item.id),
          touchmove: $event => onTouchmove($event,item.id),
          touchend: $event => onTouchend($event,item.id),
          mousedown:$event => onMousedown($event,item.id)
        }">
          <!-- 移动的区域 -->
          <ol :style="`transform:translateY(${distance[show.indexOf(item.id)]}px);transition-property:${duration>0?'all':'none'};transition-duration: ${duration}ms;`">
            <li v-for="(num,i) in item.list" :key="i">{{item.id===5||item.id===4?num-1:num|filterNumber}}</li>
          </ol>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
/**
 * 实际移动思路：通过触摸到移动中的距离，来设置滚动的距离。
 * 实施：
 ** 触摸开始时：记录开始Y坐标和触摸上一次所处的位移值(distance -> translateY)。
 ** 触摸移动中：通过当前Y坐标减去开始的Y坐标得到拖拽的距离，然后实际需要移动的值=触摸上一次所处的位移值+拖拽的距离。
 */
/**
 * 理想移动到目标思路：通过滚动是否是44（每一个li的固定高度）的倍数，剩余的是否大于44/2，大于则补足一个倍数，小于则取消剩余部分。
 * 实施：触摸结束时：
 ** 剩余数 = 实际需要的位移(distance -> translateY) % 44
 ** distance = 剩余数>(44/2) ? distance + (44-剩余数): distance - 剩余数;
 */
/**
 * 惯性滑动思路：通过滑动的速度来计算还需要滑动的距离。
 * 实施：
 ** 滑动的速度 = 滑动的距离/滑动的时间（触摸开始-触摸结束）.toFixed(2)
 ** 还需要滑动的距离 = 滑动的速度 * 400
 ** 滑动的速度 > 0.12 才开启惯性滑动
 */
import { IsLeapyear } from "~/MeAPI/function";
export default {
  name: "MeDatetimePicker",
  props: {
    // v-model绑定值
    value: {
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
  data() {
    return {
      currentValue: [], // 当前value值
      // 列表数据
      listData: [
        {
          id: 1,
          list: []
        },
        {
          id: 2,
          list: 12
        },
        {
          id: 3,
          list: 31
        },
        {
          id: 4,
          list: 24
        },
        {
          id: 5,
          list: 60
        }
      ],
      show: [], // 当前可显示列
      distance: [], // 滚动的距离
      startY: 0, // 开始Y坐标
      startDistence: 0, // 开始滚动的距离
      startTime: 0, // 触摸开始时间
      duration: 0 // 过渡时间
    };
  },
  methods: {
    // 点击取消按钮
    onCancel() {
      this.$emit("on-cancel");
    },
    // 点击确定按钮
    onSure() {
      const { currentValue, type } = this;
      const str = currentValue.reduce((prev, elem, i) => {
        const val = elem < 10 ? `0${elem}` : elem;
        let separator = ""; // 分隔符
        // 时间
        if (type === "time") {
          separator = ":";
        } else if (type === "datetime") {
          // 日期时间
          separator = i < 3 ? "-" : i === 3 ? " " : ":";
        } else {
          // 其他
          separator = "-";
        }
        return prev + separator + val;
      }, "");
      this.$emit("input", str.slice(1));
      this.$emit("on-sure", currentValue);
    },
    // 获取当前value值
    setValue(tarDir, i) {
      const { listData, show, currentValue, setDateDist } = this;
      const count = Math.abs(tarDir / 44 - 2); // 个数
      const list = listData[i - 1].list;
      let current = 0; // 当前拖动值
      if (i === 4 || i === 5) {
        // 判断是否为数值
        current = typeof list === "number" ? count : list[count];
      } else {
        // 判断是否为数值
        current = typeof list === "number" ? count + 1 : list[count];
      }
      // 拖动月份且存在日期，则日期要改变
      if (i === 2 && show.includes(3)) {
        // 判断拖动的是否是2月
        if (current === 2) {
          // 闰月为29天，平月为28天
          // 判断是否存在年份
          const Year = show.includes(1) ? currentValue[0] : new Date().getFullYear();
          listData[2].list = IsLeapyear(Year) ? 29 : 28; // 是否是闰月
        } else {
          // 大于7且不能被2整除或者小于等于7且能被2整除的月数是小月，其他的是大月。
          listData[2].list = (current > 7 && current % 2 !== 0) || (current <= 7 && current % 2 === 0) ? 30 : 31;
        }
        setDateDist(i + 1);
      }
      currentValue[show.indexOf(i)] = current; // 设置currentValue
    },
    // 当日期值改变时，修改相应的状态
    setDateDist(i) {
      const { distance, listData, show, currentValue } = this;
      const index = show.indexOf(i);
      let oldDist = distance[index]; // 实际移动的距离
      const len = listData[2].list - 1; // 获取天个数
      // 最大不能大于88，最小不能小于88-len*44
      if (oldDist > 88) {
        oldDist = 88;
      } else if (oldDist < 88 - len * 44) {
        // 最小不能小于88-每列的个数*44
        oldDist = 88 - len * 44;
      }
      this.$set(distance, index, oldDist); // 设置理想移动的距离
      this.openTransition(400); // 开启过渡效果
      const count = Math.abs(oldDist / 44 - 2); // 个数
      currentValue[show.indexOf(3)] = count + 1; // 设置currentValue
    },
    // 开始过渡
    openTransition(time) {
      this.duration = time;
      setTimeout(() => {
        this.duration = 0;
      }, time);
    },
    // 触摸开始
    onTouchstart(e, i) {
      const { show } = this;
      this.startY = e.changedTouches[0].clientY; // 获取初始位置
      this.startDistence = this.distance[show.indexOf(i)]; // 记录开始距离
      this.startTime = new Date(); // 记录开始的时间
    },
    // 接触点改变，滑动时
    onTouchmove(e, i) {
      const { startY, startDistence, distance, show } = this;
      const currentY = e.changedTouches[0].clientY; // 获取当前移动的Y坐标
      const diffX = currentY - startY; // 移动位置
      const actualDist = startDistence + diffX; // 实际移动的距离
      this.$set(distance, show.indexOf(i), actualDist); // 设置实际移动的距离
    },
    // 触摸结束
    onTouchend(e, i) {
      const { startY, distance, startTime, listData, setValue, show } = this;
      const index = show.indexOf(i);
      let oldDist = distance[index]; // 实际移动的距离
      const endTime = new Date(); // 触摸结束时间
      const speed = ((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2); // 速度
      // 判断速度是否过大，大于0.1才能开始惯性滑动
      if (speed > 0.12 || speed < -0.12) {
        const wantDist = Math.ceil(speed * 400); // 还需要滚动的距离
        oldDist = oldDist + wantDist; // 惯性实际滑动的距离
      }
      const surplus = oldDist % 44; // 剩余数
      // 判断是否处于理想位置，0表示理想位置，不需要再移动到理想位置
      if (surplus !== 0) {
        let tarDir = 0;
        // 手指向下滑：不能大于22（每项的一半高度）
        // 手指向上滑：不能小于-22（每项的一半高度）
        // 手指向上滑动大于0
        if (surplus > 0) {
          tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus; // 理想移动的距离
        } else {
          tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus; // 理想移动的距离
        }
        const list = listData[i - 1].list; // 获取当前列项的列表内容
        const len = typeof list === "number" ? list - 1 : list.length - 1; // 获取个数
        // 最大不能大于88，最小不能小于88-len*44
        if (tarDir > 88) {
          tarDir = 88;
        } else if (tarDir < 88 - len * 44) {
          // 最小不能小于88-每列的个数*44
          tarDir = 88 - len * 44;
        }
        this.$set(distance, index, tarDir); // 设置理想移动的距离
        this.openTransition(400); // 开启过渡效果
        setValue(tarDir, i);
      }
    },
    // pc端鼠标按下移动
    onMousedown(e, i) {
      const { show } = this;
      this.startY = e.clientY; // 获取初始位置
      this.startDistence = this.distance[show.indexOf(i)]; // 记录开始距离
      this.startTime = new Date(); // 记录开始的时间
      // 表达式声明移动事件
      document.onmousemove = e => {
        const { startY, startDistence, distance, show } = this;
        const currentY = e.clientY; // 获取当前移动的Y坐标
        const diffX = currentY - startY; // 移动位置
        const actualDist = startDistence + diffX; // 实际移动的距离
        this.$set(distance, show.indexOf(i), actualDist); // 设置实际移动的距离
      };
      // 表达式声明抬起事件
      document.onmouseup = e => {
        const { startY, distance, startTime, listData, setValue, show } = this;
        const index = show.indexOf(i);
        let oldDist = distance[index]; // 实际移动的距离
        const endTime = new Date(); // 触摸结束时间
        const speed = ((e.clientY - startY) / (endTime - startTime)).toFixed(2); // 速度
        // 判断速度是否过大，大于0.1才能开始惯性滑动
        if (speed > 0.12 || speed < -0.12) {
          const wantDist = Math.ceil(speed * 400); // 还需要滚动的距离
          oldDist = oldDist + wantDist; // 惯性实际滑动的距离
        }
        const surplus = oldDist % 44; // 剩余数
        // 判断是否处于理想位置，0表示理想位置，不需要再移动到理想位置
        if (surplus !== 0) {
          let tarDir = 0;
          // 手指向下滑：不能大于22（每项的一半高度）
          // 手指向上滑：不能小于-22（每项的一半高度）
          // 手指向上滑动大于0
          if (surplus > 0) {
            tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus; // 理想移动的距离
          } else {
            tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus; // 理想移动的距离
          }
          const list = listData[i - 1].list; // 获取当前列项的列表内容
          const len = typeof list === "number" ? list - 1 : list.length - 1; // 获取个数
          // 最大不能大于88，最小不能小于88-len*44
          if (tarDir > 88) {
            tarDir = 88;
          } else if (tarDir < 88 - len * 44) {
            // 最小不能小于88-每列的个数*44
            tarDir = 88 - len * 44;
          }
          this.$set(distance, index, tarDir); // 设置理想移动的距离
          this.openTransition(400); // 开启过渡效果
          setValue(tarDir, i);
        }
        document.onmousemove = null; // 清理上次的移动事件
        document.onmouseup = null; // 清理上次的抬起事件
      };
    }
  },
  filters: {
    // 过滤数字
    filterNumber: num => (num < 10 ? `0${num}` : num)
  },
  created() {
    const { minDate, maxDate, type, listData } = this;
    const max = maxDate.getFullYear(); // 最大值
    const min = minDate.getFullYear(); // 最小值
    this.listData[0].list = Array.from({ length: max - min }, (k, v) => min + v); // 生成数组，赋值到列表
    let arr = [];
    // 判断type值,即生成可显示列表id值
    switch (type) {
      case "year-month":
        arr = [1, 2];
        break;
      case "month-day":
        arr = [2, 3];
        break;
      case "time":
        arr = [4, 5];
        break;
      case "datetime":
        arr = [1, 2, 3, 4, 5];
        break;
      default:
        arr = [1, 2, 3];
        break;
    }
    this.show = arr; // 当前可显示列
    const lenObj = { length: arr.length }; // 需要创建数组的数量
    this.distance = Array.from(lenObj, () => 88); // 滚动的距离
    this.currentValue = Array.from(lenObj); // 当前值
    arr.forEach((elem, i) => {
      const list = listData[elem - 1].list; // 获取list
      this.currentValue[i] = typeof list === "number" ? +!(i === 3 || i === 4) : list[0]; // 判断是否为数值
    });
  }
};
</script>