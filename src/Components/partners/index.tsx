import { Container, Row, Col } from 'react-bootstrap';
import parImg1 from '../../Assets/partners/worcester-bosch-boilers-logo.png';
import parImg2 from '../../Assets/partners/google-nest-logo.png';
import parImg3 from '../../Assets/partners/viessmann-boilers-logo.png';
import parImg4 from '../../Assets/partners/itv.png';
import parImg5 from '../../Assets/partners/alpha-boilers-logo.png';
import parImg6 from '../../Assets/partners/tado-thermostat-logo.png';
import './index.css'

export default function Partner(props: any) {
    return (
        <div className='parnter'>
            <div className='partner-sec'>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col style={{ textAlign: 'center' }}>
                            <img src={parImg1} alt='' />
                        </Col>
                        {/* <Col>
                            <img src={parImg2} alt='' />
                        </Col> */}
                        <Col style={{ textAlign: 'center' }}>
                            <img src={parImg3} alt='' />
                        </Col>
                        {/* <Col>
                            <img src={parImg4} alt='' />
                        </Col> */}
                        <Col style={{ textAlign: 'center' }}>
                            <img src={parImg5} alt='' />
                        </Col>
                        {/* <Col>
                            <img src={parImg6} alt='' />
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </div>
    )
}