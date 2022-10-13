import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";


export const HomeTemplate = (props) => {
    return <Route  {...props} render={(propsRoute) => {
        return <Fragment>
            <props.Component {...propsRoute} />
            <Footer />
        </Fragment>;
    }} />;
};