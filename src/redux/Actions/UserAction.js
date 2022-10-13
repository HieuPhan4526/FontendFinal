import { userService } from "../../services/UserService"
import { SIGN_UP } from "../Types/UserTypes"

export const SignUpAction = (values) => {
    return (dispatch) => {
        userService.SignUp(values).then((result) => {
            dispatch({
                type: SIGN_UP,
                account: values
            })
        }).catch((error) => { console.log(error) })
    }
}