import { getCurrentInstance } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const grids = Object.freeze<ListDataItem[]>([
    {
      icon: "icon-wechat",
      text: "微信",
      iconColor: "#67c23a"
    },
    {
      icon: "icon-pengyouquan",
      text: "朋友圈",
      iconColor: "#409eff"
    },
    {
      icon: "icon-zhifubao",
      text: "支付宝",
      iconColor: "#06b4fd"
    },
    {
      icon: "icon-qq",
      text: "QQ",
      iconColor: "#ec502b"
    },
    {
      icon: "icon-weibo",
      text: "微博",
      iconColor: "#f40f3b"
    },
    {
      icon: "icon-qr-code",
      text: "二维码",
      iconColor: "#1cc09e"
    },
    {
      icon: "icon-xiangji",
      text: "相机",
      iconColor: "#4a82ff"
    },
    {
      icon: "icon-loading_ico",
      text: "加载",
      iconColor: "#f60",
      textColor: "#ff9249"
    }
  ]);
  // 点击格子项
  const handleLi = ({ text }: ListDataItem) => {
    $MeToast(text);
  };
  return { grids, handleLi };
};
