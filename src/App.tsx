

// src/App.tsx
import { Routes, Route } from 'react-router-dom'; // Mengimpor Routes dan Route
import HomePage from './pages/HomePage'; // Komponen halaman utama

const App = () => {
  return (
    <div>
      {/* Menampilkan header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
