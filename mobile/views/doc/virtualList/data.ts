import { createArr } from './function'

const initList = createArr()
const autoList = createArr(14, 50)

export default [
  {
    id: 1,
    label: '基础用法',
    itemHeight: 50,
    list: initList
  },
  {
    id: 2,
    label: '加载更多',
    itemHeight: 50,
    loadStatus: 'more',
    list: initList
  },
  {
    id: 3,
    label: '自适应高度',
    itemHeight: 0,
    list: autoList,
    auto: true
  }
]
