import { Instagram, Youtube, Music2, Mail, Phone, MapPin, icons } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/roboticcommunity_?igsh=MW4wYmw4cGI1MWg4YQ==', color: 'hover:text-pink-500' },
    { icon: Music2, label: 'TikTok', url: 'https://www.tiktok.com/@robotic.community?_r=1&_t=ZS-91MIh71Kx7Q', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@roboticcommunity5933', color: 'hover:text-red-500' },
    { icon: icons.Facebook, label: 'Facebook', url: 'https://web.facebook.com/people/Robotic-Engineering-Community-SMKN-2-Cimahi/100064805733869/?rdid=vRC1utrppaP5XZ96&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FXVcF5eSjpWo9QJya%2F%3F_rdc%3D1%26_rdr', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Robotic Community</h3>
            <p className="text-gray-400 leading-relaxed">
              #BERANIBERINOVASI!!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kontak Kami</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>roboticcommunity18@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>+62 896-7538-8778</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>SMK Negeri 2 Cimahi</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Media Sosial</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} [RPL] Robotic Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
