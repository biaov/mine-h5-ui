import type { ChildListItem } from './types'

/**
 * 随机字符
 */
const WORD_CHARS = '一二三四五六七八九十春夏秋冬风雨雷电山川河海花鸟鱼虫'

/**
 * 生成随机词
 * @param { number } min - 最小长度
 * @param { number } max - 最大长度
 */
const createWord = (min: number, max: number) => {
  const length = Math.floor(Math.random() * (max - min + 1)) + min
  return Array.from({ length }, () => WORD_CHARS[Math.floor(Math.random() * WORD_CHARS.length)]).join('')
}

/**
 * 生成数组
 * @param { number } [min=6] 最小长度
 * @param { number } [max=6] 最大长度
 * @returns { ChildListItem[] } 生成的文本数组
 */
export const createArr = (min = 6, max = 14): ChildListItem[] => Array.from({ length: 100 }, () => ({ text: createWord(min, max) }))
