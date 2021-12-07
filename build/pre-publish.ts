const { readFileSync, writeFileSync, existsSync, unlinkSync } = require("fs");
const { resolve } = require("path");
const package = require("../package.json");
const needSave = ["vue", "html2canvas"];
const newDependencies = {};
Object.entries(package.dependencies).forEach(([key, value]) => {
  needSave.includes(key) && (newDependencies[key] = value);
});
package.dependencies = newDependencies;
package.devDependencies = {};
package.scripts = {};
const prePackagePath = resolve(__dirname, "../pre-publish-package.json");
existsSync(prePackagePath) && unlinkSync(prePackagePath);
writeFileSync(prePackagePath, JSON.stringify(package));
