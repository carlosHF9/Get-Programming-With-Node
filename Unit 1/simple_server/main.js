const http = require('http')
const http_status_code = require('http-status-codes')
const port = 3000


// app = http.createServer((request, response) => {
//     console.log("Received an incoming request")

//     console.log(http_status_code.OK)

//     response.writeHead(http_status_code.OK, {
//         "Content-Type": "text/html"
//     })


//     let responseMessage = "<h1>Hello, universe!</h1>"

//     response.write(responseMessage)
//     response.end()
//     console.log(`sent a response: ${responseMessage}`)

// })

// app.listen(port)

// console.log(`The server has started and is listening on port number: ${port}`)

const app = http.createServer( (request, response) => {

    console.log('Uma requisição acabou de ser recebida')
    console.log(request.url)
    response.writeHead(200, {
        "Content-type": "application/json"
    })

    

    const myResponse = `{"name": "Carlos"}`

    response.write(myResponse)
    response.end()
    
})

app.listen(port)