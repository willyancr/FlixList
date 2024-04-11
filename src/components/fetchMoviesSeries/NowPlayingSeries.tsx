import { Link } from 'react-router-dom';
import { useData } from '../UserContext';
import { MovieItem } from '../Types/MovieItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const serieIMG = import.meta.env.VITE_IMG;

function NowPlayingSeries() {
  const { nowPlayingSeries, handleClickMovieSerie } = useData();
  return (
    <div className="mt-6">
      <h2 className="border-b border-projeto-border/50 mb-6">
        As <span>{nowPlayingSeries?.length}</span> séries de TV em exibição
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
          {nowPlayingSeries?.map((item: MovieItem) => (
            <SwiperSlide
              key={item.id}
              onClick={() => handleClickMovieSerie(item.id)}
            >
              <Link to={`/infoseries/${item.title}`}>
                <img
                  src={`${serieIMG}${item.poster_path}`}
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

export default NowPlayingSeries;
