
import express from "express";

// import connect from "./config/databaseConfig";
import connect from "./config/databaseConfig.js";
import TweetRepo from "./repository/tweet-reporsitory.js";
import ApiRoute from "./routes/index.js"
const app=express();




const PORT=3000;

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use("/api",ApiRoute);


app.listen(PORT,async()=>{
    await connect();
    console.log(`developement server is started on port ${PORT}`)
})

