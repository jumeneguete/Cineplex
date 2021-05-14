export default function SeatsDescription() {
    return (
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
    );
}