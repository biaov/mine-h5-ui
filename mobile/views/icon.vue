<template>
  <!-- 图标 -->
  <ul class="m-icon">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onCopy(it)">
          <me-icon :name="it.name" :color="it.color" :size="it.size"></me-icon>
          <span>{{ it.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import IconData from '^/config/icon.json'
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
              name: 'icon-baseline-close-px'
            },
            {
              name: 'icon-success'
            }
          ]
        },
        {
          id: 2,
          label: '自定义颜色',
          list: [
            {
              name: 'icon-warning1',
              color: '#e6a23c'
            },
            {
              name: 'icon-Danger',
              color: '#f56c6c'
            },
            {
              name: 'icon-Success',
              color: '#67c23a'
            }
          ]
        },
        {
          id: 3,
          label: '自定义大小',
          list: [
            {
              name: 'icon-tuichu',
              size: '16px'
            },
            {
              name: 'icon-tuichu',
              size: '20px'
            },
            {
              name: 'icon-tuichu',
              size: '24px'
            }
          ]
        },
        {
          id: 4,
          label: '所有图标',
          list: []
        }
      ]
    }
  },
  methods: {
    // 点击列表项复制
    onCopy({ name }) {
      const { $copyText, $MeToast } = this
      $copyText(name)
        .then(() => {
          $MeToast('复制成功')
        })
        .catch(() => {
          $MeToast('复制失败')
        })
    }
  },
  created() {
    // 循环遍历设置所有图标
    this.listData[3].list = IconData.map((name, id) => {
      return { id, name }
    })
  }
}
</script>
<style scoped lang="less">
.m-icon {
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
        .me-icon {
          height: 30px;
          line-height: 30px;
          display: block;
        }
        > span {
          text-align: center;
          color: @font-color;
          font-size: @font-size-min;
        }
      }
    }
    .me-btn {
      margin-bottom: 10px;
    }
  }
}
</style>
