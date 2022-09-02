const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    comment: {
        type: String
    }, 
    datePosted: {
        type: Date, 
        default: Date.now
    }, 
    candidate: {
        type: Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)