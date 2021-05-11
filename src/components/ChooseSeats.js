export default function ChooseSeats() {
    return (
        <main className="main-seats">
            <div className="seats-container">
                <h1>Selecione o(s) assento(s)</h1>

                <div className="seats">
                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
                        <div className="seat">06</div>
                        <div className="seat">07</div>
                        <div className="seat">08</div>
                        <div className="seat">09</div>
                        <div className="seat">10</div>
                    </div>

                    <div className="row">
                        <div className="seat">01</div>
                        <div className="seat">02</div>
                        <div className="seat">03</div>
                        <div className="seat">04</div>
                        <div className="seat">05</div>
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

            <div className="confirm-movie">
                <img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato" />
                <div className="movie-info">
                    <div>Vingadores Ultimato</div>
                    <div>Quinta-feira - 15:00</div>
                </div>
            </div>
        </main>
    );
}