import { useContext } from "vue";

// 操作
export const useHandler = () => {
  const { emit } = useContext();
  // 点击事件
  const onClick = (e: MouseEvent) => {
    emit("on-click", e);
  };
  return { onClick };
};
