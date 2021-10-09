/** */
import { useContext, ref, provide, watch } from "vue";
import { Props } from "./types";
import { MeRadioGroupKey } from "./token";

// 初始化 slot
export const useInitSlots = (props: Props) => {
  const context = useContext();
  const { emit } = context;
  const currentValue = ref(props.modelValue); // 当前value值
  // 改变value的值
  const onChange = (name: string | number) => {
    emit("update:modelValue", name);
    emit("on-change", name);
  };
  provide(MeRadioGroupKey, { name: MeRadioGroupKey, currentValue, onChange });
  watch(
    () => props.modelValue,
    value => {
      currentValue.value = value;
    }
  );
  return {};
};
