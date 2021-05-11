import ReactDOM from "react-dom";

import "./css/reset.css";
import "./css/style.css";
import logotipo from "./img/logotipo.jpg";

function App() {
	return (
		<>
            <header>
                <div><img src={logotipo} alt="cineplex"/></div>
            </header>

            <main class="main-movies">
                <h1>Selecione o filme</h1>

                <div class="movies-list">
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/></a>
                </div>
            </main>

            <main class="main-schedule hide">
                <h1>Selecione o horário</h1>

                <div class="movie-date-options">
                    <div class="movie-day-time">
                        <h2>Quinta-feira - 24/06/2021</h2>
                        <div class="time-options">
                            <button class="time-box">13:00</button>
                            <button class="time-box">14:50</button>
                            <button class="time-box">15:00</button>
                            <button class="time-box">19:00</button>
                        </div>
                    </div>

                    <div class="movie-day-time">
                        <h2>Sexta-feira - 24/06/2021</h2>
                        <div class="time-options">
                            <div class="time-box">13:00</div>
                            <div class="time-box">14:50</div>
                            <div class="time-box">15:00</div>
                            <div class="time-box">19:00</div>
                        </div>
                    </div>
                </div>
            </main>

            <main class="main-seats hide">
                <div class="seats-container">
                    <h1>Selecione o(s) assento(s)</h1>

                    <div class="seats">
                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                            <div class="seat">06</div>
                            <div class="seat">07</div>
                            <div class="seat">08</div>
                            <div class="seat">09</div>
                            <div class="seat">10</div>
                        </div>

                        <div class="row">
                            <div class="seat">01</div>
                            <div class="seat">02</div>
                            <div class="seat">03</div>
                            <div class="seat">04</div>
                            <div class="seat">05</div>
                        </div>

                        <div class="row seat-description">
                            <div>
                                <div class="seat seat-selected"></div>
                                Selecionado
                            </div>
                            <div>
                                <div class="seat seat-available"></div>
                                Disponível
                            </div>
                            <div>
                                <div class="seat seat-unavailable"></div>
                                Indisponível
                            </div>
                        </div>
                    </div>

                    <h2>Nome do Comprador:</h2>
                    <input type="text" placeholder="Digite seu nome"/>

                    <h2>CPF do comprador:</h2>
                    <input type="number" placeholder="Digite seu CPF"/>

                    <div class="confirmation-button"><button class="confirm-info">Reservar assento(s)</button></div>
                </div>

                <div class="confirm-movie">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato"/>
                    <div class="movie-info">
                        <div>Vingadores Ultimato</div>
                        <div>Quinta-feira - 15:00</div>
                    </div>
                </div>
            </main>

            <main class="main-success hide">
                <h1>Pedido feito <br/> com sucesso!</h1>
                
                <div class="info">
                    <h2>Filme e sessão</h2>
                    <div>Vingadores Ultimato</div>
                    <div>24/05/2021 15:00</div>
                </div>

                <div class="info">
                    <h2>Ingressos</h2>
                    <div>Assento 15N</div>
                    <div>Assento 17N</div>
                </div>

                <div class="info">
                    <h2>Comprador</h2>
                    <div>Nome: Juliana Meneguete</div>
                    <div>CPF: 123.456.789-10   </div>
                </div>

                <div class="confirmation-button"><button class="confirm-info">Voltar para Home</button></div>
            </main>

        </>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));