import mongoose from "mongoose"


/*We already get users signed up and signed in using clerk, but using a database to track users, since we need the users data for automating payments using Razorpay */
const userSchema = mongoose.Schema(
    {
        clerkId:
        {
            type: String,
            required: true,
            unique: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        photo: //user's gmail account photo from clerk
        {
            type:String,
            required:true
        },
        firstName:
        {
            type:String
        },
        lastName:
        {
            type:String
        },
        creditBalance:
        {
            type:Number,
            default:5
        }
    }
)

/*
for storing all the users data from clerk in our database, user clerk webhooks (copy paste)
*/

const userModel= mongoose.model.user || mongoose.model("user", userSchema)

export default userModel