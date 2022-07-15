import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logomarca from './../assets/images/Logo.jpg';

function NavbarComponent() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="www.sigatecinformatica.com.br">
                    <img
                        src={logomarca}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Sobre</Nav.Link>
                        <Nav.Link href="#action3">Serviços</Nav.Link>

                    </Nav>
                    {/* <Button variant="primary">Login</Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;