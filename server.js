const express = require('express')
const http = require('http')

const app = express()

httpServer = http.Server(app)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 8080)
console.log(__dirname)
