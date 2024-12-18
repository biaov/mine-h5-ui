import { ref } from 'vue'
import { useRoute } from 'vue-router'
import QRcode from 'qrcode'
import {  githubLink } from '@/config/package'
import GithubIcon from '@/assets/icon-github.svg'
import QrcodeIcon from '@/assets/icon-qrcode.svg'

export const useListData = () => {
  /**
   * 导航列表
   */
  const navList = ref([
    {
      name: 'introduce',
      text: '指南'
    },
    {
      name: 'button',
      text: '组件'
    },
    {
      href: githubLink,
      url: GithubIcon,
      text: 'Github'
    },
    {
      url: QrcodeIcon,
      text: 'qrcode'
    }
  ])

  QRcode.toDataURL(globalThis.location.origin + import.meta.env.VITE_BASE_ROUTER).then(data => {
    navList.value[3].href = data
  })

  /**
   * 版本列表
   */
  const versionList = [
    {
      href: '/',
      version: 'v1.x'
    },
    {
      href: '/v2',
      version: 'v2.x'
    }
  ]
  const { path } = useRoute()
  /**
   * 是否是首页
   */
  const isHome = Object.freeze(path === '/')

  return { navList, versionList, isHome }
}
