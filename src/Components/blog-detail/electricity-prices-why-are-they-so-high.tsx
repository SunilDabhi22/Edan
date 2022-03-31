import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index-blog-detail.css'
import Header from '../header';
import Footer from '../footer';

export default function BlogDetail(props: any) {

    return (
        <>
            <Header />
            <div className='blog-detail-boilerMain'>
                <div className='boiler-sec'>
                    <Container>
                        <Row className="justify-content-between align-items-center">
                            <Col md={12} xs={12}>
                                <h3>Blog</h3>
                            </Col>
                        </Row>
                        <div className='articles'>
                            <Row>
                                <Col md={4} sm={6} xs={12}>
                                    <div className='articles-items'>
                                        <img src='https://edanhomes.co.uk/wp-content/themes/yootheme/cache/Blog-Electricity-prices-why-are-they-so-high-2d959a19.webp' alt='' />
                                    </div>
                                </Col>
                                <Col md={8} sm={6} xs={12}>
                                    <div className='articles-items'>
                                        <pre>April 5, 2021</pre>
                                        <h1>Electricity prices; why are they so high?</h1>
                                        <p>Electricity prices are up and down, this is due to many different factors, but there is a way Edan Home can help control your bills by auditing how much you are paying on your standing charge and Unit rate price. Edan Home understands electricity prices and the terms used by electricity suppliers, we understand also what a good price for your home means, to help you save money on your electricity costs.</p>

                                        <h2>Price per kWh</h2>
                                        <p>kWh is how energy is measured a 1000-watt light bulb needs 1000 watts (1 kWh) of power to make it work and uses 1 kWh of energy in an hour. The kWh is called a unit rate in the energy world, electricity is charged by the kWh, so your home’s electricity bills are calculated according to how much KWH you have used.</p>

                                        <h2>What is a standing charge?</h2>
                                        <p>Standing charges are the costs of having an electricity supply, a bit like a mobile phone contracts monthly rental. It’s normal fixed on a monthly or daily amount and does not change its fixed no matter how much electricity you use. Standing charges vary from supplier to supplier, average standing charge is 28p a day, but this can vary from 10p and go as high has £2. The reason the standing charges vary so much is dependent on how much power you use, in a nut shell the higher the standing charge the lower the unit rate.  Edan Home can assess this for you to make sure you get the correct balance on your electricity contract, example if you’ve hardly any electricity usage you’re better off having a low standing charge, on the other hand if you’ve high daily usage with a  high standing charge, a lower unit rate will be more cost-effective.</p>

                                        <h2>What about no-standing charge deals?</h2>
                                        <p>No standing charges mean you just pay for the electricity usage. Only a few suppliers offer these types of contracts but be warned only if your electricity usage is low, will a no standing charge contract benefit you. They are good for circumstances such as if you only live there occasionally and not at all for certain times of the year, Edan Home can assess if these will work for you or not.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}