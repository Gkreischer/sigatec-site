import { Col, Container, Row } from "react-bootstrap";
import pc01 from './../assets/images/pc01.svg';

function SobreComponent() {
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col md={6} className="centralizaXY">
                        <h4>
                            A <b>Sigatec Informática</b>, empresa atuante no mercado há mais de 25 anos, conta com os melhores profissionais e produtos para atender suas necessidades e garantir sua satisfação com o melhor preço.
                        </h4>
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