import { useContext } from "vue";

// 操作
export const useHandler = () => {
  const { emit } = useContext();
  // 点击左侧按钮
  const handleClick = (e: MouseEvent, name: string) => {
    emit(`click-${name}`, e);
  };
  return { handleClick };
};
