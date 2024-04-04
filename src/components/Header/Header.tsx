import { BellDot } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import HandleMenus from '../HandleMenus';
import { useData } from '../UserContext';

function Header() {
  const { selectedItem, handleClick } = useData();

  return (
    <header>
      <nav className="flex justify-between h-10 px-9 py-12">
        <div className="flex items-center gap-5 font-bold cursor-pointer text-xl">
          <Link to={'/filmes'} >
            <HandleMenus
              title="Filmes"
              selected={selectedItem === 'filmes'}
              onClick={() => handleClick('filmes')}
            />
          </Link>
          <Link to={'/series'}>
            <HandleMenus
              title="Series"
              selected={selectedItem === 'series'}
              onClick={() => handleClick('series')}
            />
          </Link>
          <Link to={'/'}>
            <HandleMenus
              title="Animes"
              selected={selectedItem === 'animes'}
              onClick={() => handleClick('')}
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <BellDot />
          <Avatar>
            <AvatarImage src="https://github.com/willyancr.png" />
          </Avatar>
        </div>
      </nav>
    </header>
  );
}

export default Header;
