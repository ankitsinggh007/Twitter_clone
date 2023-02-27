
const app=require("express")();

const connect=require("./config/databaseConfgi");

const {TweetRepo}=require("./repository");



const PORT=3000;

app.listen(PORT,async()=>{
    await connect();
    console.log(TweetRepo,"Tweet repo");
    const tweet=new TweetRepo();
  const reponse= await tweet.getAll(3,5);
  console.log(reponse);
    console.log(`developement server is started on port ${PORT}`)
})

