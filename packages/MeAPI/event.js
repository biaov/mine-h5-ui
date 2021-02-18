/**
 * 绑定事件
 * @param {HTMLDocument} - 节点对象
 * @param {String} event - JS 事件名称，不带 on
 * @param {Function} fn - 回调函数
 * @param {Boolean} [flag=false] - false: 冒泡事件，true: 捕获事件
 * @returns {Object} - 返回的dom节点对象
 */
export default function Bind(dom, event, fn, flag = false) {
  dom.addEventListener(event, fn, flag);
  return dom;
}
