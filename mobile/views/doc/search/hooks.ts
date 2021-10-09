import { getCurrentInstance, ref } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      value: ""
    },
    {
      id: 2,
      label: "占位符内容",
      placeholder: "请输入搜索内容",
      value: ""
    },
    {
      id: 3,
      label: "自定义右侧按钮内容",
      btnText: "取消",
      value: ""
    },
    {
      id: 4,
      label: "对齐方式",
      align: "center",
      value: ""
    },
    {
      id: 5,
      label: "设置倒角",
      radius: "20px",
      value: ""
    },
    {
      id: 6,
      label: "自定义样式",
      background: "linear-gradient(-45deg, #4bb0ff, #6149f6)",
      color: "#fff",
      value: ""
    },
    {
      id: 7,
      label: "禁用搜索框",
      disabled: true,
      value: ""
    }
  ]);
  // 点击键盘搜索或者回车按钮
  const onSearch = () => {
    $MeToast("搜索中...");
  };
  // 点击右侧按钮
  const onClick = () => {
    $MeToast("点击了取消按钮");
  };
  return { listData, onSearch, onClick };
};
