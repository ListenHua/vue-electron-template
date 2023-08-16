/**
 * 创建一个全局定时器
 * @param name 定时器名称
 * @param ms 定时器间隔时间；单位为毫秒
 * @param callback 定时执行的回调函数
 * @param executeNow 是否立即执行一次回调函数；默认为`false`
 */
export function interval(name: string, ms: number, callback: Function, executeNow?: boolean) {
  if (window.intervalTimer[name]) {
    clearInterval(window.intervalTimer[name])
  }

  if (executeNow) {
    callback()
  }

  window.intervalTimer[name] = setInterval(callback, ms)
}

/**
 * 清理设定的定时器
 * *@param name 定时器名称
 */
export function clearInterval(name: string) {
  clearInterval(window.intervalTimer[name])
}
