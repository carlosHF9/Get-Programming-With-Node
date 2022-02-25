const statusCode = require('http-status-codes')


module.exports = {
    pageNotFoundError: (req, res) => {
        const errorCode = statusCode.NOT_FOUND
        res.status(errorCode)
        res.render("error")
    },

    internalServerError: (req, res) => {
        const errorCode = statusCode.INTERNAL_SERVER_ERROR
        res.status(errorCode)
        res.send(`${errorCode} | Sorry, our application is taking a nap!`)
    }
}




