const Subscriber = require('../models/subscriber')


module.exports = {
    getAllSubscribers: (req, res, next) => {
        Subscriber.find({})
            .exec()
            .then((subscribers) => {
                res.render('subscribers', {subscribers: subscribers})
            })
            .catch((err) => {
                console.log(err.message)
                return []
            })
            .then(() => {
                console.log('Sucessfully done')
                
            })   
    },

    saveSubscriber: (req, res, next) => {
        console.log('got in here')
        let newSubscriber = new Subscriber({
            name: req.body.name,
            email: req.body.email,
            zipCode: req.body.zipCode
        })
    
        newSubscriber.save()
            .then( () => {
                console.log('Subscriber sucessfully saved')
                res.render('thanks')
            })
            .catch( (err) => {
                console.log(err.message)
                res.send(err)
            })
    },

    getContactPage: (req, res, next) => {
        res.render('contact')
    }

}
