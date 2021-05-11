import logotipo from "../img/logotipo.jpg";

export default function Header() {
    return (
        <header>
            <div><img src={logotipo} alt="cineplex" /></div>
        </header>
    );
}