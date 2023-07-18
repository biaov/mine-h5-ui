import Vue from 'vue'
import MeToast from './index.vue'
let timer = null

/**
 * 使用新类继承 VUE 扩展组件
 */
class Toast extends Vue.extend(MeToast) {
  constructor(options) {
    super()
    const type = Object.prototype.toString.call(options)
    /**
     * 赋值虚拟节点
     */
    this.vm = this.$mount()
    /**
     * 判断 options 类型
     */
    if (type === '[object String]' || type === '[object Number]') {
      this.message = options
    } else if (type === '[object Object]') {
      /**
       * 循环遍历，设置该类属性
       */
      Object.keys(options).forEach(elem => {
        this[elem] = options[elem]
      })
    } else {
      /**
       * 抛出错误
       */
      throw new Error(`${JSON.stringify(options)} is not Number, String or Object`)
    }
    this.init()
  }

  /**
   * 初始化方法
   */
  init() {
    /**
     * 把虚拟 DOM 插入到真实 DOM 树中
     */
    document.body.appendChild(this.vm.$el)
    this.start()
  }

  /**
   * 开始此组件
   */
  start() {
    clearTimeout(timer)
    /**
     * 在挂载真实 DOM 树后显示过渡效果
     */
    timer = setTimeout(() => {
      this.isShow = true
      this.end()
    }, 100)
  }

  /**
   * 结束此组件
   */
  end() {
    /**
     * 关闭过渡效果之后移除真实 DOM 树节点
     */
    setTimeout(() => {
      this.isShow = false
      setTimeout(() => {
        document.body.removeChild(this.vm.$el)
      }, 500)
    }, this.durction)
  }
}

const GetToast = options => new Toast(options)

export default GetToast
