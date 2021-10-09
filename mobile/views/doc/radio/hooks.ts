import { getCurrentInstance, ref } from "vue";
// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref([
    {
      id: 1,
      label: "基础用法",
      value: 1,
      list: [
        {
          id: 1,
          label: "单选框 1"
        },
        {
          id: 2,
          label: "单选框 2"
        }
      ]
    },
    {
      id: 2,
      label: "单独使用",
      value: false,
      list: [
        {
          id: 1,
          label: "单选框"
        }
      ]
    },
    {
      id: 3,
      label: "排列方式",
      value: 1,
      direction: "horizontal",
      list: [
        {
          id: 1,
          label: "单选框 1"
        },
        {
          id: 2,
          label: "单选框 2"
        }
      ]
    },
    {
      id: 4,
      label: "图标形状",
      value: 1,
      list: [
        {
          id: 1,
          shape: "square",
          label: "单选框 1"
        },
        {
          id: 2,
          shape: "square",
          label: "单选框 2"
        }
      ]
    },
    {
      id: 5,
      label: "自定义图标",
      value: 1,
      list: [
        {
          id: 1,
          icon: "icon-aixinD",
          iconSelect: "icon-love",
          label: "单选框 1"
        },
        {
          id: 2,
          icon: "icon-aixinD",
          iconSelect: "icon-love",
          label: "单选框 2"
        }
      ]
    },
    {
      id: 6,
      label: "自定义选中颜色",
      value: 1,
      list: [
        {
          id: 1,
          checkedColor: "#f60",
          label: "单选框 1"
        },
        {
          id: 2,
          checkedColor: "#f60",
          label: "单选框 2"
        }
      ]
    },
    {
      id: 7,
      label: "自定义大小",
      value: 1,
      list: [
        {
          id: 1,
          iconSize: "24px",
          label: "单选框 1"
        },
        {
          id: 2,
          iconSize: "24px",
          label: "单选框 2"
        }
      ]
    },
    {
      id: 8,
      label: "禁用状态",
      value: 1,
      list: [
        {
          id: 1,
          disabled: true,
          label: "单选框 1"
        },
        {
          id: 2,
          disabled: true,
          label: "单选框 2"
        }
      ]
    }
  ]);
  // 点击组选框里的单选框
  const onChange = (value: number) => {
    $MeToast(`你当前选中第 ${value} 项`);
  };
  // 点击单独选框
  const onClick = (value: boolean) => {
    $MeToast(value ? "选中" : "取消选中");
  };
  return { listData, onChange, onClick };
};
