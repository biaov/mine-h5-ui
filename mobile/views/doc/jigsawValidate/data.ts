import url from '^/assets/material.png'

export default [
  {
    id: 1,
    label: '基础用法',
    url
  },
  {
    id: 2,
    label: '自定义图片大小',
    url,
    width: '300px',
    height: '260px'
  },
  {
    id: 3,
    label: '是否开启随机位置',
    url,
    random: false
  },
  {
    id: 4,
    label: '自定义滑块位置',
    url,
    slideStyle: {
      height: '30px',
      background: 'radial-gradient(circle farthest-corner at 100% 0, #3eabff 0%, #3369e7 100%)',
      dotBackground: 'radial-gradient(circle farthest-corner at 100% 0, #f09c33, #ff00aa)',
      tips: '#fff'
    }
  },
  {
    id: 5,
    label: '提示文字',
    url,
    tips: '这是一段提示文字'
  },
  {
    id: 6,
    label: '容错值',
    url,
    range: 20
  }
]
