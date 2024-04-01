import React from 'react';
import {
  Clapperboard,
  Home,
  Clock3,
  TicketCheck,
  Settings,
  LogOut,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MenuSidebar from './MenuSidebar';

function SideBar() {
  const [selecteditem, setselecteditem] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    navigate(`/${item}`);
    setselecteditem(item);
  };

  return (
    <div className="grid grid-rows-[100px_1fr_1fr] grid-flow-col min-w-60 bg-projeto-secondary border-r border-projeto-border/30 h-screen">
      <nav className="flex items-center gap-2 justify-center">
        <Clapperboard className="text-projeto-tertiary" />
        <h1 className="text-2xl text-white font-bold">FlixList</h1>
      </nav>
      <nav className="flex flex-col gap-5 px-4 py-10 ">
        <MenuSidebar
          title="Home"
          selected={selecteditem === ''}
          icon={<Home size={20}/>}
          onClick={() => handleClick('')}
        />
        <MenuSidebar
          title="Watchlist"
          selected={selecteditem === 'watchlist'}
          icon={<Clock3 size={20}/>}
          onClick={() => handleClick('watchlist')}
        />
        <MenuSidebar
          title="Assitidos"
          selected={selecteditem === 'assistido'}
          icon={<TicketCheck size={20}/>}
          onClick={() => handleClick('assistido')}
        />
      </nav>
      <nav className="flex flex-col gap-8 px-4 py-10 mt-auto border-t border-projeto-border/70">
        <div className="flex items-center gap-3">
          <Settings size={20}/>
          <p>Configuração</p>
        </div>
        <div className="flex items-center gap-3">
          <LogOut size={20}/>
          <p>Sair</p>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
