const http = require('http')
const http_status_code = require('http-status-codes')
const port = 3001

const app = http.createServer()

const routes = {
    "/home": "This is your home page",
    "/About": "Carlos Frey is a Software developer",
    "/contact": "Contact: 982750746"
}


app.on("request", async (req, res) => {  

    console.log(`A request has been received`)

    

    res.writeHead(200, {
        "Content-type": "text/html"
    })

    if(routes[req.url]) {


        setTimeout(() => {
            res.end(routes[req.url])
        }, 3000)
    }
    

    setTimeout( () => {
        res.end('<h1>Welcome!</h1>')
    }, 3000)
    


})

app.listen(port)
console.log(`The server is listening on port number: ${port}`)