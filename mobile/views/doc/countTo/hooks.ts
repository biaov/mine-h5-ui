import { ref } from "vue";

// 初始化页面
export const useWebData = () => {
  // 列表数据
  const listData = ref([
    {
      label: "基础用法",
      endValue: 6666
    },
    {
      label: "起始值&时间",
      startValue: 100,
      duration: 5000,
      endValue: 6666
    },
    {
      label: "添加千分符",
      endValue: 6666.66,
      thousand: true
    }
  ]);
  // 手动控制值
  const manual = ref({
    thousand: true,
    endValue: 6666.66,
    value: true
  });
  return { listData, manual };
};
