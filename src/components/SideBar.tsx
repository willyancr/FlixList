import React from 'react';
import {
  Clapperboard,
  Home,
  Clock3,
  TicketCheck,
  Settings,
  LogOut,
} from 'lucide-react';

function SideBar() {
  return (
    <div className="grid grid-rows-[100px_1fr_1fr] grid-flow-col w-48 bg-projeto-secondary border-r border-projeto-border/70 h-screen">
      <nav className="flex items-center gap-2 justify-center">
        <Clapperboard className="text-projeto-tertiary" />
        <h1 className="text-2xl text-white font-bold">FlixList</h1>
      </nav>
      <nav className="flex flex-col gap-10 px-6 py-10 ">
        <div className="flex items-center gap-3 hover:text-projeto-tertiary cursor-pointer">
          <Home size={22} />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-3 hover:text-projeto-tertiary cursor-pointer">
          <Clock3 size={22} />
          <p>Wactchlist</p>
        </div>
        <div className="flex items-center gap-3 hover:text-projeto-tertiary cursor-pointer">
          <TicketCheck size={22} />
          <p>Assistidos</p>
        </div>
      </nav>
      <nav className="flex flex-col gap-8 px-6 py-10 mt-auto border-t border-projeto-border/70">
        <div className="flex items-center gap-3 cursor-pointer">
          <Settings />
          <p>Configuração</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <LogOut />
          <p>Sair</p>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
