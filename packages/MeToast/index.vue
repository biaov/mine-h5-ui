<template>
  <!-- 消息提示 -->
  <div class="me-toast" :class="{ show: isShow }" :style="`background:${bgColor};`">
    <me-icon :name="icon" color="#fff" v-if="!!icon"></me-icon>
    <span>{{ message }}</span>
  </div>
</template>
<script>
import MeIcon from '~/MeIcon'
export default {
  name: 'MeToast',
  components: {
    MeIcon
  },
  data() {
    return {
      message: '', // 提示语
      isShow: false, // 是否显示
      bgColor: '', // 背景颜色
      icon: '', // 图标
      durction: 1000 // 延迟时间
    }
  }
}
</script>
