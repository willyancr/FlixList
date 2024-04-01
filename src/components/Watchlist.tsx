import React from 'react';
import Header from './Header';

function Watchlist() {
  const capaFilme = [
    {
      id: Math.random(),
      path: './src/image/capa-filme-01.png',
    },
  ];
  const capaFilmeArray = Array(12).fill(capaFilme);
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-10 px-10 py-12">
        <h1 className="border-b border-projeto-border/50 mb-6">
          Você quer ver <span>40</span> filmes
        </h1>
        <div className="grid grid-cols-5 gap-3">
          {capaFilmeArray.map((item) => (
            <img
              src={item[0].path}
              alt=""
              key={item[0].id}
              className="rounded cursor-pointer hover:border border-blue-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
