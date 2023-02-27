const { default: mongoose } = require("mongoose");

const tweetSchema=new mongoose.Schema({

content:{
    type:String,
    required:true,
                                                                                            
max:[250,"Tweet should contain less then 250 characters"]                                // maxlength: 50
},
hashtags:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hashtag",                                                                  //refer to a model
        

    }
]


},{timestamps:true})
const Tweet=mongoose.model("Tweet",tweetSchema);
module.exports=Tweet;