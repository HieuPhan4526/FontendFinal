import { baseServices } from "./baseServices";

export class UserService extends baseServices{
    SignUp = (data) => {
       return this.post("/api/auth/signup",data) 
    }
    SignIn = (data) => {
        return this.post("/api/auth/signin",data)
    }
}

export const userService = new UserService();