import { useContext } from "react";

import { Col, Container, Row } from "react-bootstrap";
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
import vgaNvidia from './../assets/images/vga_low.jpg';
import headsetRazr from './../assets/images/razr_low.jpg';
import corsairHardware from './../assets/images/corsair_low.jpg';
import { AnimationsContext } from "./Animations";


function ProductsCarousel() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={vgaNvidia}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={headsetRazr}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={corsairHardware}
                    alt="Third slide"
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
                <Row className={['pb-5 text-md-start', effect.gamerComponent.gamerRow01.visibility, effect.gamerComponent.gamerRow01.animation]}>
                    <Col>
                        <h1 className="yellow">Gamers, essa é sua área!</h1>
                    </Col>
                </Row>
                <Row className={['pb-5 text-md-start', effect.gamerComponent.gamerRow01.visibility, effect.gamerComponent.gamerRow01.animation]}>
                    <Col md={6}>
                        <Row>
                            <Col>
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
                        </Row>
                    </Col>
                    <Col>
                        <img src={hardware_gamer_low} alt="Imagem de hardware de PC Gamer" className="img-fluid" />
                    </Col>
                </Row>
                <Row className={['text-md-start', effect.gamerComponent.gamerRow02.visibility, effect.gamerComponent.gamerRow02.animation]}>
                    <Col md={6}>
                        <img src={gamer_low} alt="Gamer jogando em seu pc" className="img-fluid" />
                    </Col>
                    <Col md={6} className="centralizaXY pt-5 pt-md-0">
                        <h4>
                            <span className="yellow">Diversos acessórios</span> como headsets, mouses, teclados, microfones, ventoinhas e muito mais.
                        </h4>
                    </Col>
                </Row>
                <Row className={['text-md-start pt-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <h4>Diversas marcas como RedDragon, OEX, Corsair, Logitech, AMD Ryzen, Intel Core, Nvidia, Thermaltake e muitas outras...</h4>
                    </Col>
                </Row>
                <Row className={['centralizaXY',effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <img src={redragon} alt="Logomarca da Redragon" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={oex} alt="Logomarca da OEX" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={corsair} alt="Logomarca da Corsair" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={logitech} alt="Logomarca da Logitech" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={ryzen} alt="Logomarca da Ryzen" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={intel_core} alt="Logomarca da Intel Core" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={nvidia} alt="Logomarca da Nvidia" className="img-fluid" />
                    </Col>
                    <Col>
                        <img src={thermaltake} alt="Logomarca da Thermaltake" className="img-fluid" />
                    </Col>
                </Row>
                <Row className={['text-center py-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col>
                        <h1 className="yellow">Alguns de nossos produtos</h1>
                    </Col>
                </Row>
                <Row className={['centralizaXY pb-5', effect.gamerComponent.gamerRow03.visibility, effect.gamerComponent.gamerRow03.animation]}>
                    <Col md={10}>
                        <ProductsCarousel></ProductsCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GamerComponent;