import { ref, watch } from 'vue'
import Validator from '../MeAPI/validator'
import type { Props, ListDataItem, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(props.fileList)
  /**
   * 全屏预览图片当前索引
   */
  const curNum = ref(1)
  /**
   * 预览图片显示状态
   */
  const isPreview = ref(false)
  /**
   * 定时器
   */
  let timer: NodeJS.Timeout | null = null

  /**
   * 点击删除按钮
   */
  const onDelete = (e: Event, item: ListDataItem) => {
    e.stopPropagation()

    /**
     * 判断是否允许删除文件
     */
    if (!props.disabled && props.beforeDelete(item) !== false) {
      /**
       * 索引
       */
      const index = listData.value.findIndex(({ id }) => id === item.id) ?? 0
      /**
       * 删除
       */
      listData.value.splice(index, 1)
      emit('update:fileList', listData.value)
      emit('update:file-list', listData.value)
      emit('change', listData.value)
    }
  }

  /**
   * 开启轮播
   */
  const startTimer = () => {
    /**
     * 判断数组是否大于 1
     */
    if (listData.value.length > 1) {
      timer = setInterval(() => {
        curNum.value++

        /**
         * 改变当前图片索引
         */
        if (curNum.value > listData.value.length) {
          curNum.value = 1
        }
      }, 3000)
    }
  }

  /**
   * 点击预览图片
   */
  const closePreview = () => {
    clearInterval(timer as NodeJS.Timeout)
    isPreview.value = false
  }

  /**
   * 点击上传图片按钮
   */
  const onChange = (e: Event) => {
    /**
     * 获取不超过 maxCount 文件
     */
    const files = Object.values((e.target as HTMLInputElement).files as FileList).slice(0, props.maxCount)

    /**
     * 判断是否允许读取文件
     */
    if (props.beforeRead(files) !== false) {
      /**
       * 循环遍历添加数据
       */
      const arr: File[] = []
      files.forEach(elem => {
        /**
         * 判断大小是否小于或等于 maxSize
         */
        if (elem.size <= props.maxSize && Validator.validImgs.test(elem.name)) {
          /**
           * 数组长度
           */
          const len = listData.value.length
          /**
           * 获取 id
           */
          const id = len === 0 ? 1 : listData.value[len - 1].id + 1
          /**
           * 创建 blob 预览图片地址
           */
          const url = window.URL.createObjectURL(elem)
          /**
           * 添加进数组
           */
          listData.value.push({ id, url })
          arr.push(elem)
        }
      })

      /**
       * 符合规则的图片数组
       */
      if (arr.length > 0) {
        props.afterRead(arr)
        emit('change', listData.value)
      }
    }
  }

  /**
   * 点击预览图片
   */
  const onPreview = ({ id }: ListDataItem) => {
    /**
     * 判断是否允许预览
     */
    if (!props.disabled && props.preview) {
      curNum.value = id
      /**
       * 打开图片预览
       */
      isPreview.value = true
      /**
       * 开启自动轮播图
       */
      startTimer()
    }
  }

  /**
   * 监听列表数据
   */
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
