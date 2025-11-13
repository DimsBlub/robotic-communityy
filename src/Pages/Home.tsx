import { Target, Lightbulb, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
            Robotic Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slideUp delay-200">
            Membangun Masa Depan Melalui Teknologi Robotika
          </p>
          <div className="flex justify-center space-x-4 animate-slideUp delay-300">
            <div className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              SMK Negeri 2 Cimahi
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slideLeft">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Visi Kami</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Menjadi Wadah pengembangan kreativitas di bidang teknologi, terapan, inisiatif, inovatif dan mandiri.
            </p>
          </div>

          <div className="space-y-6 animate-slideRight">
            <div className="flex items-center space-x-3">
              <Lightbulb className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Misi Kami</h2>
            </div>
            <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Memupuk kreativitas anggota melalui kegiatan penelitian terbimbing dan mandiri serta pengembangan bidang teknologi dan terapan</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Berpartisipasi dalam kegiatan lomba dan eksibisi dan bidang teknologi dan tingkat regional nasional dan internasional</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Membina pengembangan kompetensi dan wawasan bidang mekatronika melalui pelatihan berkeseimbangan/berkesinambungan</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Meningkatkan percaya diri kemandirian serta inisiatif anggota melalui sistem pengkaderan dan pembina keorganisasian</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tentang Kami</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
            Robotic Community SMK Negeri 2 Cimahi adalah sebuah kelompok atau organisasi yang berfokus pada pengembangan dan penelitian di bidang robotika. Komunitas ini terdiri dari siswa-siswi yang memiliki minat dan bakat di bidang teknologi, terutama dalam pembuatan dan pemrograman robot. Organisasi Robotic Community merupakan salah satu ekstrakulikuler jurusan yang ada di SMK Negeri 2 Cimahi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Award, title: ' Prestasi', desc: 'Kompetisi Robotika' },
            { icon: Users, title: '25+ Anggota', desc: 'Siswa Aktif' },
            { icon: Target, title: '18 Tahun', desc: 'Berdiri' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
