import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { SignUpAction } from "../../redux/Actions/UserAction";
import styleRegister from "../../assets/css/LoginRegister.module.css"
export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng không được để trống")
        .matches(/^[A-Z a-z]+$/, "Họ tên chưa hợp lệ"),
      email: Yup.string()
        .required("Vui lòng không được để trống")
        .email("Email Không hợp lệ"),
      phone: Yup.string().required("Vui lòng không được để trống"),
      password: Yup.string().required("Mật khẩu không được để trống"),
      repassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Mật khẩu nhập lại không hợp lệ"
      ),
    }),
    onSubmit: (values) => {
      dispatch(SignUpAction(values))
    },
  });
  return (
    <div>
      <section className={styleRegister["signup"]}>
        <div className={styleRegister["container"]}>
          <div className={styleRegister["signup-content"]}>
            <div className={styleRegister["signup-form"]}>
              <h2 className={styleRegister["form-title"]}>Đăng ký tài khoản :</h2>
              <form
                method="POST"
                className={styleRegister["register-form"]}
                id="register-form"
                onSubmit={formik.handleSubmit}
              >
                <div className={styleRegister["form-group"]}>
                  <label htmlFor="email">
                    <i className={styleRegister["zmdi zmdi-email"]} />
                  </label>
                  <input
                    onChange={formik.handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email đăng nhập"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className={styleRegister["form-group"]}>
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Họ và tên"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className={styleRegister["form-group"]}>
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    onChange={formik.handleChange}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className={styleRegister["form-group"]}>
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    onChange={formik.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className={styleRegister["form-group"]}>
                  <label htmlFor="re-password">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    onChange={formik.handleChange}
                    type="password"
                    name="repassword"
                    id="re_password"
                    placeholder="Nhập lại password"
                  />
                  {formik.touched.repassword && formik.errors.repassword ? (
                    <div className="text-danger">
                      {formik.errors.repassword}
                    </div>
                  ) : null}
                </div>
                <div className={styleRegister["form-group", "form-button"]}>
                  <input
                    onChange={formik.handleChange}
                    type="submit"
                    name="signup"
                    id="signup"
                    className={styleRegister["form-submit"]}
                    defaultValue="Register"
                  />
                </div>
              </form>
            </div>
            <div className={styleRegister["signup-image"]}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
