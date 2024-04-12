import React, { createContext, useContext, useEffect, useState } from 'react';
import { MovieItem } from '../Types/MovieItem';
import useFetch from '../Hooks/useFetch';

const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

type UserContextValue = {
  topMovies: MovieItem[] | null;
  nowPlayingMovie: MovieItem[] | null;
  upComingMovie: MovieItem[] | null;
  infoMovie: MovieItem;

  selectedItemMenu: string | null;
  selectedMovieSerie: number | null;
  selectedPath: { path: string; title: string; id: number };

  handleClickMenu: (item: string) => void;
  handleClickMovieSerie: (id: number) => void;
  handleClickPath: (path: string, title: string, id: number) => void;
};

const UserContextMovie = createContext<UserContextValue | null>(null);

export const useDataMovie = () => {
  const context = useContext(UserContextMovie);
  if (context == null) {
    throw new Error('useData must be used within a UserContextProvider');
  }
  return context;
};
function UserContextMovieProvider({ children }: React.PropsWithChildren) {
  const topMovies = useFetch(moviesURL, 'top_rated');
  const nowPlayingMovie = useFetch(moviesURL, 'now_playing');
  const upComingMovie = useFetch(moviesURL, 'upcoming');

  const [selectedItemMenu, setSelectedItemMenu] = useState<string | null>(null);
  const [selectedMovieSerie, setSelectedMovieSerie] = useState<number | null>(
    null,
  );
  const [selectedPath, setSelectedPath] = useState({
    path: '',
    title: '',
    id: 0,
  });
  const [infoMovie, setInfoMovie] = useState({} as MovieItem);

  const handleClickPath = (path: string, title: string, id: number) =>
    setSelectedPath({ path, title, id });
  const handleClickMovieSerie = (id: number) => setSelectedMovieSerie(id);
  const handleClickMenu = (item: string) => setSelectedItemMenu(item);

  useEffect(() => {
    if (selectedMovieSerie !== null) {
      const fetchInfoMovie = async () => {
        const response = await fetch(
          `${moviesURL}${selectedMovieSerie}?language=pt-BR${apiKey}`,
        );
        const data = await response.json();
        setInfoMovie(data);
      };
      fetchInfoMovie();
    }
  }, [selectedMovieSerie]);

  return (
    <UserContextMovie.Provider
      value={{
        topMovies,
        nowPlayingMovie,
        upComingMovie,
        selectedItemMenu,
        handleClickMenu,
        selectedMovieSerie,
        handleClickMovieSerie,
        handleClickPath,
        selectedPath,
        infoMovie,
      }}
    >
      {children}
    </UserContextMovie.Provider>
  );
}

export default UserContextMovieProvider;
