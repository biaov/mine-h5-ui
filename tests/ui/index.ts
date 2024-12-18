import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import { loadEnv } from 'vite'

const env = loadEnv('development', './')

const driver = await new Builder().forBrowser(Browser.CHROME).build()

try {
  await driver.get(`http://127.0.0.1:${env.VITE_PORT}/`)

  const elementSelector = By.css('.btns li:first-child') // 替换为实际的选择器
  await driver.wait(until.elementLocated(elementSelector), 6000) // 等待最多 10 秒

  await driver.findElement(elementSelector).click()
} catch (error) {
  console.log(error)
} finally {
  // await driver.quit()
}
