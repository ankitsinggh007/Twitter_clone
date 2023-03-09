import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true});

userSchema.pre('save', function(next){

     try {
        const salt= bcrypt.genSaltSync();

        const encryptedPassword=  bcrypt.hashSync(this.password,salt);

        this.password=encryptedPassword;
     } catch (error) {
        console.log(error);
     }
     next();
})

    userSchema.pre('save',function(next) {
        const SALT=bcrypt.genSaltSync();
        console.log("hi")
        const encryptPassword=bcrypt.hashSync(this.password,SALT);
        this.password=encryptPassword;
        next();
    });



const User = mongoose.model('User', userSchema);

export default User;