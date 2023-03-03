import mongoose from "mongoose";

const LikeSchema=mongoose.Schema({

    onModal:{
        type:String,
        required:true,
        enum:["comment","post"]
    },
    Likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refpath:"onModal",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",


    }


})

const Like=mongoose.model('Like',LikeSchema);

export default Like;