const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/recipe_db', {useNewUrlParser: true})
exports.db = mongoose.connection
exports.mongoose = mongoose
