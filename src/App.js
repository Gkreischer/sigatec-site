import './App.scss';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';
import ServicosComponent from './components/Servicos';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <SobreComponent></SobreComponent>
      <GamerComponent></GamerComponent>
      <ServicosComponent></ServicosComponent>
    </div>
  );
}

export default App;
