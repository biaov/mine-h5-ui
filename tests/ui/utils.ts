import type { Actions, WebElement, WebDriver } from 'selenium-webdriver'

interface USEScrollOption {
  direction?: 'down' | 'up'
  length?: number
  driver?: WebDriver
  elem?: WebElement
}

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
 * 加载测试内容
 */
export const loadDirTest = (dir: string) => {
  // const result = import.meta.glob(`./${dir}/**.test.ts`, { eager: true }) as Record<string, { default: (driver: WebDriver) => Promise<void> }>
  // return Object.values(result)
}
