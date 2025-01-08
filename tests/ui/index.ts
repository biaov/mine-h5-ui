// import { Builder, Browser, By, until } from 'selenium-webdriver'
// import type { WebDriver } from 'selenium-webdriver'
// import { loadEnv } from 'vite'
// import { errorLog, loadDirTest } from './utils'
// import { sleepTime } from './config'

import * as allTest from './tests'
// const env = loadEnv('development', './')
// const driver = await new Builder().forBrowser(Browser.CHROME).build()
// const dirs = ['site', 'components']
// const testGroup = dirs.map(dir => loadDirTest(dir)).flat()
console.log(allTest)

// // 启动服务
// const server = `http://127.0.0.1:${env.VITE_PORT}/` // 服务地址
// try {
//   await driver.get(server)
// } catch {
//   errorLog(`请检查 ${server} 是否启动`)
//   await driver.quit()
// }

// // 执行操作
// try {
//   const elementSelector = By.css('.btns li:first-child') // 替换为实际的选择器
//   await driver.wait(until.elementLocated(elementSelector), 6000) // 等待最多 10 秒
//   await driver.sleep(sleepTime)
//   await driver.findElement(elementSelector).click()
//   await Promise.all(
//     testGroup.map(async item => {
//       await item.default(driver)
//       await driver.sleep(sleepTime)
//       return true
//     })
//   )
// } catch (error) {
//   console.log(error)
// }
