import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import RestaurantList from '../Pages/RestaurantList'
import Checkout from '../Pages/Checkout'
import PlaceOrder from '../Pages/PlaceOrder'


export default function Routes({ leng }) {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <LandingPage {...props} />} />
                    <Route exact path="/order/restaurant" render={(props) => <RestaurantList {...props} len={leng} />} />

                    <Route exact path="/order/:id" render={(props) => <PlaceOrder {...props} />} />
                    <Route path="/checkout" render={(props) => <Checkout {...props} />} />
                </Switch>
            </Router>
        </>
    )
}
