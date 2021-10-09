import { getCurrentInstance } from "vue";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  // 列表数据
  const listData = Object.freeze([
    {
      id: 1,
      label: "基础用法",
      list: [
        {
          id: 1,
          value: "显示信息"
        }
      ]
    }
  ]);
  // 点击取消按钮
  const onClick = () => {
    $MeToast("显示信息");
  };
  return { listData, onClick };
};
