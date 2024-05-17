import type { ListDataItem } from './types'

export default (
  [
    {
      label: '基础用法',
      list: [{}]
    },
    {
      label: '对齐方向',
      list: [
        {
          direction: 'vertial'
        }
      ]
    },
    {
      label: '线的颜色和大小',
      list: [
        {
          color: '#f56c6c',
          strokeWidth: 2
        }
      ]
    },
    {
      label: '隐藏箭头',
      list: [
        {
          arrow: false
        }
      ]
    }
  ] as ListDataItem[]
).map((item, index) => {
  item.id = `${index}`
  item.list.forEach((rect, i) => {
    const defaultRect = { width: '14px', height: '14px' }
    rect.id = `${index}-${i}`
    rect.startPointStyle = {
      ...defaultRect,
      top: '10px',
      left: '10px',
      'border-radius': '50%',
      background: '#409eff'
    }
    rect.endPointStyle = {
      ...defaultRect,
      top: '140px',
      left: '200px',
      'border-radius': '50%',
      background: '#67c23a'
    }
  })

  return item
})
