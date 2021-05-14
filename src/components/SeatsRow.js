export default function SeatsRow({ seats, toggleSeat }) {
    return (
        <>
            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 10 && parseInt(x.name) > 0).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>

            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 20 && parseInt(x.name) > 10).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>
            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 30 && parseInt(x.name) > 20).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>
            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 40 && parseInt(x.name) > 30).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>
            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 50 && parseInt(x.name) > 40).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>
            <div className="row">
                {seats.length === 0 ? "" :
                    seats.filter(x => parseInt(x.name) <= 60 && parseInt(x.name) > 50).map(y => (

                        <div onClick={() => toggleSeat(y.id, y.isAvailable)} className={`seat ${!y.isAvailable ? "seat-selected" : ""} ${y.blocked ? "seat-unavailable" : ""}`}>{y.name}</div>
                    ))}
            </div>
        </>

    );
}

//cada div className="row" é uma fileira de 10 assentos para representar a organização da sala de exibição do filme
//numeradas assim: fileira 1: 1-10, fileira 2: 11-20, fileira 3: 21-30, etc