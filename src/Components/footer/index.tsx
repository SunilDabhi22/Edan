import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, YouTube, Twitter } from '../../SharedComponents/sharedIcons'

export default function Footer(props: any) {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [])

    return (
        <div className='footer'>
            <div className='footer-first-sec'>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <Link to='/'>New Boilers</Link>
                        </Col>
                        <Col className="text-center">
                            <Link to='/how-it-works'>How it works</Link>
                        </Col>
                        <Col className="text-center">
                            <Link to='/'>Our Story</Link>
                        </Col>
                        <Col className="text-center">
                            <Link to='/faqs'>FAQ's</Link>
                        </Col>
                        <Col className="text-center">
                            <Link to='/contact-us'>Contact</Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="justify-content-center">
                    <div className='footer-second-sec'>
                        <Col sm={8} xs={12}>
                            <ul className='footer-links'>
                                {/* <li>
                                    <Link to='/'>Blog</Link>
                                </li> */}
                                <li>
                                    <Link to='/'>Installer Signup</Link>
                                </li>
                                <li>
                                    <Link to='/terms'>T&C's</Link>
                                </li>
                                <li>
                                    <Link to='/privacy'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Sitemap</Link>
                                </li>
                            </ul>
                        </Col>

                        <Col sm={2} xs={12}>
                            <div className='copyright-text'>
                                <p>© 2022 EDAN</p>
                            </div>
                        </Col>

                        <Col sm={2} xs={12}>
                            <ul className='footer-social-links'>
                                <li>
                                    <Link to='/' title='Facebook'><Facebook /></Link>
                                </li>
                                <li>
                                    <Link to='/' title='Instagram'><Instagram /></Link>
                                </li>
                                <li>
                                    <Link to='/' title='Twitter'><Twitter /></Link>
                                </li>
                                <li>
                                    <Link to='/' title='YouTube'><YouTube /></Link>
                                </li>
                            </ul>
                        </Col>
                    </div>
                </Row>
            </Container>

            <Container>
                <Row>
                    <div className='footer-third-sec'>
                        <Col>
                            <p>EDAN is registered in England and Wales No. 08804726 (VAT No. GB205805920 ). Trading address is The Old Rectory, Winwick, Warrington, WA2 8LE.</p>
                            <p>EDAN acts as a credit broker (not as a lender) and offers credit products through a panel of lenders. EDAN is authorised and regulated by the Financial Conduct Authority.</p>
                            <p>¹Included on combi boiler installations only, ²0% APR available on selected packages</p>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}