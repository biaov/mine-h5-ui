/**
 * cities item
 */
export interface CityItem {
  code: string
  en: string
  cn: string
}

/**
 * props list
 */
export interface ListItem {
  name: string
  cities: CityItem[]
}

/**
 * emits
 */
export interface Emits {
  (event: 'click', item: CityItem): void
}

/**
 * props
 */
export interface Props {
  /**
   * 自定义国家数据
   */
  list?: ListItem[]
  /**
   * 显示范围数量
   */
  range?: number
}
