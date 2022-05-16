<template>
  <!-- 单元格 -->
  <ul class="cell">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-cell v-bind="item" @click="onClick(index)" v-if="item.slot">
        <template #left>
          <div class="title">自定义标题</div>
          <div class="tag">标签</div>
        </template>
        <template #right>
          <div class="desc">自定义右侧内容</div>
        </template>
      </me-cell>
      <me-cell v-bind="item" @on-click="onClick(index)" v-else></me-cell>
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
          label: '基础用法',
          title: '标题',
          value: '内容',
          bottom: true
        },
        {
          label: '显示占位符',
          title: '昵称',
          placeholder: '请输入昵称',
          bottom: true
        },
        {
          label: '显示图标',
          icon: 'icon-xiangji',
          iconColor: '#409eff',
          title: '相机',
          bottom: true
        },
        {
          label: '显示箭头',
          title: '生日',
          arrow: true,
          bottom: true
        },
        {
          label: '显示插槽',
          slot: true,
          bottom: true
        },
        {
          label: '显示下边框',
          title: '服务',
          arrow: true,
          bottom: true
        }
      ]
    }
  },
  methods: {
    // 点击
    onClick(index) {
      this.$MeToast(`你点击了第${index + 1}项`)
    }
  }
}
</script>
<style scoped lang="less">
.cell {
  > li {
    .me-cell {
      height: 40px !important;
      margin-bottom: 20px;
    }
    .label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .title {
      margin-right: 5px;
      color: @color-primary;
    }
    .tag {
      border-radius: @border-radius-default;
      padding: 2px 4px;
      background: @color-danger;
      color: @color-default;
      font-size: @font-size-min;
    }
    .desc {
      color: @color-warning;
    }
  }
}
</style>
