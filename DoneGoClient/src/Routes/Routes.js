import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import RestaurantList from '../Pages/RestaurantList'
import Checkout from '../Pages/Checkout'


export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/order/restaurant" render={(props) => <RestaurantList {...props} />} />
                    <Route path="/order/restaurant/checkout" render={(props) => <Checkout {...props} />} />
                </Switch>
            </Router>
        </>
    )
}
