const httpStatus = require('http-status-codes'),
htmlContentType = {
    "Content-type": "text/html"
},
routes = {
    "GET": {
        "/contact": (req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-type" : "text/html"
            })

            res.write('<h1>Contact</h1>')
            res.end()
        }
    },
    "POST": {}
}


exports.handler = (req, res) => {

    try {
        if(routes[req.method][req.url]) {
            routes[req.method][req.url](req, res)
        }

        else {
            res.writeHead(httpStatus.NOT_FOUND, {
                "Content-type": "text/html"
            })

            res.write('<h1>Not found</h1>')
            res.end()
        }
    }

    catch(ex) {
        console.log(`Error: ${ex}`)
    }
}

exports.get = (url, action) => {
    routes["GET"][url] = action

}

exports.post = (url, action) => {
    routes["POST"][url] = action

}

