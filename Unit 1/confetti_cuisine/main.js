const http = require('http'),
status = require('http-status-codes'),
fs = require('fs'),
contentTypes = require('./contentTypes'),
utils = require('./utils'),
router = require('./router'),
port = 3000,





app = http.createServer(router.handle).listen(port)

console.log(`The server is running on port ${port}`)

router.get('/home', (req, res) => {
    utils.getFile('./views/index.html', res)
})







