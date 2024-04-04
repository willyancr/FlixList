import { useData, MovieItem } from '../UserContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const movieIMG = import.meta.env.VITE_IMG;

function PopularSeries() {
  const { popularSeries } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="border-b border-projeto-border/50 mb-6">
        As <span>{popularSeries?.length}</span> séries de TV populares
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
          {popularSeries?.map((item: MovieItem) => (
            <SwiperSlide
              key={item.id}
              onClick={() => navigate(`/infomovie`)}
            >
              <img
                src={`${movieIMG}${item.poster_path}`}
                alt=""
                className="rounded cursor-pointer hover:border border-blue-600"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularSeries;
