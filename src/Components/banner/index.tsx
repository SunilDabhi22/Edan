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
                        <h3>Quality Boilers, Replace fast.</h3>
                        <p>Gain an additional online quote with your brand new boiler, get it installed quick!</p>
                        <a href='/boiler-quote'>Get your new boiler</a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}