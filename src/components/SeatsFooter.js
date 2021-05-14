export default function SeatsFooter({ info }) {
    return (
        <>
            {info.movie === undefined && info.day === undefined ? "" :

                <div className="confirm-movie">
                    <img src={info.movie.posterURL} alt={info.movie.title} />
                    <div className="movie-info">
                        <div>{info.movie.title}</div>
                        <div>{info.day.weekday} - {info.day.date}</div>
                        <div>{info.name}</div>
                    </div>
                </div>
            }
        </>
    );
}