const http = require('http')
const http_status_code = require('http-status-codes')
const port = 3000

const app = http.createServer()


app.on("request", (req, res) => {  

    console.log(req.url)
    console.log(req.headers)
    console.log(req.method)

    var body = []
    req.on("data", (bodyData) => {
        body.push(bodyData)
    })

    req.on("end", () => {
        body = Buffer.concat(body).toString()
        console.log(`Your body is: ${body}`)
    })
    
    res.writeHead(http_status_code.OK, {
        "Content-type": "text/html"
    })



    


    res.end(`<h1>${body}!</h1>`)



})

app.listen(port)
console.log(`The server is listening on port number: ${port}`)