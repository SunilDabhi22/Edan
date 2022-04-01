import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index_article.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const [blogs, setBlog] = React.useState([]);

    useEffect(() => {
        axios.get(`https://edanpower.co.uk/wp-json/wp/v2/posts`)
            .then((res: any) => {
                const response = res;
                if (response.data) {
                    setBlog(response.data);
                }
            }).catch((err: any) => {
                console.log("Err", err);
            })
    }, [])


    return (
        <div className='boilerMain'>
            <div className='boiler-sec'>
                <Container>
                    <Row className="justify-content-between align-items-center">
                        <Col md={4}>
                            <h3>Boiler help & advice</h3>
                            <br /><br /><br />
                            <a href='/blog' className='view_all_btn'>View All</a>

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
                                    {blogs.length > 0 && blogs.map((post: any) => (
                                        <Col md={4} sm={6} xs={12}>
                                            <Link
                                                to={{
                                                    pathname: `/blog/${post?.slug}`
                                                }}
                                                state={{ ...post }}
                                            >
                                                <div className='articles-items'>
                                                    <img src={post.yoast_head_json?.og_image.map((e: any) => e.url)} alt='' />
                                                    <div className='article-info'>
                                                        <span className='article-date'>{post.date ? new Date(post.date).toDateString() : ""}</span>
                                                        {/* <span className='article-tags'>Guides & Tips</span> */}
                                                    </div>
                                                    <h4 className='article-title'>{post.title?.rendered || ""}</h4>
                                                </div>
                                            </Link>
                                        </Col>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}