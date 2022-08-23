const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))
require('dotenv').config()

//connect to db
mongoose.connect(`mongodb+srv://tonyeherrera:${process.env.MONGO_PW}@cluster0.v8uoayq.mongodb.net/?retryWrites=true&w=majority`, ()=> console.log("Connected to DB"))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000" ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

//routes
app.use('/candidates', require('./routes/originRouter.js'))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//connect to server
app.listen(9000, ()=> {
    console.log("Server is running on Port 9000")
})