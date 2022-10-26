import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup"
import { useDispatch } from "react-redux";
import { SignInAction } from "../../redux/Actions/UserAction";
import styleLogin from "../../assets/css/LoginRegister.module.css"
export default function Login() {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng không được để trống")
                .email("Email Không hợp lệ"),
            password: Yup.string().required("Mật khẩu không được để trống"),
        }),
        onSubmit: (values) => {
            dispatch(SignInAction(values))
        },
    });
    return <div>
        <section className={styleLogin["sign-in"]}>
            <div className="container">
                <div className={styleLogin["signin-content"]}>
                    <div className={styleLogin["signin-form"]}>
                        <h2 className={styleLogin["form-title"]}>Đăng Nhập</h2>
                        <form onSubmit={formik.handleSubmit} className="register-form" id="login-form">
                            <div className={styleLogin["form-group"]}>
                                <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name" /></label>
                                <input onChange={formik.handleChange} type="email" name="email" id="email" placeholder="Email đăng nhập" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className={styleLogin["form-group"]}>
                                <label htmlFor="password"><i className="zmdi zmdi-lock" /></label>
                                <input onChange={formik.handleChange} type="password" name="password" id="password" placeholder="Password" />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-danger">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className={styleLogin["form-group"," form-button"]}>
                                <input type="submit" name="signin" id="signin" className={styleLogin["form-submit"]} defaultValue="Log in" />
                            </div>
                        </form>
                    </div>
                    <div className={styleLogin["signin-image"]}></div>
                </div>
            </div>
        </section>

    </div>;
}
