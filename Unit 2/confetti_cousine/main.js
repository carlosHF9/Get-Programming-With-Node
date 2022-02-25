



const express = require('express'),
app = express(),
homeController = require('./controllers/homeController'),
errorController = require('./controllers/errorController'),
httpStatus = require('http-status-codes'),
layouts = require('express-ejs-layouts'),
subscribersController = require('./controllers/subscribersController'),
usersController = require('./controllers/usersController'),
user = require('./models/user')



app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs')
app.use(layouts)

app.use(express.static('public'))

app.set("port", process.env.PORT || 3000)


app.get('/', (req, res) => {
    console.log(req.query)
    res.send("Welcome to Confetti Cuisine!")
})

app.get('/users', usersController.index)
app.get('/courses', homeController.showCourses)

app.get('/contact', subscribersController.getContactPage)
app.post('/subscriber', subscribersController.saveSubscriber)
app.get('/subscriber', subscribersController.getAllSubscribers)




app.use(errorController.pageNotFoundError)
app.use(errorController.internalServerError)



app.listen(app.get('port'), () => {
    console.log(`The server is running on port ${app.get('port')}`)
})


user.find({}).then( res => console.log(res))









