import { Col, Container, Row } from "react-bootstrap";

function ContatoComponent() {
    return (
        <div className="bg-warning">
            <Container id="contato">
                <Row className="pb-5">
                    <Col>
                        <h1>Contato</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col xs={2} md={1}>
                                <h3>
                                    <i className="bi bi-telephone-fill"></i>
                                </h3>
                            </Col>
                            <Col xs={10} sm={8}>
                                <h3><a className="text-dark" href="tel:+552222195011">(22) 2219-5011</a></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={1}>
                                <h3>
                                    <i className="bi bi-envelope-fill"></i>
                                </h3>
                            </Col>
                            <Col xs={10}>
                                <h3><a className="text-dark" href="mailto:sigatec@gmail.com">sigatec@gmail.com</a></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={1}>
                                <h3>
                                    <i className="bi bi-geo-alt-fill"></i>
                                </h3>
                            </Col>
                            <Col xs={10}>
                                <h4>Avenida Amazonas, 49 - Loja 12</h4>
                                <h4>Balneário Remanso - Rio das Ostras</h4>
                                <p> Referência: Em frente as <b className="text-danger">Lojas Americanas</b>, ao lado do restaurante Aquarius.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={1}>
                                <h3>
                                    <i className="bi bi-facebook"></i>
                                </h3>
                            </Col>
                            <Col xs={10} sm={8}>
                                <h3><a className="text-dark" href="https://www.facebook.com/sigatecinformatica">sigatecinformatica</a></h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={1}>
                                <h3>
                                    <i className="bi bi-instagram"></i>
                                </h3>
                            </Col>
                            <Col xs={10} sm={8}>
                                <h3><a className="text-dark" href="https://www.instagram.com/sigatecinformatica/">@sigatecinformatica</a></h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} >
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.388888177394!2d-41.94891198550803!3d-22.527100530095016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b3645f2e3cf1%3A0x96697c5b445ecf50!2sSigatec+Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1520641657006"
                                allowFullScreen title="Localização da Sigatec Informática no Google Maps"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContatoComponent;