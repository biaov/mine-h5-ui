import { componentConfig } from '@/config/nav.config'
import type { Docs } from './types'

let docs: Docs[] = componentConfig

/**
 * 添加组件
 */
const addComponent = (arr: Docs[]) => {
  /**
   * 索引数组
   */
  const indexArr: number[] = []
  // 循环遍历参数数组
  arr.forEach((elem, i) => {
    const { items } = elem
    if (items) {
      addComponent(items) // 递归
      docs = [...docs, ...items] // 对象添加到一级
      indexArr.push(i) // 添加到索引数组
      docs.splice(indexArr[0], 1) // 删除带items的数据
    } else {
      elem.component = () => import(`../views/doc/${elem.name}/index.vue`)
    }
  })
}

addComponent(docs)
const exportDocs = docs

export default exportDocs
