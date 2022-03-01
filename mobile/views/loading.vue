<template>
  <!-- 加载 -->
  <ul class="m-loading">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="{ id, type, size, color, icon, text } in item.list" :key="id">
          <me-loading :type="type" :size="size" :color="color" :icon="icon">
            <div>{{ text }}</div>
          </me-loading>
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
              id: 1
            }
          ]
        },
        {
          id: 2,
          label: '选择类型',
          list: [
            {
              id: 1,
              type: 'circle'
            },
            {
              id: 2,
              type: 'circle2'
            },
            {
              id: 3,
              type: 'circle3'
            },
            {
              id: 4,
              type: 'circle4'
            },
            {
              id: 5,
              type: 'circle5'
            },
            {
              id: 6,
              type: 'circle6'
            }
          ]
        },
        {
          id: 3,
          label: '自定义大小',
          list: [
            {
              id: 1,
              type: 'circle',
              size: '24px'
            },
            {
              id: 2,
              type: 'circle',
              size: '32px'
            }
          ]
        },
        {
          id: 4,
          label: '自定义颜色',
          list: [
            {
              id: 1,
              type: 'circle',
              color: '#409eff'
            },
            {
              id: 2,
              type: 'circle',
              color: '#f56c6c'
            }
          ]
        },
        {
          id: 5,
          label: '自定义图标',
          list: [
            {
              id: 1,
              icon: 'icon-Danger',
              color: '#f56c6c'
            },
            {
              id: 2,
              icon: 'icon-baseline-close-px',
              color: '#e6a23c'
            }
          ]
        },
        {
          id: 6,
          label: '自定义文本',
          list: [
            {
              id: 1,
              text: '加载中...'
            },
            {
              id: 2,
              text: '正在加载...'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.m-loading {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }

    .m-list-all {
      .clear-flex();
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 88px;
        margin-bottom: 15px;
        cursor: pointer;
        > span {
          display: block;
          width: 100%;
          text-align: center;
          word-wrap: break-word;
          color: @font-color;
          font-size: @font-size-min;
        }
      }
    }
    .me-img {
      margin-bottom: 10px;
    }
  }
}
</style>
