import { useContext, ref, inject } from "vue";
import { GridContext } from "./interfaces";
import { MeGridKey } from "../MeGrid/token";

// 操作
export const useHandler = () => {
  const { emit } = useContext();
  const { name, params } = inject(MeGridKey, {} as GridContext);
  const cols = ref(4); // 列数
  const widthValue = ref(25); // item 宽度
  const borderColor = ref(""); // 边框颜色
  // 设置下标数据
  const setData = () => {
    cols.value = params.cols;
    widthValue.value = 100 / params.cols;
    borderColor.value = params.borderColor;
  };
  name === MeGridKey && setData();
  // 点击列表项
  const handleClick = (e: MouseEvent) => {
    emit("on-click", e);
  };
  return { cols, widthValue, borderColor, handleClick };
};
