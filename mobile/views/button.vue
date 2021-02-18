<template>
  <!-- 按钮 -->
  <ul class="m-button">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <me-button v-for="it in item.btns" :key="it.id" :type="it.type" :plain="!!it.plain" :disabled="!!it.disabled" :color="!it.color?'':it.color" :icon="!it.icon?'':it.icon" @on-click="handleBtn(it)">{{it.value}}</me-button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 信息按钮
      listData: [
        {
          id: 1,
          label: "类型按钮",
          btns: [
            {
              id: 1,
              value: "默认按钮",
              type: "default"
            },
            {
              id: 2,
              value: "主要按钮",
              type: "primary"
            },
            {
              id: 3,
              value: "成功按钮",
              type: "success"
            },
            {
              id: 4,
              value: "信息按钮",
              type: "info"
            },
            {
              id: 5,
              value: "警告按钮",
              type: "warning"
            },
            {
              id: 6,
              value: "危险按钮",
              type: "danger"
            }
          ]
        },
        {
          id: 2,
          label: "朴素按钮",
          btns: [
            {
              id: 1,
              value: "主要按钮",
              type: "primary",
              plain: true
            },
            {
              id: 2,
              value: "成功按钮",
              type: "success",
              plain: true
            },
            {
              id: 3,
              value: "信息按钮",
              type: "info",
              plain: true
            },
            {
              id: 4,
              value: "警告按钮",
              type: "warning",
              plain: true
            },
            {
              id: 5,
              value: "危险按钮",
              type: "danger",
              plain: true
            }
          ]
        },
        {
          id: 3,
          label: "禁用状态",
          btns: [
            {
              id: 1,
              value: "禁用状态",
              type: "primary",
              disabled: true
            },
            {
              id: 2,
              value: "禁用状态",
              type: "success",
              disabled: true
            },
            {
              id: 3,
              value: "禁用状态",
              type: "primary",
              plain: true,
              disabled: true
            },
            {
              id: 4,
              value: "禁用状态",
              type: "success",
              plain: true,
              disabled: true
            }
          ]
        },
        {
          id: 4,
          label: "图标按钮",
          btns: [
            {
              id: 1,
              value: "复制图标",
              type: "default",
              icon: "icon-copy"
            },
            {
              id: 2,
              value: "成功图标",
              type: "success",
              icon: "icon-success"
            },

            {
              id: 3,
              value: "星星图标",
              type: "primary",
              icon: "icon-star"
            },
            {
              id: 4,
              value: "警告图标",
              type: "warning",
              icon: "icon-warning1"
            },
            {
              id: 5,
              value: "危险图标",
              type: "danger",
              plain: true,
              icon: "icon-Danger"
            },
            {
              id: 6,
              value: "退出图标",
              type: "danger",
              plain: true,
              icon: "icon-tuichu"
            }
          ]
        },
        {
          id: 5,
          label: "自定义颜色按钮",
          btns: [
            {
              id: 1,
              value: "#ff8133",
              type: "success",
              color: "#ff8133"
            },
            {
              id: 2,
              value: "#547aff",
              type: "primary",
              plain: true,
              color: "#547aff"
            },
            {
              id: 3,
              value: " #ffc262",
              type: "warning",
              icon: "icon-warning1",
              color: "#ffc262"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 点击按钮
    handleBtn(it) {
      const { $copyText, $MeToast } = this;
      $copyText(
        `<me-button type="${it.type}" color="${!it.color ? "" : it.color}" icon="${!it.icon ? "" : it.icon}"${!!it.plain ? " plain" : ""}${!!it.disabled ? " disabled" : ""}>${it.value}</me-button>`
      )
        .then(() => {
          $MeToast("复制成功");
        })
        .catch(() => {
          $MeToast("复制失败");
        });
    }
  }
};
</script>
<style scoped lang="less">
.me-btn {
  cursor: pointer;
}
.m-button {
  > li {
    .clear-flex();
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-btn {
      margin-bottom: 10px;
    }
  }
}
</style>