import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connect } from 'mongoose'
import connectDB from './configs/db.js'


//port and app configuration
const PORT = process.env.PORT

const app = express()
await connectDB()

//cors initialization
app.use(cors())

//middleware initialization
app.use(express.json())
// every request will be parsed with json method




//API Routes
app.get('/',(req,res)=> res.send(`AniBgRemover Backend is Running`))


//starting server

app.listen(PORT,()=>
{
    console.log(`backend is running on ${PORT}`)
})



