import Tweetservice from "../service/tweet-service.js";

const tweetservice=new Tweetservice();

 export const createTweet=async (req,res)=>{
    try {
        const response = await tweetservice.create(req.body);
    return res.status(201).json({
        success:true,
        message:"Tweet is successfully created",
        data:response,
        err:{}
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Tweet can't be create",
            data:{},
            err:error
        })  
    }
 }
 