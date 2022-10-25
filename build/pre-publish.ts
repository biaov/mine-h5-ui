const { writeFileSync, existsSync, unlinkSync, copyFileSync } = require('fs')
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

// 单独处理逻辑
switch (process.env.NODE_PRE) {
  case 'github':
    package.name = `@biaov/${package.name}`
    package.publishConfig = { registry: 'https://npm.pkg.github.com/' }
    break
}

const outDir = `../dist/packages` // 外层目录

// 修改文件
const prePackagePath = resolve(__dirname, `${outDir}/package.json`) // 新路径
existsSync(prePackagePath) && unlinkSync(prePackagePath) // 删除旧的
writeFileSync(prePackagePath, JSON.stringify(package, null, 2)) // 写入最新的

// 复制文件
const copyFiles = ['README.md', 'LICENSE'] // 需要复制的文件
copyFiles.forEach(fileName => {
  const include = resolve(__dirname, `../${fileName}`)
  const output = resolve(__dirname, `${outDir}/${fileName}`)
  copyFileSync(include, output) // 复制文件
})
