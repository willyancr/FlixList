import { BellDot } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import HandleMenus from '../HandleMenus';
import { useDataMovie } from '../Context/UserContextMovies';

function Header() {
  const { selectedItemMenu, handleClickMenu } = useDataMovie();

  return (
    <header>
      <nav className="flex justify-between h-10 px-9 py-12">
        <div className="flex items-center gap-5 font-bold cursor-pointer text-xl">
          <Link to={'/filmes'}>
            <HandleMenus
              title="Filmes"
              selected={selectedItemMenu === 'filmes'}
              onClick={() => handleClickMenu('filmes')}
            />
          </Link>
          <Link to={'/series'}>
            <HandleMenus
              title="Series"
              selected={selectedItemMenu === 'series'}
              onClick={() => handleClickMenu('series')}
            />
          </Link>
          <Link to={'/'}>
            <HandleMenus
              title="Animes"
              selected={selectedItemMenu === 'animes'}
              onClick={() => handleClickMenu('')}
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
