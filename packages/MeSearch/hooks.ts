import { useContext, ref, watch } from "vue";
import { Props } from "./types";

// 搜索框
export const useSearch = (props: Props) => {
  const { emit } = useContext();
  const inputVal = ref(props.modelValue); // 输入框值
  // 点击软键盘的搜索/回车按钮
  const onKeypress = (e: KeyboardEvent) => {
    e.key === "Enter" && emit("on-search");
  };
  // 搜索框聚焦时触发
  const onEvent = (name: string, e: FocusEvent | InputEvent | Event) => {
    emit(name, e);
  };
  // 监听参数value的变化
  watch(
    () => props.modelValue,
    value => {
      inputVal.value = value;
    }
  );
  // 监听输入框的值的变化
  watch(inputVal, value => {
    emit("update:modelValue", value);
  });
  return { inputVal, onKeypress, onEvent };
};
// 操作按钮
export const useBtns = () => {
  const { emit } = useContext();
  // 点击清理按钮
  const onClean = () => {
    emit("update:modelValue", "");
  };
  // 点击自定义按钮
  const handleBtn = () => {
    emit("on-click");
  };
  return { onClean, handleBtn };
};
