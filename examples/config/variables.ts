import pkg from '../../package.json'

/**
 * 基础路由
 */
export const baseRouter = '/v2/'

/**
 * Github 地址
 */
export const githubLink = pkg.repository.url

/**
 * 组件库信息
 */
export const libraryInfo = {
  name: pkg.name,
  description: pkg.description
}

/**
 * 其它展示文档
 */
export const otherDocLink = 'https://wordpress.biaov.cn/mine-h5-ui/'
