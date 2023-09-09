import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import AnimatedRoutes from './pages/AnimatedRoutes';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />

      <AnimatedRoutes />

      <Footer />

    </BrowserRouter>

  );
};

export default App;