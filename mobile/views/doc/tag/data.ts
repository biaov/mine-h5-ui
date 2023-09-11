export default [
  {
    label: '基础用法',
    children: [
      {
        type: 'primary'
      },
      {
        type: 'success'
      },
      {
        type: 'info'
      },
      {
        type: 'warning'
      },
      {
        type: 'danger'
      }
    ]
  },
  {
    label: '空心设置',
    children: [
      {
        type: 'primary',
        plain: true
      },
      {
        type: 'success',
        plain: true
      },
      {
        type: 'info',
        plain: true
      },
      {
        type: 'warning',
        plain: true
      },
      {
        type: 'danger',
        plain: true
      }
    ]
  },
  {
    label: '自定义样式',
    children: [
      { color: '#6DA1F0', radius: 20, width: 100, height: 40 },
      { color: '#F060F0', radius: 20, width: 100, height: 40 }
    ]
  },
  {
    label: '自定义内容',
    children: [
      {
        text: '注意',
        textColor: 'rgba(255,255,255,0.6)',
        type: 'warning'
      },
      {
        text: '警告',
        type: 'danger'
      },
      {
        text: '置顶',
        color: '#e4393c'
      },
      {
        text: '作者',
        color: '#4359A8'
      },
      {
        text: '新消息',
        color: '#f00'
      }
    ]
  },
  {
    label: '关闭状态',
    children: [{ type: 'danger', closeable: true }]
  }
]
