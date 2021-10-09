import { useContext } from "vue";

// 点击 hook
export const useImgEvent = () => {
  const { emit } = useContext();
  // 点击按钮
  const onClick = (e: MouseEvent) => {
    emit("on-click", e);
  };
  // 加载完成
  const onLoad = (e: Event) => {
    emit("on-load", e);
  };
  // 加载失败
  const onError = (e: Event) => {
    emit("on-error", e);
  };
  return { onClick, onLoad, onError };
};
