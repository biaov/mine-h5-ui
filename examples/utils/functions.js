/**
 * 获取节点里的文本
 * @param {Array} arr - 节点数组
 * @returns {String} html - 返回节点数组
 */
const GetNodeText = arr => {
  if (!Array.isArray(arr)) {
    throw new Error(`${JSON.stringify(arr)} is not Array`)
  } else {
    /**
     * 声明需要获取到的字符串变量
     */
    let html = ''
    /**
     * 遍历节点
     */
    const ErgodicNode = arr => {
      /**
       * 开始遍历
       */
      arr.forEach(elem => {
        if (elem.children != undefined) {
          ErgodicNode(elem.children)
        } else {
          html += elem.text
        }
      })
    }
    /**
     * 第一次执行
     */
    ErgodicNode(arr)
    return html
  }
}

export default {
  /**
   * 获取节点里的文本
   */
  GetNodeText
}
