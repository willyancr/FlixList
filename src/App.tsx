import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Watchlist from './components/Watchlist';
import Home from './components/Home';
import UserContextProvider from './components/UserContext';

function App() {
  return (
    <div className="flex">
      <UserContextProvider>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
