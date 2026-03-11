import './App.css';
import './styles.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { MoviesGrid } from './components/MoviesGrid';
import { Watchlist } from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
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
            <Route path='/' element={<MoviesGrid />} ></Route>
            <Route path='/watchlist' element={<Watchlist />} ></Route>
          </Routes>
        </Router>


      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
