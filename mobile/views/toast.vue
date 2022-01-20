<template>
  <!-- 动作面板 -->
  <ul class="m-toast">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="$MeToast('显示信息')">
          <span>{{it.value}}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
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
          label: "基础用法",
          list: [
            {
              id: 1,
              value: "显示信息"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.m-toast {
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
    .me-img {
      margin-bottom: 10px;
    }
  }
}
</style>