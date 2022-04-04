import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './index-blog-detail.css'
import Header from '../header';
import Footer from '../footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function BlogDetail(props: any) {

    const { slug } = useParams();

    const [blogs, setBlog] = React.useState([]);

    useEffect(() => {
        axios.get(`https://edanpower.co.uk/wp-json/wp/v2/posts?slug=${slug}`)
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
                        {blogs.length > 0 && blogs.map((e: any) => (
                            <div className='articles'>
                                <Row>
                                    <Col md={4} sm={6} xs={12}>
                                        <div className='articles-items'>
                                            <img src={e?.yoast_head_json?.og_image.map((e: any) => e.url)} alt='' />
                                        </div>
                                    </Col>
                                    <Col md={8} sm={6} xs={12}>
                                        <div className='articles-items'>
                                            <pre>{e?.date ? new Date(e?.date).toDateString() : ""}</pre>
                                            <h1>{e?.title?.rendered || ""}</h1>

                                            <div dangerouslySetInnerHTML={{ __html: e?.content?.rendered || "" }}></div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}