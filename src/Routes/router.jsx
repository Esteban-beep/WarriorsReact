import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Home from "../pages/home";
import Registrate from "../pages/Registrate/Registrate";
function router() {
    return(
        <BrowserRouter basename="warriorsreact">
            <Switch>
                <Route path="/" exact>
                    <Home/>
                    <Router/>
                </Route>
                <Route path="/Registrate" exact>
                    <Registrate/>
                </Route>            
            </Switch>
        </BrowserRouter>
    ); 
}
export default router;
