import { useState } from 'react';
import { Menu, X, Search, Moon, Sun, Bot } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'berita', label: 'Berita' },
    { id: 'galeri', label: 'Galeri' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className=" p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <img src="img/logo-rc.png" alt="Robotic logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
              Robotic Community
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:rotate-180"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="pb-4 animate-slideDown">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
            />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-slideDown">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
