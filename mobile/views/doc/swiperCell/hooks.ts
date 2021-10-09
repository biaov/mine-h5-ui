import { getCurrentInstance } from "vue";

// 点击项
export const useHandlerClick = () => {
  const { $MeMessageBox, $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = Object.freeze([
    {
      id: 1,
      label: "基础用法",
      liText: "向左滑动显示删除按钮",
      width: 81
    },
    {
      id: 2,
      label: "隐藏多按钮",
      liText: "向左滑动显示多按钮",
      width: 162
    }
  ]);
  // 删除按钮
  const onDelete = () => {
    $MeMessageBox.confirm({
      tips: "警告",
      message: "你确定要删除此项吗？",
      onOk() {
        $MeToast("删除成功");
      }
    });
  };
  // 点击收藏按钮
  const onCollect = () => {
    $MeToast("收藏成功");
  };
  return { listData, onDelete, onCollect };
};
