import { useData, MovieItem } from '../UserContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const movieIMG = import.meta.env.VITE_IMG;

function UpComingMovie() {
  const { upComingMovie } = useData();
  return (
    <div>
      <h2 className="border-b border-projeto-border/50 mb-6">
        Os <span>{upComingMovie?.length}</span> filmes a serem lançados.
      </h2>
      <div className="grid grid-cols-5 gap-1">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          className="h-[200px] max-w-[740px] "
        >
          {upComingMovie?.map((item: MovieItem) => (
            <SwiperSlide
              key={item.id}
              // onClick={() => navigate(`/movie/${item.id}`)}
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

export default UpComingMovie;
