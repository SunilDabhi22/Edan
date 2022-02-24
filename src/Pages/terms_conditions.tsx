import Header from '../Components/header';
import Footer from '../Components/footer';
import { Col, Container, Row } from 'react-bootstrap';
import ContactCTA from '../Components/contactCTA'

export default function Contact(props: any) {
    return (
        <div>
            <Header />

            <div className='terms_main'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col md={12}>
                            <h1 className='terms_title'>Terms & Conditions</h1>
                            <div className='terms_content'>
                                <p>Working on content...</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <ContactCTA />

            <Footer />
        </div>
    )
}