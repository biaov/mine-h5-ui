<template>
  <!-- 动作面板 -->
  <ul class="m-mask-default">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{it.value}}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-mask v-model="it.visible">
            <me-loading type="circle2" color="#f56c6c" size="100px">
              <div class="u-text">加载中...</div>
            </me-loading>
          </me-mask>
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
              value: "弹出模态框",
              visible: false
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.m-mask-default {
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
        .me-loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          .u-text {
            padding-top: 10px;
            text-align: center;
            color: @color-default;
          }
        }
      }
    }
  }
}
</style>