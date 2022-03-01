<template>
  <!-- 数字键盘 -->
  <div class="m-keyboard">
    <ul class="m-list">
      <li v-for="item in listData" :key="item.id">
        <div class="u-label">{{ item.label }}</div>
        <div class="u-tit" v-for="it in item.list" :key="it.id" @click.stop="onClick(it)">
          <span>{{ it.label }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-keyboard v-model="it.value" @on-complate="onComplate(it)" @on-click="handleNum($event, it)" @on-delete="onDelete(it)" :skin-type="it.skinType" :skin-style="it.skinStyle"></me-keyboard>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          label: '基本用法',
          list: [
            {
              id: 1,
              label: '弹出默认键盘',
              value: false
            }
          ]
        },
        {
          id: 2,
          label: '选择主题样式',
          list: [
            {
              id: 1,
              label: '弹出 gray 主题',
              value: false,
              skinType: 'gray'
            },
            {
              id: 2,
              label: '弹出 dark 主题',
              value: false,
              skinType: 'dark'
            }
          ]
        },
        {
          id: 3,
          label: '自定义主题样式',
          list: [
            {
              id: 1,
              label: '弹出自定义主题',
              value: false,
              skinStyle: {
                bgc: 'linear-gradient(-45deg, #4bb0ff, #6149f6)', // 背景色
                textBgc: 'rgba(255,255,255,0.1)',
                color: '#fff'
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 点击列表
    onClick(item) {
      // 循环遍历关闭其他输入键盘
      this.listData.forEach(({ list }) => {
        list.forEach(el => {
          el.value = false
        })
      })
      item.value = true // 设置当前键盘显示
    },
    // 点击数字
    handleNum(e) {
      this.$MeToast(e)
    },
    // 点击删除按钮
    onDelete() {
      this.$MeToast('点击了删除')
    },
    // 点击关闭
    onComplate() {
      this.$MeToast('点击了完成')
    }
  }
}
</script>
<style scoped lang="less">
.m-keyboard {
  .m-list {
    > li {
      margin-bottom: 10px;
      .u-label {
        width: 100%;
        margin-bottom: 10px;
        color: @font-color-reduce;
        font-size: @font-size-min;
      }
      .u-tit {
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
  /deep/ .me-keyboard {
    > li {
      cursor: pointer;
    }
  }
}
</style>
