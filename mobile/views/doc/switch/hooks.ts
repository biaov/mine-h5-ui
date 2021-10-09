import { getCurrentInstance, ref } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      value: false
    },
    {
      id: 2,
      label: "自定义大小",
      size: "24px",
      value: false
    },
    {
      id: 3,
      label: "自定义颜色",
      value: false,
      inactiveColor: "#f60",
      activeColor: "#e4393c"
    },
    {
      id: 4,
      label: "异步状态",
      value: false,
      async: true
    },
    {
      id: 5,
      label: "禁用状态",
      value: true,
      disabled: true
    }
  ]);
  // 点击 Switch 开关
  const onClick = ({ async, value }: ListDataItem) => {
    // 判断是否为异步
    if (async) {
      $MeToast("当前为异步状态，可自行控制开关的打开和关闭");
    } else {
      $MeToast(value ? "打开" : "关闭");
    }
  };
  return { listData, onClick };
};
