import { history } from "../../App";
import { userService } from "../../services/UserService";
import { TOKEN, USER_LOGIN } from "../../utils/setting";
import { SIGN_IN } from "../Types/UserTypes";

export const SignUpAction = (values) => {
    return (dispatch) => {
        userService.SignUp(values).then((result) => {
            alert("Đăng ký thành công");
            history.push("/login");
        }).catch((error) => {
            alert(error.response.data.content);
        });
    };
};
export const SignInAction = (values) => {
    return async (dispatch) => {
        try {
            let result = await userService.SignIn(values);
            dispatch({
                type: SIGN_IN,
                userLogin: result.data.content
            });
            alert("Đăng nhập thành công");
            history.goBack();
        } catch (error) {
            console.log(error);
        }
    };
};
