import { By, until } from 'selenium-webdriver'
import type { WebDriver } from 'selenium-webdriver'
import { useScroll, findAll } from '../utils'
import { sleepTime } from '../config'

/**
 * 菜单滚动
 */
export default async (driver: WebDriver) => {
  const catalogSelector = [By.css('.side-bar'), By.css('.doc-view')]
  const elems = await findAll(catalogSelector, driver)
  await driver.sleep(sleepTime)
  await Promise.all(elems.map(elem => useScroll({ driver, elem })))
  await driver.sleep(sleepTime)
  await Promise.all(elems.map(elem => useScroll({ direction: 'up', driver, elem })))
}
