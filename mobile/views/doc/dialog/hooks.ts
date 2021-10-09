import { getCurrentInstance, ref } from "vue";
import { ListDataItem, ChildrenListItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      list: [
        {
          id: 1,
          value: "弹出对话框",
          visible: false
        }
      ]
    }
  ]);
  // 点击取消按钮
  const onCancel = (item: ChildrenListItem) => {
    item.visible = false;
    $MeToast("你点击了取消按钮");
  };
  // 点击确定按钮
  const onConfirm = (item: ChildrenListItem) => {
    item.visible = false;
    $MeToast("你点击了确定按钮");
  };
  return { listData, onConfirm, onCancel };
};
