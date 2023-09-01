import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {

  return (
    <BrowserRouter>

      <div className=''>
        <Navbar />
        <Home/>

        <Footer />
      </div>

    </BrowserRouter>

  );
};

export default App;