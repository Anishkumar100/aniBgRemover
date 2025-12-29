import { Webhook } from "svix"
import userModel from "../models/userModel.js"

/*
Before we start using the 1st controller, we need to get the clerk_webhook_secret. Thus, we first deployed this backend. And in the clerk webhook dashboard we add this url at the url option https://anibg-remover.vercel.app/api/user/webhooks
*/



//(1) API controller function to manage clerk user with database
//PATH: /api/user/webhooks
export const clerkWebHooks = async (req, res) => {
    try {
        //create a Svix instance with clerk webhook secret

        const whook = new Webhook(process.meta.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const { data, type } = req.body

        switch (type) {
            case "user.created":
                {
                    const userData = {
                        clerkId: data.id,
                        email:data.email_addresses[0].email_address,
                        firstName:data.first_name,
                        lastName:data.last_name,
                        photo:data.image_url
                    }

                    await userModel.create(userData)
                    res.json({success:true,message:`User Created`})
                    break;
                }

            case "user.updated":
                {
                    const userData = {
                        email:data.email_addresses[0].email_address,
                        firstName:data.first_name,
                        lastName:data.last_name,
                        photo:data.image_url
                    }

                    await userModel.findOneAndUpdate({clerkId:data.id},userData)

                    res.json({success:true,message:`User Updated`})

                    break;
                
                }
            
            case "user.deleted":
                {
                    await userModel.findOneAndDelete({clerkId:data.id})

                    res.json({success:true,message:`User Deleted Successfully`})
                    break;
                }
        }


    }
    catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}


