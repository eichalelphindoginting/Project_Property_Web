/* eslint-disable no-unused-vars */
// src/pages/admin/AdminDashboard.jsx

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaPlus, FaSignOutAlt, FaHome, FaSpinner } from 'react-icons/fa';
import ImageDropzone from '../../components/admin/ImageDropZone';
import AdminPropertyCard from '../../components/admin/AdminPropertyCard';

const initialFormData = {
    nama: '', deskripsi: '', harga: '', 
    tipe_properti: '', alamat: '', luas_tanah: '',
    luas_bangunan: '', Maps_url: ''
};

const AdminDashboard = () => {
    const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState(initialFormData);
    const [editingId, setEditingId] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [imageFiles, setImageFiles] = useState([]);
    const [luasTanahUnit, setLuasTanahUnit] = useState('m2');
    const [luasBangunanUnit, setLuasBangunanUnit] = useState('m2');

    useEffect(() => {
        const fetchUserAndProperties = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserEmail(user.email);
                fetchProperties();
            } else {
                navigate('/admin-login');
            }
        };
        fetchUserAndProperties();
    }, [navigate]);
    
    const fetchProperties = async () => {
        setLoading(true);
        const { data } = await supabase.from('properties').select(`*, property_images (id, image_url)`).order('created_at', { ascending: false });
        if (data) setProperties(data);
        setLoading(false);
    };

    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleImageSelection = (files) => setImageFiles(files);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editingId && imageFiles.length === 0) {
            alert("Untuk properti baru, Anda wajib menambahkan setidaknya satu gambar.");
            return;
        }
        setSaving(true);

        let luasTanahM2 = parseFloat(formData.luas_tanah) || 0;
        if (luasTanahUnit === 'hektar') luasTanahM2 *= 10000;
        let luasBangunanM2 = parseFloat(formData.luas_bangunan) || 0;
        if (luasBangunanUnit === 'hektar') luasBangunanM2 *= 10000;

        const submissionData = {
            ...formData,
            harga: parseInt(formData.harga, 10) || 0,
            luas_tanah: luasTanahM2,
            luas_bangunan: luasBangunanM2,
        };
        
        let propertyId = editingId;
        if (editingId) {
            const { error } = await supabase.from('properties').update(submissionData).eq('id', editingId);
            if (error) { alert("Gagal memperbarui data: " + error.message); setSaving(false); return; }
        } else {
            const { data, error } = await supabase.from('properties').insert([submissionData]).select();
            if (error) { alert("Gagal menyimpan properti: " + error.message); setSaving(false); return; }
            propertyId = data[0].id;
        }

        if (imageFiles.length > 0) {
            for (const file of imageFiles) {
                const fileName = `private/${Date.now()}_${file.name}`;
                const { error: uploadError } = await supabase.storage.from('gambar-properti').upload(fileName, file);
                if (uploadError) { console.error('Upload Error:', uploadError); continue; }
                const { data: urlData } = supabase.storage.from('gambar-properti').getPublicUrl(fileName);
                await supabase.from('property_images').insert([{ property_id: propertyId, image_url: urlData.publicUrl }]);
            }
        }
        
        alert(`Properti "${formData.nama}" berhasil disimpan!`);
        resetForm();
        fetchProperties();
        setSaving(false);
    };

    const handleEdit = (prop) => {
        setEditingId(prop.id);
        setFormData({
            nama: prop.nama || '', deskripsi: prop.deskripsi || '', harga: prop.harga || '',
            tipe_properti: prop.tipe_properti || '', alamat: prop.alamat || '', luas_tanah: prop.luas_tanah || '',
            luas_bangunan: prop.luas_bangunan || '', Maps_url: prop.Maps_url || ''
        });
        setImageFiles([]);
        setLuasTanahUnit('m2');
        setLuasBangunanUnit('m2');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteProperty = async (id) => {
        if (window.confirm("Yakin ingin menghapus properti ini beserta semua gambarnya?")) {
            await supabase.from('properties').delete().eq('id', id);
            if (editingId === id) resetForm(); // Reset form jika yang dihapus adalah yang sedang diedit
            fetchProperties();
        }
    };

    const handleDeleteImage = async (imageId, imageUrl) => {
        if (!window.confirm("Yakin ingin menghapus gambar ini?")) return;
        const filePath = new URL(imageUrl).pathname.split('/gambar-properti/')[1];
        await supabase.storage.from('gambar-properti').remove([filePath]);
        await supabase.from('property_images').delete().eq('id', imageId);
        fetchProperties();
    };
    
    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin-login');
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData(initialFormData);
        setImageFiles([]);
    };
    
    const currentEditingImages = editingId ? properties.find(p => p.id === editingId)?.property_images || [] : [];

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3"><FaHome className="text-teal-600 text-2xl"/><div><h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1><p className="text-sm text-gray-500">Selamat datang, {userEmail}</p></div></div>
                    <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"><FaSignOutAlt /><span>Logout</span></button>
                </div>
            </header>

            <main className="container p-4 md:p-6 mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">{editingId ? <FaEdit className="text-teal-600" /> : <FaPlus className="text-teal-600" />} {editingId ? `Edit Properti #${editingId}` : 'Tambah Properti Baru'}</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        <div className="md:col-span-1"><label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Properti</label><div className="mt-1"><input required id="nama" type="text" name="nama" placeholder="cth: Rumah Cluster Modern" value={formData.nama} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        <div className="md:col-span-1"><label htmlFor="harga" className="block text-sm font-medium text-gray-700">Total Harga</label><div className="mt-1"><input required id="harga" type="number" name="harga" placeholder="cth: 500000000" value={formData.harga} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        <div className="md:col-span-1"><label htmlFor="tipe_properti" className="block text-sm font-medium text-gray-700">Tipe Properti</label><div className="mt-1"><input required id="tipe_properti" type="text" name="tipe_properti" placeholder="cth: Rumah, Tanah, Ruko" value={formData.tipe_properti} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        <div className="md:col-span-1"><label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label><div className="mt-1"><input required id="alamat" type="text" name="alamat" placeholder="Alamat lengkap properti" value={formData.alamat} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        <div className="md:col-span-1"><label htmlFor="luas_tanah" className="block text-sm font-medium text-gray-700">Luas Tanah</label><div className="mt-1 flex rounded-md shadow-sm"><input type="number" name="luas_tanah" id="luas_tanah" value={formData.luas_tanah} onChange={handleInputChange} className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 border" placeholder="0" /><select value={luasTanahUnit} onChange={(e) => setLuasTanahUnit(e.target.value)} className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"><option value="m2">m²</option><option value="hektar">Hektar</option></select></div></div>
                        <div className="md:col-span-1"><label htmlFor="luas_bangunan" className="block text-sm font-medium text-gray-700">Luas Bangunan</label><div className="mt-1 flex rounded-md shadow-sm"><input type="number" name="luas_bangunan" id="luas_bangunan" value={formData.luas_bangunan} onChange={handleInputChange} className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 border" placeholder="0" /><select value={luasBangunanUnit} onChange={(e) => setLuasBangunanUnit(e.target.value)} className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"><option value="m2">m²</option><option value="hektar">Hektar</option></select></div></div>
                        <div className="md:col-span-2"><label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">Deskripsi</label><div className="mt-1"><textarea name="deskripsi" id="deskripsi" placeholder="Deskripsi lengkap properti" value={formData.deskripsi} onChange={handleInputChange} rows={4} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        <div className="md:col-span-2"><label htmlFor="Maps_url" className="block text-sm font-medium text-gray-700">URL Google Maps</label><div className="mt-1"><input type="url" name="Maps_url" id="Maps_url" placeholder="https://maps.app.goo.gl/..." value={formData.Maps_url} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" /></div></div>
                        
                        <ImageDropzone 
                            onFilesSelected={handleImageSelection}
                            selectedFiles={imageFiles}
                            existingImages={currentEditingImages}
                            onDeleteExistingImage={handleDeleteImage}
                            editingId={editingId}
                        />

                        <div className="col-span-1 md:col-span-2 mt-4">
                            <button type="submit" disabled={saving} className="px-6 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 font-bold">{saving ? <FaSpinner className="animate-spin"/> : (editingId ? 'Update Properti' : 'Simpan Properti Baru')}</button>
                            {editingId && (<button type="button" onClick={resetForm} className="ml-4 px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold">Batal Edit</button>)}
                        </div>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Properti Anda ({properties.length})</h2>
                    {loading ? <p className="text-center p-8">Memuat...</p> : properties.length === 0 ? <p className="text-center p-8 text-gray-500">Belum ada properti yang ditambahkan.</p> : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map(prop => (
                                <AdminPropertyCard 
                                    key={prop.id}
                                    property={prop}
                                    onEdit={handleEdit}
                                    onDelete={handleDeleteProperty}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;