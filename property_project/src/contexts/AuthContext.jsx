/* eslint-disable react-refresh/only-export-components */
// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../lib/supabaseClient';// Asumsikan Anda punya file ini

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cek sesi yang sedang aktif
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            // Di dunia nyata, Anda akan mengambil role dari database
            // Contoh: ambil role dari tabel 'profiles' berdasarkan user.id
            // Untuk contoh ini, kita hardcode atau simpan di user_metadata
            setRole(session?.user?.user_metadata?.role ?? null);
            setLoading(false);
        };

        getSession();

        // Dengarkan perubahan status auth
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
                setRole(session?.user?.user_metadata?.role ?? null);
                setLoading(false);
            }
        );

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    const value = {
        user,
        role,
        isLoggedIn: !!user,
        isAdmin: role === 'admin',
        loading,
    };

    // Jangan render apapun sampai pengecekan auth selesai
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// Buat hook custom untuk mempermudah penggunaan context
export function useAuth() {
    return useContext(AuthContext);
}