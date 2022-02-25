var http = require('http');
var fs = require('fs')
var statusCodes = require('http-status-codes')
var routes = require('./router')

var port = 3001




const SendErrorResponse = (res) => {
    res.writeHead(statusCodes.NOT_FOUND, {
        "Content-type" : "text/html"
    })

    res.write("<h1>Error 404 not found</h1>")

    res.end()
}

const CustomReadFile = (file_path, res) => {
    console.log(file_path)
    console.log(fs.existsSync(file_path))

    if(fs.existsSync(file_path)) {

        fs.readFile(file_path, (error, data) => {

            if(error) {
                console.log(error)
                SendErrorResponse(res)
            }

            res.write(data)
            res.end()   
            
        })
    }

    else {
        SendErrorResponse(res)
    }


}

// http
//     .createServer((req, res) => {


//         let url = req.url

//         if(url.indexOf('.html') !== -1) {

//             res.writeHead(statusCodes.OK, {
//                 "Content-type": "text/html"
//             })

//             CustomReadFile(`./views${url}`, res)
//         }

//         else if(url.indexOf('.js') !== -1) {
//             res.writeHead(statusCodes.OK, {
//                 "Content-type": "text/javascript"
//             })

//             CustomReadFile(`./public/js${url}`, res)
//         }

//         else if(url.indexOf('.css') !== -1) {
//             res.writeHead(statusCodes.OK, {
//                 "Content-type": "text/css"
//             })

//             CustomReadFile(`./public/css${url}`, res)

//         }

//         else if(url.indexOf('.png') !== -1) {
//             res.writeHead(statusCodes.OK, {
//                 "Content-type": "image/png"
//             })

//             CustomReadFile(`./public/images${url}`, res)
            
//         }

//         else {
//             console.log('not found')
//             SendErrorResponse(res)
//         }
        

    
//     })
//         .listen(port)

// router.get('/home', (req, res) => {
//     res.writeHead(statusCodes.OK, {
//         "Content-type": "text/html"
//     })

//     res.write('<h1>Home page</h1>')
//     res.end()
// })


// http.createServer(router.handler).listen(3001)





http.createServer(routes.handler).listen(3001)

console.log(`The server has started to listen on port number: ${port}`)