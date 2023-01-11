import NavConfig from '@/config/nav.config'
import { Docs } from './types'

let docs: Docs[] = []

// 添加组件
const addComponent = (arr: Docs[]) => {
  const indexArr: number[] = [] // 索引数组

  // 循环遍历参数数组
  arr.forEach((elem, i) => {
    const { items } = elem

    if (items) {
      addComponent(items) // 递归
      docs = [...docs, ...items] // 对象添加到一级
      indexArr.push(i) // 添加到索引数组
      docs.splice(indexArr[0], 1) // 删除带items的数据
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
