import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styleWorkDetail from "../assets/css/styleWorkDetail.module.css";

export const WorkDetailTemplate = (props) => {
    return <Route  {...props} render={(propsRoute) => {
        return <div  >
            <Header {...propsRoute} />
            <props.Component {...propsRoute} />
            <Footer />
        </div>;
    }} />;
};