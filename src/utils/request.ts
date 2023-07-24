import { baseURL } from '@/config'

const request = (option: UniApp.RequestOptions) => {
  const config = {
    sslVerify: false,
    dataType: 'json',
    timeout: 100000,
    ...option,
    url: baseURL + option.url
  }
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      success: res => {
        const { statusCode, data } = res
        switch (statusCode) {
          case 200:
            resolve(data)
            break
          default:
            reject(res)
            break
        }
      },
      fail: error => {
        reject(error)
      }
    })
  })
}

export const service = {
  get: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'GET' }),
  post: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'POST' }),
  put: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'PUT' }),
  delete: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'DELETE' })
}
