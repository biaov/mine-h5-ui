// 列表项
export interface BtnListItem {
  type: string
  icon: string
  text: string
}

// 页面状态值
export interface WebStatus extends Record<string, boolean> {
  isStart: boolean
  isSuspend: boolean
  isReset: boolean
}
