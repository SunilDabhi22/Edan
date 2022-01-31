import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './index.css'

export default function HomePage(props: any) {
    return (
        <div className='banner-sec'>
            <div className='banner-overlay'></div>
            <Container style={{ zIndex: 9 }}>
                <Row>
                    <div className='banner-text'>
                        <h3>New boilers,
                            fitted fast.</h3>
                        <p>Get a fixed online quote for your new boiler in 60 seconds, with installation as quick as tomorrow*</p>
                        <a href='/boiler-quote'>See Fixed Prices</a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}