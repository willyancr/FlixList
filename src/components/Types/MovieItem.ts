export type MovieItem = {
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  status: string;
  vote_average: number;
  runtime: number;
  budget: number;
  revenue: number;
  number_of_episodes: number;
  number_of_seasons: number;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  networks: [
    {
      id: number;
      name: string;
    },
  ];
};
