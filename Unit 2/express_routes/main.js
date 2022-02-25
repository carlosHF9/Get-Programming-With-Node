const express = require('express'),
homeController = require('./controllers/homeController'),
port = 3000,
app = express()

app.use(
    express.urlencoded({
        extended: false
    })
)

app.use( express.json())



app.get('/items/:vegetable', homeController.sendReqParam)

app.get('/', (req, res) => {
    
    res.send("<h1>GET SUCESSFUL</h1>")


})

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send("POST SUCESSFUL")

    
})

app.post('/user', (req, res) => {

    console.log(req.body)
})

app.post('/sign_up', () => {})



app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})

