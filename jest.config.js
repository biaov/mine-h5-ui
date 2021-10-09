// 配置
const config = {
  moduleFileExtensions: ["vue", "json", "js", "ts"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest", // vue 文件用 vue-jest 转换
    "^.+\\.ts$": "ts-jest" // ts 文件用 ts-jest 转换
  },
  testMatch: ["**/tests/unit/*.spec.ts"], // 匹配 tests/unit 目录下的 .ts 文件
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/packages/$1", // 配置 jest 下 ~ -> packages,
    "^@/(.*)$": "<rootDir>/examples/$1" // 配置 jest 下 @ -> examples
  },
  verbose: true, // 显示冗余代码，true：显示测试用例，false：显示 console.log
  bail: true, // 经历几次失败后停止运行测试
  displayName: {
    name: "MINE-H5-UI",
    color: "green"
  }
};
module.exports = config;
