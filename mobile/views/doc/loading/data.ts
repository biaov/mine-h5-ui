import loadingIcon from '^/assets/loading.svg'

export default [
  {
    id: 1,
    label: '基础用法',
    list: [
      {
        id: 1
      }
    ]
  },
  {
    id: 2,
    label: '自定义大小',
    list: [
      {
        id: 1,
        size: '24px'
      },
      {
        id: 2,

        size: '32px'
      }
    ]
  },
  {
    id: 3,
    label: '自定义颜色',
    list: [
      {
        id: 1,
        color: '#409eff'
      },
      {
        id: 2,
        color: '#f56c6c'
      }
    ]
  },
  {
    id: 4,
    label: '自定义图标',
    list: [
      {
        id: 1,
        icon: loadingIcon
      }
    ]
  },
  {
    id: 5,
    label: '自定义文本',
    list: [
      {
        id: 1,
        text: '加载中...'
      },
      {
        id: 2,
        text: '正在加载...'
      }
    ]
  },
  {
    id: 6,
    label: '点状加载',
    list: [
      {
        id: 1,
        color: '#f56c6c',
        dot: true
      }
    ]
  }
]
