const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to db
mongoose.connect('mongodb+srv://tonyeherrera:SakApFet1!@cluster0.v8uoayq.mongodb.net/?retryWrites=true&w=majority', ()=> console.log("Connected to DB"))

//routes
app.use('/origin', require('./routes/originRouter.js'))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//connect to server
app.listen(9000, ()=> {
    console.log("Server is running on Port 9000")
})