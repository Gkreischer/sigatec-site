import './App.scss';

import MetaTags, {ReactTitle} from 'react-meta-tags';

import NavbarComponent from './components/Navbar.js';
import CarouselComponent from './components/Carousel';
import SobreComponent from './components/Sobre';
import GamerComponent from './components/Gamer';
import ServicosComponent from './components/Servicos';
import ContatoComponent from './components/Contato';
import InfoSiteComponent from './components/InfoSite';
import { AnimationsProvider } from './components/Animations';

import logomarca from './assets/images/Logo.jpg';

function App() {

  return (
    <AnimationsProvider>
      <ReactTitle title="Sigatec Informatica"/>
      <MetaTags>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href={logomarca} />
        <meta httpEquiv="content-type" content="text/html; charset=iso-8859-1" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta name="reply-to" content="gustavokreischer@gmail.com" />
        <meta name="author" content="Gustavo Kreischer" />
        <meta name="description" content="Sigatec Informática - Loja de serviços e vendas de produtos de informática" />
        <meta name="keywords" content="informatica, manutencao, tecnologia, computadores, notebooks, produtos, rio das ostras" />
        <meta name="robots" content="index,follow" />
      </MetaTags>
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
