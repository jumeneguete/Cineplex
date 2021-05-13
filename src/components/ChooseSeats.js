import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

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

    console.log(info.movie)
    console.log(info)


    return (
        <main className="main-seats">
            <div className="seats-container">
                <h1>Selecione o(s) assento(s)</h1>

                <div className="seats">
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 10).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 20 && parseInt(x.name) > 10).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 30 && parseInt(x.name) > 20).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 40 && parseInt(x.name) > 30).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 50 && parseInt(x.name) > 40).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>
                    <div className="row">
                        {seats === undefined ? "" :
                            seats.filter(x => parseInt(x.name) <= 60 && parseInt(x.name) > 50).map(y => (

                                <div className="seat">{y.name}</div>
                            ))}
                    </div>


                    <div className="row seat-description">
                        <div>
                            <div className="seat seat-selected"></div>
                                Selecionado
                            </div>
                        <div>
                            <div className="seat seat-available"></div>
                                Disponível
                            </div>
                        <div>
                            <div className="seat seat-unavailable"></div>
                                Indisponível
                            </div>
                    </div>
                </div>

                <h2>Nome do Comprador:</h2>
                <input type="text" placeholder="Digite seu nome" />

                <h2>CPF do comprador:</h2>
                <input type="number" placeholder="Digite seu CPF" />

                <div className="confirmation-button"><button className="confirm-info">Reservar assento(s)</button></div>
            </div>

            {info.movie === undefined && info.day === undefined ? "" :

                <div className="confirm-movie">
                    <img src={info.movie.posterURL} alt={info.movie.title} />
                    <div className="movie-info">
                        <div>{info.movie.title}</div>
                        <div>{info.day.weekday} - {info.day.date}</div>
                        <div>{info.name}</div>
                    </div>
                </div>
            }
        </main>
    );
}