const mongoose = require('mongoose'),
{Schema} = mongoose



const User  = mongoose.Schema({
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
    },
    password: {
        type: String, 
        required: true
    },
    courses: [{type: Schema.Types.ObjectId, ref: "Course"}],
    subscribedAccount: {type: Schema.Types.ObjectId, ref: "Subscriber"},
}, {
    timestamps: true
})


User.virtual('fullName').get( function() {
    return `${this.name.first} ${this.name.last}`
})



module.exports = mongoose.model("User", User)