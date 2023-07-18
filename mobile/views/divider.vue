<template>
  <!-- 分割线 -->
  <ul class="m-divider">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-divider v-bind="item"></me-divider>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 列表数据
       */
      listData: [
        {
          label: '基础用法',
          list: ['缥缈']
        },
        {
          label: '无文本'
        },
        {
          label: '设置文本位置',
          list: ['流影'],
          left: 20
        },
        {
          label: '自定义样式',
          list: ['青衣'],
          line: {
            radius: 4,
            color: '#F06B51',
            size: 4
          },
          text: {
            color: '#FFA18F',
            size: 16
          }
        },
        {
          label: '三角形',
          list: ['羽裳', '轩辕', '紫萱'],
          width: 100,
          height: 100,
          origin: 41,
          line: {
            color: '#f60'
          },
          text: {
            color: '#f66'
          }
        },
        {
          label: '四边形',
          list: ['韶华', '浮光', '烟雨', '蝶舞'],
          width: 100,
          height: 100,
          origin: 60,
          line: {
            color: '#3DD958'
          },
          text: {
            color: '#65F04F'
          }
        },
        {
          label: '五边形',
          list: ['缠绵', '绝恋', '碧影', '星愿', '落霞'],
          width: 80,
          height: 80,
          origin: 63,
          line: {
            color: '#2236F0'
          },
          text: {
            color: '#3514D9'
          }
        },
        {
          label: '六边形',
          list: ['忘忧', '幻真', '翩飞', '惊鸿', '星月', '情动'],
          width: 80,
          height: 80,
          origin: 76,
          line: {
            color: '#E18FFF'
          },
          text: {
            color: '#C651F0'
          }
        },
        {
          label: '七边形',
          list: ['化羽', '绝影', '醉梦', '波澜', '山岚', '春华', '星雨'],
          width: 80,
          height: 80,
          origin: 86,
          line: {
            color: '#FF8FD8'
          },
          text: {
            color: '#F051B8'
          }
        },
        {
          label: '八边形',
          list: ['浩瀚', '风萧', '浮波', '逐风', '沧澜', '鸿鹄', '如梦', '入画'],
          width: 80,
          height: 80,
          origin: 98,
          line: {
            color: '#F0B651'
          },
          text: {
            color: '#FFD68F'
          }
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
// 循环设置列表
.loop-li(@index) when(@index<=10) {
  li:nth-child(@{index}) {
    margin-bottom: @index * 10px;
  }
  .loop-li(@index+1);
}
.m-divider {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-divider {
    margin: 0 auto;
  }
  .loop-li(1);
}
</style>
