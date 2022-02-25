const port = 3000,
express = require('express'),
homeController = require('./controllers/homeController'),
errorControler = require('./controllers/errorController'),
ejsLayouts = require('express-ejs-layouts'),
app = express()
app.use(ejsLayouts)
app.use(errorControler.logErrors)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.set('port', process.env.PORT || 3000)


app.get('/smartphone/:smartphone', homeController.respondWithSmartphone)


app.use(errorControler.respondNoResourceFound)
app.use(errorControler.responseInternalError)

app.listen(app.get('port'))



console.log(`The server is listening on port: ${app.get('port')}`)