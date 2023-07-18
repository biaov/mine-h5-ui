import Vue from 'vue'
import MeMessageBox from './index.vue'

/**
 * 定时器
 */
let timer = null
/**
 * 使用新类继承 VUE 扩展组件
 */
class MessageBox extends Vue.extend(MeMessageBox) {
  constructor(options) {
    super()
    const that = this
    /**
     * 赋值虚拟节点
     */
    that.vm = that.$mount()
    /**
     * 循环遍历，设置该类属性
     */
    Object.keys(options).forEach(elem => {
      options[elem] && (that[elem] = options[elem])
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
    const that = this
    clearTimeout(timer)
    /**
     * 在挂载真实 DOM 树后显示过渡效果
     */
    timer = setTimeout(() => {
      that.isShow = true
    }, 100)
  }

  /**
   * 关闭此组件
   */
  end(type, value) {
    const that = this
    that.isShow = false
    that[type] && that[type](value)
    setTimeout(() => {
      document.body.removeChild(that.vm.$el)
    }, 500)
  }
}

/**
 * 默认
 */
const GetMessageBox = (options, type = '') => {
  /**
   * 判断是否是对象
   */
  if (Object.prototype.toString.call(options) !== '[object Object]') {
    /**
     * 抛出错误
     */
    throw new Error(`${JSON.stringify(options)} is not Object`)
  } else if (options.html && options.html.includes('script')) {
    /**
     * 抛出错误
     */
    throw new Error('Your HTML may be attacked by XSS')
  }
  /**
   * 设置当前类型
   */
  const curOptions = { ...options }
  type && (curOptions.type = type)
  return new MessageBox(curOptions)
}
/**
 * 所有子方法
 */
const childFun = ['alert', 'confirm', 'prompt', 'custom']
/**
 * 循环遍历添加子方法
 */
childFun.forEach(name => {
  GetMessageBox[name] = options => GetMessageBox(options, name)
})

export default GetMessageBox
