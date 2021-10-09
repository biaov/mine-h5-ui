<template>
  <!-- 表单 -->
  <ul class="m-form">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-form :model="item.form" :rules="item.rules" @on-submit="onSubmit">
        <me-input v-model="item.form.username" placeholder="请输入用户名" label-width="70px" label="用户名"></me-input>
        <me-input v-model="item.form.password" :password="true" placeholder="请输入6-12位数字+字母组合" label-width="70px" label="密码"></me-input>
        <me-input v-model="item.form.sms" placeholder="请输入短信验证码" sms-msg="短信验证码" :sms-is="false"></me-input>
        <me-button type="primary" native-type="submit" width="100%">提交</me-button>
      </me-form>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onSubmit } = useHandlerClick();
    return { listData, onSubmit };
  }
});
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
