<template>
  <!-- 演示demo -->
  <div class="m-demo">
    <me-form :model="form" :rules="rules" @on-submit="onSubmit">
      <me-input v-model="form.username" placeholder="请输入用户名" label-width="70px" label="用户名"></me-input>
      <me-input v-model="form.password" :password="true" placeholder="请输入6-12位数字+字母组合" label-width="70px" label="密码"></me-input>
      <me-input v-model="form.sms" placeholder="请输入短信验证码" sms-msg="短信验证码" :sms-is="false"></me-input>
      <me-button type="primary" native-type="submit" width="100%">提交</me-button>
    </me-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "", // 用户名
        password: "", // 密码
        sms: "" // 短信验证码
      },
      // 规则
      rules: [
        {
          type: "username",
          required: true,
          message: "用户名不能为空"
        },
        {
          type: "password",
          pattern: this.$Validator.validPwd,
          message: "密码必须为6-12位数字+字母组合"
        },
        {
          type: "sms",
          validator: value => /^\d{4}$/.test(value),
          message: "短信验证码只能是4位纯数字"
        }
      ]
    };
  },
  methods: {
    // 点击提交按钮
    onSubmit({ valid, message, value }) {
      // 判断是否通过验证
      if (valid) {
        console.log(value); // 通过验证的值
      }
    }
  }
};
</script>
<style scoped lang="less">
.m-demo {
  
}
</style>