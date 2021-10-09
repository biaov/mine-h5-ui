import { ref } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      title: "单击选择省市区",
      value: "",
      visible: false
    }
  ]);
  // 点击确定按钮
  const onSure = (item: ListDataItem) => {
    item.title = item.value;
    item.visible = false;
  };
  return { listData, onSure };
};
