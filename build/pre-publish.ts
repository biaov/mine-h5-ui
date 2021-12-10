const { readFileSync, writeFileSync, existsSync, unlinkSync } = require("fs");
const { resolve } = require("path");
const package = require("../package.json");
const needSave = ["vue", "html2canvas"];
const newDependencies = {}; // 新开发依赖
// 添加需要的依赖
Object.entries(package.dependencies).forEach(([key, value]) => {
  needSave.includes(key) && (newDependencies[key] = value);
});
package.dependencies = newDependencies;
package.devDependencies = {}; // 清理多余的依赖
package.scripts = {};
let filename = ""; // 文件名
switch (process.env.NODE_PRE) {
  case "github":
    filename = "-github";
    package.name = `@biaov/${package.name}`;
    break;
}
const prePackagePath = resolve(__dirname, `../pre-publish${filename}.json`);
existsSync(prePackagePath) && unlinkSync(prePackagePath);
writeFileSync(prePackagePath, JSON.stringify(package, null, 2));
