import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment=async (req,res)=>{
    try {

    const response=await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
    console.log(response,"respnse")
    return res.status(201).json({
        success:true,
        message:'Successfull created a new comment',
        data:response,
        err:{}
    });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

