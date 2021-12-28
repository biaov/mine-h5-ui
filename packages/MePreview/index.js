import Vue from "vue";
import MePreview from "./index.vue";
let timer = null; // 定时器
class Preview extends Vue.extend(MePreview) {
  constructor(options) {
    super(options);
    const that = this;
    that.vm = that.$mount(); // 赋值虚拟节点
    // 循环遍历，设置该类属性
    Object.keys(options).forEach(elem => {
      that[elem] = options[elem];
    });
    that.init();
  }
  // 初始化
  init() {
    const that = this;
    document.body.appendChild(that.vm.$el); // 把虚拟DOM插入到真实DOM树中
    that.start();
  }
  // 打开此组件
  start() {
    clearTimeout(timer);
    // 在挂载真实DOM树后显示过渡效果
    timer = setTimeout(() => {
      this.isShow = true;
    }, 100);
  }
  // 关闭此组件
  end() {
    const that = this;
    that.isShow = false;
    setTimeout(() => {
      document.body.removeChild(that.vm.$el);
    }, 500);
  }
}
/**
 * 创建预览对象
 * @param {Object} options 预览参数
 * @return {Preview} - 预览对象
 */
const GetPreview = options => {
  if (Object.prototype.toString.call(options).slice(8, -1) !== "Object") throw new Error(`${options} is not Object!`);
  return new Preview(options);
};
export default GetPreview;
