import { transformToRoute, secondToRoute } from './transform'
import routesJson from './routes.json'

const navConfig: Record<string, ReturnType<typeof transformToRoute>> = {}
Object.entries(routesJson).forEach(([key, value]) => {
  navConfig[key] = transformToRoute(value)
})

export const componentConfig = navConfig['组件'] as ReturnType<typeof secondToRoute>

export default navConfig

// const componentLength = Object.values(componentConfig).reduce((prev, item) => prev + item.items.length, 0)
// console.log(componentLength)
