export default [
  {
    id: 1,
    label: '基础用法',
    form: {
      /**
       * 用户名
       */
      username: '',
      /**
       * 密码
       */
      password: '',
      /**
       * 短信验证码
       */
      sms: ''
    },

    /**
     * 规则
     */
    rules: [
      {
        type: 'username',
        required: true,
        message: '用户名不能为空'
      },
      {
        type: 'password',
        pattern: /^$/g,
        message: '密码必须为6-12位数字+字母组合'
      },
      {
        type: 'sms',
        validator: (value: string) => /^\d{4}$/.test(value),
        message: '短信验证码只能是4位纯数字'
      }
    ]
  }
]
