import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BoilerSection(props: any) {

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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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
        <div className='testimonial'>
            <div className='testimonial-sec'>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={12}>
                            <div className='testimonial-slider'>
                                <Slider ref={slider} {...settings}>
                                    <div className='testimonial-slider-items'>
                                        <span>"Booked on Sunday, new boiler fully fitted by Tuesday. Edan to the rescue."</span>
                                        <span className='testimonial-name'>-Pete, Manchester.</span>
                                    </div>
                                    <div className='testimonial-slider-items'>
                                        <span>"I've never used a service like this, honestly... best decision I've made in ages!"</span>
                                        <span className='testimonial-name'>-Rohan, Leeds.</span>
                                    </div>
                                    <div className='testimonial-slider-items'>
                                        <span>"Great new boiler, great price, great service. Utterly professional throughout!"</span>
                                        <span className='testimonial-name'>-David, Nottingham.</span>
                                    </div>
                                </Slider>

                                <button className='slider-prev-btn' onClick={() => slider?.current?.slickPrev()}>
                                    <PrevArrowIcon />
                                </button>
                                <button className='slider-next-btn' onClick={() => slider?.current?.slickNext()}>
                                    <NextArrowIcon />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}