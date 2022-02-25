const statusCode = require('http-status-codes')

exports.logErrors = (error, req, res, next) => {

    console.log(error.stack)
    next(error)
}


exports.respondNoResourceFound = (req, res) => {
    let errorCode = statusCode.NOT_FOUND
    res.status(errorCode)
    res.sendFile(`./public/html/${errorCode}.html`, {root: './'})
}




exports.responseInternalError = (error, req, res, next) => {
    let errorCode = statusCode.INTERNAL_SERVER_ERROR
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode)
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`)
}
