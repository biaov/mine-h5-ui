import { useContext } from "vue";

// 操作
export const useHandler = () => {
  const { emit } = useContext();
  // 点击关闭按钮
  const onClose = (e: MouseEvent) => {
    emit("on-close", e);
  };
  return { onClose };
};
