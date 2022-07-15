import './App.css';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <SobreComponent></SobreComponent>
    </div>
  );
}

export default App;
