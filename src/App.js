// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
// import { Blogs } from './components/Blogs';
import { ContactPage } from './components/ContactPage';
import { NoPage } from './components/NoPage';
import { Navbar } from './header/Navbar';
import { FooterPage } from './components/FooterPage';
import { Covid } from './component2/Covid';
import { SearchImg } from './component2/SearchImg';

function App() {
  return (
    <div className='h-[100vh] flex flex-col justify-between'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        <Route path="/covid" element={<Covid />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchImg />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
