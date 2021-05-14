import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import ChooseSeats from "./components/ChooseSeats";
import CompletedOrder from "./components/CompletedOrder";
import Header from "./components/Header";
import ChooseMovie from "./components/ChooseMovie";
import ChooseDate from "./components/ChooseDate";

import "./css/reset.css";
import "./css/style.css";


function App() {

    const [info, setInfo] = useState([]);  
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);

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
                        <ChooseSeats info={info} setInfo={setInfo} buyer={buyer} setBuyer={setBuyer}
                        cpf={cpf} setCpf={setCpf} setSelectedSeats={setSelectedSeats}/>
                    </Route>

                    <Route path="/success" exact>
                        <CompletedOrder info={info} buyer={buyer} cpf={cpf} selectedSeats={selectedSeats} />
                    </Route>

                </Switch>
            </BrowserRouter>

        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));