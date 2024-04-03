import NowPlayingMovie from '../fetchMoviesSeries/NowPlayingMovie';
import TopMovies from '../fetchMoviesSeries/TopMovies';
import UpComingMovie from '../fetchMoviesSeries/UpComingMovie';
import Header from './Header';

function Movies() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-10 px-10 py-12">
        <TopMovies />
        <NowPlayingMovie />
        <UpComingMovie />
      </div>
    </div>
  );
}

export default Movies;
