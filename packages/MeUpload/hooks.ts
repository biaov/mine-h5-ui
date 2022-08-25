import { ref, watch } from 'vue'
import Validator from '../MeAPI/validator'
import { Props, ListDataItem, Emits } from './types'

// 操作
export const useHandler = (props: Readonly<Props>, emit: Emits) => {
  const listData = ref<ListDataItem[]>(props.fileList) // 列表数据
  const curNum = ref(1) // 全屏预览图片当前索引
  const isPreview = ref(false) // 预览图片显示状态
  let timer: NodeJS.Timeout | null = null // 定时器

  // 点击删除按钮
  const onDelete = (e: Event, item: ListDataItem) => {
    e.stopPropagation()

    // 判断是否允许删除文件
    if (!props.disabled && props.beforeDelete(item) !== false) {
      const index = listData.value.findIndex(({ id }) => id === item.id) ?? 0 // 索引
      listData.value.splice(index, 1) // 删除
      emit('update:fileList', listData.value)
      emit('update:file-list', listData.value)
      emit('change', listData.value)
    }
  }

  // 开启轮播
  const startTimer = () => {
    // 判断数组是否大于1
    if (listData.value.length > 1) {
      timer = setInterval(() => {
        curNum.value++

        // 改变当前图片索引
        if (curNum.value > listData.value.length) {
          curNum.value = 1
        }
      }, 3000)
    }
  }

  // 点击预览图片
  const closePreview = () => {
    clearInterval(timer as NodeJS.Timeout)
    isPreview.value = false
  }

  // 点击上传图片按钮
  const onChange = (e: Event) => {
    const files = Object.values((e.target as HTMLInputElement).files as FileList).slice(0, props.maxCount) // 获取不超过maxCount文件

    // 判断是否允许读取文件
    if (props.beforeRead(files) !== false) {
      // 循环遍历添加数据
      const arr: File[] = []
      files.forEach(elem => {
        // 判断大小是否小于或等于maxSize
        if (elem.size <= props.maxSize && Validator.validImgs.test(elem.name)) {
          const len = listData.value.length // 数组长度
          const id = len === 0 ? 1 : listData.value[len - 1].id + 1 // 获取id
          const url = window.URL.createObjectURL(elem) // 创建blob预览图片地址
          listData.value.push({ id, url }) // 添加进数组
          arr.push(elem)
        }
      })

      // 符合规则的图片数组
      if (arr.length > 0) {
        props.afterRead(arr)
        emit('change', listData.value)
      }
    }
  }

  // 点击预览图片
  const onPreview = ({ id }: ListDataItem) => {
    // 判断是否允许预览
    if (!props.disabled && props.preview) {
      curNum.value = id
      isPreview.value = true // 打开图片预览
      startTimer() // 开启自动轮播图
    }
  }

  // 监听列表数据
  watch(
    () => props.fileList,
    value => {
      listData.value = value
    },
    {
      deep: true
    }
  )

  return { listData, curNum, isPreview, onDelete, closePreview, onChange, onPreview }
}
