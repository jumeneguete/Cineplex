import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ChooseDate() {
    const [timetable, setTimetable] = useState([]);
    const { idMovie } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);
        promise.then((response) => {
            setTimetable(response.data)
        });
    }, []);

    console.log(timetable.days)

    return (
        <main className="main-schedule">
            <div className="schedule">
                <h1>Selecione o horário</h1>

                <div className="movie-date-options">
                    {timetable.days === undefined ? "" :
                        timetable.days.map(x => (
                            <div className="movie-day-time">
                                <h2>{x.weekday} - {x.date}</h2>
                                <div className="time-options">
                                    {x.showtimes.map(y =>
                                        <Link to={`/seats/${y.id}`} >
                                            <button className="time-box">{y.name}</button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
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