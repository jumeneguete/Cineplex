export default function CompletedOrder() {
    return (
        <main className="main-success">
            <h1>Pedido feito <br /> com sucesso!</h1>

            <div className="info">
                <h2>Filme e sessão</h2>
                <div>Vingadores Ultimato</div>
                <div>24/05/2021 15:00</div>
            </div>

            <div className="info">
                <h2>Ingressos</h2>
                <div>Assento 15N</div>
                <div>Assento 17N</div>
            </div>

            <div className="info">
                <h2>Comprador</h2>
                <div>Nome: Juliana Meneguete</div>
                <div>CPF: 123.456.789-10   </div>
            </div>

            <div className="confirmation-button"><button className="confirm-info">Voltar para Home</button></div>
        </main>
    );
}