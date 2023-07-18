<template>
  <!-- 弹出框 -->
  <ul class="m-popup">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-popup v-model="it.visible" :modal="it.modal" :position="it.position" :closeable="it.closeable" :radius="it.radius" @on-close="it.visible = false">内容...</me-popup>
        </li>
      </ul>
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
          id: 1,
          label: '基础用法',
          list: [
            {
              id: 1,
              position: 'center',
              visible: false,
              value: '展示弹出层'
            }
          ]
        },
        {
          id: 2,
          label: '弹出位置',
          list: [
            {
              id: 1,
              position: 'top',
              visible: false,
              value: '顶部弹出'
            },
            {
              id: 2,
              position: 'right',
              visible: false,
              value: '右侧弹出'
            },
            {
              id: 3,
              position: 'bottom',
              visible: false,
              value: '底部弹出'
            },
            {
              id: 4,
              position: 'left',
              visible: false,
              value: '左侧弹出'
            }
          ]
        },
        {
          id: 3,
          label: '关闭图标',
          list: [
            {
              id: 1,
              closeable: true,
              visible: false,
              value: '展示关闭图标弹出层'
            }
          ]
        },
        {
          id: 4,
          label: '圆角弹窗',
          list: [
            {
              id: 1,
              position: 'bottom',
              radius: '15px',
              visible: false,
              value: '展示圆角弹出层'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.m-popup {
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
