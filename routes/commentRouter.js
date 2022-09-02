const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment.js');

commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        
    })
})

commentRouter.get('/:candidateId/comments', (req, res, next) => {
    Comment.find( {candidate: req.params.candidateId}, (err, comments) => {
        if(err){ 
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
})


commentRouter.post('/:candidateId/comments', (req, res, next) => {
    req.body.user = req.auth._id
    req.body.candidate = req.params.candidateId
    const newComment = new Comment(req.body);
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedComment)
    })
})

//find a comment by id
commentRouter.get('/:commentId/', (req, res, next) => {
    Comment.findById(req.params.commentId, (err, comment) => {
        if(err) {
            res.status(500);
            return next(err)
        } else if (!comment) {
            res.status(404)
            return next(new Error("no comment found."))
        }
        return res.send(comment);
    })
})

//delete comment by the Id
commentRouter.delete("/:candidateId/comments/:commentId", (req, res, next) => {
    Comment.findOneAndRemove(
        {_id: req.params.commentId, user: req.auth._id},
        (err, deletedComment) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(deletedComment)
        }
    )
})

// update comment
commentRouter.put('/commentId', (req, res, next) => {
    Comment.findByIdAndUpdate(
        {_id: req.params.commentId, user: req.auth._id},
        req.body,
        {new: true},
        (err, comment) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(comment)
        }
    )
})

module.exports = commentRouter