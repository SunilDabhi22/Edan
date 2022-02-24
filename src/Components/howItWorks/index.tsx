import { Col, Container, Row } from 'react-bootstrap'
import './index.css'
import AnswerImg from '../../Assets/answer.svg'
import FitImg from '../../Assets/fit.svg'
import PickImg from '../../Assets/pick.svg'
import Step1 from '../../Assets/step-1.svg'
import Step2 from '../../Assets/step-2.svg'
import Step3 from '../../Assets/step-3.svg'
import Testimonial from '../testimonial'
import FAQ from '../faq'

export default function HowItWorksPage(props: any) {
    return (
        <div className='how_main'>
            <div className='how_first_sec'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={5} style={{ textAlign: 'center' }}>
                            <h1>How it<br /> works</h1>
                        </Col>
                        <Col md={7}>
                            <p>It's the best way to buy the thing you need.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='how_second_sec'>
                <div className='how_qa_section'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={5} style={{ textAlign: 'center', position: 'relative' }}>
                                <div className='qa_img'>
                                    <img src={AnswerImg} alt='' />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className='qa_title'>
                                    <img src={Step1} alt='' /> <h4>We ask</h4>
                                </div>
                                <p>Some simple questions about your home and it's current heating system. From this, we can figure out which type of boiler you'll need, how powerful it will need to be and see if it's going to need any other additional safety attachments.</p>
                                <p>It takes as little as 60 seconds to get your quote, and there are no knocks at your door.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='how_qa_section'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={5} style={{ textAlign: 'center', position: 'relative' }}>
                                <div className='qa_img'>
                                    <img src={PickImg} alt='' />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className='qa_title'>
                                    <img src={Step2} alt='' /> <h4>You pick</h4>
                                </div>
                                <p>On a date that suits you, using a local, Edan group certified engineer.</p>
                                <p>They'll bring the boiler and all of the materials with them, and, once the installation is complete, we'll get it registered with Gas Safe and we'll even register your new boiler with the manufacturer too.</p>
                                <p>Every installation gets our exclusive 12 month workmanship warranty, so if there's an issue, it won't be an issue.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='how_qa_section'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={5} style={{ textAlign: 'center', position: 'relative' }}>
                                <div className='qa_img'>
                                    <img src={FitImg} alt='' />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className='qa_title'>
                                    <img src={Step3} alt='' /> <h4>We fit</h4>
                                </div>
                                <p>Some simple questions about your home and it's current heating system. From this, we can figure out which type of boiler you'll need, how powerful it will need to be and see if it's going to need any other additional safety attachments.</p>
                                <p>It takes as little as 60 seconds to get your quote, and there are no knocks at your door.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className='how_quote_sec'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>We're changing the way people buy their new boilers — for good. Holiday? There's Airbnb. Taxi? There's Uber. Boiler? There's EDAN.</h3>
                            <span>EDAN - Founder</span>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='how_support_sec'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <h4 className='left-title'>Support local. Together.</h4>
                        </Col>
                        <Col md={8}>
                            <div className='right-sec-detail'>
                                <h5>We work with and support a network of 500+ engineers, all over the UK.</h5>
                                <p>"As a self-employed engineer, working for Edan group has been a great boost. It's enabled me to stay busy and booked up. Using their app, I'm able to set availability for days that I'm quiet, and they quickly fill them up with jobs in my area. It's a great business model, and I can see why it's so appealing to their customers."</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Testimonial />
            <FAQ showing='home' />
        </div>
    )
}