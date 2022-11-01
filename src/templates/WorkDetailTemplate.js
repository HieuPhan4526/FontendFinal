import { Fragment, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styleWorkDetail from "../assets/css/styleWorkDetail.module.css";
import { USER_LOGIN } from "../utils/setting";

export const WorkDetailTemplate = (props) => {


    return <Route  {...props} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute} />
            <props.Component {...propsRoute} />
            <Footer />
        </Fragment>;
    }} />;
};