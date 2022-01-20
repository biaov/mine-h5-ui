import Vue from "vue";
import MeMessageBox from "./index.vue";
let timer = null; // 定时器
// 使用新类继承VUE扩展组件
class MessageBox extends Vue.extend(MeMessageBox) {
  constructor(options) {
    super();
    const that = this;
    that.vm = that.$mount(); // 赋值虚拟节点
    // 循环遍历，设置该类属性
    Object.keys(options).forEach(elem => {
      options[elem] && (that[elem] = options[elem]);
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
    const that = this;
    clearTimeout(timer);
    // 在挂载真实DOM树后显示过渡效果
    timer = setTimeout(() => {
      that.isShow = true;
    }, 100);
  }

  // 关闭此组件
  end(type, value) {
    const that = this;
    that.isShow = false;
    that[type] && that[type](value);
    setTimeout(() => {
      document.body.removeChild(that.vm.$el);
    }, 500);
  }
}

// 默认
const GetMessageBox = (options, type = "") => {
  // 判断是否是对象
  if (Object.prototype.toString.call(options) !== "[object Object]") {
    throw new Error(`${JSON.stringify(options)} is not Object`); // 抛出错误
  } else if (options.html && options.html.includes("script")) {
    throw new Error("Your HTML may be attacked by XSS"); // 抛出错误
  }
  const curOptions = { ...options }; // 设置当前类型
  type && (curOptions.type = type);
  return new MessageBox(curOptions);
};
const childFun = ["alert", "confirm", "prompt", "custom"]; // 所有子方法
// 循环遍历添加子方法
childFun.forEach(name => {
  GetMessageBox[name] = options => GetMessageBox(options, name);
});

export default GetMessageBox;
