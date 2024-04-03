import { BellDot } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="flex justify-between h-10 px-10 py-12 ">
        <ul className="flex items-center gap-10 font-bold cursor-pointer text-xl ">
          <Link to="/movies">
            <li className="hover:text-white ">Filmes</li>
          </Link>
          <Link to="/series">
            <li className="hover:text-white">Series</li>
          </Link>
          <li className="hover:text-white">Animes</li>
        </ul>

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
