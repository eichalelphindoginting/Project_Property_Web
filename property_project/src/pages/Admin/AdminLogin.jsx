// src/pages/admin/AdminLogin.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import Logo from '../../assets/Logo.png'; // <-- Pastikan path logo Anda benar

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // <-- State untuk loading
    const [error, setError] = useState(''); // <-- State untuk pesan error
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // <-- Reset error setiap kali login dicoba

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            setError(loginError.message); // <-- Tampilkan pesan error dengan lebih baik
        } else {
            navigate('/admin/dashboard');
        }

        setLoading(false); // <-- Matikan loading setelah selesai
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <img src={Logo} alt="Logo" className="w-24 h-auto mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">Admin Panel Login</h1>
                    <p className="text-gray-500">Silakan masuk untuk mengelola properti.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="anda@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* Menampilkan pesan error jika ada */}
                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                            {error}
                        </div>
                    )}

                    <div>
                        <button 
                            type="submit" 
                            disabled={loading} // <-- Tombol dinonaktifkan saat loading
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;