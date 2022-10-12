import { Fragment } from "react";
import { Route } from "react-router-dom";


export const UserTemplate = (props) => {
    return <Route  {...props} render={(propsRoute) => {
        return <Fragment>
            <props.Component {...propsRoute} />
        </Fragment>;
    }} />;
};