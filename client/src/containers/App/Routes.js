import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../Landingpage'


export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component ={LandingPage}/>
                </Switch>
            </Router>
        </>
    )
}
