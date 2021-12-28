<template>
  <!-- 标签页 -->
  <ul class="m-step">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-step
        :active="list.active"
        :direction="list.direction"
        :type="list.type"
        :color="list.color"
        :activeColor="list.activeColor"
        :icon="list.icon"
        :activeIcon="list.activeIcon"
      >
        <me-step-item v-for="item in list.children" :key="item.name" :name="item.name">
          <template v-if="item.time">
            <h3 class="u-tit">{{ item.label }}</h3>
            <p class="u-time">{{ item.time }}</p>
          </template>
          <template v-else>{{ item.label }}</template>
        </me-step-item>
      </me-step>
      <me-button type="primary" class="u-btn-next" width="100%" @on-click="onClickNext(list)">下一步</me-button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
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
      ]
    };
  },
  methods: {
    // 点击下一步
    onClickNext(item) {
      const child = item.children;
      if (item.active.length < child.length) {
        const last = item.active.at(-1);
        const index = child.findIndex(el => el.name === last);
        item.active.push(child[index + 1].name);
      } else {
        item.active = [child[0].name];
      }
    }
  }
};
</script>
<style scoped lang="less">
.m-step {
  .u-label {
    width: 100%;
    line-height: 40px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  /deep/ .me-step {
    margin-bottom: 10px;
  }
  .u-btn-next {
    cursor: pointer;
  }
  .u-tit {
    line-height: 24px;
    font-weight: bold;
  }
  .u-time {
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>
