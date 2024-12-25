import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import { loadEnv } from 'vite'

const sleepTime = 2000
const env = loadEnv('development', './')

const driver = await new Builder().forBrowser(Browser.CHROME).build()

const catalogClickTest = async () => {
  const catalogSelector = By.css('.side-bar')
  await driver.wait(until.elementLocated(catalogSelector), 6000) // 等待最多 10 秒
  const sidebar = await driver.findElement(catalogSelector)
  await driver.sleep(sleepTime)
  // driver.actions().scroll(0, 0, 0, 200, sidebar).perform()
  await driver.actions().sendKeys(Key.PAGE_DOWN).perform()
}

try {
  await driver.get(`http://127.0.0.1:${env.VITE_PORT}/`)

  const elementSelector = By.css('.btns li:first-child') // 替换为实际的选择器
  await driver.wait(until.elementLocated(elementSelector), 6000) // 等待最多 10 秒
  await driver.sleep(sleepTime)
  await driver.findElement(elementSelector).click()
  await catalogClickTest()
} catch (error) {
  console.log(error)
} finally {
  // await driver.quit()
}
