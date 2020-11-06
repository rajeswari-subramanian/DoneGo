import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import RestaurantList from '../Pages/RestaurantList'


export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}
                    <Route path="/order/restaurant" render={(props) => <RestaurantList {...props} />} />
                </Switch>
            </Router>
        </>
    )
}
