<template>
  <!-- 数字键盘 -->
  <ul class="me-keyboard" :class="`me-keyboard-${skinType} ${show ? 'show' : ''} ${isActive ? 'me-keyboard-active' : ''}`" @click.stop>
    <li v-for="item in 9" :key="item" @click="onClick(item)">{{ item }}</li>
    <li @click="onComplate" class="u-complate">完成</li>
    <li @click="onClick(0)">0</li>
    <li @click="onDelete">
      <me-icon name="icon-delete"></me-icon>
    </li>
  </ul>
</template>
<script>
import MeIcon from '~/MeIcon'
import { Bind, Unbind } from '~/MeAPI/event'
export default {
  name: 'MeKeyboard',
  components: {
    MeIcon
  },
  model: {
    prop: 'show'
  },
  props: {
    // 是否显示数字输入
    show: {
      type: Boolean,
      default: false
    },
    // 系统皮肤样式
    skinType: {
      type: String,
      default: 'gray' // gray|dark
    },
    // 自定义皮肤样式
    skinStyle: {
      type: Object,
      default() {
        return {
          bgc: '', // 背景色
          textBgc: '', // 文本背景
          color: '' // 字体颜色
        }
      }
    },
    // 是否动态改变padding
    isPadding: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isActive: false // 是否处于激活状态
    }
  },
  methods: {
    // 点击数字
    onClick(num) {
      this.$emit('on-click', num)
    },
    // 点击删除按钮
    onDelete() {
      this.$emit('on-delete')
    },
    // 点击完成按钮
    onComplate() {
      this.$emit('input', false)
      this.$emit('on-complate')
    },
    // 改变页面padding
    setPadding() {
      const { isPadding, show } = this
      // 判断是否可设置padding
      if (isPadding) {
        // 判断是否处于激活状态
        if (show) {
          document.body.className += ' me-keyboard-padding' // 设置className
        } else {
          const className = document.body.className // 获取className
          let index = className.indexOf('me-keyboard-padding')
          index = index > 0 ? index : undefined // 判断是否存在padding
          document.body.className = className.slice(0, index) // 设置className
        }
      }
    },
    // 点击 document
    clickDocument() {
      this.$emit('input', false)
    }
  },
  mounted() {
    this.setPadding()
    // 点击非键盘区域
    Bind(document, 'click', this.clickDocument)
  },
  destroyed() {
    Unbind(document, 'click', this.clickDocument)
  },
  watch: {
    // 监听value值变化
    show() {
      this.setPadding()
    }
  }
}
</script>
