import { ref } from 'vue'
import initData from './data'
import { ListDataItem, ChildListItem } from './interfaces'

// 操作输入框
export const useHandlerInput = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 点击短信验证码
  const onSMS = (item: ChildListItem) => {
    let num = 60
    item.smsIs = true
    item.smsMsg = `${num}s后重发`
    // 开启倒计时
    const timer = setInterval(() => {
      num--
      item.smsMsg = `${num}s后重发`
      // 判断倒计时是否归零
      if (num <= 0) {
        clearTimeout(timer) // 关闭倒计时
        item.smsIs = false
        item.smsMsg = '短信验证码'
      }
    }, 1000)
  }
  // 点击图标
  const onIcon = (item: ChildListItem) => {
    // 判断是否为清理按钮
    item.icon === 'icon-close' && (item.value = '')
  }

  return { listData, onSMS, onIcon }
}
