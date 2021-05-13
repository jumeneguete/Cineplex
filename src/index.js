import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChooseSeats from "./components/ChooseSeats";
import CompletedOrder from "./components/CompletedOrder";
import Header from "./components/Header";
import ChooseMovie from "./components/ChooseMovie";
import ChooseDate from "./components/ChooseDate";

import "./css/reset.css";
import "./css/style.css";


function App() {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <ChooseMovie />
                    </Route>

                    <Route path="/session/:idMovie" exact>
                        <ChooseDate />
                    </Route>

                    <Route path="/seats/:idSession" exact>
                        <ChooseSeats />
                    </Route>

                    <Route path="/success" exact>
                        <CompletedOrder />
                    </Route>

                </Switch>
            </BrowserRouter>

        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));