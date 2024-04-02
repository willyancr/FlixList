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
  name: string;
  email: string;
};

type UserContextValue = {
  topFilmes: MovieItem[] | null;
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
  const [topFilmes, setTopFilmes] = React.useState<MovieItem[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${moviesURL}top_rated?language=pt-BR${apiKey}`,
      );
      const data = await response.json();
      setTopFilmes(data.results);
    };
    fetchData();
  });

  return (
    <UserContext.Provider value={{ topFilmes }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
