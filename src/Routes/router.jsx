import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Header from "../pages/home";
import Formulario from "../pages/Formulario";
function RouterDOM() {
    return(
        <BrowserRouter basename="warriorsreact">
            <Switch>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/Formulario" exact>
                    <Formulario/>
                </Route>            
            </Switch>
        </BrowserRouter>
    ); 
}
export default RouterDOM;
