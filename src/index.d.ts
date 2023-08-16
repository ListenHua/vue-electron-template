import type { IpcRenderer } from 'electron'

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
    intervalTimer: any
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {}
}

export {}
