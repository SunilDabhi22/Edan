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
                                <h3>New boilers, in an all-new way.</h3>
                            </Col>
                            <Col md={7}>
                                <p>
                                    It's not what we do, it's the way that we do it.
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
                                    <h5>You answer</h5>
                                    <p>Some super quick, and super easy questions about your home and it's current heating system. It's nothing complex.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='second-box'>
                                    <h5>You pick</h5>
                                    <p>Your new boiler online from a range of fixed price options, along with an install date that suits you — not us.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='third-box'>
                                    <h5>We fit</h5>
                                    <p>Your new boiler on your chosen date using a fully qualified, fully insured Gas Safe engineer, who's local to you.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}