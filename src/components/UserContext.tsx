import React from 'react';

const moviesURL = import.meta.env.VITE_API_MOVIE;
const seriesURL = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;

export type MovieItem = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  runtime: number;
  budget: number;
  revenue: number;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
};

type UserContextValue = {
  topMovies: MovieItem[] | null;
  nowPlayingMovie: MovieItem[] | null;
  upComingMovie: MovieItem[] | null;
  topSeries: MovieItem[] | null;
  nowPlayingSeries: MovieItem[] | null;
  popularSeries: MovieItem[] | null;
  selectedItem: string | null;
  selectedMovie: number | null;
  handleClick: (item: string) => void;
  handleClickMovie: (id: number) => void;
};

const UserContext = React.createContext<UserContextValue | null>(null);
export const useData = () => {
  const context = React.useContext(UserContext);
  if (context == null) {
    throw new Error('useData must be used within a UserContextProvider');
  }
  return context;
};

function UserContextProvider({ children }: React.PropsWithChildren) {
  const [topMovies, setTopMovies] = React.useState<MovieItem[]>([]);
  const [nowPlayingMovie, setNowPlayingMovie] = React.useState<MovieItem[]>([]);
  const [upComingMovie, setUpComingMovie] = React.useState<MovieItem[]>([]);
  const [topSeries, setTopSeries] = React.useState<MovieItem[]>([]);
  const [nowPlayingSeries, setNowPlayingSeries] = React.useState<MovieItem[]>(
    [],
  );
  const [popularSeries, setPopularSeries] = React.useState<MovieItem[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = React.useState<number | null>(null);

  const handleClickMovie = (id: number) => {
    setSelectedMovie(id);
  };

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  const fetchMovies = async (
    url: string,
    enpoits: string,
    setStage: React.Dispatch<React.SetStateAction<MovieItem[]>>,
  ) => {
    const response = await fetch(`${url}${enpoits}?language=pt-BR${apiKey}`);
    const data = await response.json();
    setStage(data.results);
  };

  React.useEffect(() => {
    fetchMovies(moviesURL, 'top_rated', setTopMovies);
    fetchMovies(moviesURL, 'now_playing', setNowPlayingMovie);
    fetchMovies(moviesURL, 'upcoming', setUpComingMovie);

    fetchMovies(seriesURL, 'top_rated', setTopSeries);
    fetchMovies(seriesURL, 'on_the_air', setNowPlayingSeries);
    fetchMovies(seriesURL, 'popular', setPopularSeries);
  }, []);

  return (
    <UserContext.Provider
      value={{
        topMovies,
        nowPlayingMovie,
        upComingMovie,
        topSeries,
        nowPlayingSeries,
        popularSeries,
        selectedItem,
        handleClick,
        selectedMovie,
        handleClickMovie,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
