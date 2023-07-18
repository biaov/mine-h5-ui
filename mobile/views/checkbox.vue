<template>
  <!-- 复选框 -->
  <ul class="m-checkbox">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-checkbox-group v-model="item.value" @on-change="onChange" :direction="item.direction" v-if="item.list.length > 1">
        <me-checkbox v-for="it in item.list" :key="it.id" :name="it.id" :shape="it.shape" :icon="it.icon" :icon-size="it.iconSize" :icon-select="it.iconSelect" :checked-color="it.checkedColor" :disabled="it.disabled">
          {{ it.label }}
        </me-checkbox>
      </me-checkbox-group>
      <template v-else>
        <me-checkbox v-for="it in item.list" :key="it.id" v-model="item.value" @on-click="onClick(item.value)">{{ it.label }}</me-checkbox>
      </template>
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
          value: [1],
          list: [
            {
              id: 1,
              label: '复选框 1'
            },
            {
              id: 2,
              label: '复选框 2'
            }
          ]
        },
        {
          id: 2,
          label: '单独使用',
          value: false,
          list: [
            {
              id: 1,
              label: '复选框'
            }
          ]
        },
        {
          id: 3,
          label: '排列方式',
          value: [1],
          direction: 'horizontal',
          list: [
            {
              id: 1,
              label: '复选框 1'
            },
            {
              id: 2,
              label: '复选框 2'
            }
          ]
        },
        {
          id: 4,
          label: '图标形状',
          value: [1],
          list: [
            {
              id: 1,
              shape: 'square',
              label: '复选框 1'
            },
            {
              id: 2,
              shape: 'square',
              label: '复选框 2'
            }
          ]
        },
        {
          id: 5,
          label: '自定义图标',
          value: [1],
          list: [
            {
              id: 1,
              icon: 'icon-aixinD',
              iconSelect: 'icon-love',
              label: '复选框 1'
            },
            {
              id: 2,
              icon: 'icon-aixinD',
              iconSelect: 'icon-love',
              label: '复选框 2'
            }
          ]
        },
        {
          id: 6,
          label: '自定义选中颜色',
          value: [1],
          list: [
            {
              id: 1,
              checkedColor: '#f60',
              label: '复选框 1'
            },
            {
              id: 2,
              checkedColor: '#f60',
              label: '复选框 2'
            }
          ]
        },
        {
          id: 7,
          label: '自定义大小',
          value: [1],
          list: [
            {
              id: 1,
              iconSize: '24px',
              label: '复选框 1'
            },
            {
              id: 2,
              iconSize: '24px',
              label: '复选框 2'
            }
          ]
        },
        {
          id: 8,
          label: '禁用状态',
          value: [1],
          list: [
            {
              id: 1,
              disabled: true,
              label: '复选框 1'
            },
            {
              id: 2,
              disabled: true,
              label: '复选框 2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * 点击组选框里的单选框
     */
    onChange(value) {
      this.$MeToast(`你当前选中了 ${JSON.stringify(value)} 项`)
    },
    /**
     * 点击单独选框
     */
    onClick(value) {
      this.$MeToast(value ? '选中' : '取消选中')
    }
  }
}
</script>
<style scoped lang="less">
.m-checkbox {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .same-margin {
      margin-bottom: 20px;
    }
    > .me-checkbox {
      .same-margin;
    }
    .me-checkbox-group {
      .same-margin;
      .me-checkbox[aria-disabled='true'] {
        cursor: not-allowed;
      }
    }
  }
}
</style>
