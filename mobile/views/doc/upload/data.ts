export default [
  {
    id: 1,
    label: '基础用法',
    fileList: []
  },
  {
    id: 2,
    label: '展示图片并预览',
    fileList: [
      { id: 1, url: 'https://dummyimage.com/100x100/4BC7F5/fff&text=1' },
      { id: 2, url: 'https://dummyimage.com/100x100/7A51F5/fff&text=2' },
      { id: 3, url: 'https://dummyimage.com/100x100/FFB808/fff&text=3' }
    ]
  },
  {
    id: 3,
    label: '限制上传数量',
    maxCount: 3,
    fileList: []
  },
  {
    id: 4,
    label: '限制上传大小 4M',
    maxSize: 4 * 1024 * 1024,
    fileList: []
  },
  {
    id: 5,
    label: '是否允许多选',
    multiple: true,
    fileList: []
  },
  {
    id: 6,
    label: '删除图片按钮的显示状态',
    deletable: false,
    fileList: []
  },
  {
    id: 7,
    label: '禁用状态',
    disabled: true,
    fileList: []
  }
]
