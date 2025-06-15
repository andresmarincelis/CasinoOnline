import MainContent from './components/MainContent';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/main';
import { Roulette } from './pages/Roulette';
import GamesLayout from './layouts/games';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainContent />} />

        <Route element={<GamesLayout />}>
          <Route path="/roulette" element={<Roulette />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
