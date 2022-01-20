<template>
  <!-- 表单 -->
  <ul class="m-form">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <me-form :model="item.form" :rules="item.rules" @on-submit="onSubmit">
        <me-input v-model="item.form.username" placeholder="请输入用户名" label-width="70px" label="用户名"></me-input>
        <me-input v-model="item.form.password" :password="true" placeholder="请输入6-12位数字+字母组合" label-width="70px" label="密码"></me-input>
        <me-input v-model="item.form.sms" placeholder="请输入短信验证码" sms-msg="短信验证码" :sms-is="false"></me-input>
        <me-button type="primary" native-type="submit" width="100%">提交</me-button>
      </me-form>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          label: "基础用法",
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
        }
      ]
    };
  },
  methods: {
    // 点击提交按钮
    onSubmit({ valid, message, type, value }) {
      // 判断是否通过验证
      if (valid) {
        console.log(value); // 通过验证的值
      }
    }
  }
};
</script>
<style scoped lang="less">
.m-form {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
  }
}
</style>