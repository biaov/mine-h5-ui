import { Builder, Browser } from 'selenium-webdriver'
import Chrome from 'selenium-webdriver/chrome.js'

/**
 * chrome 驱动路径
 * 注意：此版本得与本地安装的 chrome 浏览器版本一致
 */
const chromeDriverPath = 'C:/Users/Administrator/.cache/selenium/chromedriver/win64/142.0.7444.135/chromedriver.exe'
const options = new Chrome.Options()
options.addArguments('--ignore-certificate-errors')
options.addArguments('--ignore-ssl-errors')

// 启动服务
export default () => {
  const builder = new Builder().forBrowser(Browser.CHROME)
  import.meta.env.VITE_CHROME_DRIVER_PATH && builder.setChromeService(new Chrome.ServiceBuilder(chromeDriverPath)).setChromeOptions(options)
  return builder.build()
}
