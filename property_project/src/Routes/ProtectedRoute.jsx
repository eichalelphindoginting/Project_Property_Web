// src/routes/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Sesuaikan path jika perlu

const ProtectedRoute = ({ children }) => {
  // Ambil status login dan loading dari AuthContext
  const { isLoggedIn, loading } = useAuth();

  // Selama AuthContext masih memeriksa sesi, tampilkan pesan loading
  // Ini penting untuk mencegah redirect sebelum status login diketahui
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Jika pengecekan selesai dan user TIDAK login,
  // alihkan ke halaman login
  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  // Jika pengecekan selesai dan user SUDAH login,
  // tampilkan halaman yang seharusnya (children)
  return children;
};

export default ProtectedRoute;