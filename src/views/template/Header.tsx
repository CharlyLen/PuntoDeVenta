import React from 'react'

import '../../css/templates_styles/header_styles.css'
import imagePath from '../../assets/imgs/icono.png'

import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand className="mr-auto" href="#">
                    <img className="brand-img-size" src={imagePath} alt="Icon of enterprice" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#acerca">About</Nav.Link>
                        <Nav.Link href="#servicios">Services</Nav.Link>
                        <Nav.Link href="#contacto">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header