export default [
  {
    label: '基础用法',
    props: {
      value: undefined
    }
  },
  {
    label: '大小',
    size: ['small', 'default', 'large'],
    props: {}
  },
  {
    label: '显示文案',
    props: {
      value: undefined,
      showText: true
    }
  },
  {
    label: '自定义文案',
    props: {
      value: undefined,
      showText: true,
      filterText: () => '自定义文案'
    }
  },
  {
    label: '自定义展示',
    customShow: true,
    props: {
      value: undefined
    }
  }
]
