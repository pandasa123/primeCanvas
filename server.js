const http = require('http')
const path = require('path')
const fs = require('fs')

let server = http.createServer(handleRequest)
server.listen(process.env.PORT || 8080)

// console.log('Server started on port 8080')

function handleRequest (req, res) {
  let pathName = req.url

  if (pathName == '/') {
    pathName = '/index.html'
  }

  let ext = path.extname(pathName)

  let typeExt = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  }
  let contentType = typeExt[ext] || 'text/plain'

  fs.readFile(__dirname + pathName, (err, data) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading ' + pathName)
    }
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
}
