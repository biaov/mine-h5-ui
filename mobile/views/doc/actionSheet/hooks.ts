import { getCurrentInstance, ref } from "vue";
import { ListDataItem, GrandsonListItem } from "./interfaces";

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
          value: "选择支付方式",
          visible: false,
          list: [
            {
              id: 1,
              value: "微信",
              label: "Wechat"
            },
            {
              id: 2,
              value: "支付宝",
              label: "Alipay"
            }
          ]
        }
      ]
    }
  ]);
  // 点击列表按钮
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item));
  };
  // 点击取消按钮
  const onCancel = () => {
    $MeToast("点击了取消按钮");
  };
  return { listData, onChange, onCancel };
};
