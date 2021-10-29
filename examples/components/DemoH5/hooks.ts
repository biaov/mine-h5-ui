import { useContext, ref } from "vue";

// 抛出frame的DOM
export const useFrames = () => {
  const { emit } = useContext();
  const mobileIframe = ref<HTMLIFrameElement>(); // frame dome
  // frame 加载完成
  const onFrameLoad = () => {
    emit("getframe", mobileIframe.value);
  };
  return { mobileIframe, onFrameLoad };
};
