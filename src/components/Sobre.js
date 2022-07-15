import { Col, Container, Row } from "react-bootstrap";
import pc01 from './../assets/images/pc01.svg';

import Stack from 'react-bootstrap/Stack';

function SobreComponent() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h5>
                            A Sigatec Informática, empresa atuante no mercado há mais de 24 anos, conta com os melhores profissionais e produtos para atender às suas necessidades e garantir sua satisfação com o melhor preço. Possuimos os melhores produtos de marcas como: HP, Epson, Cannon, Corsair, EVGA, Intel, AMD, Thermaltake, Cooler Master e muitas outras.
                        </h5>
                    </Col>
                    <Col md={6}>
                        <img src={pc01} alt="Imagem de pc genérico" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SobreComponent;