import { ref } from "vue";
import { BtnListItem, WebStatus } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const time = Object.freeze(2 * 60 * 60 * 1000); // 时间
  // 按钮列表
  const btnList = Object.freeze([
    {
      type: "isStart",
      icon: "icon-zanting",
      text: "开始"
    },
    {
      type: "isSuspend",
      icon: "icon-zanting1",
      text: "暂停"
    },
    {
      type: "isReset",
      icon: "icon-loading_flat",
      text: "重置"
    }
  ]);
  // 状态
  const handleStatus = ref<WebStatus>({
    isStart: false,
    isSuspend: false,
    isReset: false
  });
  // 当标签栏改变时
  const onClick = ({ type }: BtnListItem) => {
    Object.keys(handleStatus.value).forEach(key => {
      handleStatus.value[key] = type === key;
    });
  };
  return { time, btnList, handleStatus, onClick };
};
