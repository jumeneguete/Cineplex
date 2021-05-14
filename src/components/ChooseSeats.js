import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsRow from "./SeatsRow";
import SeatsDescription from "./SeatsDescription";
import SeatsInput from "./SeatsInput";
import SeatsFooter from "./SeatsFooter";

export default function ChooseSeats() {
    const [seats, setSeats] = useState([]);
    const [info, setInfo] = useState([]);
    const { idSession } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`);
        promise.then((response) => {
            setSeats(response.data.seats);
            setInfo(response.data);
        })
    }, []);

    function toggleSeat(id, available) {

        const selectedSeat = seats.map(x => {
            if (x.id === id) {
                x.isAvailable = !available
            }
            return x;
        });


        setSeats(selectedSeat);
    }


    return (
        <main className="main-seats">
            <div className="seats-container">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="seats">
                    <SeatsRow seats={seats} toggleSeat={toggleSeat} />
                    <SeatsDescription />
                </div>
                <SeatsInput />
                <div className="confirmation-button"><button className="confirm-info">Reservar assento(s)</button></div>
            </div>

            <SeatsFooter info = {info}/>
        </main>
    );
}