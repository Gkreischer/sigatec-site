import { useContext } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import pc01 from './../assets/images/pc01_low.jpg';
import logo from './../assets/images/Logo.jpg';
import { AnimationsContext } from "./Animations";

import { Parallax } from 'react-parallax';


function SobreComponent() {

    const { effect } = useContext(AnimationsContext)

    return (
        <Parallax blur={8} bgImage={require('./../assets/images/Logo.jpg')} bgImageAlt="Logomarca Sigatec" strength={250}>
                <Container className={[effect.aboutComponent.visibility, effect.aboutComponent.animation]}>
                    <Row>
                        <Col>
                            <Row className='text-md-start text-center'>
                                <Col>
                                    <h1>
                                        <b>Sigatec Informática</b>
                                    </h1>
                                </Col>
                            </Row>
                            <Row className="py-sm-5 text-md-start text-center">
                                <Col>
                                    <ul style={{ listStyleType: "none", paddingLeft: '0' }}>
                                        <li>
                                            <h4>+ 25 anos de mercado</h4>
                                        </li>
                                        <li>
                                            <h4>Diversos serviços e produtos</h4>
                                        </li>
                                        <li>
                                            <h4>Referência em Rio das Ostras e na região</h4>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <img src={pc01} alt="Imagem de pc genérico" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </Parallax>
    );
}

export default SobreComponent;