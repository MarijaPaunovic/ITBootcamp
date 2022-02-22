import { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuth ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />}
        />
    );
}

export default PrivateRoute;