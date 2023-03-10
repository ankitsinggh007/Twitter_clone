import LikeRespository from "../repository/like-repository.js";
import TweetRepo from "../repository/tweet-reporsitory.js";

class likeService{

    constructor(){
        this.likeRepository=new LikeRespository();


        this.tweetRepository=new TweetRepo();

    }
    async toggleLike(modelId, modelType, userId) { // /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType == 'Tweet') {
            console.log("inside Like-sevice")
            var likeable = await this.tweetRepository.find(modelId)
            console.log(likeable,"likeable")
        } else if(modelType == 'Comment') {
            // TODO
        } else {
            throw new Error('unknown model type');
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        console.log("exists", exists);
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded = false;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }   
}
export default likeService;