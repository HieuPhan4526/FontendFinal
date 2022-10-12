import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const CategoriesTemplate = (props) => {
    return <Route  {...props} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <props.Component {...propsRoute} />
            <Footer />
        </Fragment>;
    }} />;
};