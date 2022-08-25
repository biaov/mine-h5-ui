import { Random } from 'mockjs'
import { ChildListItem } from './types'

/**
 * 生成数组
 * @param { number } [min=6] 最小长度
 * @param { number } [max=6] 最大长度
 * @returns { ChildListItem[] } 生成的文本数组
 */
export const createArr = (min = 6, max = 14): ChildListItem[] => Array.from({ length: 100 }, () => ({ text: Random.cword(min, max) }))
