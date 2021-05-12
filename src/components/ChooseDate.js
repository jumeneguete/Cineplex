import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ChooseDate() {
    const [timetable, setTimetable] = useState([]);
    const {idMovie} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);
        console.log(promise)
        promise.then((response) => {
            setTimetable(response.data)
        });
    }, []);

    return (
        <main className="main-schedule">
            <div className="schedule">
                <h1>Selecione o horário</h1>

                <div className="movie-date-options">
        
                    <div className="movie-day-time">
                        <h2>Quinta-feira - 24/06/2021</h2>
                        <div className="time-options">
                            <button className="time-box">13:00</button>
                            <button className="time-box">14:50</button>
                            <button className="time-box">15:00</button>
                            <button className="time-box">19:00</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="confirm-movie">
                <img src={timetable.posterURL} alt={timetable.title} />
                <div className="movie-info">
                    <div>{timetable.title} </div>
                </div>
            </div>
        </main>
    );
}