import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    onModel:{
        type:String,
        required: true,
        enum:['Comment','Tweet' ]  
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refpath:'onModel',
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
    
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;