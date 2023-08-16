const { app, BrowserWindow } = require('electron')
const path = require('path')

//加载环境配置
require('dotenv').config({
  path: app.isPackaged
    ? path.resolve(__dirname, '../', '.env.production')
    : path.resolve(__dirname, '../', '.env.development'),
})

//生产环境的自启动server模块
if (app.isPackaged) {
  require('./serve')
}

//加载ipc通讯模块
require('./ipc')

//app就绪事件
app.whenReady().then(() => {
  const win = new BrowserWindow({
    frame: !app.isPackaged,
    fullscreen: true,
    alwaysOnTop: app.isPackaged,
    movable: !app.isPackaged,
    minimizable: !app.isPackaged,
    maximizable: !app.isPackaged,
    closable: !app.isPackaged,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: false,
    },
  })

  win.menuBarVisible = false

  //窗口关闭时，退出应用程序
  win.on('closed', () => {
    app.exit()
  })

  win.loadURL('http://127.0.0.1:' + process.env.SERVER_PORT + process.env.ELECTRON_INDEX_PATH)
})

//所有窗口被关闭事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
