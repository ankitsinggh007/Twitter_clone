
import express from "express";

import connect from "./config/databaseConfig.js";
import Tweetservice from "./service/tweet-service.js";
import ApiRoute from "./routes/index.js"
import UserRespository from "./repository/user-repository.js";
import likeService from "./service/like-service.js";
import CommentService from "./service/comment-service.js";
const app=express();




const PORT=3000;

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use("/api",ApiRoute);


app.listen(PORT,async()=>{
    await connect();
    const User=new UserRespository();
    
    const tweet=new Tweetservice();
   const Tweet=await tweet.getAll(0,5);
    const response=await User.getAll();
    const toggle=new CommentService();

    // await toggle.create(Tweet[0].id,'Tweet',response[0].id,"hi this is my first comment")
    console.log(`developement server is started on port ${PORT}`);
})

