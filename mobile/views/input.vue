<template>
  <!-- 输入框 -->
  <ul class="m-input">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id">
          <me-input
            :type="it.type"
            v-model="it.value"
            :placeholder="it.placeholder"
            :label="it.label"
            :label-width="it.labelWidth"
            :label-align="it.labelAlign"
            :label-color="it.labelColor"
            :label-icon="it.labelIcon"
            :focus-type="it.focusType"
            :focus-color="it.focusColor"
            :icon="it.icon"
            :digit="it.digit"
            :password="it.password"
            :sms-msg="it.smsMsg"
            :sms-color="it.smsColor"
            :sms-is="it.smsIs"
            @on-click-sms="handleSMS(it)"
            @on-click-icon="handleIcon(it)"
            :readonly="it.readonly"
            :disabled="it.disabled"
          ></me-input>
        </li>
      </ul>
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
    }
  },
  methods: {
    // 点击短信验证码
    handleSMS(item) {
      let num = 60
      item.smsIs = true
      item.smsMsg = num + 's后重发'
      // 开启倒计时
      const timer = setInterval(() => {
        num--
        item.smsMsg = num + 's后重发'
        // 判断倒计时是否归零
        if (num <= 0) {
          clearTimeout(timer) // 关闭倒计时
          item.smsIs = false
          item.smsMsg = '短信验证码'
        }
      }, 1000)
    },
    // 点击图标
    handleIcon(item) {
      // 判断是否为清理按钮
      item.icon === 'icon-close' && (item.value = '')
    }
  }
}
</script>
<style scoped lang="less">
.m-input {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }

    .m-list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid darken(@bg-color, 5%);
        margin-bottom: 10px;
        cursor: pointer;
        .me-input {
          /deep/ .u-input[disabled] {
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
