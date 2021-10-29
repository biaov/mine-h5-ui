import { useContext, onMounted, watch, ref, onUnmounted } from "vue";
import { Props } from "./types";
import { Bind, Unbind } from "../MeAPI/event";

// 点击操作
export const useHandler = () => {
  const { emit } = useContext();
  // 点击数字
  const onClick = (num: number) => {
    emit("on-click", num);
  };
  // 点击删除按钮
  const onDelete = (e: MouseEvent) => {
    emit("on-delete", e);
  };
  // 点击完成按钮
  const onComplate = (e: MouseEvent) => {
    emit("update:visible", false);
    emit("on-complate", e);
  };
  return { onClick, onDelete, onComplate };
};

// 页面padding
export const usePadding = (props: Props) => {
  const { emit } = useContext();
  const isActive = ref(false); // 是否处于激活状态
  // 改变页面padding
  const setPadding = () => {
    // 判断是否可设置padding
    if (props.isPadding) {
      // 判断是否处于激活状态
      if (props.visible) {
        document.body.className += " me-keyboard-padding"; // 设置className
      } else {
        const { className } = document.body; // 获取className
        let index: number | undefined = className.indexOf("me-keyboard-padding");
        index = index > 0 ? index : undefined; // 判断是否存在padding
        document.body.className = className.slice(0, index); // 设置className
      }
    }
  };
  // 点击 Document
  const clickDocument = () => {
    emit("update:visible", false);
  };
  onMounted(() => {
    setPadding();
    // 点击非键盘区域
    Bind(document, "click", clickDocument);
  });
  onUnmounted(() => {
    // document 移除绑定点击事件
    Unbind(document, "click", clickDocument);
  });
  watch(() => props.visible, setPadding);
  return { isActive };
};
