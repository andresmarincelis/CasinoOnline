import React from 'react';
import { useNavigate } from 'react-router';

const games: { name: string; img: string }[] = [
  {
    name: 'dice',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdice.48d19648.webp&w=750&q=75',
  },
  {
    name: 'crash',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrash.8e03885a.webp&w=750&q=75',
  },
  {
    name: 'blackjack',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblackjack.0003e5af.webp&w=750&q=75',
  },
  {
    name: 'mines',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmines.3d215899.webp&w=750&q=75',
  },
  {
    name: 'war',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwar.e736b0f3.webp&w=750&q=75',
  },
  {
    name: 'roulette',
    img: 'https://runechat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froulette.59945f94.webp&w=750&q=75',
  },
];

const MainContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full overflow-y-auto flex justify-center"
      style={{ background: '#14213d' }}
    >
      <div className="w-full max-w-6xl px-4 md:px-8 py-8">
        {/* Banner/Carousel */}
        <div className="w-full flex justify-center mb-8">
          <div className="rounded-xl bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg h-40 w-full max-w-2xl flex items-center justify-center text-white text-2xl font-bold">
            Banner/Carousel
          </div>
        </div>

        {/* Runescape Gambling */}
        <h2 className="text-white text-xl font-bold mb-4">
          Runescape Gambling
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10">
          {games.map((game) => (
            <div
              onClick={() => navigate(`/${game.name}`)}
              className="cursor-pointer hover:scale-105"
            >
              <img src={game.img} alt={`${game.name} icon`} />
            </div>
          ))}
        </div>

        {/* Popular Slots */}
        <h3 className="text-white text-lg font-semibold mb-2">Popular Slots</h3>
        <div className="w-full flex flex-row gap-4 mb-4">
          {/* Ejemplo de slots populares */}
          <div className="bg-blue-800 rounded-lg flex items-center justify-center p-4 h-24 w-40 text-white font-bold text-md shadow">
            Slot 1
          </div>
          <div className="bg-blue-800 rounded-lg flex items-center justify-center p-4 h-24 w-40 text-white font-bold text-md shadow">
            Slot 2
          </div>
          <div className="bg-blue-800 rounded-lg flex items-center justify-center p-4 h-24 w-40 text-white font-bold text-md shadow">
            Slot 3
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-900 text-white px-4 py-1 rounded shadow flex items-center gap-2 text-sm hover:bg-blue-800">
            View All
            <span className="inline-block">&lt;</span>
            <span className="inline-block">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
