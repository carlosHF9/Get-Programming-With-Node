const mongoose = require("mongoose");

const Game = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    developer: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Game", Game)