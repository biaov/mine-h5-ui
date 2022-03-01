<template>
  <!-- 倒计时 -->
  <div class="m-count-down">
    <div class="u-label">基础用法</div>
    <me-count-down :time="2 * 60 * 60 * 1000"></me-count-down>
    <div class="u-label">毫秒级渲染</div>
    <me-count-down :time="time" format="hh:mm:ss:ms"></me-count-down>
    <div class="u-label">自定义样式</div>
    <me-count-down :time="time">
      <template #default="{hh,mm,ss}">
        <span class="u-block">{{ hh }}</span>
        :
        <span class="u-block">{{ mm }}</span>
        :
        <span class="u-block">{{ ss }}</span>
      </template>
    </me-count-down>
    <div class="u-label">手动控制</div>
    <me-count-down format="hh:mm:ss:ms" v-bind="{ ...handleStatus, time }"></me-count-down>
    <ul class="m-btn">
      <li v-for="(item, index) in btnList" :key="index" @click="onClickBtn(item.type)">
        <me-icon :name="item.icon" size="16px"></me-icon>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 2 * 60 * 60 * 1000, // 时间
      // 状态
      handleStatus: {
        isStart: false,
        isSuspend: false,
        isReset: false
      },
      // 按钮列表
      btnList: [
        {
          type: 'isStart',
          icon: 'icon-zanting',
          text: '开始'
        },
        {
          type: 'isSuspend',
          icon: 'icon-zanting1',
          text: '暂停'
        },
        {
          type: 'isReset',
          icon: 'icon-loading_flat',
          text: '重置'
        }
      ]
    }
  },
  methods: {
    // 点击操作按钮
    onClickBtn(type) {
      Object.keys(this.handleStatus).forEach(item => {
        this.handleStatus[item] = type === item
      })
    }
  }
}
</script>
<style scoped lang="less">
.m-count-down {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-count-down {
    margin-bottom: 10px;
    color: #494949;
    font-size: 14px;
    .u-block {
      border-radius: 4px;
      padding: 3px 6px;
      background: #f66;
      color: #fff;
    }
  }
  .m-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    > li {
      width: 30%;
      height: 36px;
      line-height: 34px;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
      color: #494949;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: #f2f2f2;
      }
      .me-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
