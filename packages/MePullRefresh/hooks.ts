import { useContext, ref, watch } from "vue";
import { Props } from "./types";

// 移动列
export const useHandMove = (props: Props) => {
  const { emit } = useContext();
  const activeState = ref(0); // 加载状态
  const transY = ref(0); // 垂直多少像素
  const scale = ref(0); // 放大倍数
  const showValue = ref(50); // 显示值
  const duration = ref(0); // 过渡时间
  let startY = 0; // 开始位置
  let step = 0; // 步进器
  // 触摸开始
  const onTouchstart = (e: TouchEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    startY = e.changedTouches[0].clientY; // 获取初始位置
    step = 0; // 初始化步进器
    duration.value = 0; // 关闭过渡器
  };
  // 接触点改变，滑动时
  const onTouchmove = (e: TouchEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    const distY = e.changedTouches[0].clientY - startY; // 计算位置
    // 是否超过显示值
    if (distY > showValue.value) {
      activeState.value = 1;
      step += 0.09;
      transY.value = showValue.value + (distY - showValue.value) / step;
      scale.value = 1;
    } else {
      transY.value = distY;
      scale.value = distY / showValue.value;
      activeState.value = 0;
    }
  };
  // 触摸结束
  const onTouchend = (e: TouchEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    const distY = e.changedTouches[0].clientY - startY;
    duration.value = 400; // 打开过渡器
    // 是否超过显示值
    if (distY > showValue.value) {
      activeState.value = 2;
      transY.value = showValue.value;
      scale.value = 1;
      emit("update:modelValue", true);
      emit("on-refresh");
    } else {
      activeState.value = 0;
      transY.value = 0;
      scale.value = 0;
    }
  };
  // pc端鼠标按下移动
  const onMousemove = (e: MouseEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    const distY = e.clientY - startY; // 计算位置
    // 是否超过显示值
    if (distY > showValue.value) {
      activeState.value = 1;
      step += 0.09;
      transY.value = showValue.value + (distY - showValue.value) / step;
      scale.value = 1;
    } else {
      transY.value = distY;
      scale.value = distY / showValue.value;
      activeState.value = 0;
    }
  };
  // pc端鼠标抬起
  const onMouseup = (e: MouseEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    const distY = e.clientY - startY;
    duration.value = 400; // 打开过渡器
    // 是否超过显示值
    if (distY > showValue.value) {
      activeState.value = 2;
      transY.value = showValue.value;
      scale.value = 1;
      emit("update:modelValue", true);
      emit("on-refresh");
    } else {
      activeState.value = 0;
      transY.value = 0;
      scale.value = 0;
    }
    document.onmousemove = null; // 清理上次的移动事件
    document.onmouseup = null; // 清理上次的抬起事件
  };
  // pc端鼠标按下
  const onMousedown = (e: MouseEvent) => {
    // 是否可触发
    if (props.modelValue) return;
    startY = e.clientY; // 获取初始位置
    step = 0; // 初始化步进器
    duration.value = 0; // 关闭过渡器
    document.onmousemove = onMousemove; // 表达式声明移动事件
    document.onmouseup = onMouseup; // 表达式声明抬起事件
  };
  // 监听value变化
  watch(
    () => props.modelValue,
    value => {
      // 是否可滑动
      if (!value) {
        activeState.value = 3;
        // 延迟关闭
        setTimeout(() => {
          transY.value = 0;
          scale.value = 0;
        }, 600);
      }
    }
  );
  return { activeState, transY, scale, showValue, duration, onTouchstart, onTouchmove, onTouchend, onMousedown, onMousemove, onMouseup };
};
