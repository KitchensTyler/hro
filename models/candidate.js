const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
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
    preInterview:{
        type: Boolean,
        required: true
    },
    initialInterview:{
        type: Boolean,
        required: true
    },
    finalInterview:{
        type: Boolean,
        required: true
    },
    offerSent:{
        type:Boolean,
        required:true
    },
    hireDate:{
        type:Date,
    }
})

module.exports = mongoose.model('Candidate', candidateSchema)