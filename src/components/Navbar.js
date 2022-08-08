import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logomarca from './../assets/images/Logo.jpg';

function NavbarComponent() {

    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Navbar.Brand href="www.sigatecinformatica.com.br">
                <img
                    src={logomarca}
                    width="50"
                    height="50"
                    className="d-inline-block align-top ms-3"
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#gamers">Gamers</Nav.Link>
                    <Nav.Link href="#servicos">Serviços</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;