import likeService from "../service/like-service.js";

const LikeService=new likeService();

export const like=async(req,res)=>{
    try {
        const response = await LikeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
    return res.status(201).json({
        success:true,
        message:"You liked the post",
        data:response,
        err:{}
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"like is not created",
            data:{},
            err:error
        })  
    }

} 