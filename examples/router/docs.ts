import NavConfig from '@/config/nav.config'
import type { Docs } from './types'

let docs: Docs[] = []

/**
 * 添加组件
 */
const addComponent = (arr: Docs[]) => {
  /**
   * 索引数组
   */
  const indexArr: number[] = []

  /**
   * 循环遍历参数数组
   */
  arr.forEach((elem, i) => {
    const { items } = elem

    if (items) {
      /**
       * 递归
       */
      addComponent(items)

      /**
       * 对象添加到一级
       */
      docs = [...docs, ...items]

      /**
       * 添加到索引数组
       */
      indexArr.push(i)

      /**
       * 删除带items的数据
       */
      docs.splice(indexArr[0], 1)
    } else {
      elem.component = () => import(`../docs/${elem.name}.md`)
    }
  })
}

Object.keys(NavConfig).forEach(elem => {
  docs = [...docs, ...(NavConfig as any)[elem]]
})

addComponent(docs)
const exportDocs = docs

export default exportDocs
