const { default: mongoose } = require("mongoose")

const connect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Twitter_Clone");
    // mongodb://127.0.0.1:27017/myapp

}
module.exports= connect;