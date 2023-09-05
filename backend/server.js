require('dotenv').config()
const express = require("express")
const workout_routes = require("./routes/workouts")
const mongoose = require("mongoose")

// Express App
const app = express()

// middleware to log out requests
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workout_routes)

// connct to db
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        // Listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log("Listening on 4000")
        })
    }
).catch((error)=>{console.log(error)})