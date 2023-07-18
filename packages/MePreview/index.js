import Vue from 'vue'
import MePreview from './index.vue'

/**
 * 定时器
 */
let timer = null
class Preview extends Vue.extend(MePreview) {
  constructor(options) {
    super(options)
    const that = this
    /**
     * 赋值虚拟节点
     */
    that.vm = that.$mount()
    /**
     * 循环遍历，设置该类属性
     */
    Object.keys(options).forEach(elem => {
      that[elem] = options[elem]
    })
    that.init()
  }
  /**
   * 初始化
   */
  init() {
    const that = this
    /**
     * 把虚拟 DOM 插入到真实 DOM 树中
     */
    document.body.appendChild(that.vm.$el)
    that.start()
  }
  /**
   * 打开此组件
   */
  start() {
    clearTimeout(timer)
    /**
     * 在挂载真实 DOM 树后显示过渡效果
     */
    timer = setTimeout(() => {
      this.isShow = true
    }, 100)
  }
  /**
   * 关闭此组件
   */
  end() {
    const that = this
    that.isShow = false
    setTimeout(() => {
      document.body.removeChild(that.vm.$el)
    }, 500)
  }
}
/**
 * 创建预览对象
 * @param {Object} options 预览参数
 * @return {Preview} - 预览对象
 */
const GetPreview = options => {
  if (Object.prototype.toString.call(options).slice(8, -1) !== 'Object') throw new Error(`${options} is not Object!`)
  return new Preview(options)
}

export default GetPreview
