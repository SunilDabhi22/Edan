import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index-blog-detail.css'
import Header from '../header';
import Footer from '../footer';
import { useLocation } from 'react-router-dom';

export default function BlogDetail(props: any) {

    const location = useLocation();

    const data: any = location?.state;

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
                                        <img src={data?.yoast_head_json?.og_image.map((e: any) => e.url)} alt='' />
                                    </div>
                                </Col>
                                <Col md={8} sm={6} xs={12}>
                                    <div className='articles-items'>
                                        <pre>{data?.date ? new Date(data?.date).toDateString() : ""}</pre>
                                        <h1>{data?.title?.rendered || ""}</h1>

                                        <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered || "" }}></div>
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