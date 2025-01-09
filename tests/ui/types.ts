import type { WebElement, WebDriver } from 'selenium-webdriver'

/**
 * findAll 返回类型
 */
export type findAllReturn<T> = T extends 'findElement' ? WebElement : T extends 'findElements' ? WebElement[] : never

/**
 * findAll 参数 api 类型
 */
export type OptionApi = 'findElement' | 'findElements'

export interface USEScrollOption {
  direction?: 'down' | 'up'
  length?: number
  driver?: WebDriver
  elem?: WebElement
}
