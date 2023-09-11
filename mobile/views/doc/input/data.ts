export default [
  {
    id: 1,
    label: '基础用法',
    list: [
      {
        id: 1,
        value: ''
      }
    ]
  },
  {
    id: 2,
    label: '自定义类型',
    list: [
      {
        id: 1,
        value: '',
        placeholder: '请输入用户名',
        label: '用户名',
        labelWidth: '78px'
      },
      {
        id: 2,
        value: '',
        placeholder: '请输入整数',
        label: '整数',
        labelWidth: '78px',
        digit: true
      },
      {
        id: 3,
        value: '',
        placeholder: '请输入文本',
        label: '颜色自定',
        labelWidth: '78px',
        labelColor: '#f60'
      },
      {
        id: 4,
        value: '',
        placeholder: '请输入文本',
        label: '图标',
        labelWidth: '78px',
        labelColor: '#ec632f',
        labelIcon: 'icon-star'
      }
    ]
  },
  {
    id: 3,
    label: '聚焦颜色',
    list: [
      {
        id: 1,
        value: '',
        placeholder: '请输入...',
        label: '信息聚焦',
        focusType: 'primary'
      },
      {
        id: 2,
        value: '',
        placeholder: '请输入...',
        label: '成功聚焦',
        focusType: 'success'
      },
      {
        id: 3,
        value: '',
        placeholder: '请输入...',
        label: '警告聚焦',
        focusType: 'warning'
      },
      {
        id: 4,
        value: '',
        placeholder: '请输入...',
        label: '危险聚焦',
        focusType: 'danger'
      },
      {
        id: 5,
        value: '',
        placeholder: '请输入...',
        label: '自定聚焦',
        focusColor: '#f100ff'
      }
    ]
  },
  {
    id: 4,
    label: '图标按钮',
    list: [
      {
        id: 1,
        value: '',
        placeholder: '请输入密码',
        label: '密码',
        password: true
      },
      {
        id: 2,
        value: '',
        placeholder: '请输入文本',
        label: '清理',
        icon: 'icon-close'
      }
    ]
  },
  {
    id: 5,
    label: '短信验证码',
    list: [
      {
        id: 1,
        value: '',
        placeholder: '请输入...',
        smsMsg: '短信验证码',
        smsIs: false
      },
      {
        id: 2,
        value: '',
        placeholder: '自定义验证码颜色',
        smsMsg: '短信验证码',
        smsColor: '#549ff2',
        smsIs: false
      }
    ]
  },
  {
    id: 6,
    label: '禁用状态',
    list: [
      {
        id: 1,
        value: '',
        placeholder: '请输入...',
        label: '只读状态',
        readonly: true
      },
      {
        id: 2,
        value: '',
        placeholder: '请输入...',
        label: '禁用状态',
        disabled: true
      }
    ]
  }
]
