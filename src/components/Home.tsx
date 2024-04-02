import Header from './Header';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import TopMovies from './fetchMoviesSeries/TopMovies';
import NowPlayingMovie from './fetchMoviesSeries/NowPlayingMovie';
import UpComingMovie from './fetchMoviesSeries/UpComingMovie';

function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-10 px-10 py-12 relative">
        <div className="mb-10">
          <Search className="absolute bottom-[.7rem] left-[3rem]" />
          <Input
            className="border-0 bg-projeto-secondary rounded pl-10 text-lg h-12 focus:ring focus:ring-projeto-tertiary"
            placeholder="Pesquise por um filme ou serie..."
          />
        </div>
        <TopMovies />
        <NowPlayingMovie />
        <UpComingMovie />
      </div>
    </div>
  );
}

export default Home;
