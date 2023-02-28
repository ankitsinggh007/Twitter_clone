import mongoose from "mongoose";


const tweetSchema=new mongoose.Schema({

content:{
    type:String,
    required:true,
                                                                                            
max:[250,"Tweet should contain less then 250 characters"]                                // maxlength: 50
}

},{timestamps:true})
const Tweet=mongoose.model("Tweet",tweetSchema);
export default Tweet;