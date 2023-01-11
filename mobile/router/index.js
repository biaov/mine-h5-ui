import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from '@/config/nav.config.json'
Vue.use(Router)
let docs = NavConfig['组件']
// 添加组件
const addComponent = arr => {
  const indexArr = [] // 索引数组
  // 循环遍历参数数组
  arr.forEach((elem, i) => {
    const items = elem.items
    if (items) {
      addComponent(items) // 递归
      docs = [...docs, ...items] // 对象添加到一级
      indexArr.push(i) // 添加到索引数组
      docs.splice(indexArr[0], 1) // 删除带items的数据
    } else {
      elem.component = r => require.ensure([], () => r(require(`^/views/${elem.name}`)))
    }
  })
}
addComponent(docs)
// 获取原型对象上的 push 函数
const originalPush = Router.prototype.push
// 修改原型对象中的 push 方法
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: () => import('^/views/index')
  },
  {
    path: '/doc',
    component: () => import('^/views/doc'),
    children: docs
  }
]

export default new Router({
  // mode: 'history',
  routes
})
