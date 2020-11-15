import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Private() {
    const isAuth = useSelector((state) => state.user.isAuth);
    let { children, ...others } = this.props;
    console.log("auth", isAuth, children)
    return (
        <Route
            {...others}
            render={({ location }) =>
                !isAuth ? (
                    <Redirect exact
                        to={{
                            pathname: "/order",
                            state: { from: location },
                        }}
                    />
                ) : (
                        children
                    )
            }
        />
    );
}

