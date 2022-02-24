import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'

export default function FAQSection(props: any) {
    return (
        <div className='faq'>
            <div className='faq-sec'>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm={12}>
                            <div className='faq-heading'>FAQ's</div>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>So, who are we?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            We're a boiler installation company. But, we're not like any other boiler installation company.
                                        </p>
                                        <p>
                                            Founded by two brothers in 2017, we've installed over 10,000 new boilers in every corner of the UK. How? We use technology to speed things up, which in turn, keeps our prices down - there's not a salesperson in sight.
                                        </p>
                                        <p>
                                            Our 10,000 sq/ft HQ in Warrington employs a rapidly expanding team, our installation network is 500+ strong and we're not slowing down. We're here for the long term. Learn more about our story.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>When buying a new boiler from you, am I protected?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Yes - in more ways than one.</p>
                                        <p>You'll get our exclusive 12 month workmanship warranty, your new boiler will carry it's own parts and labour guarantee and we promise your fixed price won't change. We're also fully insured, and our engineers are fully insured too.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do you send out a surveyor or salesperson first?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>No, we do not. We focus all our efforts online to make it as convenient for you as possible.</p>
                                        <p>In order to get a fixed price for your new boiler, we simply ask a handful of super easy questions. Then, once you've checked out, you'll need to upload a handful of super simple pictures. Here's how it works.</p>
                                        <p>If there's extras on the day, like gas pipe upgrades, or condense pipe installations, your price won't change - it's a fixed price guarantee.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Who will be fitting my new boiler?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Simply put, a local, Edan group certified Gas Safe expert.</p>
                                        <p>We support and manage a network of 500+ heating engineers all over the UK, so, no matter where you live, we're local.</p>
                                        <p>In order to fit new boilers for Edan Group, each and every engineer has to go through a strict onboarding process which checks their background, technical ability and qualifications. If they don't meet our high standards, they aren't allowed in.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>If there's issues, will I be charged extra?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>No, you won't.</p>
                                        <p>As long as the information which you entered during the quoting process is accurate, your price is fixed and won't change.</p>
                                        <p>With every new boiler installation, you'll get a chemical flush of your system, new heating controls (combi boilers only), the required flue and a boiler filter. If your home requires a gas pipe upgrade, or a condense installation, your price won't change.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Buying a new boiler online... seems odd, is it?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Kind of, when you compare it to the traditional way.</p>
                                        <p>We knew that people wanted a faster solution to fitting a new boiler so we took several steps away from the long, sometimes frustrating process of fitting boilers and bring a new way to do it, faster and more efficient. </p>
                                        <p>Tech has transformed so many industries for the better. Takeaways, Deliveroo. Hotels, Airbnb. Edan Group is Uber, for boilers.</p>
                                        <p>Fixed online quotes, no salespeople needed and next day installations - it's the best way to buy the thing you need for you and your home.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>

                {props.showing === 'home' &&
                    <Container>
                        <Row className="justify-content-between align-items-center">
                            <Col sm={6}>
                                <div className='faq-all-btn'>
                                    <Link to='/faqs'>See All</Link>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='faq-question-link'>
                                    <a href='#!'>Got a question ?</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        </div>
    )
}