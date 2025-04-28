import f01 from './static/start01.png'
import f02 from './static/start02.png'
import f03 from './static/start03.png'
import b01 from './static/end01.png'
import b02 from './static/end02.png'
import b03 from './static/end03.png'

export const resultList = [
  {
    result: [257, 179]
  },
  {
    result: [464, 251]
  },
  {
    result: [495, 105]
  }
].map((item, index) => ({ ...item, id: index + 1 }))

const list = [
  {
    bgElem: {
      url: b01,
      size: [672, 390]
    },
    elem: {
      initPos: [20, 179],
      url: f01,
      size: [120, 120]
    }
  },
  {
    bgElem: {
      url: b02,
      size: [672, 390]
    },
    elem: {
      initPos: [20, 251],
      url: f02,
      size: [120, 120]
    }
  },
  {
    bgElem: {
      url: b03,
      size: [672, 390]
    },
    elem: {
      initPos: [20, 105],
      url: f03,
      size: [120, 120]
    }
  }
].map((item, index) => ({ ...item, id: index + 1 }))

export const getInitData = (id?: number) => {
  if (!id) return list[0]
  let newIndnex = list.findIndex(item => item.id === id) + 1
  newIndnex >= list.length && (newIndnex -= list.length)
  return list[newIndnex]
}

export default [
  {
    label: '基础用法',
    visible: false,
    statusCode: 0,
    item: list[~~(Math.random() * list.length)]
  }
]
