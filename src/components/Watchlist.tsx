import { Link } from 'react-router-dom';
import { useDataMovie } from './Context/UserContextMovies';
import Header from './Header/Header';

const movieIMG = import.meta.env.VITE_IMG;

function Watchlist() {
  const { selectedPath, handleClickMovieSerie } = useDataMovie();
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-10 px-10 py-12">
        <h1 className="border-b border-projeto-border/50 mb-6">
          Você quer ver <span>40</span> filmes
        </h1>
        <div
          className="grid grid-cols-5 gap-3"
          onClick={() => handleClickMovieSerie(selectedPath.id)}
        >
          <Link to={`/infofilmes/${selectedPath.title}`}>
            <img
              src={`${movieIMG}${selectedPath.path}`}
              alt=""
              className="rounded cursor-pointer hover:border border-blue-600 hover:scale-105 transition ease-linear duration-1000"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
