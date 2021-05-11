export default function ChooseDate() {
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

                    <div className="movie-day-time">
                        <h2>Sexta-feira - 24/06/2021</h2>
                        <div className="time-options">
                            <div className="time-box">13:00</div>
                            <div className="time-box">14:50</div>
                            <div className="time-box">15:00</div>
                            <div className="time-box">19:00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="confirm-movie">
                <img src="https://http2.mlstatic.com/D_NQ_NP_911447-MLB30001653799_042019-O.jpg" alt="Vingadores Ultimato" />
                <div className="movie-info">
                    <div>Vingadores Ultimato</div>
                </div>
            </div>
        </main>
    );
}