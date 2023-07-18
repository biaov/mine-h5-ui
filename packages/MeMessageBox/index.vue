<template>
  <!-- 弹出框 -->
  <div class="me-message-box" :class="{ show: isShow }" @click="onCancel">
    <div class="m-picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{ tips }}</h3>
      <!-- Alert 弹出框 / Confirm 确认框 -->
      <div class="m-text" v-if="['alert', 'confirm'].includes(type)">{{ message }}</div>
      <!-- Prompt 输入框 -->
      <div class="u-prompt" v-if="type === 'prompt'">
        <label class="u-label">{{ message }}</label>
        <input type="text" class="u-input" v-model="inputValue" />
      </div>
      <!-- Custom 自定义框 -->
      <template v-if="type === 'custom'">
        <div v-html="html"></div>
      </template>
      <!-- 操作按钮 -->
      <div class="m-btn">
        <!-- 取消按钮 -->
        <button type="button" class="u-btn-cancel" v-if="type !== 'alert'" @click="onCancel">{{ cancelButtonText }}</button>
        <!-- 确认按钮 -->
        <button type="button" class="u-btn-confirm" @click="onConfirm">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeMessageBox',
  data() {
    return {
      /**
       * 是否显示
       */
      isShow: false,
      /**
       * 标题内容
       */
      tips: '提示',
      /**
       * 弹出框类型，alert | confirm | prompt | custom
       */
      type: 'confirm',
      /**
       * 警告语
       */
      message: '',
      /**
       * 自定义 HTML
       */
      html: '',
      /**
       * 取消按钮内容
       */
      cancelButtonText: '取消',
      /**
       * 确认按钮内容
       */
      confirmButtonText: '确认',
      /**
       * 输入框的值
       */
      inputValue: ''
    }
  },
  methods: {
    /**
     * 点击取消按钮
     */
    onCancel() {
      const that = this
      that.end && that.end('onOff')
    },
    /**
     * 点击确认按钮
     */
    onConfirm() {
      const that = this
      const args = that.type === 'prompt' ? [that.inputValue] : []
      that.end && that.end('onOk', ...args)
    }
  }
}
</script>
