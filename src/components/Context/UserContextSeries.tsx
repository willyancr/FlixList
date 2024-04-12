import React, { createContext, useContext, useEffect, useState } from 'react';
import { MovieItem } from '../Types/MovieItem';
import useFetch from '../Hooks/useFetch';

const seriesURL = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;

type UserContextValue = {
  topSeries: MovieItem[] | null;
  nowPlayingSeries: MovieItem[] | null;
  popularSeries: MovieItem[] | null;
  infoSerie: MovieItem;
  selectedMovieSerie: number | null;
  handleClickMovieSerie: (id: number) => void;
};

const UserContextSerie = createContext<UserContextValue | null>(null);

export const useDataSerie = () => {
  const context = useContext(UserContextSerie);
  if (context == null) {
    throw new Error('useData must be used within a UserContextProvider');
  }
  return context;
};
function UserContextSerieProvider({ children }: React.PropsWithChildren) {
  const topSeries = useFetch(seriesURL, 'top_rated');
  const nowPlayingSeries = useFetch(seriesURL, 'on_the_air');
  const popularSeries = useFetch(seriesURL, 'popular');

  const [selectedMovieSerie, setSelectedMovieSerie] = useState<number | null>(
    null,
  );
  const [infoSerie, setInfoSerie] = useState({} as MovieItem);

  const handleClickMovieSerie = (id: number) => setSelectedMovieSerie(id);

  useEffect(() => {
    if (selectedMovieSerie !== null) {
      const fetchInfoMovie = async () => {
        const response = await fetch(
          `${seriesURL}${selectedMovieSerie}?language=pt-BR${apiKey}`,
        );
        const data = await response.json();
        setInfoSerie(data);
      };
      fetchInfoMovie();
    }
  }, [selectedMovieSerie]);

  return (
    <UserContextSerie.Provider
      value={{
        topSeries,
        nowPlayingSeries,
        popularSeries,
        infoSerie,
        selectedMovieSerie,
        handleClickMovieSerie,
      }}
    >
      {children}
    </UserContextSerie.Provider>
  );
}

export default UserContextSerieProvider;
