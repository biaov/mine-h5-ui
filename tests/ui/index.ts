import { Builder, Browser, By, until } from 'selenium-webdriver'
import { loadEnv } from 'vite'
import { errorLog } from './utils'
import { sleepTime } from './config'
import * as tests from './tests'

const env = loadEnv('development', './')
const server = `http://127.0.0.1:${env.VITE_PORT}/` // 服务地址
// C:\Users\Administrator\.cache\selenium\chromedriver\win64
const driver = await new Builder().forBrowser(Browser.CHROME, '131.0.6778.205').build() // 启动服务

try {
  await driver.get(server)
} catch {
  console.log()
  errorLog(`请检查 ${server} 是否启动`)
  console.log()
  await driver.quit()
}

// 执行操作
try {
  const elementSelector = By.css('.btns li:first-child') // 替换为实际的选择器
  await driver.wait(until.elementLocated(elementSelector), 6000) // 等待最多 10 秒
  await driver.sleep(sleepTime)
  await driver.findElement(elementSelector).click()
  Object.values(tests).reduce(
    (prev, item) =>
      prev.then(async () => {
        await item(driver)
        await driver.sleep(sleepTime)
      }),
    Promise.resolve()
  )
} catch (error) {
  console.log(error)
}
