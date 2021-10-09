import { getCurrentInstance, ref } from "vue";
import url from "^/assets/empty.png";
import { ListDataItem } from "./interfaces";

// 操作项
export const useHandler = () => {
  const { $MePreview } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
    {
      label: "基础用法",
      url
    },
    {
      label: "自定义样式",
      url,
      background: "#fff"
    }
  ]);
  // 点击图片预览
  const onPreview = (item: ListDataItem) => {
    $MePreview(item);
  };
  return { listData, onPreview };
};
