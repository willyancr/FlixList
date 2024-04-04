import React from 'react';
import {
  Clapperboard,
  Home,
  Clock3,
  TicketCheck,
  Settings,
  LogOut,
} from 'lucide-react';
import HandleMenus from './HandleMenus';
import { useData } from './UserContext';
import { Link } from 'react-router-dom';

function SideBar() {
  const { selectedItem, handleClick } = useData();

  return (
    <div className="grid grid-rows-[100px_1fr_1fr] grid-flow-col min-w-60 bg-projeto-secondary border-r border-projeto-border/30 h-screen">
      <nav className="flex items-center gap-2 justify-center">
        <Clapperboard className="text-projeto-tertiary" size={32} />
        <h1 className="text-3xl text-white font-bold">FlixList</h1>
      </nav>
      <nav className="flex flex-col gap-5 py-10 ">
        <Link to={'/'}>
          <HandleMenus
            title="Home"
            selected={selectedItem === ''}
            icon={<Home size={20} />}
            onClick={() => handleClick('')}
          />
        </Link>
        <Link to={'/watchlist'}>
          <HandleMenus
            title="Watchlist"
            selected={selectedItem === 'watchlist'}
            icon={<Clock3 size={20} />}
            onClick={() => handleClick('watchlist')}
          />
        </Link>
        <Link to={'/assistido'}>
          <HandleMenus
            title="Assitidos"
            selected={selectedItem === 'assistido'}
            icon={<TicketCheck size={20} />}
            onClick={() => handleClick('assistido')}
          />
        </Link>
      </nav>
      <nav className="flex flex-col gap-8 px-4 py-10 mt-auto border-t border-projeto-border/70">
        <div className="flex items-center gap-3">
          <Settings size={20} />
          <p>Configuração</p>
        </div>
        <div className="flex items-center gap-3">
          <LogOut size={20} />
          <p>Sair</p>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
