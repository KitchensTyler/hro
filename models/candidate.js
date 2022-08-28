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
       
    },
    followUpInterview:{
        type: Date,
        
    },
    offerSent:{
        type:Boolean,
        
    },
    hireDate:{
        type:Date,
    }
})

module.exports = mongoose.model('Candidate', candidateSchema)