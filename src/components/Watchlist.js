import React from 'react'
import '../styles.css'
import { MovieCard } from './MovieCard';
export const Watchlist = ({ movies, watchlist, controlarWatchlist }) => {
  return (
    <div>

      <h1 className='title'>Welcome to watchlist</h1>
      <div className='watchlist'>
        {
          watchlist.map(id => {
            const movie = movies.find(movie => movie.id === id );
            return <MovieCard key={id} movie={movie} controlarWatchlist={controlarWatchlist} isWatchlisted={true}/>
          })
        }
        
      </div>
    </div>
  )
}

