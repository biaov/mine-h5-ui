// import { By, until } from 'selenium-webdriver'
// import type { WebDriver } from 'selenium-webdriver'
// import { sleepTime } from '../config'

/**
 * 菜单滚动
 */
// export default async (driver: WebDriver) => {
//   const catalogSelector = By.css('.side-bar .list-ct>li')
//   await driver.wait(until.elementLocated(catalogSelector), 6000) // 等待最多 10 秒
//   const sidebarList = await driver.findElements(catalogSelector)
//   console.log(sidebarList.length)
//   await Promise.all(
//     sidebarList.map(async elem => {
//       const actions = driver.actions({ async: true })
//       await actions.move({ origin: elem }).click().perform()
//       await driver.sleep(sleepTime)
//     })
//   )
// }


export default async () => {
  return 222
}