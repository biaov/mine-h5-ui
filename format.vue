<template>
  <me-drag v-model:list="list" v-model:current="current">
    <template #default="{ item }">
      <img :src="item.url" alt="img" mode="fill" />
    </template>
  </me-drag>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // 列表数据
    const list = ref([
      {
        rect: {
          w: 100,
          h: 100,
          x: 0,
          y: 0,
          r: 0
        },
        url: 'https://dummyimage.com/100x100/67c23a/fff&text=1'
      },
      {
        rect: {
          w: 80,
          h: 80,
          x: 110,
          y: 110,
          r: 0
        },
        url: 'https://dummyimage.com/80x80/409eff/fff&text=2'
      }
    ])
    const current = ref(0) // 当前选中项
    return { list, current }
  }
})
</script>
