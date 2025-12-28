import mongoose from "mongoose"

const connectDB = async()=>
{
    //these 2 are the listeners, that they can catch the mongoose.connect() event
    mongoose.connection.on('connected',()=>
    {
        console.log(`Database connected`)
    })

    mongoose.connection.on('error',(err)=>
    {
        console.log(`Dabase connection error ${err}`)
    })
    
    try 
    {
        await mongoose.connect(`${process.env.MONGODB_URI}`)

    } 
    catch (error) 
    {
        console.log(error)
    }
}

export default connectDB