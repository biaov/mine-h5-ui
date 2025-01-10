import type { WebElement, WebDriver } from 'selenium-webdriver'

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
