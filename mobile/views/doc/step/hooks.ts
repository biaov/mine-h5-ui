import { ref } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      label: "基础用法",
      active: ["waitPay"],
      children: [
        {
          name: "waitPay",
          label: "待支付"
        },
        {
          name: "waitSend",
          label: "待发货"
        },
        {
          name: "waitReceive",
          label: "待收货"
        },
        {
          name: "finish",
          label: "已完成"
        }
      ]
    },
    {
      id: 2,
      label: "主题类型",
      active: ["waitPay"],
      type: "danger",
      children: [
        {
          name: "waitPay",
          label: "待支付"
        },
        {
          name: "waitSend",
          label: "待发货"
        },
        {
          name: "waitReceive",
          label: "待收货"
        },
        {
          name: "finish",
          label: "已完成"
        }
      ]
    },
    {
      id: 3,
      label: "自定义主题",
      active: ["waitPay"],
      color: "#ff66a6",
      activeColor: "#a079de",
      children: [
        {
          name: "waitPay",
          label: "待支付"
        },
        {
          name: "waitSend",
          label: "待发货"
        },
        {
          name: "waitReceive",
          label: "待收货"
        },
        {
          name: "finish",
          label: "已完成"
        }
      ]
    },
    {
      id: 4,
      label: "自定义图标",
      active: ["waitPay"],
      icon: "in_biyan",
      activeIcon: "in_zhengyan",
      children: [
        {
          name: "waitPay",
          label: "待支付"
        },
        {
          name: "waitSend",
          label: "待发货"
        },
        {
          name: "waitReceive",
          label: "待收货"
        },
        {
          name: "finish",
          label: "已完成"
        }
      ]
    },
    {
      id: 5,
      label: "方向",
      active: ["waitPay"],
      direction: "vertical",
      children: [
        {
          name: "waitPay",
          label: "状态一",
          time: "2021-12-18 17:51:01"
        },
        {
          name: "waitSend",
          label: "状态二",
          time: "2021-12-18 17:51:02"
        },
        {
          name: "waitReceive",
          label: "状态三",
          time: "2021-12-18 17:51:03"
        },
        {
          name: "finish",
          label: "状态四",
          time: "2021-12-18 17:51:04"
        }
      ]
    }
  ]);
  // 点击下一步
  const onClickNext = (item: ListDataItem) => {
    const child = item.children;
    if (item.active.length < child.length) {
      const last = item.active.at(-1);
      const index = child.findIndex(el => el.name === last);
      item.active.push(child[index + 1].name);
    } else {
      item.active = [child[0].name];
    }
  };
  return { listData, onClickNext };
};
