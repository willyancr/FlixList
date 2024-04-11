import { Link } from 'react-router-dom';
import { useData } from '../UserContext';
import { MovieItem } from '../Types/MovieItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const movieIMG = import.meta.env.VITE_IMG;

function NowPlayingMovie() {
  const { nowPlayingMovie, handleClickMovieSerie } = useData();
  return (
    <div className="mt-6">
      <h2 className="border-b border-projeto-border/50 mb-6">
        Os <span>{nowPlayingMovie?.length}</span> filmes mais recentes
      </h2>
      <div className="grid grid-cols-5 gap-1">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          className="swiperCapa"
        >
          {nowPlayingMovie?.map((movie: MovieItem) => (
            <SwiperSlide
              key={movie.id}
              onClick={() => handleClickMovieSerie(movie.id)}
            >
              <Link to={`/infofilmes/${movie.title}`}>
                <img
                  src={`${movieIMG}${movie.poster_path}`}
                  alt=""
                  className="rounded cursor-pointer hover:border border-blue-600"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NowPlayingMovie;
