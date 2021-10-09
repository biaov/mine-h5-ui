import { ref } from "vue";

// 点击项
export const useHandlerClick = () => {
  const listData = ref([
    {
      id: 1,
      active: 1,
      label: "基础用法",
      children: [
        {
          id: 1,
          label: "标签一",
          content: "内容一"
        },
        {
          id: 2,
          label: "标签二",
          content: "内容二"
        },
        {
          id: 3,
          label: "标签三",
          content: "内容三"
        },
        {
          id: 4,
          label: "标签四",
          content: "内容四"
        }
      ]
    },
    {
      id: 2,
      active: 1,
      label: "自定义样式",
      color: "#f60",
      activeColor: "#f66",
      lineColor: "#409eff",
      children: [
        {
          id: 1,
          label: "标签一",
          content: "内容一"
        },
        {
          id: 2,
          label: "标签二",
          content: "内容二"
        },
        {
          id: 3,
          label: "标签三",
          content: "内容三"
        },
        {
          id: 4,
          label: "标签四",
          content: "内容四"
        }
      ]
    }
  ]);
  // 当标签栏改变时
  const onChange = (index: number) => {
    console.log(`活动项${index}`);
  };
  return { listData, onChange };
};
