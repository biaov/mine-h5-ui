import { Builder, Browser } from 'selenium-webdriver'
import Chrome from 'selenium-webdriver/chrome.js'

const chromeDriverPath = 'C:/Users/Administrator/.cache/selenium/chromedriver/win64/133.0.6943.53/chromedriver.exe'
const options = new Chrome.Options()
options.addArguments('--ignore-certificate-errors')
options.addArguments('--ignore-ssl-errors')

export default () => new Builder().forBrowser(Browser.CHROME).setChromeService(new Chrome.ServiceBuilder(chromeDriverPath)).setChromeOptions(options).build() // 启动服务
