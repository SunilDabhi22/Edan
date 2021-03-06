import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedInIcon, Twitter } from '../../SharedComponents/sharedIcons'

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
            {/* <div className='footer-first-sec'>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="text-center" lg md sm xs={12}>
                            <Link to='/boiler-quote'>New Boilers</Link>
                        </Col>
                        <Col className="text-center" lg md sm xs={12}>
                            <Link to='/how-it-works'>How it works</Link>
                        </Col>
                        <Col className="text-center" lg md sm xs={12}>
                            <Link to='/about-us'>About Us</Link>
                        </Col>
                        <Col className="text-center" lg md sm xs={12}>
                            <Link to='/faqs'>FAQ's</Link>
                        </Col>
                        <Col className="text-center" lg md sm xs={12}>
                            <Link to='/contact-us'>Contact</Link>
                        </Col>
                    </Row>
                </Container>
            </div> */}

            <Container>
                <Row className="justify-content-center">
                    <div className='footer-second-sec'>
                        {/* <Col sm={4} xs={12}> */}
                        {/* <ul className='footer-links'> */}
                        {/* <li> */}
                        {/* <Link to='/blog'>Blog</Link> */}
                        {/* </li> */}
                        {/* <li>
                                    <Link to='/'>Installer Signup</Link>
                                </li> */}
                        {/* <li>
                                    <Link to='/terms'>T&C's</Link>
                                </li>
                                <li>
                                    <Link to='/privacy'>Privacy Policy</Link>
                                </li> */}
                        {/* <li>
                                    <Link to='/'>Sitemap</Link>
                                </li> */}
                        {/* </ul> */}
                        {/* </Col> */}

                        {/* <Col sm={4} xs={12}>
                            <div className='copyright-text'>
                                <p>?? 2022 EDAN</p>
                            </div>
                        </Col> */}

                        <Col sm={8} xs={12}>
                            <ul className='footer-social-links'>
                                <li>
                                    <Link to='//www.facebook.com/edanheating/' target={'_blank'} title='Facebook'><Facebook /></Link>
                                </li>
                                <li>
                                    <Link to='//instagram.com/edanhomes?utm_medium=copy_link' target={'_blank'} title='Instagram'><Instagram /></Link>
                                </li>
                                <li>
                                    <Link to='//twitter.com/edanpower' target={'_blank'} title='Twitter'><Twitter /></Link>
                                </li>
                                <li>
                                    <Link to='//www.linkedin.com/in/edan-power-06323148/' target={'_blank'} title='Linked In'><LinkedInIcon /></Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={4} xs={12}>
                            <div className='footer-third-sec' style={{ textAlign: 'center' }}>
                                <p>?? 2022 EDAN</p>
                                {/* <p>EDAN is registered in England and Wales No. 08804726 (VAT No. GB205805920 ). Trading address is The Old Rectory, Winwick, Warrington, WA2 8LE.</p> */}
                                {/* <p>EDAN acts as a credit broker (not as a lender) and offers credit products through a panel of lenders. EDAN is authorised and regulated by the Financial Conduct Authority.</p> */}
                                {/* <p>??Included on combi boiler installations only, ??0% APR available on selected packages</p> */}
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div >
    )
}