import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../blog/index-blog.css'
import axios from 'axios';

export default function Blog(props: any) {

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
                            {blogs.length > 0 ?
                                <>
                                    {blogs && blogs.map((post: any) => (
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
                                </>

                                : "No Content Available"}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}