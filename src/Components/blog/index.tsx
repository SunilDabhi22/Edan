import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../blog/index-blog.css'

export default function Blog(props: any) {

    return (
        <div className='Blog_boilerMain'>
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
                                <Link to='/blog/electricity-prices-why-are-they-so-high'>
                                    <div className='articles-items'>
                                        <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                        <div className='article-info'>
                                            <span className='article-date'>January 25, 2022</span>
                                            <span className='article-tags'>Guides & Tips</span>
                                        </div>
                                        <h4 className='article-title'>Can I get boiler finance if I've got bad credit? (FAQ)</h4>
                                    </div>
                                </Link>
                            </Col>

                            <Col md={4} sm={6} xs={12}>
                                <div className='articles-items'>
                                    <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                    <div className='article-info'>
                                        <span className='article-date'>January 24, 2022</span>
                                        <span className='article-tags'>Guides & Tips</span>
                                    </div>
                                    <h4 className='article-title'>Best Boiler Cover UK 2022: Best plans & the ones to avoid</h4>
                                </div>
                            </Col>

                            <Col md={4} sm={6} xs={12}>
                                <div className='articles-items'>
                                    <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                    <div className='article-info'>
                                        <span className='article-date'>January 23, 2022</span>
                                        <span className='article-tags'>Guides & Tips</span>
                                    </div>
                                    <h4 className='article-title'>How Much Does the Average Boiler Service Cost in 2022? (UK)</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} sm={6} xs={12}>
                                <div className='articles-items'>
                                    <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                    <div className='article-info'>
                                        <span className='article-date'>January 22, 2022</span>
                                        <span className='article-tags'>Guides & Tips</span>
                                    </div>
                                    <h4 className='article-title'>Emergency Boiler Installation/Replacement: Costs & Timelines</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}