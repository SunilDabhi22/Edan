import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MostPopularImg from '../../Assets/product/ETEC_R_FRONT-25R-straight3_20n.png'
import SuperValueImg from '../../Assets/product/ETEC_S_FRONT_RET-3_20n-053 E-Tec on trans bg.png'
import LatestModelImg from '../../Assets/product/ETEC-28-FRONT-ED-3_20n.png'
import UltraEfficientImg from '../../Assets/product/ETEC-PLUS28_RET-3_20n.png'

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
                        <Col md={5}>
                            <h3>Every boiler, for every price.</h3>
                            <p>Find a boiler that's the right fit for your home, at a price that's right for your needs.</p>

                            <a href='/boiler-quote'>Get your new boiler</a>

                            <button className='slider-prev-btn' onClick={() => slider?.current?.slickPrev()}>
                                <PrevArrowIcon />
                            </button>
                            <button className='slider-next-btn' onClick={() => slider?.current?.slickNext()}>
                                <NextArrowIcon />
                            </button>
                        </Col>
                        <Col md={7}>
                            <div className='boiler-product-slider'>
                                <Slider ref={slider} {...settings}>
                                    <div className='prod-slider-items'>
                                        <h5>Most Popular</h5>
                                        <span>Worcester Bosch 4000</span>
                                        <span className='prod-price'>Fitted from £1,945</span>
                                        <img src={MostPopularImg} alt='' />
                                    </div>
                                    <div className='prod-slider-items'>
                                        <h5>Super Value</h5>
                                        <span>Worcester Bosch 2000</span>
                                        <span className='prod-price'>Fitted from £1,775</span>
                                        <img src={SuperValueImg} alt='' />
                                    </div>
                                    <div className='prod-slider-items'>
                                        <h5>Latest Model</h5>
                                        <span>Worcester Bosch 8000</span>
                                        <span className='prod-price'>Fitted from £2,495</span>
                                        <img src={LatestModelImg} alt='' />
                                    </div>
                                    <div className='prod-slider-items'>
                                        <h5>Ultra Efficient</h5>
                                        <span>Viessmann Vitodens 100</span>
                                        <span className='prod-price'>Fitted from £2,395</span>
                                        <img src={UltraEfficientImg} alt='' />
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