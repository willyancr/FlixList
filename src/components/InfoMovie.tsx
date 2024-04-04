import { useEffect, useState } from 'react';
import Header from './Header/Header';
import { Star, CirclePlus } from 'lucide-react';
import { MovieItem, useData } from './UserContext';

const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;
const movieIMG = import.meta.env.VITE_IMG;

function InfoMovie() {
  const { selectedMovie } = useData();
  const [infoMovie, setInfoMovie] = useState({} as MovieItem);

  useEffect(() => {
    const fetchInfoMovie = async () => {
      const response = await fetch(
        `${moviesURL}${selectedMovie}?language=pt-BR${apiKey}`,
      );
      const data = await response.json();
      setInfoMovie(data);
    };
    fetchInfoMovie();
  }, [selectedMovie]);

  const convertRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="px-10 py-12">
        <h1 className="border-b border-projeto-border/50 mb-6 text-3xl ">
          Informações
        </h1>
        <div className="grid grid-cols-2 gap-1 ">
          <img
            src={`${movieIMG}${infoMovie.poster_path}`}
            alt="Capa do filme"
            className="w-[300px] rounded drop-shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {infoMovie.title}{' '}
              <span className="text-white/40 font-normal">
                ({infoMovie.release_date?.substring(0, 4)})
              </span>
            </h1>
            <p className="mb-6 text-white/60">
              Drama ● {convertRuntime(infoMovie.runtime!)}
            </p>
            <div className="mb-16">
              <h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
              <p className="text-white/60">{infoMovie.overview}</p>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <h3 className="font-bold">Título original</h3>
                <p className="text-white/60">{infoMovie.original_title}</p>
              </div>
              <div>
                <h3 className="font-bold">Idioma original</h3>
                <p className="text-white/60">{infoMovie.original_language}</p>
              </div>
              <div>
                <h3 className="font-bold">Orçamento</h3>
                <p className="text-white/60">
                  {infoMovie.budget?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary">
              <Star size={20} />
              <h3 className="">{infoMovie.vote_average?.toFixed(1)}</h3>
            </div>
            <div className="flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary ">
              <CirclePlus size={20} />
              <h3 className="">Add Watchlist</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InfoMovie;
