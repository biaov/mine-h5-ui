import { ref, watch } from 'vue'
import { CountDown } from '../MeAPI/function'
import { FormatData } from '../MeAPI/types'
import { Props, Emits } from './types'

// 倒计时
export const useCountdown = (props: Readonly<Props>, emit: Emits) => {
  const formatAfter = ref<Partial<FormatData>>({}) // 格式化之后
  let timer: NodeJS.Timeout | undefined // 定时器
  const addSubNum = props.format.includes('ms') ? 10 : 1000 // 时间
  let curTime = 0 // 当前 time

  // 开启倒计时
  const startCountdown = () => {
    if (timer) return // 倒计时是否存在

    // 开启倒计时
    timer = setInterval(() => {
      // 是否已经倒计到0
      if (curTime <= 0) {
        clearInterval(timer as NodeJS.Timeout)
        timer = undefined
        emit('end')
      } else {
        curTime -= addSubNum
        formatAfter.value = CountDown(curTime, props.format)
        emit('progress', curTime)
      }
    }, addSubNum)
  }

  // 暂停倒计时
  const suspendCountdown = () => {
    clearInterval(timer as NodeJS.Timeout)
    timer = undefined
  }

  // 重置倒计时
  const resetCountdown = () => {
    curTime = props.time
    formatAfter.value = CountDown(curTime, props.format)
  }

  // 监听开始状态
  watch(
    () => props.isStart,
    value => {
      value && startCountdown()
    },
    {
      immediate: true
    }
  )

  // 监听暂停状态
  watch(
    () => props.isSuspend,
    value => {
      value && suspendCountdown()
    }
  )

  // 监听重置状态
  watch(
    () => props.isReset,
    value => {
      value && resetCountdown()
    }
  )

  resetCountdown()

  return { formatAfter }
}
