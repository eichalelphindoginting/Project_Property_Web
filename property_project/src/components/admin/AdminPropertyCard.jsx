// src/components/admin/AdminPropertyCard.jsx

import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const AdminPropertyCard = ({ property, onEdit, onDelete }) => {
  // Ambil gambar pertama dari galeri sebagai thumbnail, atau gunakan placeholder
  const thumbnailUrl = (property.property_images && property.property_images[0]?.image_url) || 'https://via.placeholder.com/300x200?text=No+Image';

  // <<< DIHAPUS: Logika untuk menghitung hargaPerMeter sudah tidak ada lagi

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group">
      <div className="relative">
        <img src={thumbnailUrl} alt={property.nama} className="h-48 w-full object-cover" />
        <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          {property.tipe_properti || 'Properti'}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-900 truncate" title={property.nama}>
          {property.nama}
        </h3>
        <div className="flex items-center text-gray-500 mt-1 text-sm">
          <IoLocationOutline className="flex-shrink-0" />
          <p className="ml-1 truncate" title={property.alamat}>{property.alamat}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex-grow">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Total Harga</p>
            <p className="font-semibold text-lg text-teal-600">
              Rp{new Intl.NumberFormat('id-ID').format(property.harga)}
            </p>
          </div>
          
          {/* <<< DIHAPUS: Bagian untuk menampilkan Harga / m² >>> */}
          
        </div>
      </div>
      <div className="flex justify-end gap-2 bg-gray-50 p-3 border-t">
        <button onClick={() => onEdit(property)} className="p-2 text-sm text-blue-600 hover:bg-blue-100 rounded-full" title="Edit">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(property.id)} className="p-2 text-sm text-red-600 hover:bg-red-100 rounded-full" title="Hapus">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default AdminPropertyCard;