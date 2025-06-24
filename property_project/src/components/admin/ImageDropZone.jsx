// src/components/admin/ImageDropzone.jsx

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload, FaTrash } from 'react-icons/fa';

const ImageDropzone = ({ onFilesSelected, existingImages = [], onDeleteExistingImage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Gabungkan file yang baru di-drop dengan yang sudah ada sebelumnya
    const newFiles = [...selectedFiles, ...acceptedFiles];
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles); // Kirim semua file yang terpilih ke parent component
    setIsDragging(false);
  }, [selectedFiles, onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  const removeFile = (fileToRemove) => {
    const newFiles = selectedFiles.filter(file => file !== fileToRemove);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  return (
    <div className="col-span-1 md:col-span-2 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Galeri Gambar</label>
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors duration-300
            ${isDragActive || isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center text-gray-500">
            <FaFileUpload className="w-12 h-12 mb-4" />
            <p className="font-semibold">Seret & lepas gambar di sini, atau klik untuk memilih file</p>
            <p className="text-xs mt-1">PNG, JPG, WEBP (Maks. 5MB per file)</p>
          </div>
        </div>
      </div>

      {/* Tampilan Preview untuk Gambar yang akan di-upload */}
      {selectedFiles.length > 0 && (
        <div>
            <h4 className="text-sm font-medium text-gray-700">Gambar Baru ({selectedFiles.length})</h4>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-5 gap-4">
                {selectedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                        <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-24 object-cover rounded-md"/>
                        <button 
                            type="button"
                            onClick={() => removeFile(file)}
                            className="absolute -top-1 -right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaTrash size={10}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      )}
      
      {/* Tampilan Preview untuk Gambar yang sudah ada (mode edit) */}
      {existingImages.length > 0 && (
        <div>
            <h4 className="text-sm font-medium text-gray-700">Gambar Saat Ini ({existingImages.length})</h4>
             <div className="mt-2 grid grid-cols-3 md:grid-cols-5 gap-4">
                {existingImages.map(img => (
                    <div key={img.id} className="relative group">
                        <img src={img.image_url} alt="existing" className="w-full h-24 object-cover rounded-md"/>
                        <button 
                            type="button"
                            onClick={() => onDeleteExistingImage(img.id, img.image_url)}
                            className="absolute -top-1 -right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaTrash size={10}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;