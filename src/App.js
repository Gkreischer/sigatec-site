import './App.scss';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';
import ServicosComponent from './components/Servicos';
import ContatoComponent from './components/Contato';
import InfoSiteComponent from './components/InfoSite';
import { AnimationsProvider } from './components/Animations';
import { Col, Row, Container } from 'react-bootstrap';

function App() {

  return (
    <AnimationsProvider>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <SobreComponent></SobreComponent>
      <GamerComponent></GamerComponent>
      <ServicosComponent></ServicosComponent>
      <ContatoComponent></ContatoComponent>
      <InfoSiteComponent></InfoSiteComponent>
    </AnimationsProvider>
  );
}

export default App;
