import Tweet from "../models/tweet.js";

class TweetRepo{

    // create  function for create,get ,getAll,update,destroy
    async create(data){
    
    // data->{content:"this is my Tweet",hashtag:[all,happy,luck,Krishna]}
    
    try {
            const response=await Tweet.create(data);
              return response;
        
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
   
        //id->0f9r78w7whaiahana073y3n83jsfc 

        try {
            const response=await Tweet.findById(id);
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

    async getAll(offset, limit){
        try {
            const response=await Tweet.find().skip(offset).limit(limit);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id,data){
        try {
        const response = await Tweet.findByIdAndUpdate(id,data,{new:true});
            return response;
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
        const response = await Tweet.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            console.log(tweet)
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}
export default TweetRepo;
