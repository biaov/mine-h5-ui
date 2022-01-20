import img from '^/assets/verify.png'
import imgSelected from '^/assets/verify_selected.png'

export default [
  {
    label: '基础用法',
    list: [
      {
        id: 1,
        icon: 'icon-home',
        text: '首页',
        state: true
      },
      {
        id: 2,
        icon: 'icon-tupian',
        text: '图片',
        state: false
      },
      {
        id: 3,
        icon: 'icon-gongnengguanli',
        text: '功能',
        state: false
      },
      {
        id: 4,
        icon: 'icon-user1',
        text: '用户',
        state: false
      }
    ]
  },
  {
    label: '徽标提示',
    list: [
      {
        id: 1,
        icon: 'icon-home',
        text: '首页',
        state: true
      },
      {
        id: 2,
        icon: 'icon-tupian',
        text: '图片',
        badge: '6',
        state: false
      },
      {
        id: 3,
        icon: 'icon-gongnengguanli',
        text: '功能',
        badge: 'A',
        state: false
      },
      {
        id: 4,
        icon: 'icon-user1',
        text: '用户',
        dot: true,
        state: false
      }
    ]
  },
  {
    label: '自定义图标',
    list: [
      {
        id: 1,
        text: '安全',
        state: true,
        img,
        imgSelected
      },
      {
        id: 2,
        icon: 'icon-tupian',
        text: '图片',
        state: false
      },
      {
        id: 3,
        icon: 'icon-gongnengguanli',
        text: '功能',
        state: false
      },
      {
        id: 4,
        icon: 'icon-user1',
        text: '用户',
        state: false
      }
    ]
  },
  {
    label: '自定义颜色',
    color: '#f60',
    colorSelected: '#fff',
    background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)',
    borderColor: '#f60',
    list: [
      {
        id: 1,
        icon: 'icon-home',
        text: '首页',
        state: true
      },
      {
        id: 2,
        icon: 'icon-tupian',
        text: '图片',
        state: false
      },
      {
        id: 3,
        icon: 'icon-gongnengguanli',
        text: '功能',
        state: false
      },
      {
        id: 4,
        icon: 'icon-user1',
        text: '用户',
        state: false
      }
    ]
  }
]
