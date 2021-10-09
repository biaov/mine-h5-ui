import { ref } from "vue";
import { Props } from "./types";
import { FieldsetListItem } from "./interfaces";

// 操作
export const useHandler = (props: Props) => {
  const fieldsetList = ref<FieldsetListItem[]>([]); // 分割线
  const len = props.list.length; // 数组长度
  const flagBool = len < 3; // 是否小于3
  const curLine = ref(props.line);
  // 设置默认值
  if (flagBool) {
    curLine.value.radius = curLine.value.radius ?? 0;
    curLine.value.size = curLine.value.size ?? 1;
  }
  // 循环遍历
  fieldsetList.value = props.list.map((item, index) => {
    let deg = (360 / len) * index; // 旋转角度
    deg = flagBool ? 0 : deg;
    return {
      text: item,
      deg
    };
  });
  return { fieldsetList, curLine };
};
