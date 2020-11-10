import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory, Redirect, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LandingPage from "../Components/LandingPage";
import RestaurantList from "../Pages/RestaurantList";
import Checkout from "../Pages/Checkout";
import PlaceOrder from "../Pages/PlaceOrder";
import Profile from "../Pages/Profile";
import Thankyou from '../Pages/Thankyou'

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => <LandingPage {...props} />}
                    />
                    <Route
                        path="/order"
                        exact
                        render={(props) => <LandingPage {...props} />}
                    />
                    <Route
                        path="/order/checkout"
                        exact
                        render={(props) => <Checkout {...props} />}
                    />
                    <Route
                        path="/order/restaurant"
                        exact
                        render={(props) => <RestaurantList {...props} />}
                    />
                    <Route
                        path="/order/profile"
                        exact
                        render={(props) => <Profile {...props} />}
                    />
                    <Route
                        path="/order/thankyou"
                        exact
                        render={(props) => <Thankyou {...props} />}
                    />
                    <Route
                        path="/order/:id"
                        render={(props) => <PlaceOrder {...props} />}
                    />

                    <Route>
                        <div style={{ color: "red" }}>Error 404</div>
                        <Link to="/">GO back Home</Link>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
