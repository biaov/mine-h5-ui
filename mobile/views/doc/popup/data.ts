export default [
  {
    id: 1,
    label: '基础用法',
    list: [
      {
        id: 1,
        position: 'center',
        visible: false,
        value: '展示弹出层'
      }
    ]
  },
  {
    id: 2,
    label: '弹出位置',
    list: [
      {
        id: 1,
        position: 'top',
        visible: false,
        value: '顶部弹出'
      },
      {
        id: 2,
        position: 'right',
        visible: false,
        value: '右侧弹出'
      },
      {
        id: 3,
        position: 'bottom',
        visible: false,
        value: '底部弹出'
      },
      {
        id: 4,
        position: 'left',
        visible: false,
        value: '左侧弹出'
      }
    ]
  },
  {
    id: 3,
    label: '关闭图标',
    list: [
      {
        id: 1,
        closeable: true,
        visible: false,
        value: '展示关闭图标弹出层'
      }
    ]
  },
  {
    id: 4,
    label: '圆角弹窗',
    list: [
      {
        id: 1,
        position: 'bottom',
        radius: '15px',
        visible: false,
        value: '展示圆角弹出层'
      }
    ]
  }
]
