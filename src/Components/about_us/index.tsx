import { Col, Container, Row } from 'react-bootstrap'
import './index.css'
import AboutImg1 from '../../Assets/About-Page-Image1-a423ac1f.png';
import AboutImg2 from '../../Assets/About-Page-Image2-8e9f1c97.png';
import Article from '../../Components/articles'

export default function AboutPage(props: any) {

    return (
        <div className='about_main'>
            <Container>
                <Row>
                    <Col xs={12} md={12} className='about_top_sec'>
                        <h3>About edan power</h3>
                        <h5>A total turnkey business solution</h5>
                        <p>We offer our customers a total turnkey solution providing a strategic development, financing, design, installation, monitoring and maintenance package. We provide a consultative service utilising all available funding opportunities, including grants and investor schemes, often with no upfront Capex investment required.</p>
                    </Col>
                </Row>
            </Container>

            <div className='about_video_sec'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <iframe title='about' src="https://www.youtube.com/embed/nsnhIoU6Dt4" allowFullScreen={true} frameBorder="0" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='about_img_content_sec'>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={AboutImg2} alt="We’re working towards a greener future" />
                            <h4>We’re working towards a greener future</h4>
                            <p>The commitment by all world governments to reduce reliance on traditional fossil fuels due to global warming, is significantly increasing the demand for renewable energy and all associated technologies. We are working towards that common goal.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={AboutImg1} alt="Working in collaboration with strategic partners" />
                            <h4>Working in collaboration with strategic partners</h4>
                            <p>We work in collaboration with very high level businesses and best calibre consultants to bring our clients the best value.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Article />
        </div>
    )
}