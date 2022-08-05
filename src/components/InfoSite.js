import { Container, Row, Col } from "react-bootstrap";

function InfoSiteComponent() {
    return (
        <Container fluid className="text-center bg-dark text-light py-5">
            <Row>
                <Col>
                    <i className="bi bi-person-circle"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Gustavo Kreischer</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <i className="bi bi-envelope"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="mailto:gustavokreischer@gmail.com">
                        gustavokreischer@gmail.com
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default InfoSiteComponent;