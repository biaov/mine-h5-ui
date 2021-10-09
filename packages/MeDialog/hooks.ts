import { useContext, ref, watch } from "vue";
import { Props } from "./types";

// 操作
export const useShow = (props: Props) => {
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
