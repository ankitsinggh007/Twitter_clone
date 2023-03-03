
import express from "express";

// import connect from "./config/databaseConfig";
import connect from "./config/databaseConfig.js";
import Tweetservice from "./service/tweet-service.js";
import ApiRoute from "./routes/index.js"
import UserRespository from "./repository/user-repository.js";
import likeService from "./service/like-service.js";
const app=express();




const PORT=3000;

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use("/api",ApiRoute);


app.listen(PORT,async()=>{
    await connect();
    const User=new UserRespository();
    
    console.log(User);
    const tweet=new Tweetservice();
   const Tweet=await tweet.getAll(0,5);
    const response=await User.getAll();
    console.log(response.id);
    const toggle=new likeService();
    await toggle.toggleLike(Tweet[0].id,'Tweet',response[0].id)
    console.log(`developement server is started on port ${PORT}`)
})

