import { By, until, Browser, Builder } from 'selenium-webdriver'
import { loadEnv } from 'vite'
import { errorLog } from './utils'
import { sleepTime } from './config'
import * as tests from './tests'
import server from './server'
import { useTaskQueue } from './utils'

/**
 * 环境变量
 */
const env = loadEnv('development', './')

/**
 * 服务地址
 */
const testPath = `http://127.0.0.1:${env.VITE_PORT}/`

/**
 * 启动服务
 */
const driver = await new Builder().forBrowser(Browser.CHROME).build()

try {
  await driver.get(testPath)
} catch {
  console.log()
  errorLog(`请检查 ${testPath} 是否启动`)
  console.log()
  await driver.quit()
}

// 执行操作
try {
  const elementSelector = By.css('.btns li:first-child') // 选择器
  await driver.wait(until.elementLocated(elementSelector), 6000) // 等待时间, 最多 10 秒
  await driver.sleep(sleepTime)
  await driver.findElement(elementSelector).click()
  await useTaskQueue(Object.values(tests), async item => {
    await item(driver)
    await driver.sleep(sleepTime)
  })
  // Object.values(tests).reduce(
  //   (prev, item) =>
  //     prev.then(async () => {
  //       await item(driver)
  //       await driver.sleep(sleepTime)
  //     }),
  //   Promise.resolve()
  // )
} catch (error) {
  console.log(error)
}
