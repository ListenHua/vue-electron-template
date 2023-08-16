const static = require('node-static')
const http = require('http')
const path = require('path')

const distFolder = new static.Server(path.join(__dirname, './html'))

const server = http.createServer(function (req, res) {
  distFolder.serve(req, res, (err) => {
    if (err !== null && err.status === 404) {
      distFolder.serveFile('/index.html', 200, {}, req, res)
    }
  })
})

server.listen(process.env.ELECTRON_WEB_SERVER_PORT | 4567)
