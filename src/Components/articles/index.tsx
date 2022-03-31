import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index_article.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Articles(props: any) {

    const slider: any = React.useRef(null);

    const NextArrowIcon = () => {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Arrow Forward</title>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
                </svg>
            </div>
        )
    }

    const PrevArrowIcon = () => {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Arrow Back</title>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" />
                </svg>
            </div>
        )
    }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: <PrevArrowIcon />,
        // nextArrow: <NextArrowIcon />,
        draggable: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <div className='boilerMain'>
            <div className='boiler-sec'>
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4}>
                            <h3>Boiler help & advice</h3>
                            <br /><br /><br />
                            <a href='#!'>View All</a>

                            <button className='slider-prev-btn' onClick={() => slider?.current?.slickPrev()}>
                                <PrevArrowIcon />
                            </button>
                            <button className='slider-next-btn' onClick={() => slider?.current?.slickNext()}>
                                <NextArrowIcon />
                            </button>
                        </Col>
                        <Col md={8}>
                            <div className='articles'>
                                <Slider ref={slider} {...settings}>
                                    <div className='articles-items'>
                                        <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                        <div className='article-info'>
                                            <span className='article-date'>January 25, 2022</span>
                                            <span className='article-tags'>Guides & Tips</span>
                                        </div>
                                        <h4 className='article-title'>Can I get boiler finance if I've got bad credit? (FAQ)</h4>
                                    </div>

                                    <div className='articles-items'>
                                        <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                        <div className='article-info'>
                                            <span className='article-date'>January 24, 2022</span>
                                            <span className='article-tags'>Guides & Tips</span>
                                        </div>
                                        <h4 className='article-title'>Best Boiler Cover UK 2022: Best plans & the ones to avoid</h4>
                                    </div>

                                    <div className='articles-items'>
                                        <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                        <div className='article-info'>
                                            <span className='article-date'>January 23, 2022</span>
                                            <span className='article-tags'>Guides & Tips</span>
                                        </div>
                                        <h4 className='article-title'>How Much Does the Average Boiler Service Cost in 2022? (UK)</h4>
                                    </div>

                                    <div className='articles-items'>
                                        <img src='https://picsum.photos/seed/picsum/500/300' alt='' />
                                        <div className='article-info'>
                                            <span className='article-date'>January 22, 2022</span>
                                            <span className='article-tags'>Guides & Tips</span>
                                        </div>
                                        <h4 className='article-title'>Emergency Boiler Installation/Replacement: Costs & Timelines</h4>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}