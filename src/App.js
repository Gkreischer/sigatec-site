import './App.scss';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';
import ServicosComponent from './components/Servicos';
import ContatoComponent from './components/Contato';

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent id="home"></CarouselComponent>
      <SobreComponent id="sobre"></SobreComponent>
      <GamerComponent id="gamers"></GamerComponent>
      <ServicosComponent id="servicos"></ServicosComponent>
      <ContatoComponent id="contato"></ContatoComponent>
    </>
  );
}

export default App;
