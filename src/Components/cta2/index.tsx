import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

export default function CallToAction2(props: any) {
    return (
        <div className='cta'>
            <div className='cta-sec'>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm={12} className='cta-img'>
                            <span>
                                Speak to our engineers
                            </span>
                            <a href='call:0330 113 1333'>0330 113 1333</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}