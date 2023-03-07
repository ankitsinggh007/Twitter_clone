import CommentRepository from '../repository/comment-repositoy.js';
import TweetRepo from '../repository/tweet-reporsitory.js';
class CommentService{

    constructor(){
        this.commentRepository=new CommentRepository();

        this.tweetRepository=new TweetRepo();

    }

    async create(modelId,modelType,userId,content){
        if(modelType=="Comment"){
            var commentable= await this.commentRepository.get(modelId);
            console.log(commentable,"Commentable");
            

        }
        else if(modelType=="Tweet"){
            var commentable= await this.tweetRepository.get(modelId);
            console.log(commentable,"Commentable");
            
        }
        else{
            throw new Error("Unknown model type");
        }

        const comment=await this.commentRepository.create({

            content:content,
            onModel:modelType,
            commentable:modelId,
            userId:userId,
            commets:[]
        });
        commentable.comments.push(comment);
        await commentable.save();
        return comment;


    }


}

export default CommentService;