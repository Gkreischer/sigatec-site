import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logomarca from './../assets/images/Logo.jpg';
import { AnimationsContext } from './Animations';

function NavbarComponent() {

    const { location, handleClick } = useContext(AnimationsContext)

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
                    <Nav.Link id="homeComponent" onClick={handleClick} href="#home" className={location.location === 'home' ? 'active' : ''}>Home</Nav.Link>
                    <Nav.Link id="sobreComponent" onClick={handleClick} href="#sobre" className={location.location === 'sobre' ? 'active' : ''}>Sobre</Nav.Link>
                    <Nav.Link id="gamerComponent" onClick={handleClick} href="#gamer" className={location.location === 'gamer' ? 'active' : ''}>Gamers</Nav.Link>
                    <Nav.Link id="servicosComponent" onClick={handleClick} href="#servicos" className={location.location === 'servicos' ? 'active' : ''}>Serviços</Nav.Link>
                    <Nav.Link id="contatoComponent" onClick={handleClick} href="#contato" className={location.location === 'contato' ? 'active' : ''}>Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;