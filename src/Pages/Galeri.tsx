import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      url: 'img/pengukuhan18.jpg',
      title: 'Pengukuhan Angkatan 18',
      description: 'Acara pengukuhan Robotic Community angkatan 18'
    },
    {
      url: 'img/foto1.1.jpg',
      title: 'Demo Ekstrakulikuler',
      description: 'Kegiatan demo ekstrakulikuler di SMK Negeri 2 Cimahi'
    },
    {
      url: 'img/foto2.jpg',
      title: 'Sertijab Angkatan 17 ke 18',
      description: 'Momen serah terima jabatan dari angkatan 17 ke angkatan 18'
    },
    {
      url: 'img/foto3.jpeg',
      title: 'AMR Angkatan 18',
      description: 'Kegiatan AMR angkatan 18'
    },
    {
      url: 'img/camr18.jpeg',
      title: 'CAMR Angkatan 18',
      description: 'Kegiatan CAMR angkatan 18'
    },
    {
      url: 'img/workshop.jpg',
      title: 'Pelatihan PLC',
      description: 'Kegiatan Pelatihan PLC anggota Robotic Community'
    },
    {
      url: 'img/kusmanultah.jpg',
      title: 'Pak Kusman Ulang Tahun',
      description: 'happy birthday Pak Kusman'
    },
    {
      url: 'img/demoeskul.jpg',
      title: 'Demo Ekstrakulikuler',
      description: 'Demo ekstrakulikuler Robotic Community di SMK Negeri 2 Cimahi'
    },
    {
      url: 'img/cmr19.jpg',
      title: 'CAMR Angkatan 19',
      description: 'Kegiatan CAMR angkatan 19'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative h-64 bg-gradient-to-r from-red-600 to-gray-900 flex items-center justify-center">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-white">Galeri</h1>
          <p className="text-xl text-gray-200 mt-2">Kenangan berharga kami</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl animate-fadeIn"
              style={{ animationDelay: `${idx * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-gray-300 text-sm">{image.description}</p>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full min-h-96 rounded-lg shadow-2xl"
            />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
