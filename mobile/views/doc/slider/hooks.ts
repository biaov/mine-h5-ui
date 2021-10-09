import { ref } from "vue";

// 页面数据
export const useWebData = () => {
  // 列表数据
  const listData = ref([
    {
      id: 1,
      label: "基础用法",
      value: 30
    },
    {
      id: 2,
      label: "自定义范围",
      value: 0,
      max: 50,
      min: -50
    },
    {
      id: 3,
      label: "自定义样式",
      value: 30,
      styles: {
        height: "10px", // 高度
        radius: "6px", // 倒角
        lineBgc: "linear-gradient(135deg, #8af2ba, #4ccce7, #4fabf9, #46a5f8, #1e57f5)" // 线背景色
      }
    },
    {
      id: 4,
      label: "自定义按钮",
      value: 30,
      isBtn: true
    },
    {
      id: 5,
      label: "禁用状态",
      value: 30,
      disabled: true
    }
  ]);
  return { listData };
};
