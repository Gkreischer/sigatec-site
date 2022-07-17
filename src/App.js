import './App.scss';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <SobreComponent id="sobre"></SobreComponent>
      <GamerComponent></GamerComponent>
    </div>
  );
}

export default App;
