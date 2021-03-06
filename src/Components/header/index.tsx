import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css'
import Logo from '../../Assets/logo.svg'

export default function Header(props: any) {
    return (
        <div>
            <div className='sub-header'>
                <Container>
                    <Row>
                        <Col>0% APR on new boiler installations¬≤</Col>
                    </Row>
                </Container>
            </div>

            <div className='menu'>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src='https://edanheating.s3.eu-west-2.amazonaws.com/logo.png' alt="" className='logo-sec' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="/how-it-works">How it works</Nav.Link>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                                <Nav.Link href="/contact-us">Help & Support</Nav.Link>
                                {/* <NavDropdown title="Help & Support" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Link href="/boiler-quote" className='btn-link'>Get your new boiler</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}