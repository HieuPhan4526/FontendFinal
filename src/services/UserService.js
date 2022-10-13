import { baseServices } from "./baseServices";

export class UserService extends baseServices{
    SignUp = (data) => {
       return this.post("/api/auth/signup",data) 
    }
}

export const userService = new UserService();