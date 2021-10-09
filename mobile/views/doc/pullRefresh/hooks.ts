import { ref } from "vue";
import { ListDataItem } from "./interfaces";

// 刷新
export const useRefresh = () => {
  const active = ref(1); // 活动索引
  // 数据列表
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础",
      loading: false,
      count: 0
    },
    {
      id: 2,
      label: "自定义",
      loading: false,
      count: 0,
      loadText: ["开始下拉...", "释放刷新...", "还在请求后台...", "成功了"],
      loadIcon: false
    }
  ]);
  // 刷新
  const onRefresh = (item: ListDataItem) => {
    setTimeout(() => {
      item.count++;
      item.loading = false;
    }, 3000);
  };
  return { active, listData, onRefresh };
};
