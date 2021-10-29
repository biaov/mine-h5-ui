import { useContext, ref, watch, onMounted } from "vue";
import { Props } from "./types";

// 动画
export const useAnimate = (props: Props) => {
  const noticeList = ref<HTMLDivElement>(); // noticeList节点
  const left = ref(0); // 距离左边的距离
  const listData = ref(Array.isArray(props.list) ? props.list : [props.list]); // 列表内容
  const listIndex = ref(0); // 列表索引
  let timer: NodeJS.Timeout | undefined; // 定时器
  let isSwitch = true; // 允许开启动画
  // 开启动画
  const startAnimate = () => {
    // 水平方向
    if (props.scroll === "horizontal") {
      const { offsetWidth, parentNode } = noticeList.value!;
      let startTime: number | undefined;
      // 开始当前动画
      const startCurAnimate = (timestamp: number) => {
        startTime === undefined && (startTime = timestamp); // 设置开始时间
        const elapsed = timestamp - (startTime as number); // 当前距离开始时间
        const beforeLeft = left.value; // 上次的 left
        // 是否到达最大值
        if (beforeLeft < -offsetWidth) {
          left.value = (parentNode as HTMLDivElement).offsetWidth;
          startTime = undefined;
        } else {
          left.value = ~(elapsed / 18);
        }
        isSwitch && window.requestAnimationFrame(startCurAnimate);
      };
      window.requestAnimationFrame(startCurAnimate);
    } else {
      // 垂直方向
      const len = listData.value.length;
      // 是否是多条数据
      if (len <= 1) return;
      // 定时器
      timer = setInterval(() => {
        const index = listIndex.value; // 索引
        listIndex.value = index >= len - 1 ? 0 : index + 1; // 设置索引
      }, props.delay);
    }
  };
  // 关闭动画
  const closeAnimate = () => {
    // 水平方向
    if (props.scroll === "horizontal") {
      isSwitch = false; // 关闭开关
    } else {
      clearInterval(timer as NodeJS.Timeout); // 关闭定时器
    }
  };
  // 监听动画是否开启
  watch(
    () => props.loop,
    value => {
      value ? startAnimate() : closeAnimate();
    }
  );
  onMounted(() => {
    props.loop && startAnimate(); // 开启动画
  });
  return { noticeList, left, listData, listIndex };
};

// 按钮
export const useBtns = () => {
  const { emit } = useContext();
  // 点击公告
  const onClick = (name: string, e: number | MouseEvent) => {
    emit(`on-click${name}`, e);
  };
  return { onClick };
};
