const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require("express-jwt")

//middleware
app.use(express.json())
app.use(morgan('dev'))
require('dotenv').config()

//connect to db
mongoose.connect(`mongodb+srv://tylerkitchens:${process.env.MONGO_PW}@cluster0.xjt0phz.mongodb.net/?retryWrites=true&w=majority`, () => console.log('connected to database'))


//routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/user', require('./routes/userRouter.js'))
app.use('/api/candidates', require('./routes/originRouter.js'))
app.use('/api/candidates/comments', require('./routes/commentRouter.js'))
app.use('/api/candidates/candidateCard', require('./routes/originRouter.js'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000" ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "Unathorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//connect to server
app.listen(9000, ()=> {
    console.log("Server is running on Port 9000")
})