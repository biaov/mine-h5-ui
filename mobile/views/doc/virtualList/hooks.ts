import { ref } from "vue";
import { Random } from "mockjs";
import { ListItem } from "./interfaces";

// 操作
export const useHandler = () => {
  // 生成数组
  const createArr = (min = 6, max = 14) => Array.from({ length: 100 }, () => ({ text: Random.cword(min, max) }));
  const initList = createArr();
  const autoList = createArr(14, 50);
  // 列表数据
  const listData = ref([
    {
      id: 1,
      label: "基础用法",
      itemHeight: 50,
      list: initList
    },
    {
      id: 2,
      label: "加载更多",
      itemHeight: 50,
      loadStatus: "more",
      list: initList
    },
    {
      id: 3,
      label: "自适应高度",
      itemHeight: 0,
      list: autoList,
      auto: true
    }
  ]);
  // 状态文本
  const loadMoreText = ref({
    nomore: "没有更多数据了",
    more: "加载更多",
    loading: "正在加载中..."
  });
  // 加载更多
  const onLoadMore = (item: ListItem) => {
    if (item.loadStatus !== "more") return;
    item.loadStatus = "loading";
    setTimeout(() => {
      item.list.push(...createArr());
      item.loadStatus = "nomore";
    }, 1500);
  };
  return { listData, loadMoreText, onLoadMore };
};
