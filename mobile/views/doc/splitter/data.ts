import url from '^/assets/material.png'

export default [
  {
    label: '基础用法',
    url
  },
  {
    label: '开启动画',
    url,
    openAnimation: true,
    switchAnimation: true
  },
  {
    label: '自定义区域大小',
    url,
    width: 300,
    height: 264
  },
  {
    label: '自定义切割排列',
    url,
    gutter: [5, 5]
  },
  {
    label: '自定义边框',
    url,
    lineColor: '#f60',
    minSize: 200,
    lineWidth: 4
  }
]
