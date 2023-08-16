const { exec } = require('child_process')
const path = require('path')
const signale = require('signale')
const rimraf = require('rimraf')

//打包前端
const packageFrontEnd = () => {
  return new Promise((resolve, reject) => {
    exec('npx vue-tsc --noEmit && npx vite build --outDir=electron/html', (error, stdout, stderr) => {
      if (error) {
        return reject(stderr)
      }

      return resolve(stdout)
    })
  })
}

//打包终端
const packageElectron = () => {
  return new Promise((resolve, reject) => {
    exec('npx electron-builder -c="electron.builder.js"', (error, stdout, stderr) => {
      if (error) {
        return reject(stderr)
      }

      return resolve(stdout)
    })
  })
}

//清理打包后的数据
const clearAssetsAfter = () => {
  rimraf(path.join(__dirname, '../electron/html'), (e) => {
    if (e) {
      signale.fatal(new Error(e))
    }
  })
}

const run = async () => {
  signale.start('开始打包前端资源...')

  try {
    await packageFrontEnd()
    signale.success('前端资源打包成功，开始打包终端资源...')
  } catch (e) {
    signale.fatal(new Error(e))
  }

  try {
    await packageElectron()
    signale.success('终端资源打包成功')
  } catch (e) {
    signale.fatal(new Error(e))
  }

  clearAssetsAfter()
}

run()
