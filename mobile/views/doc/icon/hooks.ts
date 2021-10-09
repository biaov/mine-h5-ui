import { onMounted, ref, getCurrentInstance } from "vue";
import ClipboardJS from "clipboard";
import IconData from "./icon";
import { ListItem } from "./interfaces";

// 列表数据
export const useWebData = () => {
  const icons = ref<HTMLUListElement>(); // 列表所有
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  let copyText: string;
  // 列表数据
  const listData: ListItem[] = [
    {
      id: 1,
      label: "基础用法",
      list: [
        {
          name: "icon-baseline-close-px"
        },
        {
          name: "icon-success"
        }
      ]
    },
    {
      id: 2,
      label: "自定义颜色",
      list: [
        {
          name: "icon-warning1",
          color: "#e6a23c"
        },
        {
          name: "icon-Danger",
          color: "#f56c6c"
        },
        {
          name: "icon-Success",
          color: "#67c23a"
        }
      ]
    },
    {
      id: 3,
      label: "自定义大小",
      list: [
        {
          name: "icon-tuichu",
          size: "16px"
        },
        {
          name: "icon-tuichu",
          size: "20px"
        },
        {
          name: "icon-tuichu",
          size: "24px"
        }
      ]
    },
    {
      id: 4,
      label: "所有图标",
      list: []
    }
  ];
  listData[3].list = IconData.map((name, id) => ({ id, name }));
  // 点击列表
  const onClick = (name: string) => {
    copyText = name;
  };
  onMounted(() => {
    const clipboard = new ClipboardJS(icons.value!, {
      text: () => copyText
    });
    clipboard.on("success", () => {
      $MeToast("复制成功");
    });
    clipboard.on("error", () => {
      $MeToast("复制失败");
    });
  });
  return { icons, listData, onClick };
};
