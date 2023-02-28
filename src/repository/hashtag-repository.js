import Hashtag from "../models/hashtag.js";

class HashtagRepo{

    async BulkCreate(data){
        try {
            const response=await Hashtag.insertMany(data);
        return response;
        } catch (error) {
            console.log("Something went wrong in hashtag repository layer");
        }
    }
    async findByName(titleList){
        try {
            console.log(titleList)
            const tags=await Hashtag.find({
                title: titleList,
            });
            return tags;
        } catch (error) {
            console.lg(error);
        }

    }
}
export default HashtagRepo;