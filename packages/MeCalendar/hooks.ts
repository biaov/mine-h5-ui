import { ref, watch, computed, useTemplateRef, nextTick } from 'vue'
import type { USEHandle, USEShow, DayItem } from './types'

/**
 * 加 0 补位
 */
const addZero = (value: number) => (value < 10 ? `0${value}` : `${value}`)
/**
 * 获取一个月有多少天
 * 原理: 获取一个月的最后一天天数即获得一个月有多少天
 * @param { number } y 年份
 * @param { number } m 月份，1 表示一月
 * new Date(2025, 2, 0) -> 2025 3 月的第 0 天表示 2 月的最后一天
 */
const getMonthDay = (y: number, m: number) => new Date(y, m, 0).getDate()

export const useShow = ({ visible }: USEShow.Option, initData: () => void) => {
  /**
   * 销毁开关
   */
  const destroy = ref(false)
  const showAnimation = ref(false)

  const calendarRef = useTemplateRef('calendarRef')
  let timerRef: NodeJS.Timeout
  const findCalendarRef = (count = 0) => {
    return new Promise((resolve, reject) => {
      if (count > 50) {
        reject(new Error('获取错误'))
        return
      }
      clearTimeout(timerRef)
      timerRef = setTimeout(() => {
        if (calendarRef.value) {
          resolve(true)
        } else {
          findCalendarRef(count + 1)
        }
      }, 100)
    })
  }
  watch(
    visible,
    bool => {
      if (bool) {
        initData()
        destroy.value = true
        findCalendarRef().then(() => {
          showAnimation.value = true
        })
      } else {
        showAnimation.value = false
        setTimeout(() => {
          destroy.value = false
        }, 300)
      }
    },
    { immediate: true }
  )

  const onClose = () => {
    visible.value = false
  }

  return { showAnimation, destroy, onClose }
}

/**
 * 操作
 */
export const useHandle = ({ props, emit, modelValue, visible }: USEHandle.Option) => {
  const curDate = ref({
    y: 0,
    m: 0,
    d: 0
  })

  const getStyle = computed(() => {
    const style = props.style || {}
    let option: Record<string, string | number> = {}
    if (typeof style === 'string') {
      style.split(';').map(item => {
        const [key, value] = item.split(':')
        key && (option[key] = value)
      })
    } else {
      option = style
    }
    return {
      ...option,
      '--theme': props.themeColor || '#409eff'
    }
  })
  /**
   * 星期中文
   */
  const week = Object.freeze(['日', '一', '二', '三', '四', '五', '六'])
  /**
   * 月份中文
   */
  const monthCn = Object.freeze(['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'])

  /**
   * 展示信息
   */
  const dateInfo = computed(() => ({
    y: curDate.value.y,
    m: monthCn[curDate.value.m - 1]
  }))
  /**
   * 总展示天数, 6 排 7 列
   */
  const total = 6 * 7

  /**
   * 初始化数据
   */
  const initData = () => {
    /**
     * 当前时间
     */
    const now = new Date()
    const nowDate = `${now.getFullYear()}-${addZero(now.getMonth() + 1)}-${addZero(now.getDate())}`
    /**
     * 目标时间
     */
    const date = modelValue.value ? new Date(modelValue.value) : new Date()
    const curDays: DayItem[] = []
    const [y, m, d] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    modelValue.value && (modelValue.value = `${y}-${addZero(m)}-${addZero(d)}`)
    /**
     * 当月开始星期
     */
    const startW = new Date(`${y}-${m}-1`).getDay()
    let nm = m - 1
    let ny = y
    if (nm === 0) {
      nm = 12
      ny--
    }
    /**
     * 上月总天数
     */
    const prevTotalDay = getMonthDay(ny, nm)
    Array.from({ length: startW }, (_, i) => {
      const newDay = prevTotalDay - i
      const tempDate = `${ny}-${nm}-${newDay}`
      curDays.push({ y: ny, m: nm, d: newDay, value: addZero(newDay), disabled: true, today: tempDate === nowDate })
    })
    /**
     * 当月总天数
     */
    const totalDay = getMonthDay(y, m)
    Array.from({ length: totalDay }, (_, i) => {
      const nd = i + 1
      const tempDate = `${y}-${addZero(m)}-${addZero(nd)}`
      const today = tempDate === nowDate
      const selected = modelValue.value ? tempDate === modelValue.value : false
      curDays.push({ y, m, d: nd, value: addZero(nd), today, selected })
    })
    /**
     * 下月
     */
    let nextM = m + 1
    let nextY = y
    if (nextM > 12) {
      nextM = 1
      nextY++
    }
    Array.from({ length: total - curDays.length }, (_, i) => {
      const nd = i + 1
      const tempDate = `${nextY}-${nextM}-${nd}`
      curDays.push({ y: nextY, m: nextM, d: nd, value: addZero(nd), disabled: true, today: tempDate === nowDate })
    })

    days.value = curDays
    curDate.value = { y, m, d }
  }
  /**
   * 展示所有时间
   */
  const days = ref<DayItem[]>([])
  /**
   * 箭头处理
   */
  const handleYearMonth = (y: number, m: number, d: number) => {
    const totalDay = getMonthDay(y, m)
    d > totalDay && (d = totalDay)
    modelValue.value = `${y}-${addZero(m)}-${addZero(d)}`
    nextTick(initData)
  }
  /**
   * 点击双向箭头-年
   */
  const onYearItem = (calc: 1 | -1) => {
    const { y, m, d } = curDate.value
    const ny = y + calc
    handleYearMonth(ny, m, d)
  }

  /**
   * 点击单向箭头-月
   */
  const onMonthItem = (calc: 1 | -1) => {
    let { y, m, d } = curDate.value
    m += calc
    d = +d
    if (m > 12) {
      m = 1
      y++
    } else if (m === 0) {
      m = 12
      y--
    }
    handleYearMonth(y, m, d)
  }

  /**
   * 点击天数-天
   */
  const onDayItem = (item: DayItem, index: number) => {
    if (item.selected) return
    modelValue.value = `${item.y}-${addZero(item.m)}-${addZero(item.d)}`
    props.closable && (visible.value = false)
    if (item.disabled) {
      nextTick(initData)
      return
    }
    days.value.forEach((day, i) => {
      day.selected = i === index
    })
  }

  watch(modelValue, value => {
    emit('change', value)
  })

  return { getStyle, week, dateInfo, days, onYearItem, onMonthItem, onDayItem, initData }
}
