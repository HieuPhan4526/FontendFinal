import { history } from "../../App"
import { userService } from "../../services/UserService"
import { USER_LOGIN } from "../../utils/setting"
import { SIGN_IN } from "../Types/UserTypes"

export const SignUpAction = (values) => {
    return (dispatch) => {
        userService.SignUp(values).then((result) => {
            alert("Đăng ký thành công")
            history.push("/login")
        }).catch((error) => {
            alert(error.response.data.content) 
        })
    }
}
export const SignInAction = (values) => {
    return (dispatch) => {
        userService.SignIn(values).then((result) => {
            let userData = result.data.content
            alert("Đăng nhập thành công")
            localStorage.setItem(USER_LOGIN,JSON.stringify(userData))
            dispatch({
                type: SIGN_IN,
                user: userData.user
            })
            history.push("/home")
        }).catch((error) => {
            alert(error.response.data.content) 
        })
    }
}