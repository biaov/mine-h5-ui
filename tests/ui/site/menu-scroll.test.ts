// import { By, until } from 'selenium-webdriver'
// import type { WebDriver } from 'selenium-webdriver'
// import { useScroll } from '../utils'
// import { sleepTime } from '../config'

/**
 * 菜单滚动
 */
// export default async (driver: WebDriver) => {
//   const catalogSelector = By.css('.side-bar')
//   await driver.wait(until.elementLocated(catalogSelector), 6000) // 等待最多 10 秒
//   const sidebar = await driver.findElement(catalogSelector)
//   await driver.sleep(sleepTime)
//   await useScroll({ driver, elem: sidebar })
//   await driver.sleep(sleepTime)
//   await useScroll({ direction: 'up', driver, elem: sidebar })
// }

export default async () => {
  return 111
}
