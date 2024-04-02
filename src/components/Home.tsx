import React from 'react';
import Header from './Header';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { MovieItem, useData } from './UserContext';

const movieIMG = import.meta.env.VITE_IMG;
function Home() {
  const { topFilmes } = useData();

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
        <div>
          <h2 className="border-b border-projeto-border/50 mb-6">
            Top 20 filmes com as maiores notas no TMDb
          </h2>
          <div className="grid grid-cols-5 gap-3">
            {topFilmes?.map((item: MovieItem) => (
              <div key={item.id}>
                <img
                  src={`${movieIMG}${item.poster_path}`}
                  alt=""
                  className="rounded cursor-pointer hover:border border-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
