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
      /**
       * 提示语
       */
      message: '',
      /**
       * 是否显示
       */
      isShow: false,
      /**
       * 背景颜色
       */
      bgColor: '',
      /**
       * 图标
       */
      icon: '',
      /**
       * 延迟时间
       */
      durction: 1000
    }
  }
}
</script>
