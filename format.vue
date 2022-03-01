<template>
  <me-drag :list.sync="list" :current.sync="current">
    <template #default="{item}">
      <img :src="item.url" alt="img" mode="fill" />
    </template>
  </me-drag>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      list: [
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
      ],
      current: 0 // 当前选中项
    }
  }
}
</script>
