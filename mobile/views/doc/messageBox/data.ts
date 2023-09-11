export default [
  {
    id: 1,
    label: '基础用法',
    list: [
      {
        id: 1,
        value: '弹出 Alert 提示框',
        type: 'alert',
        tips: '警告',
        message: '至于未来会怎样，要走下去才知道，反正路还很长，天总会亮！'
      }
    ]
  },
  {
    id: 2,
    label: 'Confirm 确认框',
    list: [
      {
        id: 1,
        value: '弹出 Confirm 确认框',
        type: 'confirm',
        message: '你认为作者帅吗？',
        cancelButtonText: '看不清',
        confirmButtonText: '作者真帅'
      }
    ]
  },
  {
    id: 3,
    label: 'Prompt 输入框',
    list: [
      {
        id: 1,
        value: '弹出 Prompt 输入框',
        type: 'prompt',
        message: '请输入你的手机号'
      }
    ]
  },
  {
    id: 4,
    label: 'Custom 自定义框',
    list: [
      {
        id: 1,
        value: '弹出 Custom 自定义框',
        type: 'custom',
        html: `<div class="message-cont">健康的身体是实现目标的基石</div>`
      }
    ]
  }
]
