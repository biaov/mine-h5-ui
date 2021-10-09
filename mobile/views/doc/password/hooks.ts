import { ref } from "vue";
import { ListDataItem, ChildrenListItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      list: [
        {
          id: 1,
          value: "",
          isFocus: false,
          keyboardValue: false
        }
      ]
    },
    {
      id: 2,
      label: "选择主题样式",
      list: [
        {
          id: 1,
          value: "",
          skinType: "white",
          isFocus: false,
          keyboardValue: false
        },
        {
          id: 2,
          value: "",
          skinType: "dark",
          isFocus: false,
          keyboardValue: false,
          keyboardskinType: "dark"
        }
      ]
    },
    {
      id: 3,
      label: "自定义输入框数量",
      list: [
        {
          id: 1,
          value: "",
          num: 4,
          isFocus: false,
          keyboardValue: false
        }
      ]
    },
    {
      id: 4,
      label: "自定义输入框模式",
      list: [
        {
          id: 1,
          value: "",
          type: "number",
          isFocus: false,
          keyboardValue: false
        },
        {
          id: 2,
          value: "",
          type: "password",
          isFocus: false,
          keyboardValue: false
        }
      ]
    }
  ]);
  // 点击数字
  const handleNum = (e: number, item: ChildrenListItem) => {
    item.value.length < (item?.num ?? 6) && (item.value += String(e));
  };
  // 点击删除按钮
  const onDelete = (item: ChildrenListItem) => {
    item.value && (item.value = item.value.split("").slice(0, -1).join("")); // 判断是否为空
  };
  // 点击完成
  const onComplate = (item: ChildrenListItem) => {
    item.isFocus = false;
  };
  // 聚焦输入框
  const onFocus = (item: ChildrenListItem) => {
    item.isFocus = true;
    item.keyboardValue = true;
  };
  // 失焦输入框
  const onBlur = (item: ChildrenListItem) => {
    item.keyboardValue = false;
  };
  return { listData, handleNum, onDelete, onComplate, onFocus, onBlur };
};
