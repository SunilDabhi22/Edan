import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'

export default function Quote(props: any) {
    return (
        <div className='quote'>
            <div className='quote-sec'>
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col sm={8} className='quote-title'>
                            <h3>Buy your new boiler, better.</h3>
                        </Col>
                        <Col sm={4} className='quote-action'>
                            <Link to='/boiler-quote'>Get your new boiler</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}