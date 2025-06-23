// src/pages/admin/AdminDashboard.jsx

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaPlus, FaSignOutAlt, FaHome, FaImages, FaSpinner } from 'react-icons/fa';

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
    const [existingImages, setExistingImages] = useState([]);
    const [uploadingImages, setUploadingImages] = useState(false);

    useEffect(() => {
        const fetchInitialData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserEmail(user.email);
                fetchProperties();
            } else {
                navigate('/admin-login');
            }
        };
        fetchInitialData();
    }, [navigate]);
    
    const fetchProperties = async () => {
        setLoading(true);
        const { data } = await supabase.from('properties').select(`
            *,
            property_images (id, image_url)
        `).order('created_at', { ascending: false });
        
        if (data) setProperties(data);
        setLoading(false);
    };

    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleImageSelection = (e) => e.target.files && setImageFiles(Array.from(e.target.files));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        let propertyId = editingId;
        let submissionError = null;

        const submissionData = {
            ...formData,
            harga: parseInt(formData.harga, 10) || 0,
            luas_tanah: parseInt(formData.luas_tanah, 10) || 0,
            luas_bangunan: parseInt(formData.luas_bangunan, 10) || 0,
        };
        
        if (editingId) {
            const { error } = await supabase.from('properties').update(submissionData).eq('id', editingId);
            submissionError = error;
            alert('Data teks properti berhasil diperbarui!');
        } else {
            const { data, error } = await supabase.from('properties').insert([submissionData]).select();
            if (data && data.length > 0) {
                propertyId = data[0].id;
                handleEdit(data[0]); // Langsung masuk mode edit untuk properti baru
            }
            submissionError = error;
        }

        if (submissionError) {
            alert("Gagal menyimpan data properti: " + submissionError.message);
        }
        
        setSaving(false);
        fetchProperties();
    };
    
    const handleImageUpload = async () => {
        if (imageFiles.length === 0 || !editingId) return;

        setUploadingImages(true);

         console.log(`Memulai upload untuk properti ID: ${editingId}`);

        for (const file of imageFiles) {
            const fileName = `private/${Date.now()}_${file.name}`;
            console.log(`Mengunggah file: ${fileName}...`);
            const { error: uploadError } = await supabase.storage.from('gambar-properti').upload(fileName, file);

            if (uploadError) {
                console.error('Upload Error:', uploadError.message);
                continue; 
            }

            const { data: urlData } = supabase.storage.from('gambar-properti').getPublicUrl(fileName);
            
            await supabase.from('property_images').insert([{
                property_id: editingId,
                image_url: urlData.publicUrl
            }]);
            
        }
        
        alert(`${imageFiles.length} gambar berhasil diunggah!`);
        setImageFiles([]);
        if(document.querySelector('#image-upload-input')) {
            document.querySelector('#image-upload-input').value = "";
        }
        setUploadingImages(false);
        fetchProperties();
    };

    const handleDeleteImage = async (imageId, imageUrl) => {
        if (!window.confirm("Yakin ingin menghapus gambar ini?")) return;
        
        const filePath = new URL(imageUrl).pathname.split('/gambar-properti/')[1];
        await supabase.storage.from('gambar-properti').remove([filePath]);
        await supabase.from('property_images').delete().eq('id', imageId);
        
        fetchProperties(); 
    };

    const handleEdit = (prop) => {
        setEditingId(prop.id);
        setFormData({
            nama: prop.nama || '', deskripsi: prop.deskripsi || '', harga: prop.harga || '',
            tipe_properti: prop.tipe_properti || '', alamat: prop.alamat || '', luas_tanah: prop.luas_tanah || '',
            luas_bangunan: prop.luas_bangunan || '', Maps_url: prop.Maps_url || ''
        });
        setExistingImages(prop.property_images || []);
        setImageFiles([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteProperty = async (id) => {
        if (window.confirm("Yakin ingin menghapus properti ini beserta semua gambarnya?")) {
            await supabase.from('properties').delete().eq('id', id);
            resetForm();
            fetchProperties();
        }
    };
    
    const handleLogout = async () => {
         const { error } = await supabase.auth.signOut();
        if (error) {
        console.error('Error logging out:', error);
        alert('Gagal untuk logout.');
    } else {
        // Jika berhasil logout, alihkan pengguna kembali ke halaman login
        navigate('/admin-login');
    }
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData(initialFormData);
        setExistingImages([]);
        setImageFiles([]);
    }

    return (
        <div className="min-h-screen bg-gray-100">
             <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FaHome className="text-teal-600 text-2xl"/>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                            <p className="text-sm text-gray-500">Selamat datang, {userEmail}</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </header>

            <main className="container p-4 md:p-6 mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            {editingId ? <FaEdit className="text-teal-600" /> : <FaPlus className="text-teal-600" />}
                            {editingId ? `Edit Properti #${editingId}` : 'Tambah Properti Baru'}
                        </h2>
                        {editingId && (
                             <button onClick={resetForm} className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                <FaPlus size={12}/> Tambah Properti Baru
                            </button>
                        )}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required type="text" name="nama" placeholder="Nama Properti" value={formData.nama} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input required type="number" name="harga" placeholder="Harga (hanya angka)" value={formData.harga} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input required type="text" name="tipe_properti" placeholder="Tipe Properti (cth: Rumah, Tanah)" value={formData.tipe_properti} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input required type="text" name="alamat" placeholder="Alamat Lengkap" value={formData.alamat} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input type="number" name="luas_tanah" placeholder="Luas Tanah (m²)" value={formData.luas_tanah} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input type="number" name="luas_bangunan" placeholder="Luas Bangunan (m²)" value={formData.luas_bangunan} onChange={handleInputChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <input type="url" name="Maps_url" placeholder="URL Google Maps" value={formData.Maps_url} onChange={handleInputChange} className="col-span-1 md:col-span-2 w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <textarea name="deskripsi" placeholder="Deskripsi" value={formData.deskripsi} onChange={handleInputChange} className="col-span-1 md:col-span-2 w-full p-2 border-gray-300 border rounded-md focus:ring-teal-500 focus:border-teal-500" />
                        <div className="col-span-1 md:col-span-2">
                            <button type="submit" disabled={saving} className="px-5 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2">
                                {saving ? 'Menyimpan...' : (editingId ? 'Update Data Teks' : 'Simpan & Lanjut Upload Gambar')}
                            </button>
                        </div>
                    </form>
                </div>

                {editingId && (
                    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FaImages className="text-teal-600"/>
                            Kelola Galeri Gambar untuk Properti #{editingId}
                        </h2>
                        
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4 min-h-[6rem] bg-gray-50 p-2 rounded-md">
                            {existingImages.map(img => (
                                <div key={img.id} className="relative group">
                                    <img src={img.image_url} alt="property" className="w-full h-24 object-cover rounded-md"/>
                                    <button onClick={() => handleDeleteImage(img.id, img.image_url)} className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                                        <FaTrashAlt size={10}/>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div>
                            <label htmlFor="image-upload-input" className="block text-sm font-medium text-gray-700 mb-1">Tambah Gambar Baru</label>
                            <div className="flex items-center gap-4">
                                <input id="image-upload-input" type="file" multiple accept="image/png, image/jpeg, image/webp" onChange={handleImageSelection} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
                                <button onClick={handleImageUpload} disabled={uploadingImages || imageFiles.length === 0} className="flex-shrink-0 px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {uploadingImages ? <FaSpinner className="animate-spin"/> : 'Upload'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Properti Anda</h2>
                    {loading ? <p className="text-center p-8">Memuat...</p> : properties.length === 0 ? <p className="text-center p-8 text-gray-500">Belum ada properti.</p> : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map(prop => (
                                <div key={prop.id} className="bg-white rounded-lg border shadow-sm overflow-hidden group">
                                    <img src={(prop.property_images && prop.property_images[0]?.image_url) || 'https://via.placeholder.com/300x200?text=No+Image'} alt={prop.nama} className="h-48 w-full object-cover"/>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg truncate">{prop.nama}</h3>
                                        <p className="text-sm text-gray-500">{prop.tipe_properti}</p>
                                        <p className="font-semibold text-teal-600 mt-2">Rp{new Intl.NumberFormat('id-ID').format(prop.harga)}</p>
                                    </div>
                                    <div className="flex justify-end gap-2 bg-gray-50 p-3 border-t">
                                        <button onClick={() => handleEdit(prop)} className="p-2 text-sm text-blue-600 hover:bg-blue-100 rounded-full" title="Edit"><FaEdit /></button>
                                        <button onClick={() => handleDeleteProperty(prop.id)} className="p-2 text-sm text-red-600 hover:bg-red-100 rounded-full" title="Hapus"><FaTrashAlt /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;