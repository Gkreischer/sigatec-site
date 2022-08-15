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
                    <p>Alguns de nossos serviços:</p>
                    <ul>
                        <li>Limpeza interna completa com troca de pasta térmica</li>
                        <li>Instalação de peças e sistemas operacionais (Windows e Linux)</li>
                        <li>Formatação (com ou sem backup)</li>
                        <li>Troca de teclado de notebooks (soldados e não-soldados)</li>
                        <li>Troca de baterias (internas e não-interna)</li>
                        <li>Troca de HD, SSD, memória, placa de vídeo, fonte, cpu e etc. </li>
                        <li>Instalação e configuração de roteadores</li>
                        <li><b>E muito mais!</b></li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <b>Vendas</b>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Trabalhamos com venda de:</p>
                    <ul>
                        <li>
                            <b>
                                Peças de hardware
                            </b>
                        </li>
                        <ul>
                            <li>Processadores</li>
                            <li>Memórias</li>
                            <li>Fontes de Alimentação</li>
                            <li>Placas-mãe</li>
                            <li>SSDs</li>
                            <li>Placa de vídeos</li>
                            <li>HDs</li>
                            <li>Gabinetes</li>
                            <li>Ventoinhas</li>
                            <li>Coolers</li>
                        </ul>
                        <li>
                            <b>
                                Periféricos
                            </b>
                        </li>
                        <ul>
                            <li>Teclados</li>
                            <li>Headsets</li>
                            <li>Caixas de som</li>
                            <li>Webcam</li>
                            <li>Microfones</li>
                            <li>Fones de ouvido</li>
                        </ul>
                        <li>
                            <b>
                                Redes
                            </b>
                        </li>
                        <ul>
                            <li>Roteadores</li>
                            <li>Cabos e conectores</li>
                            <li>Ferramentas</li>
                        </ul>
                        <li>
                            <b>
                                Impressoras
                            </b>
                        </li>
                        <ul>
                            <li>Impressoras</li>
                            <li>Cartuchos</li>
                            <li>Tintas</li>
                        </ul>
                    </ul>
                    <p className="text-center">Trabalhamos com diversas marcas: <b>AMD, Intel, Asus, Gigabyte, Logitech, Redragon, OEX, Sandisk, Kingston, HP, EPSON, Cannon, MSI, Nvidia, Corsair, Thermaltake, Lan Expert, TP-Link, Mercusys, Seagate e muito mais...</b></p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

function ServicosComponent() {
    return (
        <div>
            <Container id="servicos">
                <Row className="pb-5">
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