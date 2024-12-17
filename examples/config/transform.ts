/**
 * 标题转路径
 */
const titleToPath = (title: string) => {
  const [name] = title.split(' ')
  return name[0].toLowerCase() + name.slice(1)
}

/**
 * 一级转换
 */
const firstToRoute = (data: string[]) =>
  data.map(value => {
    const [path, title] = value.split(' ')
    return {
      path,
      name: path,
      meta: {
        title
      }
    }
  })

/**
 * 二级转换
 */
export const secondToRoute = (data: Record<string, string[]>) =>
  Object.entries(data).map(([key, value]) => {
    const items = value.map(title => {
      const path = titleToPath(title)
      return {
        meta: {
          title
        },
        path,
        name: path
      }
    })
    return {
      meta: {
        title: key
      },
      items
    }
  })

/**
 * 数组转路由
 */
export const transformToRoute = (data: Record<string, string[]> | string[]) => (Array.isArray(data) ? firstToRoute(data) : secondToRoute(data))
