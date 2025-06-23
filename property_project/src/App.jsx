// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Halaman-halaman yang akan kita gunakan
import LandingPage from './pages/Public/LandingPage';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

// Import komponen untuk melindungi rute admin
// import ProtectedRoute from './routes/ProtectedRoute';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === RUTE PUBLIK === */}
        {/* Saat pengunjung membuka domain utama (www.websiteanda.com), tampilkan LandingPage */}
        <Route path="/" element={<LandingPage />} />


        {/* === RUTE ADMIN === */}
        {/* Halaman login untuk admin, bisa diakses di www.websiteanda.com/admin-login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Halaman dashboard admin, ini adalah halaman yang perlu dilindungi */}
        {/* Untuk sekarang kita buat langsung, nanti kita tambahkan <ProtectedRoute> */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
            </ProtectedRoute>} 
            />

      </Routes>
    </BrowserRouter>
  );
}

export default App;