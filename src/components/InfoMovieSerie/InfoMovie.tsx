import Header from '../Header/Header';
import InfosDetails from './InfosDetails';
import VoteAndAddWatchlist from './VoteAndAddWatchlist';
import { useEffect, useState } from 'react';
import { Star, CirclePlus } from 'lucide-react';
import { useData } from '../UserContext';
import { MovieItem } from '../Types/MovieItem';

const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;
const movieIMG = import.meta.env.VITE_IMG;

function InfoMovie() {
  const { selectedMovieSerie } = useData();
  const [infoMovie, setInfoMovie] = useState({} as MovieItem);

  useEffect(() => {
    const fetchInfoMovie = async () => {
      const response = await fetch(
        `${moviesURL}${selectedMovieSerie}?language=pt-BR${apiKey}`,
      );
      const data = await response.json();
      setInfoMovie(data);
    };
    fetchInfoMovie();
  }, [selectedMovieSerie]);

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
        <div className="grid grid-cols-2 gap-2 ">
          <img
            src={`${movieIMG}${infoMovie.poster_path}`}
            alt="Capa do filme"
            className="w-80 rounded"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {infoMovie.title}{' '}
              <span className="text-white/40 font-normal">
                ({infoMovie.release_date?.substring(0, 4)})
              </span>
            </h1>
            <p className="mb-6 text-white/60">
              {infoMovie.genres?.map((genre) => genre.name).join(' • ')} ●{' '}
              {convertRuntime(infoMovie.runtime!)}
            </p>
            <div className="mb-16">
              <h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
              <p className="text-white/60">{infoMovie.overview}</p>
            </div>
            <div className="grid grid-cols-3">
              <InfosDetails
                label="Título original"
                title={infoMovie.original_title}
              />
              <InfosDetails
                label="Idioma original"
                title={infoMovie.original_language}
              />
              <InfosDetails
                label="Orçamento"
                title={infoMovie.budget?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                })}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <VoteAndAddWatchlist
              icon={<Star size={20} />}
              title={infoMovie.vote_average?.toFixed(1)}
            />
            <VoteAndAddWatchlist
              icon={<CirclePlus size={20} />}
              title="Add Watchlist"
              className="cursor-pointer"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default InfoMovie;
