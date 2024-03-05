import packageJson from '../../package.json'

/**
 * 全局变量
 */
export const useGlobalVars = () => {
  /**
   * Github 地址
   */
  const GithubAddress = 'https://github.com/biaov/mine-h5-ui'

  /**
   * 基本路由
   */
  const BaseRouter = '/v2/'

  /**
   * 组件库信息
   */
  const libraryInfo = {
    name: packageJson.name,
    description: packageJson.description
  }

  return {
    GithubAddress,
    BaseRouter,
    libraryInfo
  }
}

export default useGlobalVars
