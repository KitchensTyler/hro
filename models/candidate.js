const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    applicationDate:{
        type:Date,
        require: true,
    },
    applicationReviewed:{
        type: Boolean,
        required: true
    },
    resumeSubmitted:{
        type: Boolean,
        required: true
    },
    coverLetterSubmitted:{
        type: Boolean,
        required: true
    },
    initialInterview:{
        type: Date,
        default: Date.now
    },
    followUpInterview:{
        type: Date,
        default: Date.now
    },
    offerSent:{
        type:Boolean,
        
    },
    hireDate:{
        type:Date,
        default: Date.now
    },
    status: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 

})

module.exports = mongoose.model('Candidate', candidateSchema)