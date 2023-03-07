import UserRespository from "../repository/user-repository.js";

class userService {

    constructor(){
        this.userRespository=new UserRespository();
    }

    async signUp(data){
        try {
        const response=await this.userRespository.create(data);
        console.log(response,"response");
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default userService;