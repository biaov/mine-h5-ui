import { ref } from "vue";
// 页面数据
export const useWebData = () => {
  const listData = ref([
    {
      id: 1,
      label: "基础用法",
      list: [
        {
          id: 1,
          value: "弹出模态框",
          visible: false
        }
      ]
    }
  ]);
  return { listData };
};
