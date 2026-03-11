import React, { useEffect, useState } from "react";
import '../styles.css'
import { MovieCard } from "../components/MovieCard";

export const MoviesGrid = () => {

    //Es el estado para definir el array de las peliculas
    const [movies, setMovies] = useState([]);

    //Es el estado para definir la busqueda del usuario en el input
    const [searchTerm, setSearchTerm] = useState("");

    const [genre, setGenre] = useState("All Genres");

    const [rating, setRating] = useState("All")


    //Cada vez que sea use esta funcion seteamos en searchterm lo que el usuario esta escribiendo
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const obtenerValueGenero = (e) => {
        setGenre(e.target.value)
    }

    const obtenerValueRating = (e) => {
        setRating(e.target.value)
    }

    const filtroRating = (movie, rating) => {
        if (rating === "All") {
            return true;
        }
        switch (rating) {
            case "Good":
                if (movie.rating >= 8) {
                    return true
                }

                break;
            case "Ok":
                if (movie.rating >= 5) {
                    return true;
                }
                break;
            case "Bad":
                if (movie.rating < 5) {
                    return true;
                }
                break;
            default:
                break;
        }

    }

    //ma;ana revisar
    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    };


    //Este es un array .filter almacena un nuevo array unicamente si cumple con la condicion del return
    const filtredMovies = movies.filter(movie => {
        //si la pelicula en minusculas incluye lo que busca el usuario en el input modifica y crea el nuevo array
        return matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, genre) && filtroRating(movie, rating)

        // return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    useEffect(() => {
        getMoviesJSON();
    }, []);


    const getMoviesJSON = () => {
        fetch("movies.json")
            .then(respuesta => respuesta.json())
            .then(datos => {
                setMovies(datos)
            })
    }




    return (

        <div>
            <input className="search-input" placeholder="Search movie..." type="text" onChange={handleSearchChange} value={searchTerm} />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" onChange={obtenerValueGenero} value={genre}>
                        <option>All Genres</option>
                        <option>Drama</option>
                        <option>Action</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>

                    <label>Rating</label>
                    <select className="filter-dropdown" onChange={obtenerValueRating}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>

                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {
                    //ponemos filtredMovies para poder manejar el buscador de peliculas
                    filtredMovies.map((movie) => {
                        return (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    })
                }
            </div >

        </div>
    );
}