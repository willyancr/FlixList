import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Watchlist from './components/Watchlist';
import Home from './components/Home';
import UserContextProvider from './components/UserContext';
import InfoMovie from './components/InfoMovie';
import Movies from './components/Header/Movies';
import Series from './components/Header/Series';

function App() {
  return (
    <div className="flex">
      <UserContextProvider>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/infomovie/:id" element={<InfoMovie />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
