import { getCurrentInstance, ref } from "vue";
import { ListDataItem, ChildrenListItem, GrandsonListItem } from "./interfaces";

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
          value: "立即分享",
          visible: false,
          list: [
            {
              icon: "icon-wechat",
              value: "微信",
              color: "#67c23a"
            },
            {
              icon: "icon-pengyouquan",
              value: "朋友圈",
              color: "#409eff"
            },
            {
              icon: "icon-zhifubao",
              value: "支付宝",
              color: "#06b4fd"
            },
            {
              icon: "icon-qq",
              value: "QQ",
              color: "#ec502b"
            },
            {
              icon: "icon-weibo",
              value: "微博",
              color: "#f40f3b"
            },
            {
              icon: "icon-qr-code",
              value: "二维码",
              color: "#1cc09e"
            }
          ]
        }
      ]
    }
  ]);
  // 点击列表项
  const onClick = (item: ChildrenListItem) => {
    item.visible = true;
  };
  // 点击分享面板列表
  const onChange = (item: GrandsonListItem) => {
    $MeToast(JSON.stringify(item));
  };
  // 点击分享面板取消按钮
  const onCancel = () => {
    $MeToast("你点击了取消按钮");
  };
  return { listData, onClick, onChange, onCancel };
};
