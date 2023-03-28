import './App.scss';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Features from './component/features/Features';
import About from './component/about/About';
import Services from './component/services/Services'
import Gallery from './component/gallery/Gallery';
import Testimonials from './component/testimonials/Testimonials';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
    </div>
  );
}

export default App;
