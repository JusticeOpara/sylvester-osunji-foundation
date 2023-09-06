import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />

      </Routes>
      <Footer />

    </BrowserRouter>

  );
};

export default App;