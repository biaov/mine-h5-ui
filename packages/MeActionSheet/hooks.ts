import { useContext, ref, watch } from "vue";
import { Props } from "./types";
import { ListItem } from "./interfaces";

// 显示
export const useShowSheet = (props: Props) => {
  const { emit } = useContext();
  const isShowMask = ref(false); // 是否显示模态框
  const isShow = ref(false); // 是否显示模态框的过渡动画
  // 显示模态框
  const showMask = () => {
    isShowMask.value = true;
    setTimeout(() => {
      isShow.value = true;
    }, 100);
  };
  // 隐藏模态框
  const hideMask = () => {
    isShow.value = false;
    setTimeout(() => {
      isShowMask.value = false;
      emit("update:visible", false);
    }, 400);
  };
  // 监听是否显示弹出层参数
  watch(
    () => props.visible,
    value => {
      value ? showMask() : hideMask();
    },
    {
      immediate: true
    }
  );
  return { isShowMask, isShow, hideMask };
};
// 按钮
export const useBtns = () => {
  const { emit } = useContext();
  // 点击列表
  const onLi = (item: ListItem) => {
    emit("update:visible", false);
    emit("on-change", item);
  };
  // 点击取消按钮
  const onCancel = (e: MouseEvent) => {
    emit("update:visible", false);
    emit("on-cancel", e);
  };
  return { onLi, onCancel };
};