import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap';

export default function getStarted(props: any) {

    return (
        <div className="quote-start-step">
            <Container>
                <Row style={{ justifyContent: 'center' }}>
                    <Col xs={12}>
                        <h3>How would you like to get your fixed quote?</h3>
                        <p>Do it online if you're confident, or book a call with an expert.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='left_section'>
                            <h4>Online, I'm confident</h4>
                            <ul>
                                <li>Answer some questions about your home and it's heating system</li>
                                <li>Decide which boiler is right for you from a range of recommendations</li>
                                <li>Compare payment options and plans</li>
                            </ul>
                            <button type='button' onClick={() => props.handleStart()} className='submit_btn'>
                                Get your quote online <img src={RightArrowIcon} />
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='right_section'>
                            <Row>
                                <h4>On a call, with an expert</h4>
                                <span className='popular_text'>Popular</span>
                            </Row>
                            <ul>
                                <li>Our experts will guide you over the phone, or video call</li>
                                <li>Get free help and recommendations on boilers</li>
                                <li>Discuss the best energy saving solutions for your home</li>
                                <li>No hard selling, with no obligation</li>
                            </ul>
                            <button type='button' onClick={() => props.handleQuoteForm()} className='submit_btn'>
                                Get quoted by an expert <img src={RightArrowIcon} />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <h3>Let's find you a boiler</h3>
            <p>Not just any boiler — the perfect boiler. One that's right for your home,<br /> at a fixed online price, with installation included.</p>
            <button type='button' onClick={() => props.handleStart()} className='submit_btn'>Get Started <img src={RightArrowIcon} /></button> */}
        </div>
    )
}