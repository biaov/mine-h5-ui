import { By } from 'selenium-webdriver'
import type { WebDriver } from 'selenium-webdriver'
import { sleepTime } from '../config'
import { findAll } from '../utils'

export default async (driver: WebDriver) => {
  const selector = By.css('.side-bar')
  const elem = await findAll(selector, driver)
  await driver.sleep(sleepTime)
  await driver.actions({ async: true }).move({ origin: elem }).click().perform() // 点击
}
