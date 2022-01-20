export default [
  {
    id: 1,
    label: '基本用法',
    list: [
      {
        id: 1,
        label: '弹出默认键盘',
        value: false
      }
    ]
  },
  {
    id: 2,
    label: '选择主题样式',
    list: [
      {
        id: 1,
        label: '弹出 gray 主题',
        value: false,
        skinType: 'gray'
      },
      {
        id: 2,
        label: '弹出 dark 主题',
        value: false,
        skinType: 'dark'
      }
    ]
  },
  {
    id: 3,
    label: '自定义主题样式',
    list: [
      {
        id: 1,
        label: '弹出自定义主题',
        value: false,
        skinStyle: {
          bgc: 'linear-gradient(-45deg, #4bb0ff, #6149f6)', // 背景色
          textBgc: 'rgba(255,255,255,0.1)',
          color: '#fff'
        }
      }
    ]
  }
]
