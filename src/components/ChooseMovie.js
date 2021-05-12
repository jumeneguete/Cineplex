import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ChooseMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promise.then((response) => {
            setMovies(response.data)
        });
    }, []);

    return (
        <main className="main-movies">
            <h1>Selecione o filme</h1>
            <div className="movies-list">
                {movies.map(x => (
                    <Link to={`/session/${x.id}`} >
                        <img src={x.posterURL} alt={x.title} />
                    </Link>
                ))};
            </div>
        </main>
    );
}