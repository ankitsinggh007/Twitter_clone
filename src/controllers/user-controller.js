import userService from "../service/user-service.js";
const UserService = new userService();

export const signup = async (req, res) => {
    try {
        const response = await UserService.signUp(req.body);
        return res.status(201).json({
            success: true,
            message: "User has been created successfully",
            response: response,
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be created ",
            response: [],
            error: error
        })
    }
}
