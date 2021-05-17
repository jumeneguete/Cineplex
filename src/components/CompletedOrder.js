import {Link} from "react-router-dom";

export default function CompletedOrder({ info, buyer, cpf, selectedSeats }) {
    console.log(info)
    return (
        <main className="main-success">
            <h1>Pedido feito <br /> com sucesso!</h1>

            <div className="info">
                <h2>Filme e sessão</h2>
                <div>{info.movie.title}</div>
                <div>{info.day.date} - {info.name}</div>
            </div>

            <div className="info">
                <h2>Ingressos</h2>
                {selectedSeats.map(x =>
                    <div>Assento {x.name}</div>
                )}
            </div>

            <div className="info">
                <h2>Comprador</h2>
                <div>Nome: {buyer}</div>
                <div>CPF: {cpf}   </div>
            </div>

            <div className="confirmation-button">
                <Link to="/">
                    <button className="confirm-info">Voltar para Home</button>
                </Link>
            </div>
        </main>
    );
}