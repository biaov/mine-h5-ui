<template>
  <!-- 输入框 -->
  <div class="me-input" :class="`me-input-${focusType}`">
    <div class="u-label" :style="`width:${labelWidth};text-align-last:${labelAlign};color:${labelColor};`" ref="inputLabel" v-if="label">
      <me-icon :name="labelIcon" :color="labelColor" size="inherit" v-if="labelIcon"></me-icon>
      {{ label }}
    </div>
    <input
      :type="inputType"
      v-model="inputVal"
      class="u-input"
      :placeholder="placeholder"
      :style="`${isFocus && `border-color:${focusColor};`};padding-right:${paddingRight}px;padding-left:${paddingLeft}px;`"
      @focus="onFocusBlur('on-focus', $event)"
      @blur="onFocusBlur('on-blur', $event)"
      @change="onEvent('on-change', $event)"
      @input="onEvent('on-input', $event)"
      :readonly="readonly"
      :disabled="disabled"
    />
    <me-icon :name="inputType == 'password' ? 'icon-in_biyan' : 'icon-in_zhengyan'" @on-click="handleIcon" v-if="password"></me-icon>
    <me-icon :name="icon" @on-click="handleIcon" v-else></me-icon>
    <span class="u-sms" :class="{ countdown: smsIs }" v-if="!password && smsMsg" @click="handleSMS" ref="sms" :style="`color:${smsColor};`">{{ smsMsg }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MeIcon from "../MeIcon";
import { useSms, useIcon, useInput } from "./hooks";

export default defineComponent({
  name: "MeInput",
  components: {
    MeIcon
  },
  props: {
    // input绑定值
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框值
    type: {
      type: String,
      default: "text"
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请输入..."
    },
    // 只读状态
    readonly: {
      type: Boolean,
      default: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // label内容
    label: {
      type: String,
      default: ""
    },
    // label宽度
    labelWidth: {
      type: String,
      default: ""
    },
    // label对齐方式
    labelAlign: {
      type: String,
      default: "left" // auto|left|right|center|justify|start|end|initial|inherit;
    },
    // label颜色
    labelColor: {
      type: String,
      default: ""
    },
    // label图标
    labelIcon: {
      type: String,
      default: ""
    },
    // 聚焦边框样式
    focusType: {
      type: String,
      default: "default" // default|primary|success|warning|danger
    },
    // 聚焦颜色
    focusColor: {
      type: String,
      default: ""
    },
    // 图标
    icon: {
      type: String,
      default: ""
    },
    // 密码输入框
    password: {
      type: Boolean,
      default: false
    },
    // 整数输入
    digit: {
      type: Boolean,
      default: false
    },
    // 短信验证码
    smsMsg: {
      type: String,
      default: ""
    },
    // 短信颜色
    smsColor: {
      type: String,
      default: ""
    },
    // 是否开启倒计时
    smsIs: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { sms, handleSMS } = useSms(props);
    const { inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocusBlur, onEvent } = useInput(props, sms);
    const { handleIcon } = useIcon(props, inputType);

    return { sms, handleSMS, inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocusBlur, onEvent, handleIcon };
  }
});
</script>
