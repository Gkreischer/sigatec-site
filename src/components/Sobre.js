import { useContext } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import logo from './../assets/images/Logo.jpg';
import { AnimationsContext } from "./Animations";

function SobreComponent() {

    const { effect } = useContext(AnimationsContext)

    return (
        <Container className={[effect.aboutComponent.visibility, effect.aboutComponent.animation]}>
            <Row className="text-center">
                <Col>
                    <img src={logo} alt="Logo da Sigatec Informatica" className="img-fluid" />
                </Col>
            </Row>
            <Row className='text-center pt-md-5 pt-3'>
                <Col>
                    <h1>
                        <b>Sigatec Informática</b>
                    </h1>
                    <ul className="pt-md-5" style={{ listStyleType: "none", paddingLeft: '0' }}>
                        <li>
                            <h4>+ 25 anos de mercado</h4>
                        </li>
                        <li>
                            <h4>Diversos serviços e produtos</h4>
                        </li>
                        <li>
                            <h4>Referência em Rio das Ostras e na região</h4>
                        </li>
                        <li>
                            <h4>
                                <strong>Manutenção de computadores</strong>
                            </h4>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default SobreComponent;