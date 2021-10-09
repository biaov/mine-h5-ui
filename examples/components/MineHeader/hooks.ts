import { useRoute } from "vue-router";
import { useGlobalVars } from "@/utils/variables";
import GithubIcon from "@/assets/icon-github.png";

export const useListData = () => {
  const { GithubAddress } = useGlobalVars();
  // 导航列表
  const navList = Object.freeze([
    {
      name: "introduce",
      text: "指南"
    },
    {
      name: "button",
      text: "组件"
    },
    {
      href: GithubAddress,
      url: GithubIcon,
      text: "Github"
    }
  ]);
  // 版本列表
  const versionList = Object.freeze([
    {
      href: "https://mineh5ui.biaov.cn/v1",
      version: "v1.x"
    },
    {
      href: "https://mineh5ui.biaov.cn/v2",
      version: "v2.x"
    }
  ]);
  const { path } = useRoute();
  const isHome = Object.freeze(path === "/"); // 是否是首页
  return { navList, versionList, isHome };
};
