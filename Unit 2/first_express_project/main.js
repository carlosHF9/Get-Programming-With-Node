const port = 3000,
express = require('express'),
app = express()

app.get('*', (req, res) => {
    res.send("hello world")
    console.log(req.params)
    console.log(req.url)
    console.log(req.body)
    console.log(req.query)
})
.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})


