const express = require('express')
const originRouter = express.Router()

const Candidate = require('../models/candidate.js')

//get all candidates
originRouter.get("/", (req, res, next) => {
    Candidate.find((err, candidates) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(candidates)
    })
})

//filter candidates by name string
originRouter.get('/search', (req, res, next) => {
    const { candidate } = req.query
    const pattern = new RegExp(candidate)
    Candidate.find(
        {fullName: { $regex: pattern, $options: 'i'}},
        (err, candidates) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(candidates)
        }
    )
})

//get one candidate
originRouter.get('/:candidateId', (req, res, next) => {
    Candidate.find(
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
originRouter.post('/', (req, res, next) => {
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
originRouter.put("/:candidateId", (req, res, next ) => {
    Candidate.findOneAndUpdate(
        { _id: req.params.candidateId, user: req.auth._id},
        req.body,
        { new: true},
        (err, updatedCandidate) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedCandidate)
        }
    )
})

//delete candidate
originRouter.delete("/:candidateId", (req, res, next) => {
    Candidate.findOneAndDelete(
        { _id: req.params.candidateId, user: req.auth._id }, 
        (err, deletedCandidate) => {
            if(err){
                res.status(500)
                return next(err)    
            }
            return res.status(200).send(`Successfully deleted Candidate: ${deletedCandidate.title}`)
        }
    )
})

module.exports = originRouter

