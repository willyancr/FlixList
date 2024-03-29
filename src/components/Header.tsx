import React from 'react';
import { BellDot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Header() {
  return (
    <nav className="flex justify-between w-full h-10 px-10 py-12">
      <ul className="flex items-center gap-10 font-bold cursor-pointer text-xl">
        <li className='hover:text-white'>Filmes</li>
        <li className='hover:text-white'>Series</li>
        <li className='hover:text-white'>Animes</li>
      </ul>

      <div className="flex items-center gap-3">
        <BellDot />
        <Avatar>
          <AvatarImage src="https://github.com/willyancr.png" />
        </Avatar>
      </div>
    </nav>
  );
}

export default Header;
