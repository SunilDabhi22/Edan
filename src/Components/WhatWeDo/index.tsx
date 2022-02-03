import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

export default function WhatWeDo(props: any) {

    return (
        <div className='whatwedo-main'>
            <div className='whatwedo-content'>
                <Container>
                    <div className='whatwedo-first-sec'>
                        <Row className="justify-content-between align-items-end">
                            <Col md={5}>
                                <h3>Fitting boilers, in an all-new way.</h3>
                            </Col>
                            <Col md={7}>
                                <p>
                                    We take pride in what we do, and in how we do it.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <div className='whatwedo-second-sec'>
                        <Row className="justify-content-between align-items-start">
                            <Col md={4}>
                                <div className='first-box'>
                                    <h5>We ask</h5>
                                    <p>Some super quick and easy questions about your home and it's present heating system. It'll be quick!</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='second-box'>
                                    <h5>You pick</h5>
                                    <p>Your brand new quality boiler from a range of fixed prices as well as a quick install date.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='third-box'>
                                    <h5>We fit</h5>
                                    <p>Get your new boiler when you choose, get it fitted by a fully trained and insured engineer that's local to you!</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}