<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 下拉框 -->
  <div class="m-combo-box" @click.stop="onClickFrame">
    <div class="u-txt">
      <span>{{ list[1].version }}</span>
      <img src="../../assets/icon-right.png" alt="icon-right.png" :class="{ rotate: isShow }" />
    </div>
    <!-- 列表 -->
    <transition name="translate">
      <ul class="m-dropdown" v-if="isShow">
        <li v-for="(item, index) in list" :key="index" @click="onClickItem(item)">
          {{ item.version }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useShowAction } from './hooks'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'ComboBox',
  props: {
    // 列表
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },
  setup(props) {
    const { isShow, onClickFrame, onClickItem } = useShowAction(props)
    return { isShow, onClickFrame, onClickItem }
  }
})
</script>
