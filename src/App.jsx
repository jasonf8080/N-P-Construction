import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, LocalBusinessSchema } from './components/main';
import { Home, About, Services, Gallery, Contact } from './pages';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <LocalBusinessSchema />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
