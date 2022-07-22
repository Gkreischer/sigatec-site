import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

function AccordionServices() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <b>Montagem</b>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Trabalhamos com diversos tipos de equipamentos:</p>
                    <ul>
                        <li>Desktops</li>
                        <ul>
                            <li>Para ambientes corporativos</li>
                            <li>Alto desempenho</li>
                            <li>Gamer</li>
                        </ul>
                    </ul>
                    <p>
                        Todos os computadores são projetados específicamente para sua necessidade. <b>Nada de máquina genérica.</b>
                        <br></br>
                        Aqui <b>você nos informa o que precisa</b> e te mostramos <b>o que deve ser feito.</b>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <b>Manutenção</b>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Nossas manutenções funcionam com uma metodologia que garante o funcionamento do seu equipamento. Ela envolve:</p>
                    <ul>
                        <li>Testes de:</li>
                        <ul>
                            <li>Tensões</li>
                            <li>Aquecimento</li>
                            <li>Instruções de memória</li>
                            <li>Integridade do sistema</li>
                            <li>Medições eletrônicas</li>
                            <li>e muito mais...</li>
                        </ul>
                    </ul>
                    <p>
                        <b>Utilizamos técnicas e softwares específicos para assegurar que o reparo foi efetuado corretamente.</b>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <b>Vendas</b>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Trabalhamos com venda de:</p>
                    <ul>
                        <li>Peças de hardware</li>
                        <ul>
                            <li>Processador</li>
                            <li>Memória</li>
                            <li>Fonte</li>
                            <li>Placa-mãe</li>
                            <li>SSD</li>
                            <li>Placa de vídeo</li>
                            <li>HD</li>
                            <li>Gabinete</li>
                            <li>Ventoinhas</li>
                        </ul>
                        <li>Periféricos</li>
                        <ul>
                            <li>Teclados</li>
                            <li>Headsets</li>
                            <li>Caixas de som</li>
                            <li>Webcam</li>
                            <li>Microfones</li>
                        </ul>
                        <ul>
                            <li>Impressoras</li>
                            <li>Cartuchos</li>
                            <li>Tintas</li>
                        </ul>
                        <li>Impressoras:</li>
                        <ul>
                            <li>Impressoras</li>
                            <li>Cartuchos</li>
                            <li>Tintas</li>
                        </ul>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

function ServicosComponent() {
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col>
                        <h1>
                            Nossos serviços
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AccordionServices></AccordionServices>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServicosComponent;