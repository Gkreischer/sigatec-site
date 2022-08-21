import './App.scss';

import { Helmet, HelmetProvider } from "react-helmet-async";

import { AnimationsProvider } from './components/Animations';
import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';
import ServicosComponent from './components/Servicos';
import ContatoComponent from './components/Contato';
import InfoSiteComponent from './components/InfoSite';

function App() {

  return (
    <HelmetProvider>
      <AnimationsProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sigatec Informática</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta http-equiv="content-type" content="text/html" />
          <meta http-equiv="content-language" content="pt-br" />
          <meta name="reply-to" content="gustavokreischer@gmail.com" />
          <meta name="author" content="Gustavo Kreischer" />
          <meta name="description" content="Loja de produtos e serviços de informática em Rio das Ostras" />
          <meta name="keywords" content="informatica, manutencao, tecnologia, computadores, notebooks, produtos, rio das ostras, gamer, acessórios, impressora" />
          <meta name="robots" content="index,follow" />
        </Helmet>
        <NavbarComponent></NavbarComponent>
        <CarouselComponent></CarouselComponent>
        <SobreComponent></SobreComponent>
        <GamerComponent></GamerComponent>
        <ServicosComponent></ServicosComponent>
        <ContatoComponent></ContatoComponent>
        <InfoSiteComponent></InfoSiteComponent>
      </AnimationsProvider>
    </HelmetProvider>
  );
}

export default App;
