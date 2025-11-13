import { Trophy, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  location: string;
  award: string;
  link: string;
  image: string;
}

export default function Berita() {
  const achievements: Achievement[] = [
    {
      title: 'Juara 2 Chima Awards 2024',
      description: 'SMK Negeri 2 Cimahi Raih Juara Kedua di Chima Awards 2024 dengan Inovasi SIBABAK.',
      date: '01 Oktober 2024',
      location: 'Kota Cimahi',
      award: 'Juara 2',
      link: 'https://example.com/news/line-follower-champion',
      image: 'img/chima.jpg'
    },
    {
      title: 'Kegiatan AMR Angkatan 18',
      description: 'Robot inovatif karya tim RoboTech mendapat penghargaan Best Innovation Award karena desain unik dan teknologi canggih.',
      date: '29 September 2024',
      location: 'SMK Negeri 2 Cimahi',
      award: 'Actifity',
      link: 'https://example.com/news/kri-innovation',
      image: 'img/foto3.jpeg'
    },
    {
      title: 'Kompetisi Robotic di Nagoya, Jepang',
      description: 'Siswa SMK Negeri 2 Cimahi Harumkan Nama Indonesia di Kompetisi Robotika Internasional di Nagoya, Jepang Tahun 2017.',
      date: '20 Agustus 2017',
      location: 'Nagoya, Jepang',
      award: 'Juara 2',
      link: 'Kompetisi-Robotic-di-Nagoya-Jepang.html',
      image: 'img/jepang.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative h-64 bg-gradient-to-r from-red-600 to-gray-900 flex items-center justify-center">
        <div className="text-center animate-fadeIn">
          <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white">Prestasi Kami</h1>
          <p className="text-xl text-gray-200 mt-2">Bangga dengan pencapaian luar biasa</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {achievement.award}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {achievement.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span>{achievement.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-gray-900 rounded-2xl p-8 text-white text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">Terus Berprestasi!</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Kami berkomitmen untuk terus meraih prestasi dan mengharumkan nama sekolah di kancah robotika nasional maupun internasional.
          </p>
        </div>
      </div>
    </div>
  );
}
