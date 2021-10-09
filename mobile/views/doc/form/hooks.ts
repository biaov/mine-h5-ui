import { getCurrentInstance, ref } from "vue";
import { ListDataItem, SubmitCallBackParams } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const { $MeToast, $Validator } = getCurrentInstance()!.appContext.config.globalProperties;
  const listData = ref<ListDataItem[]>([
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
          pattern: $Validator.validPwd,
          message: "密码必须为6-12位数字+字母组合"
        },
        {
          type: "sms",
          validator: value => /^\d{4}$/.test(value),
          message: "短信验证码只能是4位纯数字"
        }
      ]
    }
  ]);
  // 点击提交按钮
  const onSubmit = ({ valid, value }: SubmitCallBackParams) => {
    // 判断是否通过验证
    if (valid) {
      console.log(value); // form验证的值
      $MeToast("提交成功");
    }
  };
  return { listData, onSubmit };
};
