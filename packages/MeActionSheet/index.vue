<template>
  <!-- 动作面板 -->
  <div class="me-action-sheet" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <ul class="m-list-li" :class="{ on: isShow }" @click.stop>
      <li v-for="item in list" :key="item[index]" @click.stop="onLi(item)">{{ item[label] }}</li>
      <li @click.stop="onCancel">取消</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MeActionSheet',
  props: {
    /**
     * v-model 绑定值
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * 数据列表
     */
    list: {
      type: Array,
      validator: value => value.length > 0 && Object.keys(value[0]).length > 0
    },
    /**
     * 索引名
     */
    index: {
      type: String,
      default: 'id'
    },
    /**
     * 数据展示属性名
     */
    label: {
      type: String,
      default: 'value'
    }
  },
  data() {
    return {
      /**
       * 是否显示模态框
       */
      isShowMask: false,
      /**
       * 是否显示模态框的过渡动画
       */
      isShow: false
    }
  },
  methods: {
    /**
     * 显示模态框
     */
    showMask() {
      const that = this
      that.isShowMask = true
      setTimeout(() => {
        that.isShow = true
      }, 100)
    },
    /**
     * 隐藏模态框
     */
    hideMask() {
      const that = this
      that.isShow = false
      setTimeout(() => {
        that.isShowMask = false
        that.$emit('input', false)
      }, 400)
    },
    /**
     * 点击列表
     */
    onLi(item) {
      const that = this
      that.$emit('input', false)
      that.$emit('on-change', item)
    },
    /**
     * 点击取消按钮
     */
    onCancel() {
      const that = this
      that.$emit('input', false)
      that.$emit('on-cancel')
    }
  },
  watch: {
    /**
     * 监听是否显示弹出层参数
     */
    value(value) {
      const { showMask, hideMask } = this
      value ? showMask() : hideMask()
    }
  }
}
</script>
