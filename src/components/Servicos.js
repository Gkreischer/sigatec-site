import { Container, Row, Col } from "react-bootstrap";
import montagem_cpu_low from './../assets/images/montagem_cpu_low.jpg';
import montagem_pc_low from './../assets/images/montagem_pc_low.jpg';
import venda from './../assets/images/venda.png';

function ServicosComponent() {
    return (
        <Container id="servicos">
            <Row className="pb-5">
                <Col>
                    <h1>
                        <strong>
                            Nossos serviços
                        </strong>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Montagem</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center">
                    <img src={montagem_cpu_low} className="img-fluid" alt="Imagem de montagem de computadores" />
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h4>Montamos qualquer configuração, com as melhores peças e marcas.</h4>
                    <h5>Desde <strong>computadores simples</strong> até os de <strong>alto desepenho/gamer.</strong></h5>
                </Col>
            </Row>
            <Row className="pt-5 pt-md-5 text-end">
                <Col>
                    <h2>Manutenção</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h3>Realizamos manutenção em notebooks e desktops</h3>
                    <h5>
                        Utilizando programs de testes, verificamos e testamos completamente seu equipamento.
                    </h5>
                </Col>
                <Col className="d-flex align-items-center">
                    <img src={montagem_pc_low} className="img-fluid" alt="Imagem de manutenção de computadores" />
                </Col>
            </Row>
            <Row className="pt-5 pt-md-5">
                <Col>
                    <h2>Venda</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center">
                    <img src={venda} className="img-fluid" alt="Imagem de vendas" />
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h3>Headsets, cartuchos, tintas, cabos, hardware e muito mais...</h3>
                    <h5>
                        Tudo que você precisa para seu ambiente de trabalho/diversão.
                    </h5>
                </Col>
            </Row>
        </Container>
    );
}

export default ServicosComponent;