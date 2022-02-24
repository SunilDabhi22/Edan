import { Col, Container, Row } from 'react-bootstrap'
import './index.css'

export default function AboutPage(props: any) {

    return (
        <div className='about_main'>
            <div className='about_first_sec'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <p className='about_content'>
                                After spending many years in the world of property, we have developed a dislike towards the time-consuming, laborious process to get an important job done. Replacing a boiler should be quick and efficient, this is what we wanted to offer. (I changed a good portion of it as it was antagonistic, it could get in the way of business ventures).
                                So, we set our sites onto making it happen.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about_light_sec'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <p className='about_content'>
                                A price comparison website where customers could get instant, fixed price quotes for their new boiler, from their local area, without much issue. It was truly innovative and the first step towards something better.
                            </p>
                            <p className='about_content'>
                                Turns out, engineers are great at fitting boilers. However, we lacked the admin and services we as a company and the customers needed.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about_green_sec'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <p className='about_content'>
                                Our engineers were not trained or properly informed on how to operate everything outside of boilers. This caused engineers to not call clients back, failure to update their prices, not show up and many more issues that could have easily been avoided. (Again, I changed the narrative of this because it was a bit antagonistic towards engineers, so rather than playing the blame game I merely stated issues that occurred without pointing fingers.)                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about_light_sec'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <p className='about_content'>
                                <strong>We pulled the plug on Edan Group,</strong> went back to the drawing board, forgot we didn't have a drawing board, bought one and then immediately went back to work figuring out how we could change the boiler industry for good and for the better.                             </p>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about_last_sec'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <p className='about_content'>
                                Set the prices, process the orders, provide the aftercare and everything in the middle. This is all now taken care of by staff trained for those jobs.
                            </p>
                            <p className='about_content'>
                                We built one of the best apps in the industry - if not the best.
                            </p>
                            <p className='about_content'>
                                Like any good business start-up memoir, our story begins with two brothers nestled above a sales office for an estate agency. During a trip to the local deli, they got the idea to bring a fresh change to an outdated boiler industry. (Side note: it could be good to state that it is dangerous to keep old boilers as they are, there have been many cases where boilers explode doing a lot of damage, sometimes resulting in deaths. Perhaps that would boost sales).
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}