import { Card, Col, Container, Row } from "react-bootstrap";

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


function GamerComponent() {
    return (
        <div className="centralizaXY bgBlack">
            <Container>
                <Row className="marginY">
                    <Col>
                        <h1 className="yellow">Gamers, essa é sua área!</h1>
                    </Col>
                </Row>
                <Row className="marginY">
                    <Col md={6}>
                        <Card bg="dark" text="white">
                            <Card.Body>
                                <Card.Text>
                                    <h4>
                                        Aqui você tem a manutenção mais <span className="yellow">completa</span> e <span className="yellow">especializada</span> no seu setup, para garantir melhor estabilidade e desempenho.
                                    </h4>
                                </Card.Text>
                                <Card.Text>
                                    <p className="marginY">Nossos testes incluem
                                        <span className="lightBlue"> diagnóstico completo do equipamento, várias horas de estresse, testes de tensão, refrigeração, instruções de memória,
                                            placa de vídeo...
                                        </span>
                                        tudo isso para garantir desempenho máximo!
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={hardware_gamer_low} alt="Gamer jogando em seu pc" className="imgFluid" />
                    </Col>
                </Row>
                <Row className="marginY">
                    <Col md={6}>
                        <img src={gamer_low} alt="Gamer jogando em seu pc" className="imgFluid" />
                    </Col>
                    <Col md={6} className="centralizaXY marginY">
                        <h4>
                            <span className="yellow">Diversos acessórios</span> como headsets, mouses, teclados, microfones, ventoinhas e muito mais.
                        </h4>
                    </Col>
                </Row>
                <Row className="marginY">
                    <Col className="textCenter">
                        <h4>Diversas marcas como RedDragon, OEX, Corsair, Logitech, AMD Ryzen, Intel Core, Nvidia, Thermaltake e muitos outros...</h4>
                    </Col>
                </Row>
                <Row className="centralizaXY marginY">
                    <Col>
                        <img src={redragon} alt="Logomarca da Redragon" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={oex} alt="Logomarca da OEX" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={corsair} alt="Logomarca da Corsair" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={logitech} alt="Logomarca da Logitech" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={ryzen} alt="Logomarca da Ryzen" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={intel_core} alt="Logomarca da Intel Core" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={nvidia} alt="Logomarca da Nvidia" className="imgFluid" />
                    </Col>
                    <Col>
                        <img src={thermaltake} alt="Logomarca da Thermaltake" className="imgFluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GamerComponent;