import { useContext } from "vue";

// 点击 hook
export const useClick = () => {
  const { emit } = useContext();
  // 点击按钮
  const onClick = (e: MouseEvent) => {
    emit("on-click", e);
  };
  return { onClick };
};
