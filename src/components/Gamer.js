import { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import hardware_gamer_low from './../assets/images/hardware_fan_low.jpg';
import gamer_low from './../assets/images/gamer_low.jpg';

// LOGOS
import redragon from './../assets/images/logos/redragon.png';
import oex from './../assets/images/logos/oex.png';
import corsair from './../assets/images/logos/corsair.png';
import logitech from './../assets/images/logos/logitech.png';
import ryzen from './../assets/images/logos/ryzen.png';
import intel_core from './../assets/images/logos/intel_core.png';
import nvidia from './../assets/images/logos/nvidia.png';
import thermaltake from './../assets/images/logos/thermaltake.png';
import asus from './../assets/images/logos/asus.png';
import gigabyte from './../assets/images/logos/gigabyte.png';
import msi from './../assets/images/logos/msi.png';
import seagate from './../assets/images/logos/seagate.jpg';
import hp from './../assets/images/logos/hp.png';
import epson from './../assets/images/logos/epson.png';
import { AnimationsContext } from "./Animations";

// PRODUTOS
import loja_03 from './../assets/images/produtos/loja_03.jpg';
import loja_04 from './../assets/images/produtos/loja_04.jpg';
import loja_05 from './../assets/images/produtos/loja_05.jpg';
import loja_06 from './../assets/images/produtos/loja_06.jpg';
import loja_07 from './../assets/images/produtos/loja_07.jpg';
import loja_08 from './../assets/images/produtos/loja_08.jpg';
import loja_09 from './../assets/images/produtos/loja_09.jpg';
import loja_10 from './../assets/images/produtos/loja_10.jpg';
import loja_11 from './../assets/images/produtos/loja_11.jpg';


function ProductsCarousel() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_03}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_04}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_05}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_06}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_07}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_08}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_09}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_10}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={loja_11}
                    alt="Produtos da loja"
                />
            </Carousel.Item>
        </Carousel>
    );
}

function GamerComponent() {

    const { effect } = useContext(AnimationsContext)

    return (
        <div className="bgBlack text-center">
            <Container id="gamer">
                <Row className={['pb-5 text-md-center', effect.gamerComponent.gamerRow01.visibility, effect.gamerComponent.gamerRow01.animation]}>
                    <Col>
                        <h1 className="yellow animate-character">
                            <strong>
                                Gamers, essa é sua área!
                            </strong>
                        </h1>
                    </Col>
                </Row>
                <Row className={['pb-5 text-md-start', effect.gamerComponent.gamerRow01.visibility, effect.gamerComponent.gamerRow01.animation]}>
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <h4>
                            Aqui você tem a manutenção mais <span className="yellow">completa</span> e <span className="yellow">especializada</span> no seu setup, para garantir melhor estabilidade e desempenho.
                        </h4>
                        <p>Nossos testes incluem
                            <span className="lightBlue"> diagnóstico completo do equipamento, várias horas de estresse, testes de tensão, refrigeração, instruções de memória,
                                placa de vídeo...
                            </span>
                            tudo isso para garantir desempenho máximo!
                        </p>
                    </Col>
                    <Col>
                        <img src={hardware_gamer_low} alt="Imagem de hardware de PC Gamer" className="img-fluid" />
                    </Col>
                </Row>
                <Row className={['text-md-start', effect.gamerComponent.gamerRow02.visibility, effect.gamerComponent.gamerRow02.animation]}>
                    <Col md={6}>
                        <img src={gamer_low} alt="Gamer jogando em seu pc" className="img-fluid" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-center pt-5 pt-md-0">
                        <h4>
                            <span className="yellow">Diversos acessórios</span> como headsets, mouses, teclados, microfones, ventoinhas e muito mais.
                        </h4>
                    </Col>
                </Row>
                <Row className={['text-md-start py-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <h4>Diversas marcas como RedDragon, OEX, Corsair, Logitech, AMD Ryzen, Intel Core, Nvidia, Thermaltake e muitas outras...</h4>
                    </Col>
                </Row>
                <Row className={['centralizaXY', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col xs={2}>
                        <img src={redragon} alt="Logomarca da Redragon" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={oex} alt="Logomarca da OEX" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={corsair} alt="Logomarca da Corsair" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={logitech} alt="Logomarca da Logitech" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={ryzen} alt="Logomarca da Ryzen" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={intel_core} alt="Logomarca da Intel Core" className="img-fluid" />
                    </Col>
                    <Col className="d-none">
                        <img src={nvidia} alt="Logomarca da Nvidia" className="img-fluid" />
                    </Col>
                    <Col className="d-none">
                        <img src={thermaltake} alt="Logomarca da Thermaltake" className="img-fluid" />
                    </Col>
                </Row>
                <Row className={['centralizaXY pt-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <img src={asus} alt="Logomarca da Asus" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={gigabyte} alt="Logomarca da Gigabyte" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={msi} alt="Logomarca da MSI" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={seagate} alt="Logomarca da Seagate" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={hp} alt="Logomarca da HP" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={epson} alt="Logomarca da Epson" className="img-fluid" />
                    </Col>
                </Row>
                <Row className={['centralizaXY pt-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <p className="text-muted">
                            Todas são marcas acima são reservadas e pertencem aos seus respectivos donos.
                        </p>
                    </Col>
                </Row>
                <Row className={['text-center py-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <h1 className="yellow">Alguns de nossos produtos</h1>
                    </Col>
                </Row>
                <Row className={['centralizaXY', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col md={8}>
                        <ProductsCarousel></ProductsCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GamerComponent;