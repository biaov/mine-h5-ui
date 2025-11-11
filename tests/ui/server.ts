import { Builder, Browser } from 'selenium-webdriver'
import Chrome from 'selenium-webdriver/chrome.js'

const chromeDriverPath = 'C:/Users/Administrator/.cache/selenium/chromedriver/win64/133.0.6943.53/chromedriver.exe'
const options = new Chrome.Options()
options.addArguments('--ignore-certificate-errors')
options.addArguments('--ignore-ssl-errors')

// 启动服务
export default () => {
  const builder = new Builder().forBrowser(Browser.CHROME)
  import.meta.env.VITE_CHROME_DRIVER_PATH && builder.setChromeService(new Chrome.ServiceBuilder(chromeDriverPath)).setChromeOptions(options)
  return builder.build()
}
