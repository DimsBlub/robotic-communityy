import { User, Users, BookOpen, DollarSign, ClipboardCheck, Workflow, Beaker, Megaphone, Package, TrendingUp } from 'lucide-react';

interface Member {
  name: string;
  class: string;
  no: string;
  photo: string;
  description: string;
}

interface Division {
  title: string;
  icon: typeof Users;
  members: Member[];
  description: string;
}

export default function Profile() {
  const leaders: Member[] = [
    {
      name: 'Yunan Febrian Adiguna',
      class: 'XI MEKATRONIKA B',
      no: 'RC.18.024.030',
      photo: 'img/yunan.jpg',
      description: 'Ketua bertugas untuk memimpin jalannya organisasi secara keseluruhan, mengawasi setiap divisi, dan memastikan setiap program berjalan sesuai visi dan misi komunitas robotic. Ketua juga bertanggung jawab untuk membuat keputusan strategis serta menjadi perwakilan utama organisasi dalam forum eksternal.'
    }
  ];

  const viceLeaders: Member[] = [
    {
      name: 'Surya Muntahar',
      class: 'XI MEKATRONIKA C',
      no: 'RC.18.024.028',
      photo: 'img/suryaa.jpg',
      description: 'Wakil Ketua berperan sebagai pendamping Ketua dalam mengkoordinasi program kerja, dan bertanggung jawab langsung atas pengawasan pelaksanaan program di tiap divisi. Selain itu, Wakil Ketua juga mengambil alih tugas Ketua apabila Ketua berhalangan hadir, serta membantu memastikan bahwa setiap divisi tetap berjalan secara optimal.'
    }
  ];

  const divisions: Division[] = [
    {
      title: 'Sekretaris',
      icon: BookOpen,
      description: 'Mengelola seluruh administrasi organisasi, termasuk pencatatan hasil rapat, pembuatan laporan, surat-menyurat, dan pengelolaan dokumen penting. Sekretaris juga menjaga arus informasi antar anggota serta memastikan dokumentasi kegiatan terarsip dengan baik.',
      members: [
        { name: 'Justone Imanuel Rusmana', class: 'XI MEKATRONIKA B', no: 'RC.18.024.011', photo: 'img/onejs.jpg', description: '' },
        { name: 'Zulfikar Ali Rasya Fakhriansyah', class: 'XI MEKATRONIKA B', no: 'RC.18.024.031', photo: 'img/zulkipli.jpg', description: '' },
        { name: 'Delyma Citra Pratiwi', class: 'XI MEKATRONIKA B', no: 'RC.18.024.005', photo: 'img/delyma.jpg', description: '' },
      ]
    },
    {
      title: 'Bendahara',
      icon: DollarSign,
      description: 'Mengelola seluruh administrasi organisasi, termasuk pencatatan hasil rapat, pembuatan laporan, surat-menyurat, dan pengelolaan dokumen penting. Sekretaris juga menjaga arus informasi antar anggota serta memastikan dokumentasi kegiatan terarsip dengan baik.',
      members: [
        { name: 'Karla Septiyani ', class: 'XI MEKATRONIKA D', no: 'RC.18.024.013', photo: 'img/karla.jpg', description: '' },
        { name: 'Madina Amaliafitri', class: 'XI MEKATRONIKA D', no: 'RC.18.024.015', photo: 'img/madina.jpg', description: '' }
      ]
    },
    {
      title: 'Absensi',
      icon: ClipboardCheck,
      description: 'Mengurus pencatatan kehadiran anggota dalam setiap rapat dan kegiatan organisasi. Divisi Absensi memastikan disiplin anggota dalam menghadiri program serta menginformasikan secara rutin kepada Ketua tentang tingkat kehadiran anggota',
      members: [
        { name: 'Restu Bumi', class: 'XI MEKATRONIKA A', no: 'RC.18.024.023', photo: 'img/ewehajg.jpg', description: '' },
        { name: 'Desi Rahmawati', class: 'XI MEKATRONIKA C', no: 'RC.18.024.006', photo: 'img/desi.jpg', description: '' },
        { name: 'M. Akmal Arsyaffin', class: 'XI MEKATRONIKA C', no: 'RC.18.024.014', photo: 'img/akmal.jpg', description: '' }
      ]
    },
    {
      title: 'Keorganisasian',
      icon: Workflow,
      description: 'Fokus pada pengelolaan dan pengembangan anggota, termasuk pelatihan internal dan kegiatan yang membangun kekompakan tim. Divisi ini bertugas untuk memantau perkembangan keterampilan anggota dalam bidang robotik serta menjaga semangat kolaboratif di antara anggota',
      members: [
        { name: 'Arif Hidayah', class: 'XI MEKATRONIKA A', no: 'RC.18.024.002', photo: 'img/arip.jpg', description: '' },
        { name: 'Adelia Rahma Wanti', class: 'XI MEKATRONIKA A', no: 'RC.18.024.001', photo: 'img/adel.jpg', description: '' },
        { name: 'Dewa Erlangga', class: 'X MEKATRONIKA B', no: 'RC.18.024.007', photo: 'img/dewa.jpg', description: '' }
      ]
    },
    {
      title: 'Research & Development',
      icon: Beaker,
      description: 'Melakukan riset dan pengembangan terkait inovasi teknologi robotik. Divisi ini bertanggung jawab untuk mengembangkan proyek robot baru, mengadakan percobaan, serta mencari solusi teknis yang dapat meningkatkan performa dan efisiensi robot dalam berbagai aspek',
      members: [
        { name: 'Kahfi Hazeem S', class: 'XII MEKATRONIKA A', no: 'RC.18.024.012', photo: 'img/ewehajg.jpg', description: '' },
        { name: 'M. Fatih Al-Bukhari', class: 'XI MEKATRONIKA C', no: 'RC.18.024.017', photo: 'img/fatih.jpg', description: '' },
        { name: 'Rahma Aulia Syafira', class: 'XI MEKATRONIKA 2', no: 'RC.18.024.021', photo: 'img/rahma.jpg', description: '' },
        { name: 'M. Fikri Arrasyidd', class: 'XII MEKATRONIKA C', no: 'RC.18.024.018', photo: 'img/ewehajg.jpg', description: '' }
      ]
    },
    {
      title: 'Kominfo',
      icon: Megaphone,
      description: 'Bertugas mengelola komunikasi internal dan eksternal organisasi, termasuk pengelolaan media sosial untuk mempublikasikan kegiatan robotik. Divisi ini juga mendokumentasikan setiap kegiatan dan berperan dalam menjaga citra positif organisasi di mata publik',
      members: [
        { name: 'Siti Fatimah A', class: 'XI MEKATRONIKA A', no: 'RC.18.024.027', photo: 'img/ewehajg.jpg', description: '' },
        { name: 'Dimas Ario S', class: 'XI RPL A', no: 'RC.18.024.008', photo: 'img/dimas1.jpg', description: 'Ketua Divisi' },
        { name: 'Wiva W.T', class: 'XI MEKATRONIKA D', no: 'RC.18.024.029', photo: 'img/wipa.jpg', description: '' }
      ]
    },
    {
      title: 'Logistik',
      icon: Package,
      description: 'Bertanggung jawab atas penyediaan dan pengelolaan peralatan robotik yang diperlukan selama kegiatan atau proyek berlangsung. Divisi Logistik memastikan bahwa setiap perangkat, bahan, dan alat-alat pendukung tersedia dan siap digunakan sesuai kebutuhan teknis',
      members: [
        { name: 'Ariya R', class: 'XI MEKATRONIKA A', no: 'RC.18.024.003', photo: 'img/ewehajg.jpg', description: '' },
        { name: 'Iqbal Aliffiansyah', class: 'XI MEKATRONIKA B', no: 'RC.18.024.010', photo: 'img/ikbal.jpg', description: '' },
        { name: 'M. Mahdi Al-Fakih', class: 'XI MEKATRONIKA C', no: 'RC.18.024.019', photo: 'img/ewehajg.jpg', description: '' }
      ]
    },
    {
      title: 'Kewirausahaan',
      icon: TrendingUp,
      description: 'Divisi ini berfokus pada penggalangan dana melalui proyek atau kegiatan kewirausahaan, seperti menjual merchandise atau menawarkan layanan berbasis robotik. Tujuannya adalah untuk mendukung kebutuhan finansial organisasi agar tetap berjalan secara mandiri',
      members: [
        { name: 'Dafan M.S', class: 'XI MEKATRONIKA D', no: 'RC.18.024.025', photo: 'img/dafan.jpg', description: '' },
        { name: 'Riski Aditia F', class: 'XI MEKATRONIKA A', no: 'RC.18.024.004', photo: 'img/ikky.jpg', description: '' },
        { name: 'Dimas R', class: 'XI MEKATRONIKA C', no: 'RC.18.024.009', photo: 'img/morty.jpg', description: '' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative h-64 bg-gradient-to-r from-red-600 to-gray-900 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white animate-fadeIn">Profile</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-xl transition-all duration-300 hover:shadow-2xl animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Sejarah Robotic Community</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto text-justify">
            Robotik Community SMKN 2 Cimahi merupakan salah satu ekstrakurikuler unggulan di sekolah ini, yang telah berdiri sejak SMKN 2 Cimahi dibentuk pada tahun 2007. Sejak awal pendiriannya, komunitas ini bertujuan untuk mengembangkan minat dan bakat siswa dalam bidang robotika dan teknologi, sejalan dengan perkembangan industri 4.0 yang terus membutuhkan sumber daya manusia yang kreatif dan inovatif di bidang teknologi. <br/><br/>
            Dengan bimbingan para guru yang kompeten dan dukungan dari fasilitas sekolah, Robotik Community SMKN 2 Cimahi telah menjadi wadah bagi siswa untuk belajar merancang, membangun, dan memprogram robot. Tidak hanya diikuti oleh siswa yang tertarik pada teknologi, komunitas ini juga mendorong pengembangan keterampilan kolaborasi, problem-solving, dan berpikir kritis. Selain kegiatan internal, komunitas ini aktif berpartisipasi dalam berbagai kompetisi robotika, baik tingkat lokal maupun nasional. Prestasi yang telah diraih oleh siswa SMKN 2 Cimahi melalui Robotik Community semakin memperkuat reputasi sekolah ini sebagai salah satu SMK yang berfokus pada pengembangan teknologi masa depan.  Hingga saat ini, Robotik Community terus berkembang dengan program-program yang inovatif, menginspirasi generasi muda untuk berkontribusi dalam perkembangan teknologi di Indonesia.
          </p>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-slideDown">
          Struktur Organisasi
        </h2>

        <div className="space-y-12">
          <div className="animate-fadeIn">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <User className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ketua</h3>
            </div>
            <div className="flex justify-center">
              {leaders.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-red-600"
                  />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">{member.name}</h4>
                  <p className="text-red-600 text-center mb-3">{member.class}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{member.no}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm text-justify">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeIn delay-100">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <User className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Wakil Ketua</h3>
            </div>
            <div className="flex justify-center">
              {viceLeaders.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-red-600"
                  />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">{member.name}</h4>
                  <p className="text-red-600 text-center mb-3">{member.class}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm">{member.no}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm text-justify">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {divisions.map((division, idx) => (
            <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${(idx + 2) * 100}ms` }}>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <division.icon className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{division.title}</h3>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">{division.description}</p>
              {['Sekretaris','Bendahara','Absensi','Keorganisasian','Kominfo','Logistik','Kewirausahaan'].includes(division.title) ? (
                <div className="flex flex-wrap justify-center gap-6">
                  {division.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="w-64 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover ring-2 ring-red-600"
                      />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">{member.name}</h4>
                      <p className="text-red-600 text-center text-sm">{member.class}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-center text-sm">{member.no}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {division.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover ring-2 ring-red-600"
                      />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center">{member.name}</h4>
                      <p className="text-red-600 text-center text-sm">{member.class}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-center text-sm">{member.no}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
