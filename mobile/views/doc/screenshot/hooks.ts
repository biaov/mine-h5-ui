import { ref, getCurrentInstance } from "vue";
import { ListItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeMessageBox } = getCurrentInstance()!.appContext.config.globalProperties;
  // 列表数据
  const listData = ref([
    {
      id: 1,
      label: "基础用法",
      start: false,
      allowDown: false,
      text: "点击开始截基础用法屏内容"
    },
    {
      id: 2,
      label: "允许下载",
      start: false,
      allowDown: true,
      text: "点击开始截取允许下载屏内容"
    },
    {
      id: 3,
      label: "自定义下载文件名",
      start: false,
      allowDown: true,
      imageName: "自定义图片名称",
      text: "点击开始截取自定义下载文件名屏内容"
    }
  ]);
  // 生成图时
  const onEnd = (data: string) => {
    console.log(data);
    $MeMessageBox.alert({
      message: "截图成功，F12可调出控制台查看截图数据"
    });
  };
  // 点击 cell
  const onClick = (item: ListItem) => {
    item.start = true;
  };
  return { listData, onClick, onEnd };
};
