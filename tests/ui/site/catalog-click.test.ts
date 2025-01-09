import { By } from 'selenium-webdriver'
import type { WebDriver } from 'selenium-webdriver'
import { sleepTime } from '../config'
import { findAll } from '../utils'

/**
 * 菜单滚动
 */
export default async (driver: WebDriver) => {
  const catalogSelector = [By.css('.side-bar .list-in>li'), By.css('.side-bar .tit-ct.in')]
  const elems = await findAll<'findElements'>(catalogSelector, driver, 'findElements')
  await Promise.all(
    elems.map(elem =>
      Promise.all(
        elem.map(async el => {
          await driver.actions({ async: true }).move({ origin: el }).click().perform()
          await driver.sleep(sleepTime)
        })
      )
    )
  )
}
