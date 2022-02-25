const httpStatus = require('http-status-codes')
const contentTypes = require('./contentTypes')
const utils = require('./utils')

const routes = {
    "GET": {},
    "POST": {}
}




exports.get = (url, action) => {
    routes["GET"][url] = action
}

exports.post = (url, action) => {
    routes["POST"][url] = action
}

exports.handle = (req, res) => {

    try {
        routes[req.method][req.url](req, res)
    }
    catch(ex) {
        res.writeHead(httpStatus.NOT_FOUND, contentTypes.html)
        utils.getFile('./views/error.html', res)
    }
}