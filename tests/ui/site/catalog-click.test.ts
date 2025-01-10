import { By } from 'selenium-webdriver'
import type { WebDriver, WebElement } from 'selenium-webdriver'
import { findAll, useTaskQueue } from '../utils'

/**
 * 目录点击
 */
export default async (driver: WebDriver) => {
  const selector = [By.css('.side-bar .list-in>li'), By.css('.side-bar .tit-ct.in')]
  const elems = await findAll<WebElement[][]>(selector, driver, 'findElements')
  await useTaskQueue(elems, async elem => {
    await useTaskQueue(elem, async el => {
      await driver.actions({ async: true }).move({ origin: el }).click().perform()
      await driver.sleep(100)
    })
  })
}
