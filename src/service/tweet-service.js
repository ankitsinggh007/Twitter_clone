import TweetRepo from "../repository/index.js";
import HashtagRepo from "../repository/hashtag-repository.js";

class Tweetservice {
    constructor() {
        this.tweetrepo = new TweetRepo();
        this.hashtags=new  HashtagRepo();
    }
    async create(data) {
        try {
            //data-->{ content: 'hi this my third tweet\n' }
            // task to be done
            // 1.add tags to the hashtag;such that already present tag only get tweets and new will get from then attach tweet to it
            // 2.
            const TweetResponse = await this.tweetrepo.create(data);

            const content = data.content;

            const tags = content.match(/#[a-zA-Z0-9_]+/g)?.map((tag)=>tag.substring(1).toLowerCase());
            let alreadyPresentTags=await this.hashtags.findByName(tags);
            


            console.log(alreadyPresentTags,"already");
 
            let haveToCreateTags=tags.filter(tag => !tags.includes(tag)).map(tag=>{return {title:tag,tweets:[TweetResponse.id]}} );
            
            let hashtagResponse=await this.hashtags.BulkCreate(haveToCreateTags);

            console.log(haveToCreateTags,"haveToCreateTags");
            alreadyPresentTags=alreadyPresentTags.forEach(tag=>{
                tag.tweets.push(TweetResponse.id);
                tag.save();
            } )
            return TweetResponse;

        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const response = await this.tweetrepo.get(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(offset, limit) {
        try {
            const response = await this.tweetrepo.getAll(offset, limit);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id, data) {
        try {
            const response = await this.tweetrepo.update(id, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const response = await this.tweetrepo.destroy(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
export default Tweetservice;