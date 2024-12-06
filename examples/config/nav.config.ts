import { transformToRoute } from './transform'
import routesJson from './routes.json'

const navConfig: Record<string, ReturnType<typeof transformToRoute>> = {}
Object.entries(routesJson).forEach(([key, value]) => {
  navConfig[key] = transformToRoute(value)
})

export const componentConfig = navConfig['组件']
export default navConfig
