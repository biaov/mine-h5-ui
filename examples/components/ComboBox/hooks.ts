import { ref, onMounted, onUnmounted } from "vue";
// 显示操作
export const useShowAction = () => {
  const isShow = ref(false); // 显示状态
  // 点击框
  const onClickFrame = () => {
    isShow.value = !isShow.value;
  };
  // 增加点击
  const addClick = () => {
    isShow.value = false;
  };
  onMounted(() => {
    document.addEventListener("click", addClick);
  });
  onUnmounted(() => {
    document.removeEventListener("click", addClick);
  });
  return { isShow, onClickFrame };
};
