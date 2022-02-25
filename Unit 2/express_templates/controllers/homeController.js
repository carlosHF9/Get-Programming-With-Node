

exports.respondWithSmartphone = (req, res) => {

    let smartphone = req.params.smartphone
    res.render('index', {smartphone: smartphone})
}
