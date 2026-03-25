import React from 'react'
import '../styles.css'
export const MovieCard = ({ movie, controlarWatchlist, isWatchlisted }) => {

    const handleError = (e) => {
        e.target.src = "images/default.jpg"
    };

    const obtenerColorRating = (rating) => {
        if (rating >= 8) {
            return "rating-good"
        } else if (rating >= 5) {
            return "rating-ok"
        } else {
            return "rating-bad"
        }
    }
    return (
        <div key={movie.id} className="movie-card">
            <img
                src={`images/${movie.image}`}
                alt="movie-card"
                onError={handleError}

            />

            <div className="movie-card-info">
                <p className="movie-card-title">{movie.title}</p>
                <div>
                    <span className="movie-card-genre">{movie.genre}</span>
                    <span className={`movie-card-rating ${obtenerColorRating(movie.rating)}`}>{movie.rating}</span>
                </div>
                <label className='switch'>
                    <input type='checkbox' checked={isWatchlisted} onChange={() => controlarWatchlist(movie.id)}>
                    </input>
                    <span className='slider'>
                        <span className='slider-label'>  {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}</span>
                    </span>
                </label>

            </div>
            
        </div>
    )
}
