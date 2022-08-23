const express = require('express')
const originRouter = express.Router()

const Candidate = require('../models/candidate.js')

//get all candidates
originRouter.get("/search", (req, res, next) => {
    Candidate.find((err, candidates) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(candidates)
    })
})

//get one candidate
originRouter.get('/search/:candidateId', (req, res, next) => {
    Candidate.findOne(
        {_id: req.params.candidateId},
        (err, candidate) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(candidate)
        }
    )
})

//post candidate
originRouter.post('/add', (req, res, next) => {
     const newCandidate = new Candidate(req.body)
     newCandidate.save((err, savedCandidate) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCandidate)
     })
})

//update candidate
originRouter.put('/search/:candidateId', (req, res, next) => {
    Candidate.findOneAndUpdate(
        {_id: req.params.candidateId},
        req.body,
        {new: true},
        (err, updatedCandidate) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCandidate)
        }

    )
})

module.exports = originRouter

