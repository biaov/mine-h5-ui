const { writeFileSync, existsSync, unlinkSync } = require('fs')
const { resolve } = require('path')
const package = require('../package.json')
const needSave = ['vue', 'html2canvas']
const newDependencies = {} // 新开发依赖
// 添加需要的依赖
Object.entries(package.dependencies).forEach(([key, value]) => {
  needSave.includes(key) && (newDependencies[key] = value)
})
package.dependencies = newDependencies
package.devDependencies = {} // 清理多余的依赖
package.scripts = {}
const prePackagePath = resolve(__dirname, `../package.json`) // 新路径
existsSync(prePackagePath) && unlinkSync(prePackagePath) // 删除旧的
writeFileSync(prePackagePath, JSON.stringify(package, null, 2)) // 写入最新的
