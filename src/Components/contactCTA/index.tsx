import { Col, Container, Row } from 'react-bootstrap'
import './index.css'
import { Link } from 'react-router-dom'

export default function ContactCTA(props: any) {

    return (
        <div className='contact_cta_main'>
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h3>Need Help?</h3>
                        <p>We're here to help</p>
                        <Link to='/contact-us'>Contact Us</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}