import { useData } from '../UserContext';
import { Link } from 'react-router-dom';
import { MovieItem } from '../Types/MovieItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const serieIMG = import.meta.env.VITE_IMG;

function TopSeries() {
  const { topSeries, handleClickMovieSerie } = useData();
  return (
    <div >
      <h2 className="border-b border-projeto-border/50 mb-6">
        Top <span>{topSeries?.length}</span> series de TV mais bem avaliados
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
          {topSeries?.map((serie: MovieItem) => (
            <SwiperSlide
              key={serie.id}
              onClick={() => handleClickMovieSerie(serie.id)}
            >
              <Link to={`/infoseries/${serie.name}`}>
                <img
                  src={`${serieIMG}${serie.poster_path}`}
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

export default TopSeries;
