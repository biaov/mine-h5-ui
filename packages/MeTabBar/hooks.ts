import { useContext } from "vue";
import { ListItem } from "./interfaces";

// 操作
export const useHandler = () => {
  const { emit } = useContext();
  // 点击列表项
  const onClick = (item: ListItem) => {
    !item.state && emit("on-change", { ...item });
  };
  return { onClick };
};
