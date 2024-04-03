import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
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
        <h2 className="border-b border-projeto-border/50 mb-6">
          Resultado de um total de <span>0</span>
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <img
            src="./src/image/capa-filme-01.png"
            alt=""
            className="rounded cursor-pointer hover:border border-blue-600 hover:scale-105 transition ease-linear duration-1000"
            onClick={() => navigate('/infomovie')}
          />

          {/* <div>teste</div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
