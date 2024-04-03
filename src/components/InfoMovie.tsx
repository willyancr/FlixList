import Header from './Header/Header';
import { Star, CirclePlus } from 'lucide-react';
function InfoMovie() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="px-10 py-12">
        <h1 className="border-b border-projeto-border/50 mb-6 text-3xl ">
          Informações
        </h1>
        <div className="grid grid-cols-2 gap-1 ">
          <img
            src="./src/image/capa-filme-01.png"
            alt="Capa do filme"
            className="rounded drop-shadow"
          />
          <div>
            <h1 className="text-3xl font-bold">
              Nome do Filme <span className="text-white/40">(2024)</span>
            </h1>
            <p className="mb-6 text-white/60">Gênero ● 1h 55m</p>
            <div className="mb-16">
              <h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
                dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
                sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <h3 className="font-bold">Título original</h3>
                <p>The Beekeeper</p>
              </div>
              <div>
                <h3 className="font-bold">Idioma original</h3>
                <p>Inglês</p>
              </div>
              <div>
                <h3 className="font-bold">Orçamento</h3>
                <p>$135,000,000.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary">
              <Star size={20} />
              <h3 className="">8.5</h3>
            </div>
            <div className="flex items-center gap-1 border border-projeto-tertiary rounded py-2 px-5 text-projeto-tertiary ">
              <CirclePlus size={20} />
              <h3 className="">Add Watchlist</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InfoMovie;
