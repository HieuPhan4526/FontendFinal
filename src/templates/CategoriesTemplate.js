import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export const CategoriesTemplate = (props) => {
    return <Route  {...props} render={(propsRoute) => {
        return <Fragment>
            <props.Component {...propsRoute} />
            <Footer />
        </Fragment>;
    }} />;
};