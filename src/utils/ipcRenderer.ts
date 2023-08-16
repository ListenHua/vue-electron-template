import type { IpcRendererEvent } from 'electron'

/**
 * 监听`channel`, 当新消息到达，将通过`listener(event, args...)`调用`listener`。
 */
export function on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) {
  window.ipcRenderer && window.ipcRenderer.on(channel, listener)
}

/**
 * 通过`channel`向`electron`进程发送异步消息
 */
export function send(channel: string, ...args: any[]) {
  window.ipcRenderer && window.ipcRenderer.send(channel, ...args)
}
