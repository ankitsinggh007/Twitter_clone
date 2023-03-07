import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepo extends CrudRepository{

    // create  function for create,get ,getAll,update,destroy
    constructor(){
        super(Tweet);
    }
    

    async getAll(offset, limit){
        try {
            const response=await Tweet.find().skip(offset).limit(limit);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
   
    async find(id) {
        try {
            //const tweet = await Tweet.findById(id).populate({path: 'likes'});
            
            const tweet = await Tweet.findById(id);
            console.log("Before",tweet,"after")
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}
export default TweetRepo;
