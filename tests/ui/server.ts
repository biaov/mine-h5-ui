import { Builder, Browser } from 'selenium-webdriver'
import Chrome from 'selenium-webdriver/chrome'

const options = new Chrome.Options()
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe' // windows 本地 chrome 路径

export default () => new Builder().forBrowser(Browser.CHROME).setChromeOptions(options.setChromeBinaryPath(chromePath)).build() // 启动服务
