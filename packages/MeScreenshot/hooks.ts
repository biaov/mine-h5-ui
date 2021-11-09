import { useContext, ref, watch } from "vue";
import HTML2Canvas from "html2canvas";
import { Props } from "./types";

// 操作
export const useHandler = (props: Props) => {
  const { emit } = useContext();
  const screenshotRef = ref<HTMLDivElement>(); // 节点
  // 点击 dom
  const onClick = (e: PointerEvent) => {
    emit("on-click", e);
  };
  // 下载图片
  const downImg = (imgData: string) => {
    const aDom = document.createElement("a");
    aDom.href = imgData;
    aDom.download = `${props.imageName}.png`;
    aDom.click(); // 下载图片
  };
  // 开始截图
  const startScreenshot = () => {
    HTML2Canvas(screenshotRef.value!).then(canvas => {
      const img = canvas.toDataURL();
      props.allowDown && downImg(img);
      emit("on-end", img, canvas);
    });
  };
  // 监听 props start
  watch(
    () => props.start,
    value => {
      value && startScreenshot();
    },
    { immediate: true }
  );
  return {
    screenshotRef,
    onClick
  };
};
