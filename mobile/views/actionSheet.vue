<template>
  <!-- 动作面板 -->
  <ul class="m-action-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-action-sheet v-model="it.visible" :list="it.list" @on-cancel="onCancel" @on-change="onChange"></me-action-sheet>
        </li>
      </ul>
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
          label: '基础用法',
          list: [
            {
              id: 1,
              value: '选择支付方式',
              visible: false,
              list: [
                {
                  id: 1,
                  value: '微信',
                  label: 'Wechat'
                },
                {
                  id: 2,
                  value: '支付宝',
                  label: 'Alipay'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 点击列表按钮
    onChange(item) {
      this.$MeToast(JSON.stringify(item))
    },
    // 点击取消按钮
    onCancel() {
      this.$MeToast('点击了取消按钮')
    }
  }
}
</script>
<style scoped lang="less">
.m-action-sheet {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid darken(@bg-color, 5%);
        cursor: pointer;
        > span {
          color: @font-color;
          font-size: @font-size;
        }
      }
    }
  }
}
</style>
