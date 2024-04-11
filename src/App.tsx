import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Watchlist from './components/Watchlist';
import Home from './components/Home';
import UserContextProvider from './components/UserContext';
import InfoMovie from './components/InfoMovieSerie/InfoMovie';
import Movies from './components/Header/Movies';
import Series from './components/Header/Series';
import InfoSerie from './components/InfoMovieSerie/InfoSerie';

function App() {
  return (
    <div className="flex">
      <UserContextProvider>
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
      </UserContextProvider>
    </div>
  );
}

export default App;
