import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Berita from './Pages/Berita';
import Galeri from './Pages/Galeri';
import Kontak from './Pages/Kontak';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'berita':
        return <Berita />;
      case 'galeri':
        return <Galeri />;
      case 'kontak':
        return <Kontak />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
