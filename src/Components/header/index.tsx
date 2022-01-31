import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css'
import Logo from '../../Assets/logo.png'

export default function Header(props: any) {
    return (
        <div>
            <div className='sub-header'>
                <Container>
                    <Row>
                        <Col>0% APR on new boiler installations²</Col>
                    </Row>
                </Container>
            </div>

            <div className='menu'>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} alt="" className='logo-sec' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="/how-it-works">How it works</Nav.Link>
                                <Nav.Link href="#pricing">Our Story</Nav.Link>
                                <NavDropdown title="Help & advice" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/boiler-quote" className='btn-link'>See Fixed Prices</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}