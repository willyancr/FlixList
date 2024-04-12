import './App.css';
import UserContextMovieProvider from './components/Context/UserContextMovies';
import UserContextSerieProvider from './components/Context/UserContextSeries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Movies from './components/Header/Movies';
import Series from './components/Header/Series';
import InfoMovie from './components/InfoMovieSerie/InfoMovie';
import InfoSerie from './components/InfoMovieSerie/InfoSerie';

function App() {
  return (
    <div className="flex">
      <UserContextMovieProvider>
        <UserContextSerieProvider>
          <BrowserRouter>
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/filmes" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/infofilmes/:id" element={<InfoMovie />} />
              <Route path="/infoseries/:id" element={<InfoSerie />} />
            </Routes>
          </BrowserRouter>
        </UserContextSerieProvider>
      </UserContextMovieProvider>
    </div>
  );
}

export default App;
