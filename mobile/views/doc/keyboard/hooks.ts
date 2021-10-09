import { getCurrentInstance, ref } from "vue";
import { ListDataItem, ChildrenListItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基本用法",
      list: [
        {
          id: 1,
          label: "弹出默认键盘",
          value: false
        }
      ]
    },
    {
      id: 2,
      label: "选择主题样式",
      list: [
        {
          id: 1,
          label: "弹出 gray 主题",
          value: false,
          skinType: "gray"
        },
        {
          id: 2,
          label: "弹出 dark 主题",
          value: false,
          skinType: "dark"
        }
      ]
    },
    {
      id: 3,
      label: "自定义主题样式",
      list: [
        {
          id: 1,
          label: "弹出自定义主题",
          value: false,
          skinStyle: {
            bgc: "linear-gradient(-45deg, #4bb0ff, #6149f6)", // 背景色
            textBgc: "rgba(255,255,255,0.1)",
            color: "#fff"
          }
        }
      ]
    }
  ]);
  // 点击 Switch 开关
  const onClick = (item: ChildrenListItem) => {
    // 循环遍历关闭其他输入键盘
    listData.value.forEach(({ list }) => {
      list.forEach(el => {
        el.value = false;
      });
    });
    item.value = true; // 设置当前键盘显示
  };
  // 点击数字
  const handleNum = (e: number) => {
    $MeToast(e);
  };
  // 点击删除按钮
  const onDelete = () => {
    $MeToast("点击了删除");
  };
  // 点击关闭
  const onComplate = () => {
    $MeToast("点击了完成");
  };
  return { listData, onClick, handleNum, onDelete, onComplate };
};
