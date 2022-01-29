import { Container, Row, Col, Accordion } from 'react-bootstrap';
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
                                        <p>No, we don't. We hate salespeople as much as you do.</p>
                                        <p>In order to get a fixed price for your new boiler, we simply ask a handful of super easy questions. Then, once you've checked out, you'll need to upload a handful of super simple pictures. Here's how it works.</p>
                                        <p>If there's extras on the day, like gas pipe upgrades, or condense pipe installations, your price won't change - it's a fixed price guarantee.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Who will be fitting my new boiler?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Simply put, a local, Heatable certified Gas Safe expert.</p>
                                        <p>We support and manage a network of 500+ heating engineers all over the UK, so, no matter where you live, we're local.</p>
                                        <p>In order to fit new boilers for Heatable, each and every engineer has to go through a strict onboarding process which checks their background, technical ability and qualifications. If they don't meet our high standards, they aren't allowed in.</p>
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
                                        <p>But, who wants to wait around days for a salesperson, then wait more days for their bloated quote. Then, when you've got the quote, wait weeks before they can fit your new boiler in?</p>
                                        <p>Tech has transformed so many industries for the better. Takeaways, Deliveroo. Hotels, Airbnb. Heatable is Uber, for boilers.</p>
                                        <p>Fixed online quotes, no salespeople and next day installations - it's the best way to buy the thing you don't want to buy.</p>
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
                                    <button>See All</button>
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