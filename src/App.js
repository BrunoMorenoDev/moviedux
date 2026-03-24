import './App.css';
import './styles.css'
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { MoviesGrid } from './components/MoviesGrid';
import { Watchlist } from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  //Es el estado para definir el array de las peliculas
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist]=useState([]);

  const controlarWatchlist = (movieId) =>{ 
    //Prev lo que hace es agarrar el valor anterior del estado en este caso un [] vacio 
    setWatchlist(prev => prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    //#EL FILTER SE QUEDA CON EL ELEMENTO SI ES TRUE
    /*Si en el [] contiene movieID entonces filtra si es que dentro de ese array false 
    si es que 2 !== 2 (false) por lo tanto se elimina si es 1 != 2 se guarda el elemento

    y 2 como la es una operacion ternaria si es false ejectura [...prev, movieId]
    agregando al [vacio], la pelicula con el id

    */
  )

  }

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
    <div className="App">
      <div className='container'>
        <Header />

        {/*Permite que react controle el direccionamiento de paginas sin recagar la pagina */}
        <Router>
          {/*Nav se usa para menus de navegacion */}
          <nav>
            <ul>
              <li>
                {/*Link es como la etiqueta <a> al clickearlo te redirige a esa url*/}
                <Link to="/">Home</Link>

              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          {/*Es el contenedor que permite definir las rutas individuales*/}
          <Routes>
            {/*Segun la ruta pide un elemento el cual lo renderiza
            NOTA: Si quiero renderizar mas componentes debe estar en un contenedor como <> o <div> */}
            <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} controlarWatchlist={controlarWatchlist}/>} ></Route>
            <Route path='/watchlist' element={<Watchlist movies={movies} watchlist={watchlist} controlarWatchlist={controlarWatchlist}/>} ></Route>
          </Routes>
        </Router>


      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
