import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsRow from "./SeatsRow";
import SeatsDescription from "./SeatsDescription";
import SeatsInput from "./SeatsInput";
import SeatsFooter from "./SeatsFooter";

export default function ChooseSeats({info, setInfo, buyer, setBuyer, cpf, setCpf, setSelectedSeats}) {
    const { idSession } = useParams(); 
    const [seats, setSeats] = useState([]);    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`);
        promise.then((response) => {
            setSeats(response.data.seats);
            setInfo(response.data);
            SeatUnvailable(response.data.seats);
        })
    }, []);

    function SeatUnvailable(seats) {
        let newSeats = []
        for (let i = 0; i < seats.length; i++) {
            if (!seats[i].isAvailable) {
                seats[i].blocked = true;
            }
            newSeats.push(seats[i]);
        }
        setSeats(newSeats);

    }

    function toggleSeat(id, available) {

        const selectedSeat = seats.map(x => {
            if (x.id === id) {
                x.isAvailable = !available
            }
            return x;
        });


        setSeats(selectedSeat);
    }

    const history= useHistory();

    function reservation(){
        const conditionInput = buyer !== "" && cpf !== "";
        const conditionSeats = seats.filter((x)=> !x.isAvailable && !x.blocked);
        setSelectedSeats(conditionSeats);

        if (conditionInput && conditionSeats.length !== 0){
            const idList = conditionSeats.map((y) => y.id)

            const obj = {
                ids: idList,
                name: buyer,
                cpf: cpf
            }

            const promise= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", obj);
            promise.then(()=> history.push("/success"));
            
        } else {
            alert("Selecione um assento válido ou verifique se seus dados estão preenchidos corretamente")
        }
        
    }



    return (
        <main className="main-seats">
            <div className="seats-container">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="seats">
                    <SeatsRow seats={seats} toggleSeat={toggleSeat} />
                    <SeatsDescription />
                </div>
                <SeatsInput buyer={buyer} setBuyer={setBuyer} cpf={cpf} setCpf={setCpf} />
                <div className="confirmation-button">
                        <button className="confirm-info" onClick={() => reservation()}>Reservar assento(s)</button>
                </div>
            </div>

            <SeatsFooter info={info} />
        </main>
    );
}