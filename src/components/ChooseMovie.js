import { Link } from "react-router-dom";


export default function ChooseMovie() {


    return (
        <main className="main-movies">
            <h1>Selecione o filme</h1>

            <div className="movies-list">
                <Link to="/date">
                    <a href="#">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato" />
                    </a>
                </Link>
            </div>
        </main>
    );
}