import React from 'react'
import '../styles.css'
export const MovieCard = ({ movie }) => {

    const handleError = (e) => {
        e.target.src = "images/default.jpg"
    };

    const obtenerColorRating = (rating) => {
        if (rating >= 8) {
            return "rating-good"
        }else if(rating >= 5){
            return "rating-ok"
        }else{
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
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${obtenerColorRating(movie.rating)}`}>{movie.rating}</p>

            </div>
        </div>
    )
}
