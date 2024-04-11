import { useEffect, useState } from 'react';
import { Star, CirclePlus } from 'lucide-react';
import { useData } from '../UserContext';
import { MovieItem } from '../Types/MovieItem';
import Header from '../Header/Header';
import InfosDetails from './InfosDetails';
import VoteAndAddWatchlist from './VoteAndAddWatchlist';

const serieURL = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;
const serieIMG = import.meta.env.VITE_IMG;

function InfoSerie() {
  const { selectedMovieSerie } = useData();
  const [infoSerie, setInfoSerie] = useState({} as MovieItem);

  useEffect(() => {
    const fetchInfoSerie = async () => {
      const response = await fetch(
        `${serieURL}${selectedMovieSerie}?language=pt-BR${apiKey}`,
      );
      const data = await response.json();
      setInfoSerie(data);
    };
    fetchInfoSerie();
  }, [selectedMovieSerie]);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="px-10 py-12">
        <h1 className="border-b border-projeto-border/50 mb-6 text-3xl ">
          Informações
        </h1>
        <div className="grid grid-cols-2 gap-2 ">
          <img
            src={`${serieIMG}${infoSerie.poster_path}`}
            alt="Capa do filme"
            className="w-80 rounded"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {infoSerie.name}{' '}
              <span className="text-white/40 font-normal">
                ({infoSerie.first_air_date?.substring(0, 4)})
              </span>
            </h1>
            <p className="mb-6 text-white/60">
              {infoSerie.genres?.map((genre) => genre.name).join(' • ')}
            </p>
            <div className="mb-16">
              <h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
              <p className="text-white/60">{infoSerie.overview}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <InfosDetails
                label="Título original"
                title={infoSerie.original_name}
              />
              <InfosDetails
                label="Idioma original"
                title={infoSerie.original_language}
              />
              <InfosDetails
                label="Emissora"
                title={infoSerie.networks?.[0].name}
              />
              <InfosDetails label="Situação" title={infoSerie.status} />
              <InfosDetails
                label="Temporada(s)"
                title={infoSerie.number_of_seasons}
              />
              <InfosDetails
                label="Episódios"
                title={infoSerie.number_of_episodes}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <VoteAndAddWatchlist
              icon={<Star size={20} />}
              title={infoSerie.vote_average?.toFixed(1)}
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

export default InfoSerie;
