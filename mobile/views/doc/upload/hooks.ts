// 页面数据
export const useWebData = () => {
  // 列表数据
  const listData = [
    {
      id: 1,
      label: "基础用法"
    },
    {
      id: 2,
      label: "展示图片并预览",
      fileList: [
        { id: 1, url: "https://dummyimage.com/100x100/4BC7F5/fff&text=1" },
        { id: 2, url: "https://dummyimage.com/100x100/7A51F5/fff&text=2" },
        { id: 3, url: "https://dummyimage.com/100x100/FFB808/fff&text=3" }
      ]
    },
    {
      id: 3,
      label: "限制上传数量",
      maxCount: 3
    },
    {
      id: 4,
      label: "限制上传大小 4M",
      maxSize: 4 * 1024 * 1024
    },
    {
      id: 5,
      label: "是否允许多选",
      multiple: true
    },
    {
      id: 6,
      label: "删除图片按钮的显示状态",
      deletable: false
    },
    {
      id: 7,
      label: "禁用状态",
      disabled: true
    }
  ];
  return { listData };
};
