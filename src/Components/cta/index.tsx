import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'
import { BallsToCancerIcon } from '../../SharedComponents/sharedIcons'

export default function CallToAction(props: any) {
    return (
        <div className='cta'>
            <div className='cta-sec'>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm={5} className='cta-img'>
                            <BallsToCancerIcon />
                        </Col>
                        <Col sm={7} className='cta-content'>
                            <h4>We fit new boilers,<br />
                                to help fix old balls.</h4>
                            <p>For every new boiler we install, we donate to Balls to Cancer.</p>
                            <Link to='/'>Donate</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}