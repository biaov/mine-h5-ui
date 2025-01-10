import { By, until } from 'selenium-webdriver'
import type { Actions, WebElement, WebDriver } from 'selenium-webdriver'
import type { OptionApi, USEScrollOption } from './types'

/**
 * 过滤 actions
 */
export const filterActions = (driver: WebDriver) => driver.actions() as Actions & { scroll: (sx: number, sy: number, ex: number, ey: number, elem?: WebElement) => Actions }
/**
 * 滚动
 */
export const useScroll = async ({ direction = 'down', length = 10, driver, elem }: USEScrollOption = {}) => {
  if (!driver) return
  if (!elem) return
  const actions = filterActions(driver)
  return await Promise.all(
    Array.from({ length }, async (_, i) => {
      const reverse = direction === 'down' ? 1 : -1
      actions.scroll(0, 0, 0, reverse * i * 100, elem).perform()
      await driver.sleep(500)
    })
  )
}
/**
 * 错误日志
 */
export const errorLog = (text: string) => {
  const red = '\x1b[31m' // 定义红色文本的 ANSI 转义码
  const reset = '\x1b[0m' // 重置颜色
  console.log(red + text + reset) // 打印日志
}
/**
 * 查找节点
 */
export const findAll = async <T = WebElement>(selector: By | By[], driver: WebDriver, api: OptionApi = 'findElement') => {
  if (Array.isArray(selector)) {
    await Promise.all(selector.map(elem => driver.wait(until.elementLocated(elem), 6000)))
    return (await Promise.all(selector.map(elem => driver[api](elem)))) as T
  } else {
    await driver.wait(until.elementLocated(selector), 6000)
    return (await driver[api](selector)) as T
  }
}

/**
 * 依次执行异步操作
 */

export const useTaskQueue = <T>(tasks: T[], busFn: (value: T) => Promise<void>) =>
  tasks.reduce(
    (prev, item) =>
      prev.then(async () => {
        await busFn(item)
      }),
    Promise.resolve()
  )
