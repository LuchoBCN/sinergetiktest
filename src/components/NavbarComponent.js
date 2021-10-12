import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/nav.css'


export default function NavbarComponent() {
    return (
        <div className="nav-container">
            <Navbar className="nav-bar-style" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <img
                alt=""
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                <strong>Sinergetik</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Perfil" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/nom">Nom</NavDropdown.Item>
                    <NavDropdown.Item href="/ubicacio">Ubicació</NavDropdown.Item>
                    <NavDropdown.Item href="/tipus">Tipus</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="/composicio">Composició</Nav.Link>
                    <NavDropdown title="Analisis" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/humitat">Humitat</NavDropdown.Item>
                    <NavDropdown.Item href="/soroll">Soroll</NavDropdown.Item>
                    <NavDropdown.Item href="/luminocitat">Luminocitat</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/elmeusemafor">El meu semàfor</Nav.Link>
                    <Nav.Link href="/semaforperespais">Semàfor per espais</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    )
}
