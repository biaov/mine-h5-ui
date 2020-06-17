import Vue from "vue";
import MeToast from "./index.vue";
let timer = null;
// 使用新类继承VUE扩展组件
class Toast extends Vue.extend(MeToast) {
  constructor(options) {
    super();
    const type = Object.prototype.toString.call(options);
    this.vm = this.$mount(); // 赋值虚拟节点
    // 判断options类型
    if (type === "[object String]" || type === "[object Number]") {
      this.message = options;
    } else if (type === "[object Object]") {
      // 循环遍历，设置该类属性
      Object.keys(options).forEach(elem => {
        this[elem] = options[elem];
      });
    } else {
      // 抛出错误
      throw new Error(`${JSON.stringify(options)} is not String or Object`);
    }
    this.init();
  }

  // 初始化方法
  init() {
    document.body.appendChild(this.vm.$el); // 把虚拟DOM插入到真实DOM树中
    this.start();
  }

  // 开始此组件
  start() {
    clearTimeout(timer);
    // 在挂载真实DOM树后显示过渡效果
    timer = setTimeout(() => {
      this.isShow = true;
      this.end();
    }, 500);
  }

  // 结束此组件
  end() {
    // 关闭过渡效果之后移除真实DOM树节点
    setTimeout(() => {
      this.isShow = false;
      setTimeout(() => {
        document.body.removeChild(this.vm.$el);
      }, 500);
    }, this.durction);
  }
}

const GetToast = options => {
  return new Toast(options);
};
export default GetToast;
