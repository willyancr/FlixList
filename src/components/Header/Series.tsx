import NowPlayingSeries from '../fetchMoviesSeries/NowPlayingSeries';
import PopularSeries from '../fetchMoviesSeries/PopularSeries';
import TopSeries from '../fetchMoviesSeries/TopSeries';
import Header from './Header';

function Series() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-10 px-10 py-12">
        <TopSeries />
        <NowPlayingSeries />
        <PopularSeries />
      </div>
    </div>
  );
}

export default Series;
