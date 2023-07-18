const { writeFileSync, existsSync, unlinkSync, copyFileSync } = require('fs')
const { resolve } = require('path')
const package = require('../package.json')
const needSave = ['vue', 'html2canvas']
/**
 * 新开发依赖
 */
const newDependencies = {}

/**
 * 添加需要的依赖
 */
Object.entries(package.dependencies).forEach(([key, value]) => {
  needSave.includes(key) && (newDependencies[key] = value)
})

package.dependencies = newDependencies
/**
 * 清理多余的依赖
 */
package.devDependencies = {}
package.scripts = {}

/**
 * 外层目录
 */
const outDir = `../dist/packages`

/**
 * 修改文件-新路径
 */
const prePackagePath = resolve(__dirname, `${outDir}/package.json`)
/**
 * 删除旧的
 */
existsSync(prePackagePath) && unlinkSync(prePackagePath)
/**
 * 写入最新的
 */
writeFileSync(prePackagePath, JSON.stringify(package, null, 2))

/**
 * 复制文件- 需要复制的文件
 */
const copyFiles = ['README.md', 'LICENSE']
copyFiles.forEach(fileName => {
  const include = resolve(__dirname, `../${fileName}`)
  const output = resolve(__dirname, `${outDir}/${fileName}`)
  /**
   * 复制文件
   */
  copyFileSync(include, output)
})
